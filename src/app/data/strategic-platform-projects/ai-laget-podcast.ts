import { AI_LAGET_TEAM_URL } from "../../lib/ai-laget-brand";
import type { StrategicPlatformPodcastListen } from "./types";

/** Delt podcastmetadata for /ai-laget og AI-laget-kortet på /prosjekter. */
export const AI_LAGET_PODCAST_LISTEN: StrategicPlatformPodcastListen = {
  heading: { no: "Hør AI-laget", en: "Listen to AI-laget" },
  body: {
    no: "En podcast om praktisk AI, erfaringer og hvordan teknologien kan brukes i arbeid og hverdag.",
    en: "A podcast about practical AI, experience and how the technology can be used at work and in everyday life.",
  },
  showTitle: { no: "AI-laget – AI for folk flest", en: "AI-laget – AI for folk flest" },
  hostsLine: {
    no: "Programverter: Thomas Holm og Gunnar Gundersen",
    en: "Hosts: Thomas Holm and Gunnar Gundersen",
  },
  firstEpisodeAt: "2026-10-30",
  spotifyUrl: "https://open.spotify.com/show/2Sy1NpijQlJohjJPsoczKV",
  applePodcastsUrl:
    "https://podcasts.apple.com/no/podcast/ai-laget-ai-for-folk-flest/id1734093925?l=nb",
  spotifyLabel: { no: "Hør på Spotify", en: "Listen on Spotify" },
  appleLabel: { no: "Hør på Apple Podcasts", en: "Listen on Apple Podcasts" },
  aboutUrl: AI_LAGET_TEAM_URL,
  aboutLabel: { no: "Om AI-laget", en: "About AI-laget" },
};