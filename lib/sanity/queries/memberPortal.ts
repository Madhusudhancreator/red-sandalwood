import { safeFetch } from "../client";

const TAG = { next: { revalidate: 3600, tags: ["memberPortalPage"] } };

export async function getMemberPortalPageData() {
  return safeFetch(`*[_type == "memberPortalPage"][0]{ title, intro, benefits, seo }`, {}, TAG);
}

export async function getJoinAssociationData() {
  return safeFetch(`*[_type == "joinAssociationPage"][0]{ title, body, membershipFees, applicationFormEmbed, seo }`, {}, TAG);
}

export async function getFarmerRegistrationData() {
  return safeFetch(`*[_type == "farmerRegistrationPage"][0]{ title, body, eligibility, registrationFormEmbed, seo }`, {}, TAG);
}
