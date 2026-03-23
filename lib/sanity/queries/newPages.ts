import { safeFetch } from "@/lib/sanity/client";

export async function getOurStoryPageData() {
  return safeFetch(
    `*[_type == "ourStoryPage"][0]{ title, body, seo }`,
    {},
    { next: { revalidate: 3600, tags: ["ourStoryPage"] } }
  );
}

export async function getWhyChooseUsPageData() {
  return safeFetch(
    `*[_type == "whyChooseUsPage"][0]{ title, intro, body, seo }`,
    {},
    { next: { revalidate: 3600, tags: ["whyChooseUsPage"] } }
  );
}

export async function getFarmerBenefitsPageData() {
  return safeFetch(
    `*[_type == "farmerBenefitsPage"][0]{ title, intro, benefits, body, seo }`,
    {},
    { next: { revalidate: 3600, tags: ["farmerBenefitsPage"] } }
  );
}

export async function getHelpSupportPageData() {
  return safeFetch(
    `*[_type == "helpSupportPage"][0]{ title, intro, body, seo }`,
    {},
    { next: { revalidate: 3600, tags: ["helpSupportPage"] } }
  );
}

export async function getFinanceHelpPageData() {
  return safeFetch(
    `*[_type == "financeHelpPage"][0]{ title, intro, body, seo }`,
    {},
    { next: { revalidate: 3600, tags: ["financeHelpPage"] } }
  );
}

export async function getLegalStepsPageData() {
  return safeFetch(
    `*[_type == "legalStepsPage"][0]{ title, intro, steps, body, seo }`,
    {},
    { next: { revalidate: 3600, tags: ["legalStepsPage"] } }
  );
}

export async function getOurMembersPageData() {
  return safeFetch(
    `*[_type == "ourMembersPage"][0]{ title, intro, seo }`,
    {},
    { next: { revalidate: 3600, tags: ["ourMembersPage"] } }
  );
}

export async function getJoinNowPageData() {
  return safeFetch(
    `*[_type == "joinNowPage"][0]{ title, body, membershipFees, applicationFormEmbed, seo }`,
    {},
    { next: { revalidate: 3600, tags: ["joinNowPage"] } }
  );
}
