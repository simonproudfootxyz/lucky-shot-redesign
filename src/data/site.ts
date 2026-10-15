export const navItems = [
  { label: "Signs", href: "/signs/" },
  { label: "Chalkboards", href: "/chalkboards/" },
  { label: "Digital Services", href: "/digital-services/" },
  { label: "Branding / Illustration", href: "/branding-illustration/" },
  { label: "Murals", href: "/murals/" },
  { label: "About", href: "/about/" },
];

export const shopUrl = "https://example.bigcartel.com/";
export const instagramUrl = "https://instagram.com/";
export const contactEmail = "hello@luckyshotnz.com";

export const services = [
  {
    num: "01",
    title: "Signs",
    href: "/signs/",
    description: "Handpainted shop signs, boards, windows and custom lettering",
  },
  {
    num: "02",
    title: "Chalkboards",
    href: "/chalkboards/",
    description: "Menus and display boards",
  },
  {
    num: "03",
    title: "Digital Services",
    href: "/digital-services/",
    description:
      "Menus, social graphics, print artwork, and practical design support",
  },
  {
    num: "04",
    title: "Branding + Illustration",
    href: "/branding-illustration/",
    description: "Brand identity and custom artwork",
  },
  {
    num: "05",
    title: "Murals",
    href: "/murals/",
    description: "Large-scale artwork that changes how a space feels",
  },
];

export type PortfolioImage = {
  src: string;
  fallback: string;
  alt: string;
  thumbnail?: boolean;
};

export function portfolioThumbnail(images: PortfolioImage[]) {
  return images.find((image) => image.thumbnail) ?? images[0];
}

