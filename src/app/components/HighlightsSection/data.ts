// Импорт изображений для Highlights
// 1:1 — события и туры
import wildThings from "@/app/assets/styles-1x1/wild-things-2026-hero-1-1.jpg.webp";
import velvetInferno from "@/app/assets/styles-1x1/Velvet-Inferno-website-1-1.jpg.webp";
import sydneySymphony from "@/app/assets/styles-1x1/sydney-symphony-orchestra-2026-season-1-1.jpg.webp";
import magdaSzubanski from "@/app/assets/styles-1x1/curious-magda-szubanski-1-1.jpg.webp";
import housework from "@/app/assets/styles-1x1/STC-S26-Housework-600x600.jpg.webp";
import catPower from "@/app/assets/styles-1x1/Cat_power-Web-1-1.jpg.webp";
import davidSedaris from "@/app/assets/styles-1x1/david-sedaris-pressshot_1-1.jpg.webp";
import choirOfMan from "@/app/assets/styles-1x1/choir-of-man-1-1.jpg.webp";
import sultansKitchen from "@/app/assets/styles-1x1/a-place-in-the-sultans-kitchen-1-1.jpg.webp";
import myFairLady from "@/app/assets/styles-1x1/MFL2026_568x568.jpg.webp";
import thomasDunford from "@/app/assets/styles-1x1/UM26-ThomasDunford-Std-Rollout-Web-1x1.jpg.webp";
import dijon from "@/app/assets/styles-1x1/dijon-1-1.jpg.webp";

import tourSoh from "@/app/assets/styles-1x1/tours-soh-tour-web-3-1.jpg.webp";
import tourMandarin from "@/app/assets/styles-1x1/tours-mandarin-web-2-1.jpg.webp";
import tourKorean from "@/app/assets/styles-1x1/tours-korean-web-3-1.jpg.webp";
import tourJapanese from "@/app/assets/styles-1x1/tours-japanese-web-3-1.jpg.webp";
import tourMobility from "@/app/assets/styles-1x1/tours-mobility-access-16-9.jpg.webp";
import tourBackstage from "@/app/assets/styles-1x1/tours-backstage-web-1-1.jpg.webp";
import tourArchitectural from "@/app/assets/styles-1x1/tours-architectural-tour-web-16-9.jpg.webp";
import tourFrench from "@/app/assets/styles-1x1/tours-western-one-web-3-1.jpg.webp";
import tourSpanish from "@/app/assets/styles-1x1/tours-western-two-web-3-1.jpg.webp";
import tourDine from "@/app/assets/styles-1x1/tours-Tour_Dine-Web-1-1.jpg.webp";
import tasteOfHouse from "@/app/assets/styles-1x1/taste-of-the-house-1-1.jpg.webp";

// 16:9 — stream
import cameronWinter from "@/app/assets/styles-16x9/Stream-Free-Cameron-Winter-Thumbnails_3840_x_2160.jpg.webp";
import marlonWilliams from "@/app/assets/styles-16x9/stream-marlon-williams-16-9.jpg.webp";
import naidocWeek from "@/app/assets/styles-16x9/barton-ch-boud-16x9.jpg.webp";
import maui from "@/app/assets/styles-16x9/maui-stream-16-9.jpg.webp";
import allAboutWomen from "@/app/assets/styles-16x9/IATH-hero-web-2560x1440.jpg.webp";
import shanghaiSymphony from "@/app/assets/styles-16x9/Stream-Shanghai-Symphony-Orchestra-Web-EDM-16-9.jpg.webp";

export interface HighlightItem {
  title: string;
  category: string;
  dates: string;
  image: any;
}

export const events: HighlightItem[] = [
  { title: "Wild Things", category: "International Kids Festival", dates: "26 Sep – 11 Oct 2026", image: wildThings },
  { title: "Velvet Inferno", category: "Musical Theatre", dates: "24 Jul – 13 Sep 2026", image: velvetInferno },
  { title: "Sydney Symphony Orchestra", category: "Classical Music", dates: "Season 2026", image: sydneySymphony },
  { title: "Magda Szubanski: I Can't Tell You...", category: "Talks and Ideas", dates: "4 Oct 2026", image: magdaSzubanski },
  { title: "Housework", category: "Theatre", dates: "5 Sep – 17 Oct 2026", image: housework },
  { title: "Cat Power 'The Greatest' 20th", category: "Contemporary Music", dates: "7 Dec 2026", image: catPower },
  { title: "An Evening with David Sedaris", category: "Talks and Ideas", dates: "18 Jan 2027", image: davidSedaris },
  { title: "The Choir of Man", category: "Musical Theatre", dates: "From 11 Dec 2026", image: choirOfMan },
  { title: "A Place in the Sultan's Kitchen", category: "Theatre", dates: "14 – 17 Oct 2026", image: sultansKitchen },
  { title: "My Fair Lady", category: "Opera", dates: "10 Sep – 30 Oct 2026", image: myFairLady },
  { title: "Thomas Dunford", category: "Utzon Music", dates: "6 Sep 2026", image: thomasDunford },
  { title: "Dijon", category: "Contemporary Music", dates: "12 Dec 2026", image: dijon },
];

export const tours: HighlightItem[] = [
  { title: "Sydney Opera House Tour", category: "Guided Tour", dates: "Daily", image: tourSoh },
  { title: "Mandarin Tour 悉尼歌剧院1小时中文导览之旅", category: "Guided Tour", dates: "Daily", image: tourMandarin },
  { title: "Korean Tour 시드니 오페라 하우스 한국어 투어", category: "Guided Tour", dates: "Daily", image: tourKorean },
  { title: "Japanese Tour シドニーオペラハウスツアー", category: "Guided Tour", dates: "Daily", image: tourJapanese },
  { title: "Mobility Access Tour", category: "Guided Tour", dates: "Daily", image: tourMobility },
  { title: "Backstage Tour", category: "Guided Tour", dates: "Daily", image: tourBackstage },
  { title: "Architectural Tour", category: "Guided Tour", dates: "Saturdays", image: tourArchitectural },
  { title: "French Tour Visite guidée de l'Opéra de Sydney", category: "Guided Tour", dates: "Mon, Wed, Fri", image: tourFrench },
  { title: "Spanish Tour Visita guiada a la Casa de la Ópera de Sídney", category: "Guided Tour", dates: "Tue, Thu", image: tourSpanish },
  { title: "Tour & Dine", category: "Tours & Experiences", dates: "Daily", image: tourDine },
  { title: "Taste of the House", category: "Tours & Experiences", dates: "Dates vary", image: tasteOfHouse },
];

export interface StreamItem {
  title: string;
  type: string;
  genres: string[];
  price: string;
  image: string | { src: string };
}

export const stream: StreamItem[] = [
  { title: "Cameron Winter", type: "On-demand", genres: ["Contemporary Music", "Indie"], price: "Free", image: cameronWinter },
  { title: "Marlon Williams", type: "On-demand", genres: ["Contemporary Music", "Vivid LIVE"], price: "Free", image: marlonWilliams },
  { title: "NAIDOC Week: 50 Years of Deadly", type: "On-demand", genres: ["Multi-genre"], price: "Free", image: naidocWeek },
  { title: "MĀUI", type: "On-demand", genres: ["Dance"], price: "Free", image: maui },
  { title: "All About Women 2026", type: "On-demand", genres: ["Talks and Ideas"], price: "Free", image: allAboutWomen },
  { title: "Shanghai Symphony Orchestra", type: "On-demand", genres: ["Classical Music"], price: "Free", image: shanghaiSymphony },
];
