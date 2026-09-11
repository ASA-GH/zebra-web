/**
 * Data for Highlights, Stream, Visit, ReadListen sections.
 *
 * Images are referenced by card basename — EventCard looks up the
 * srcset from `srcset-images.ts` and renders <picture> with local derivatives.
 * Option A: 3 derivatives for 1x1, 2 for 16:9.
 */
import { colors } from "@/app/tokens";

// ─── Event highlights ───────────────────────────────────────────────────────

export interface HighlightItem {
  title: string;
  category: string;
  dates: string;
  cardName: string;
  textColor: string;
  bgColor: string;
}

export const TABS = [
  { key: "view", label: `View: ` },
  { key: "events", label: "Events" },
  { key: "tours", label: "Tours" },
  { key: "stream", label: "Stream" },
];

export const events: HighlightItem[] = [
  { title: "Wild Things", category: "International Kids Festival", dates: "26 Sep – 11 Oct 2026", cardName: "wild-things-2026-hero-1-1", textColor: colors.black, bgColor: colors.babyBlue },
  { title: "Velvet Inferno", category: "Musical Theatre", dates: "24 Jul – 13 Sep 2026", cardName: "Velvet-Inferno-website-1-1", textColor: colors.black, bgColor: colors.vibrantCoral },
  { title: "Sydney Symphony Orchestra", category: "Classical Music", dates: "Season 2026", cardName: "sydney-symphony-orchestra-2026-season-1-1", textColor: colors.black, bgColor: colors.deepRose },
  { title: "Sami Tamimi's Garden", category: "Talks and Ideas", dates: "4 Oct 2026", cardName: "curious-sami-tamimi-1-1", textColor: colors.black, bgColor: colors.fuchsia },
  { title: "Housework", category: "Theatre", dates: "5 Sep – 17 Oct 2026", cardName: "STC-S26-Housework-600x600", textColor: colors.black, bgColor: colors.sageGreen },
  { title: "Tara Clerkin Trio", category: "Contemporary Music", dates: "14 Dec 2026", cardName: "Angus-Julia-WEB-1-1", textColor: colors.black, bgColor: colors.palePeriwinkle },
  { title: "An Evening with David Sedaris", category: "Talks and Ideas", dates: "18 Jan 2027", cardName: "david-sedaris-pressshot_1-1", textColor: colors.black, bgColor: colors.babyBlue },
  { title: "Choir of Man", category: "Musical Theatre", dates: "From 11 Dec 2026", cardName: "choir-of-man-1-1", textColor: colors.white, bgColor: colors.mahogany },
  { title: "A Place in the Sultan's Kitchen", category: "Theatre", dates: "14 – 17 Oct 2026", cardName: "a-place-in-the-sultans-kitchen-1-1", textColor: colors.black, bgColor: colors.amber },
  { title: "My Fair Lady", category: "Opera", dates: "10 Sep – 30 Oct 2026", cardName: "MFL2026_568x568", textColor: colors.black, bgColor: colors.palePink },
  { title: "TEEKS", category: "Contemporary Music", dates: "18 Nov 2026", cardName: "Teeks-Website-1-1", textColor: colors.black, bgColor: colors.babyBlue },
  { title: "Hook's Neverland", category: "Circus", dates: "9 – 17 Jan 2027", cardName: "hooks-neverland-1-1", textColor: colors.white, bgColor: colors.eggplant },
];

export const tours: HighlightItem[] = [
  { title: "Sydney Opera House Tour", category: "Guided Tour", dates: "Daily", cardName: "soh-1hrtour-sydneysiders", textColor: colors.black, bgColor: colors.palePeriwinkle },
  { title: "Mandarin Tour 悉尼歌剧院1小时中文导览之旅", category: "Guided Tour", dates: "Daily", cardName: "tours-mandarin-web-2-1", textColor: colors.white, bgColor: colors.mahogany },
  { title: "Korean Tour 시드니 오페라 하우스 한국어 투어", category: "Guided Tour", dates: "Daily", cardName: "tours-korean-web-3-1", textColor: colors.white, bgColor: colors.deepDerry },
  { title: "Japanese Tour シドニーオペラハウスツアー", category: "Guided Tour", dates: "Daily", cardName: "tours-japanese-web-3-1", textColor: colors.white, bgColor: colors.linkVisited },
  { title: "Mobility Access Tour", category: "Guided Tour", dates: "Daily", cardName: "tours-mobility-access-16-9", textColor: colors.white, bgColor: colors.deepDerry },
  { title: "Backstage Tour", category: "Guided Tour", dates: "Daily", cardName: "tours-backstage-web-1-1", textColor: colors.white, bgColor: colors.eggplant },
  { title: "Architectural Tour", category: "Guided Tour", dates: "Saturdays", cardName: "tours-architectural-tour-web-16-9", textColor: colors.white, bgColor: colors.forestGreenw },
  { title: "French Tour Visite guidée de l’Opéra de Sydney", category: "Guided Tour", dates: "Monday, Wednesday and Friday", cardName: "tours-western-one-web-3-1", textColor: colors.black, bgColor: colors.deepRose },
  { title: "Spanish Tour Visita guiada a la Casa de la Ópera de Sídney", category: "Guided Tour", dates: "Tuesday and Thursday", cardName: "tours-western-two-web-3-1", textColor: colors.black, bgColor: colors.lightMustard },
  { title: "German Tour Die Sydney Opera House Tour", category: "Tours & Experiences", dates: "Monday and Friday ", cardName: "", textColor: colors.black, bgColor: colors.palePeach },
  { title: "Tour & Dine", category: "Tours & Experiences", dates: "Daily", cardName: "tours-Tour%26Dine-Web-1-1", textColor: colors.white, bgColor: colors.mahogany },
  { title: "Taste of the House", category: "Tours & Experiences", dates: "Dates vary", cardName: "taste-of-the-house-1-1", textColor: colors.black, bgColor: colors.lightMustard },
];