export const portfolioImages: Record<string, PortfolioImage[]> = {
  signs: [
    {
      src: "/images/portfolio/signs/bf3fd3af-47c0-40d4-a6ff-92c380baa05a.png",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/bf3fd3af-47c0-40d4-a6ff-92c380baa05a_rw_1200.png?h=60d31733130a7bdb8fedac202cabae60",
      alt: "Lucky Shot Studio Hand-painted sign project 1",
    },
    {
      src: "/images/portfolio/signs/61c0a58a-7d14-422d-9d37-27000809afe9.png",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/61c0a58a-7d14-422d-9d37-27000809afe9_rw_1200.png?h=5533b57a8a9a60a6af4adb02fe05a478",
      alt: "Lucky Shot Studio Hand-painted sign project 2",
      thumbnail: true,
    },
    {
      src: "/images/portfolio/signs/e936a68e-feaa-4292-89a9-6eef709c0f87.png",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/e936a68e-feaa-4292-89a9-6eef709c0f87_rw_1200.png?h=3b578189ed8984e421ed40e01641e895",
      alt: "Lucky Shot Studio Hand-painted sign project 3",
    },
    {
      src: "/images/portfolio/signs/5a4bbed4-9b51-4d6d-872a-210066a4d4aa.png",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/5a4bbed4-9b51-4d6d-872a-210066a4d4aa_rw_600.png?h=02b3edbe5ec2e1c00d403b7ea47cad70",
      alt: "Lucky Shot Studio Hand-painted sign project 4",
    },
    {
      src: "/images/portfolio/signs/e85a5641-e8cf-4d6a-a137-c0e30b16bc6b.png",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/e85a5641-e8cf-4d6a-a137-c0e30b16bc6b_rw_1200.png?h=e6c64e5723fde9be2d10885e4df39c26",
      alt: "Lucky Shot Studio Hand-painted sign project 5",
    },
    {
      src: "/images/portfolio/signs/45bb81ef-70d7-4dd3-bd85-a3186b2e0640.jpg",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/45bb81ef-70d7-4dd3-bd85-a3186b2e0640_rw_1920.jpeg?h=3d0892cd2ae7fe78d360345f57c27322",
      alt: "Lucky Shot Studio Hand-painted sign project 6",
    },
    {
      src: "/images/portfolio/signs/a07cde46-203b-402d-9306-013a5523e2f9.jpg",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/a07cde46-203b-402d-9306-013a5523e2f9_rw_1920.jpeg?h=905835e3eaa27b315d5db3ee7af8423b",
      alt: "Lucky Shot Studio Hand-painted sign project 7",
    },
    {
      src: "/images/portfolio/signs/fc1fe172-73b8-437a-9269-c06799e16476.jpg",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/fc1fe172-73b8-437a-9269-c06799e16476_rw_3840.jpeg?h=5917eef1da0187336a043337b68d21a7",
      alt: "Lucky Shot Studio Hand-painted sign project 8",
    },
    {
      src: "/images/portfolio/signs/06c02334-7edb-4bb7-a712-27dce88b5c0a.jpg",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/06c02334-7edb-4bb7-a712-27dce88b5c0a_rw_1200.jpg?h=a37e255d0c5879917021af6e7b5802bd",
      alt: "Lucky Shot Studio Hand-painted sign project 9",
    },
    {
      src: "/images/portfolio/signs/ffbc4c5a-d672-4fa9-8300-46c414b3be2e.png",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/ffbc4c5a-d672-4fa9-8300-46c414b3be2e_rw_1200.png?h=7aea45c8a895fc39aca284477e46ebf6",
      alt: "Lucky Shot Studio Hand-painted sign project 10",
    },
    {
      src: "/images/portfolio/signs/fc728d7c-b835-4edf-96dc-e1518b7caef0.jpg",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/fc728d7c-b835-4edf-96dc-e1518b7caef0_rw_1920.jpg?h=abceed684180968055fded39c62715a2",
      alt: "Lucky Shot Studio Hand-painted sign project 11",
    },
    {
      src: "/images/portfolio/signs/311ffba0-f31b-462f-a0f6-7923cfe6f88d.jpg",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/311ffba0-f31b-462f-a0f6-7923cfe6f88d_rw_1920.jpeg?h=dacd6b5c901b2f565dbd5be403051811",
      alt: "Lucky Shot Studio Hand-painted sign project 12",
    },
    {
      src: "/images/portfolio/signs/db5fc5a0-0e41-4f91-a16f-22e07d3bf668.jpg",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/db5fc5a0-0e41-4f91-a16f-22e07d3bf668_rw_3840.JPG?h=1851c34c6462d4659e9a94d1443d4d26",
      alt: "Lucky Shot Studio Hand-painted sign project 13",
    },
    {
      src: "/images/portfolio/signs/b00692f3-4728-4aac-8077-192d9f7a3110.png",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/b00692f3-4728-4aac-8077-192d9f7a3110_rw_1920.png?h=18ae2979487481cf903e3a99ae307c82",
      alt: "Lucky Shot Studio Hand-painted sign project 14",
    },
    {
      src: "/images/portfolio/signs/bbde5976-bad4-4d1d-886a-473e1d4d9e85.png",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/bbde5976-bad4-4d1d-886a-473e1d4d9e85_rw_1200.png?h=993d3d9247866c215281f42c3032d1c5",
      alt: "Lucky Shot Studio Hand-painted sign project 15",
    },
    {
      src: "/images/portfolio/signs/235d78ff-317e-4284-ad2c-bb0cd97ba98a.jpg",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/235d78ff-317e-4284-ad2c-bb0cd97ba98a_rw_3840.JPG?h=2ff3a9f0b2a8db6074d720485d403a89",
      alt: "Lucky Shot Studio Hand-painted sign project 16",
    },
  ],
  chalkboards: [
    {
      src: "/images/portfolio/chalkboards/10bbe10d-92b3-4799-a52a-1216739ad756.jpg",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/10bbe10d-92b3-4799-a52a-1216739ad756_rw_3840.jpeg?h=630ef6897e853a1becdf9ec9d32e2268",
      alt: "Lucky Shot Studio Custom chalkboard project",
    },
    {
      src: "/images/portfolio/chalkboards/bfc2ee10-5515-41d8-b692-612a927b4faf.jpg",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/bfc2ee10-5515-41d8-b692-612a927b4faf_rw_3840.jpeg?h=0a885a5f624b09aed54a5eb5748ea612",

      alt: "Lucky Shot Studio Custom chalkboard project",
    },
    {
      src: "/images/portfolio/chalkboards/ca9f9658-3409-4bff-92d1-ec6019f36ecc.jpg",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/ca9f9658-3409-4bff-92d1-ec6019f36ecc_rw_3840.jpeg?h=6edb464a53422a3125c3e1f70441ff88",
      alt: "Lucky Shot Studio Custom chalkboard project",
    },
    {
      src: "/images/portfolio/chalkboards/61c9b85e-9783-44bb-afed-f6c47c7a4542.jpg",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/61c9b85e-9783-44bb-afed-f6c47c7a4542_rw_3840.jpeg?h=7448567bee35f239c583e75224f084d1",
      alt: "Lucky Shot Studio Custom chalkboard project",
      thumbnail: true,
    },
    {
      src: "/images/portfolio/chalkboards/bd413b65-3000-45b0-9652-b93f2de805f9.jpg",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/bd413b65-3000-45b0-9652-b93f2de805f9_rw_1920.jpeg?h=18840e977bafdd22d79701b24f2685f3",
      alt: "Lucky Shot Studio Custom chalkboard project",
    },
    {
      src: "/images/portfolio/chalkboards/35895077-da89-4d53-a8f9-3c0260fb4ac6.jpg",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/35895077-da89-4d53-a8f9-3c0260fb4ac6_rw_1920.jpeg?h=061e45face3750e8207f31052bf086c3",
      alt: "Lucky Shot Studio Custom chalkboard project",
    },
    {
      src: "/images/portfolio/chalkboards/682c5eac-e007-4d28-a16d-a61a9def37ba.jpg",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/682c5eac-e007-4d28-a16d-a61a9def37ba_rw_3840.jpeg?h=1fe131b6b4e71158d41955de26d4aba0",
      alt: "Lucky Shot Studio Custom chalkboard project",
    },
    {
      src: "/images/portfolio/chalkboards/e510e00f-a955-47ff-8aac-d0fd276d8210.jpg",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/e510e00f-a955-47ff-8aac-d0fd276d8210_rw_1200.jpeg?h=880fdf85ecf57c587d689963b5ddf19a",
      alt: "Lucky Shot Studio Custom chalkboard project",
    },
    {
      src: "/images/portfolio/chalkboards/0315d07c-de24-42bd-bc7b-eced3c291577.jpg",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/0315d07c-de24-42bd-bc7b-eced3c291577_rw_1200.jpeg?h=06cfa46c008f52742fbf47aa3204f764",
      alt: "Lucky Shot Studio Custom chalkboard project",
    },
    {
      src: "/images/portfolio/chalkboards/505c75af-44df-42fa-9d38-49c8a3abb0d1.jpg",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/505c75af-44df-42fa-9d38-49c8a3abb0d1_rw_3840.jpeg?h=f7c32249f92cbe27f5f429f3c37694b5",
      alt: "Lucky Shot Studio Custom chalkboard project",
    },
    {
      src: "/images/portfolio/chalkboards/14e0d2b5-2faf-465e-b9b2-6ba067f1f068.jpg",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/14e0d2b5-2faf-465e-b9b2-6ba067f1f068_rw_1200.jpeg?h=6385e5687de40601f806a0debd33acef",
      alt: "Lucky Shot Studio Custom chalkboard project",
    },
    {
      src: "/images/portfolio/chalkboards/af0abf91-b0ce-43cc-ad2b-ac986a92c0e0.jpg",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/af0abf91-b0ce-43cc-ad2b-ac986a92c0e0_rw_1200.jpeg?h=88b6ea963f1745dcb1d9e0d9928a03e9",
      alt: "Lucky Shot Studio Custom chalkboard project",
    },
    {
      src: "/images/portfolio/chalkboards/7eb4e462-2dce-4b39-af33-2b19efc3cd24.jpg",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/7eb4e462-2dce-4b39-af33-2b19efc3cd24_rw_3840.jpeg?h=1ffcfb1194c99c799b87ca6772503074",
      alt: "Lucky Shot Studio Custom chalkboard project",
    },
    {
      src: "/images/portfolio/chalkboards/027372f8-7d6c-4d7d-9e97-f33df63107e0.jpg",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/027372f8-7d6c-4d7d-9e97-f33df63107e0_rw_3840.jpeg?h=9ba0f5f98021907e1c4282099846bcf6",
      alt: "Lucky Shot Studio Custom chalkboard project",
    },
    {
      src: "/images/portfolio/chalkboards/a6bab87f-5c47-48d0-bc54-dfba5b83b914.jpg",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/a6bab87f-5c47-48d0-bc54-dfba5b83b914_rw_3840.jpeg?h=eda00fcb5895529020e2abe50d4748cb",
      alt: "Lucky Shot Studio Custom chalkboard project",
    },
    {
      src: "/images/portfolio/chalkboards/1b01b93f-a8ba-45ca-b6b0-f7444e93fa15.jpg",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/1b01b93f-a8ba-45ca-b6b0-f7444e93fa15_rw_3840.jpeg?h=7529ff1fed700a63eef52aed0968109d",
      alt: "Lucky Shot Studio Custom chalkboard project",
    },
    {
      src: "/images/portfolio/chalkboards/89504e46-d44c-41f3-ae85-4eec43496d45.jpg",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/89504e46-d44c-41f3-ae85-4eec43496d45_rw_3840.jpeg?h=12f80c7be37ccee912c0c63ab987f9cb",
      alt: "Lucky Shot Studio Custom chalkboard project",
    },
    {
      src: "/images/portfolio/chalkboards/9e1188b3-4d3d-4a3d-9224-35455db265eb.jpg",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/9e1188b3-4d3d-4a3d-9224-35455db265eb_rw_3840.jpeg?h=c463b0bb2e05718835bbaac163e82e1d",
      alt: "Lucky Shot Studio Custom chalkboard project",
    },
    {
      src: "/images/portfolio/chalkboards/0637db72-689c-4277-9cfb-a8c4404a4347.jpg",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/0637db72-689c-4277-9cfb-a8c4404a4347_rw_3840.jpeg?h=f0204cf925f883ecdf8c9a720b4df7c1",
      alt: "Lucky Shot Studio Custom chalkboard project",
    },
    {
      src: "/images/portfolio/chalkboards/d1d8a257-5b6b-4e8b-80d5-18cd165a4f34.jpg",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/d1d8a257-5b6b-4e8b-80d5-18cd165a4f34_rw_1920.jpeg?h=85e36e0d9256ec7ef3e59998ff76571e",
      alt: "Lucky Shot Studio Custom chalkboard project",
    },
    {
      src: "/images/portfolio/chalkboards/67bbae06-6e47-4a40-954a-a8a4d0937887.jpg",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/67bbae06-6e47-4a40-954a-a8a4d0937887_rw_3840.jpeg?h=f7aece83fd773179680dbbf2725507a5",
      alt: "Lucky Shot Studio Custom chalkboard project",
    },
    {
      src: "/images/portfolio/chalkboards/78663859-e583-4dc7-a4fb-d5836785c08f.jpg",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/78663859-e583-4dc7-a4fb-d5836785c08f_rw_3840.jpeg?h=fc08f6a87aac041e0654b2fa7db8ec7b",
      alt: "Lucky Shot Studio Custom chalkboard project",
    },
    {
      src: "/images/portfolio/chalkboards/f147d12c-fabf-49f9-a5d9-afeea03eaa78.jpg",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/f147d12c-fabf-49f9-a5d9-afeea03eaa78_rw_1920.jpeg?h=4b7ead47dd1f66b2d42ea4da8a44ed0e",
      alt: "Lucky Shot Studio Custom chalkboard project",
    },
    {
      src: "/images/portfolio/chalkboards/7fb7da08-9066-4982-9bdd-c76486f8059d.jpg",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/7fb7da08-9066-4982-9bdd-c76486f8059d_rw_3840.jpeg?h=c8c25e10bf5bc9ce50752d3027e59461",
      alt: "Lucky Shot Studio Custom chalkboard project",
    },
    {
      src: "/images/portfolio/chalkboards/0c5284b4-98a3-4a01-832e-37b3d26e8769.jpg",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/0c5284b4-98a3-4a01-832e-37b3d26e8769_rw_3840.jpeg?h=877767445025511073f0e0c7d6312c55",
      alt: "Lucky Shot Studio Custom chalkboard project",
    },
  ],
  murals: [
    {
      src: "/images/portfolio/murals/aa45b8b2-a817-4908-af66-eb4db590f9c8.png",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/aa45b8b2-a817-4908-af66-eb4db590f9c8_rw_1920.png?h=f8a703fc8720bf9ef39410688053a219",
      alt: "Lucky Shot Studio Mural project",
    },

    {
      src: "/images/portfolio/murals/e4ffc11a-b9a3-4404-9f32-e9699a8241fb.jpg",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/e4ffc11a-b9a3-4404-9f32-e9699a8241fb_rw_3840.jpeg?h=520de8f23fccac0bb424851c6d809a42",
      alt: "Lucky Shot Studio Mural project",
      thumbnail: true,
    },
    {
      src: "/images/portfolio/murals/185d1e75-2bf5-41a1-8216-4b1788790af0.jpg",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/185d1e75-2bf5-41a1-8216-4b1788790af0_rw_3840.jpeg?h=ae355f780cd0d574bfeb35aecad77425",
      alt: "Lucky Shot Studio Mural project",
    },
    {
      src: "/images/portfolio/murals/0b8e4592-5146-4298-af30-995ea1f40d1a.jpg",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/0b8e4592-5146-4298-af30-995ea1f40d1a_rw_3840.jpeg?h=9acb3405c4d093c6d75eff8eacb91b70",
      alt: "Lucky Shot Studio Mural project",
    },
    {
      src: "/images/portfolio/murals/d05e355c-3d77-44ca-bea5-f41de3befe23.jpg",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/d05e355c-3d77-44ca-bea5-f41de3befe23_rw_3840.jpeg?h=669ee6d1d75573e2bc503f8cffa36f26",
      alt: "Lucky Shot Studio Mural project",
    },
    {
      src: "/images/portfolio/murals/b91bc516-fa55-41ca-9f88-a97fd282e358.jpg",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/b91bc516-fa55-41ca-9f88-a97fd282e358_rw_1920.jpeg?h=84e0121ae6496628cf93cc8be18092fa",
      alt: "Lucky Shot Studio Mural project",
    },
    {
      src: "/images/portfolio/murals/b894a7a2-a956-44ae-b1fc-43871e1125df.png",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/b894a7a2-a956-44ae-b1fc-43871e1125df_rw_1200.png?h=0be340f541b8a55160b2ae1c470cb934",
      alt: "Lucky Shot Studio Mural project",
    },
    {
      src: "/images/portfolio/murals/628c9ba3-d566-4646-9c6d-2ace145ab286.jpg",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/628c9ba3-d566-4646-9c6d-2ace145ab286_rw_1920.jpeg?h=f848fe73595f53cf5745ecefd289bd0f",
      alt: "Lucky Shot Studio Mural project",
    },
  ],
  branding: [
    {
      src: "/images/portfolio/branding/f105099e-0622-4614-9c1f-d9336fa2190a.jpg",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/f105099e-0622-4614-9c1f-d9336fa2190a_rw_3840.jpg?h=e6a7566e2c8dfa0064380a035287a017",
      alt: "Lucky Shot Studio Branding and illustration project",
    },
    {
      src: "/images/portfolio/branding/689cce4a-2732-480d-85c0-1a43ce874bbd.png",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/689cce4a-2732-480d-85c0-1a43ce874bbd_rw_1200.png?h=53c52d4797130c9ad217d1356a091289",
      alt: "Lucky Shot Studio Branding and illustration project",
    },
    {
      src: "/images/portfolio/branding/0b250b86-8317-4bb7-a0d9-5797f86e577e.png",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/0b250b86-8317-4bb7-a0d9-5797f86e577e_rw_1920.png?h=5932241b348d3efc824dc31ba4ee39e6",
      alt: "Lucky Shot Studio Branding and illustration project",
    },
    {
      src: "/images/portfolio/branding/4f6b045a-e1a0-48ff-9e95-22fb17b030d7.png",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/4f6b045a-e1a0-48ff-9e95-22fb17b030d7_rw_1920.png?h=3a42710a20b052cbc3fa4b553b0ca5c5",
      alt: "Lucky Shot Studio Branding and illustration project",
    },
    {
      src: "/images/portfolio/branding/546f62e9-b4df-4e40-b455-f7fdf39526f1.png",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/546f62e9-b4df-4e40-b455-f7fdf39526f1_rw_1200.png?h=4a40de325edf11504e9a61207ccd38a4",
      alt: "Lucky Shot Studio Branding and illustration project",
    },
    {
      src: "/images/portfolio/branding/fc03ce26-78b9-4b0a-af7f-f3b0e6ae4dea.png",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/fc03ce26-78b9-4b0a-af7f-f3b0e6ae4dea_rw_1920.png?h=2bd0884ea6bceb08e2b43725b9f59ba6",
      alt: "Lucky Shot Studio Branding and illustration project",
    },
    {
      src: "/images/portfolio/branding/cc266901-23b9-4485-9424-a46202f55171.png",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/cc266901-23b9-4485-9424-a46202f55171_rw_1200.png?h=a3aa7103e7c5800d278d311596c92acb",
      alt: "Lucky Shot Studio Branding and illustration project",
    },
    {
      src: "/images/portfolio/branding/c199c5ac-c2de-47d0-a62f-ca3f7403ceb0.png",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/c199c5ac-c2de-47d0-a62f-ca3f7403ceb0_rw_1200.png?h=5fa708c54fc105f9900f6ebf0cf26764",
      alt: "Lucky Shot Studio Branding and illustration project",
    },
    {
      src: "/images/portfolio/branding/62fa7faf-0b74-45ca-ab3b-1c65b2b6080e.jpg",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/62fa7faf-0b74-45ca-ab3b-1c65b2b6080e_rw_1920.JPG?h=7cf016752b1cb9bb00da005f33b5d389",
      alt: "Lucky Shot Studio Branding and illustration project",
    },
    {
      src: "/images/portfolio/branding/7304356b-23b9-4f37-851d-199346dd78a8.png",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/7304356b-23b9-4f37-851d-199346dd78a8_rw_1200.PNG?h=38c996bc3a6aefcc7330adb80aedbe38",
      alt: "Lucky Shot Studio Branding and illustration project",
    },
    {
      src: "/images/portfolio/branding/c4c3296d-8672-41e8-ac4f-2aa4b0a61d0a.jpg",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/c4c3296d-8672-41e8-ac4f-2aa4b0a61d0a_rw_1200.jpeg?h=7fa732a4ec1d160f9618a6af72f42ae2",
      alt: "Lucky Shot Studio Branding and illustration project",
    },
    {
      src: "/images/portfolio/branding/848a120d-faaa-4f82-abda-b7b7591f8edf.png",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/848a120d-faaa-4f82-abda-b7b7591f8edf_rw_3840.png?h=3a365c101a546d807b9555888b19d72a",
      alt: "Lucky Shot Studio Branding and illustration project",
    },
    {
      src: "/images/portfolio/branding/223a66f5-c576-4dd9-bc3d-3bfe559c9db0.png",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/223a66f5-c576-4dd9-bc3d-3bfe559c9db0_rw_1920.png?h=0bfc9c1dc7742587c0aa0ce759d0ac7d",
      alt: "Lucky Shot Studio Branding and illustration project",
      thumbnail: true,
    },
    {
      src: "/images/portfolio/branding/7ef3bae0-8465-4e7c-8b06-85d0c71a2add.png",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/7ef3bae0-8465-4e7c-8b06-85d0c71a2add_rw_3840.png?h=bae1320dfc70bf00e8adfa87b73ee3b2",
      alt: "Lucky Shot Studio Branding and illustration project",
    },
    {
      src: "/images/portfolio/branding/b4bccaf7-81c4-44fe-b920-63348a78ffff.png",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/b4bccaf7-81c4-44fe-b920-63348a78ffff_rw_3840.png?h=4fd4b187364692bf8896db8f07c7adfa",
      alt: "Lucky Shot Studio Branding and illustration project",
    },
    {
      src: "/images/portfolio/branding/f0c701ef-1acd-41b6-bd0e-41866c3cd9b8.png",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/f0c701ef-1acd-41b6-bd0e-41866c3cd9b8_rw_1200.png?h=d72582d14d160c4b585d31c580fb6df2",
      alt: "Lucky Shot Studio Branding and illustration project",
    },
    {
      src: "/images/portfolio/branding/0fbc8b0e-75ff-4091-9c6b-d8d25caec830.png",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/0fbc8b0e-75ff-4091-9c6b-d8d25caec830_rw_1920.png?h=eb7a57107ba03eb569c346723eb5b1a9",
      alt: "Lucky Shot Studio Branding and illustration project",
    },
    {
      src: "/images/portfolio/branding/cf4ae85e-4d48-4ea9-b5ed-97727baeeed1.jpg",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/cf4ae85e-4d48-4ea9-b5ed-97727baeeed1_rw_1920.jpg?h=697bac1f06d6ba7549b0229eeb92661a",
      alt: "Lucky Shot Studio Branding and illustration project",
    },
    {
      src: "/images/portfolio/branding/2fc8d54c-0299-4995-aedf-d00df6fd102e.jpg",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/2fc8d54c-0299-4995-aedf-d00df6fd102e_rw_1920.jpg?h=5bf05ca8441486db53fe05929969a19f",
      alt: "Lucky Shot Studio Branding and illustration project",
    },
    {
      src: "/images/portfolio/branding/f7f2eb29-59bb-48cb-9f9c-beefe281c839.png",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/f7f2eb29-59bb-48cb-9f9c-beefe281c839_rw_1920.png?h=916de02e6c9ce6f58de1c4d131e61b9c",
      alt: "Lucky Shot Studio Branding and illustration project",
    },
    {
      src: "/images/portfolio/branding/29e9b111-3457-4b33-b8e6-dfd78658d2e3.jpg",
      fallback:
        "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/29e9b111-3457-4b33-b8e6-dfd78658d2e3_rw_1920.jpg?h=e90b5629d32b5db7c48ba1da4bd7c76a",
      alt: "Lucky Shot Studio Branding and illustration project",
    },
  ],
};

export const aboutImage = {
  src: "/images/about/7bf8f32c-c5e3-46e3-aa4c-1bc2e7c7a33d.jpg",
  fallback:
    "https://cdn.myportfolio.com/f675556b-f599-4111-96c8-71142b99c15a/7bf8f32c-c5e3-46e3-aa4c-1bc2e7c7a33d_rw_1920.jpeg?h=075f90f023bb59b48ead9c79ab66c1ae",
};
