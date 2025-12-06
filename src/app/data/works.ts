import fs from "fs";
import path from "path";

// 🔹 Einheitlicher Typ für alle Werke
export type Work = {
  slug: string;
  title: string;
  year?: string;
  description?: string;
  isExternal?: boolean;
  externalUrl?: string;
  isPdf?: boolean;
  pdfPath?: string;

  // 🔹 optionale Hintergrundbilder
  backgroundMobile?: string;
  backgroundDesktop?: string;
};

// 🔹 Deine Werke
export const works: Work[] = [
  {
    slug: "curiouser-and-curiouser",
    title: "Curiouser and Curiouser / sometimes I put my head in the sand",
    year: "2025",
    description: "",
    backgroundMobile: "/works/curiouser-and-curiouser/bgmobil.png",
    backgroundDesktop: "/works/curiouser-and-curiouser/7.webp",
  },
  {
    slug: "bondfire",
    title: "Bondfire",
    year: "2024",
    description: "Fire, one of the four classical elements, stands as the primal force behind the emergence of civilisation. From the earliest days of human history, it has been a source of protection, warmth, and forging communities. It was around the flickering flames of the bonfire that our ancestors created bonds, shared stories, and passed down knowledge.The flip-side is its capacity for destruction and death - the element that provides warmth and sustenance can also wreak havoc and consume entire landscapes. There is a delicate balance of fascination and control, mirroring our broader relationship with other powerful forces in our lives and the responsibility that comes with handling it. The awareness of this duality and of the inherent danger is also what draws us in, closer and closer, to the destructive spectacle. There is a latent pyromaniac in everyone, secretly wishing for the flames to spread. Today, our relationship with screens echoes the ancient connection to the mesmerising glow. The moving images captivate us much like the dancing flames once did. When circling around through a darkness, this fire also magnetically draws us in closer and closer - in girum imus nocte et consumimur igni. And like when staring into the fire, the various small digital fires in our palms put us in a trance-like state, gaze fixed, the mind half-way somewhere else, unable to break the spell. In that spirit: fire, walk with me. But also say a prayer to St. Catherine of Siena, who pulled it through the engulfing flames unscathed.",
    // hier kannst du später eigene BG-Bilder setzen:
    // backgroundMobile: "/works/bondfire/bgmobil.png",
    // backgroundDesktop: "/works/bondfire/7.webp",
  },
  {
    slug: "neck-turner",
    title: "Neck Turner",
    year: "2023",
    description: "This project explores perceptions of vulnerability, trust, and other complex interpersonal dynamics—through a combination of live performance, installation, and photography. Its centerpiece is a live performance involving a rigger and Wretman, connected by a wires and a harness system. The rigger positions themselves by a wall on a ladder, while Wretman stands on a crash mat in the middle of the room. Both prepare themselves, and at the opportune moment, the rigger jumps down from the ladder. This action propels Wretman into a forceful airborne flip, eventually landing face down on the crash mat. The performance is repeated throughout the opening event. After opening night, the wire construction and stunt vest—previously worn by Wretman during many major film productions, and coated with the remains of her labor—remains in the room. The presence of these elements serves as a reminder of the physical and emotional investment that underlies what the artist calls “the act of dependency”. Written by Nadim Samman ",
  },
  {
    slug: "lighting-from-a-clear-sky",
    title: "Lighting from a clear sky",
    year: "2021",
    description: "The intricate relationship between neuroscience and memory offers a profound lens through which we understand the human experience, especially in the realm of trauma and recovery. Our brains are adept at creating and storing memories, shaping our perceptions and identities. However, the process of memory-making is not without its complexities. While our ability to remember is crucial for learning and personal growth, the brain's capacity to forget can also be a beneficial mechanism, aiding in emotional resilience and mental clarity. This selective forgetting helps us move past painful or traumatic events, allowing us to focus on more positive experiences and insights. In the world of stunt work, where accidents and high-stakes situations are a daily reality, the interplay between memory and forgetting becomes particularly significant. Stunt performers often face dangerous scenarios that demand precision, quick reflexes, and the ability to recover from potentially traumatic experiences. The brain’s ability to adapt, both by retaining vital skills and selectively erasing distressing memories, plays a crucial role in a stunt performer’s resilience and safety. By integrating these elements, performers can continually refine their craft while managing the psychological impact of their work. ‘Lighting from a clear sky’ highlights how neuroscience and memory intersect with the physical and emotional demands of stunt work. It explores how the brain's mechanisms for remembering and forgetting influence not only personal identity and growth but also the high-risk environment of performance. Through this lens, we gain a deeper understanding of the remarkable capacity of the human mind to navigate both the exhilarating and challenging aspects of life, revealing the profound connections between our cognitive functions and our lived experiences.",
  },
  {
    slug: "stolen-goods-prometheus",
    title: "Stolen Goods (Prometheus)",
    isExternal: true,
    externalUrl: "https://fredrikwretman.se/projects/stolen-goods-2021",
  },
  {
    slug: "in-group-photo",
    title: "In-group Photo",
    year: "2021",
    description: "",
  },
  {
    slug: "older-works",
    title: "Older Works",
    isPdf: true,
    pdfPath: "/portfolio-2021_helga-wretman.pdf",
    // optional: eigenes Thumbnail-Background
    // backgroundMobile: "/works/older-works/bgmobil.png",
    // backgroundDesktop: "/works/older-works/7.webp",
  },
];

// 🔹 Alle Dateien (Bilder/Videos) aus einem Ordner laden
export function getWorkFiles(slug: string) {
  const folder = path.join(process.cwd(), "public/works", slug);

  if (!fs.existsSync(folder)) {
    console.warn("❌ Folder not found:", folder);
    return [];
  }

  const files = fs.readdirSync(folder);

  return files
    .filter((file) =>
      /\.(jpg|jpeg|png|webp|gif|mp4|mov|m4v)$/i.test(file)
    )
    .map((file) => `/works/${slug}/${file}`);
}
