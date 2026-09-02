import { notFound } from "next/navigation";
import FaginnleggArticleDetail from "../../../components/faginnlegg/FaginnleggArticleDetail";
import { getFaginnleggBySlug } from "../../../lib/faginnlegg-data";
import { hasFullEnFaginnleggBody } from "../../../lib/faginnlegg-en-audit";
import {
  buildFaginnleggArticleJsonLd,
  buildFaginnleggArticleMetadata,
  buildFaginnleggBreadcrumbJsonLd,
} from "../../../lib/faginnlegg-metadata";
import { getIndexableEnArticleStaticParams } from "../../../lib/faginnlegg-locale-routes";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getIndexableEnArticleStaticParams();
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const innlegg = getFaginnleggBySlug(slug);
  if (!innlegg || !hasFullEnFaginnleggBody(slug, innlegg)) return {};
  return buildFaginnleggArticleMetadata(innlegg, "en");
}

export default async function EnArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const innlegg = getFaginnleggBySlug(slug);
  if (!innlegg || !hasFullEnFaginnleggBody(slug, innlegg)) notFound();

  const articleJsonLd = buildFaginnleggArticleJsonLd(innlegg, "en");
  const breadcrumbJsonLd = buildFaginnleggBreadcrumbJsonLd(innlegg, "en");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <FaginnleggArticleDetail innlegg={innlegg} initialLang="en" />
    </>
  );
}
