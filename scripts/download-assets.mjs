import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import https from 'node:https';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const manifest = JSON.parse(await fs.readFile(path.join(root, 'src/data/asset-manifest.json'), 'utf8'));

function get(url, redirects = 0) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers: { 'user-agent': 'Mozilla/5.0 LuckyShotAssetDownloader/1.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location && redirects < 5) {
        res.resume();
        return resolve(get(new URL(res.headers.location, url).toString(), redirects + 1));
      }
      if (res.statusCode !== 200) {
        res.resume();
        return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
      }
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    });
    req.on('error', reject);
    req.setTimeout(30000, () => req.destroy(new Error(`Timeout for ${url}`)));
  });
}

let downloaded = 0, skipped = 0, failed = 0;
for (const asset of manifest) {
  const destination = path.join(root, 'public', asset.file);
  try {
    const stat = await fs.stat(destination).catch(() => null);
    if (stat?.size > 1024) { skipped++; continue; }
    await fs.mkdir(path.dirname(destination), { recursive: true });
    const data = await get(asset.url);
    await fs.writeFile(destination, data);
    downloaded++;
    console.log(`✓ ${asset.category}: ${path.basename(destination)}`);
  } catch (error) {
    failed++;
    console.error(`✗ ${asset.category}: ${asset.url}\n  ${error.message}`);
  }
}
console.log(`\nAssets: ${downloaded} downloaded, ${skipped} already present, ${failed} failed.`);
if (failed) process.exitCode = 1;
