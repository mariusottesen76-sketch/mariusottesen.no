import { notFound } from "next/navigation";
import FaginnleggArticleDetail from "../../components/faginnlegg/FaginnleggArticleDetail";
import { getAllFaginnleggSlugs, getFaginnleggBySlug } from "../../lib/faginnlegg-data";
import {
  buildFaginnleggArticleJsonLd,
  buildFaginnleggArticleMetadata,
  buildFaginnleggBreadcrumbJsonLd,
} from "../../lib/faginnlegg-metadata";

export async function generateStaticParams() {
  return getAllFaginnleggSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const innlegg = getFaginnleggBySlug(slug);
  if (!innlegg) return {};
  return buildFaginnleggArticleMetadata(innlegg);
}

export default async function FaginnleggSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const innlegg = getFaginnleggBySlug(slug);
  if (!innlegg) notFound();

  const articleJsonLd = buildFaginnleggArticleJsonLd(innlegg);
  const breadcrumbJsonLd = buildFaginnleggBreadcrumbJsonLd(innlegg);

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
      <FaginnleggArticleDetail innlegg={innlegg} />
    </>
  );
}