// ─── Stream items (16:9) ────────────────────────────────────────────────────

export interface StreamItem {
  title: string;
  type: string;
  genres: string[];
  price: string;
  description?: string;
  /** basename matching srcset-images.ts broadcastImages */
  cardName: string;
}

export const stream: StreamItem[] = [
  { title: "Cameron Winter", type: "On-demand", genres: ["Contemporary Music", "Indie"], price: "Free", description: "Cameron Winter, frontman of New York rock band Geese, performed in the Concert Hall in February 2026 as part of his debut Australian tour.", cardName: "Stream-Free-Cameron-Winter-Thumbnails_3840%20x%202160" },
  { title: "Marlon Williams", type: "On-demand", genres: ["Contemporary Music", "Vivid LIVE"], price: "Free", description: "Bringing together country, bluegrass, folk and pop with his irresistibly charming voice, New Zealand singer-songwriter Marlon Williams performed music from his new Māori language album in his long-awaited return to the Sydney Opera House.", cardName: "stream-marlon-williams-16-9" },
  { title: "NAIDOC Week: 50 Years of Deadly", type: "On-demand", genres: ["Contemporary Music", "Contemporary Art", "Dance"], price: "Free", description: "This NAIDOC Week we celebrate ‘50 Years of Deadly’ by diving into past First Nations events at the House. From conversations with legends to heartfelt true stories and a revival of language through song. All free to watch online.", cardName: "barton-ch-boud-16x9" },
  { title: "MĀUI", type: "On-demand", genres: ["Dance"], price: "Free", description: "Fresh Movement brings the best of contemporary storytelling to the stage in a reawakening of Māori and Pacifica stories. MĀUI is a vibrant retelling of the many tales of the Pacific demi-god, Māui, who travelled throughout the area for hundreds of years.", cardName: "maui-stream-16-9" },
  { title: "All About Women 2026", type: "On-demand", genres: ["Talks and Ideas", "all about women"], price: "Free", description: "Watch a selection of three talks from All About Women , the Sydney Opera House’s festival of ideas about gender, culture and equality, held annually in the week of International Women’s Day. Enormously successful and celebrated, it is filled with buzzy, inspiring and agenda-setting conversations.", cardName: "IATH-hero-web-2560x1440" },
  { title: "Shanghai Symphony Orchestra", type: "On-demand", genres: ["Classical Music"], price: "Free", description: "Maestro Long Yu conducted the Shanghai Symphony Orchestra in a thrilling concert featuring cellist Jian Wang in the Concert Hall.", cardName: "Stream-Shanghai-Symphony-Orchestra-Web-EDM-16-9" },
];

// ─── Page cards (16:9) — Visit, Read, Listen ────────────────────────────────

export interface PageCardItem {
  title: string;
  description: string;
  href: string;
  /** basename matching srcset-images.ts pageImages */
  cardName: string;
}

export const visitCards: PageCardItem[] = [
  { title: "Getting here", description: "How to get to the Opera House - and finding your way around our amenities, venues and precinct once you're here.", href: "/visit", cardName: "soh-hl-2017-174-credit-hamiltonlund-1600x900" },
  { title: "Accessibility", description: "Access the House with services, performances and dedicated programs for people with disabilities.", href: "/visit/accessibility", cardName: "soh-audio-description-vivid-201716x9" },
  { title: "Tours", description: "Join a guided tour to discover the history, architecture and extraordinary story of Sydney's Opera House.", href: "/tours", cardName: "soh-1hrtour-sydneysiders" },
];

export const deepDiveCards: PageCardItem[] = [
  { title: "Stream", description: "Take your virtual front row seat on Stream. Watch livestreams of new performances, highlights from the multi-genre archive, presentations by local and international performing arts companies, and original content created exclusively for the platform.", href: "/stream", cardName: "elefant-traks-stream-16-9" },
  { title: "Read", description: "Read about the history and community of the Opera House, and stories from the productions that take over our stages.", href: "/read", cardName: "william-barton-generations-dynasties-reduced" },
  { title: "Listen", description: "Turn up the volume and listen to podcasts and playlists from the Opera House.", href: "/listen", cardName: "AAW26-Inside-the-epstein-files-Web-EDM-16-9" },
];
