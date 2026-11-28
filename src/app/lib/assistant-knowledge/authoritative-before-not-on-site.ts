import type { Lang } from "../../LanguageContext";
import { tryGroundedCareerAnswer } from "./grounded-career-answer";
import {
  tryGroundedBiTeachingAnswer,
  tryGroundedEducationAnswer,
  tryGroundedGenerativeAiCourseLeadershipLinkAnswer,
} from "./grounded-education-answer";
import { tryGroundedFactualAnswer } from "./grounded-factual-answer";
import { tryGroundedPublicContactAnswer } from "./grounded-contact-answer";
import { tryGroundedProfileAnswer } from "./grounded-profile-answer";
import { tryGroundedConsultingDeliveryAnswer } from "./grounded-consulting-delivery-answer";
import { tryGroundedEntityRelationshipAnswer } from "./grounded-entity-relationship-answer";

/** Begrenset sjekk mot autoritative kilder før NOT_ON_SITE — ingen modell, ingen full manifest-skanning. */
export function tryAuthoritativeGroundedAnswer(
  question: string,
  lang: Lang
): { answer: string; sourceIds: string[] } | null {
  return (
    tryGroundedEntityRelationshipAnswer(question, lang) ??
    tryGroundedGenerativeAiCourseLeadershipLinkAnswer(question, lang) ??
    tryGroundedEducationAnswer(question, lang) ??
    tryGroundedBiTeachingAnswer(question, lang) ??
    tryGroundedPublicContactAnswer(question, lang) ??
    tryGroundedConsultingDeliveryAnswer(question, lang) ??
    tryGroundedProfileAnswer(question, lang) ??
    tryGroundedCareerAnswer(question, lang) ??
    tryGroundedFactualAnswer(question, lang)
  );
}