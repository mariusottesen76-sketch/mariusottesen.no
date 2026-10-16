import type { Metadata } from "next";
import PrivacyPageContent from "../components/PrivacyPageContent";
import { buildPrivacyPageMetadata } from "../lib/privacy-metadata";

export function generateMetadata(): Metadata {
  return buildPrivacyPageMetadata("no");
}

export default function PersonvernPage() {
  return <PrivacyPageContent lang="no" />;
}
