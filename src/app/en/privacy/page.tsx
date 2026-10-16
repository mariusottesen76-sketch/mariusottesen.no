import type { Metadata } from "next";
import PrivacyPageContent from "../../components/PrivacyPageContent";
import { buildPrivacyPageMetadata } from "../../lib/privacy-metadata";

export function generateMetadata(): Metadata {
  return buildPrivacyPageMetadata("en");
}

export default function EnPrivacyPage() {
  return <PrivacyPageContent lang="en" />;
}
