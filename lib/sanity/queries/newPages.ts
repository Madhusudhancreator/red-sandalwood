import { safeFetch } from "@/lib/sanity/client";

const REVALIDATE = { next: { revalidate: 3600 } };

export async function getOurStoryPageData() {
  return safeFetch(
    `*[_type == "ourStoryPage"][0]{ title, body, seo }`,
    {},
    REVALIDATE
  );
}

export async function getWhyChooseUsPageData() {
  return safeFetch(
    `*[_type == "whyChooseUsPage"][0]{ title, intro, body, seo }`,
    {},
    REVALIDATE
  );
}

export async function getFarmerBenefitsPageData() {
  return safeFetch(
    `*[_type == "farmerBenefitsPage"][0]{ title, intro, benefits, body, seo }`,
    {},
    REVALIDATE
  );
}

export async function getHelpSupportPageData() {
  return safeFetch(
    `*[_type == "helpSupportPage"][0]{ title, intro, body, seo }`,
    {},
    REVALIDATE
  );
}

export async function getFinanceHelpPageData() {
  return safeFetch(
    `*[_type == "financeHelpPage"][0]{ title, intro, body, seo }`,
    {},
    REVALIDATE
  );
}

export async function getLegalStepsPageData() {
  return safeFetch(
    `*[_type == "legalStepsPage"][0]{ title, intro, steps, body, seo }`,
    {},
    REVALIDATE
  );
}

export async function getOurMembersPageData() {
  return safeFetch(
    `*[_type == "ourMembersPage"][0]{ title, intro, seo }`,
    {},
    REVALIDATE
  );
}

export async function getJoinNowPageData() {
  return safeFetch(
    `*[_type == "joinNowPage"][0]{ title, body, membershipFees, applicationFormEmbed, seo }`,
    {},
    REVALIDATE
  );
}
