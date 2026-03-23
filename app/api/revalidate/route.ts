import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

type WebhookPayload = {
  _type?: string;
  slug?: { current?: string };
};

// Map Sanity document types to cache tags
const TYPE_TAG_MAP: Record<string, string[]> = {
  homePage: ["homePage"],
  aboutPage: ["aboutPage"],
  aboutVision: ["aboutPage"],
  member: ["aboutPage"],
  partner: ["aboutPage"],
  ourStoryPage: ["ourStoryPage"],
  whyChooseUsPage: ["whyChooseUsPage"],
  farmerBenefitsPage: ["farmerBenefitsPage"],
  helpSupportPage: ["helpSupportPage"],
  financeHelpPage: ["financeHelpPage"],
  legalStepsPage: ["legalStepsPage"],
  ourMembersPage: ["ourMembersPage"],
  joinNowPage: ["joinNowPage"],
  contactPage: ["contactPage"],
  knowledgeCenterPage: ["knowledgeCenterPage"],
  treeInformationPage: ["knowledgeCenterPage"],
  farmingTechniquesPage: ["knowledgeCenterPage"],
  climateSoilPage: ["knowledgeCenterPage"],
  farmingGuidePage: ["farmingGuidePage"],
  nurseryPage: ["farmingGuidePage"],
  plantationPage: ["farmingGuidePage"],
  maintenancePage: ["farmingGuidePage"],
  harvestingPage: ["farmingGuidePage"],
  legalGuidelinesPage: ["legalGuidelinesPage"],
  forestDeptRulesPage: ["legalGuidelinesPage"],
  treeRegistrationPage: ["legalGuidelinesPage"],
  transportPermitsPage: ["legalGuidelinesPage"],
  farmerTrainingPage: ["farmerTrainingPage"],
  workshop: ["farmerTrainingPage"],
  trainingVideo: ["farmerTrainingPage"],
  pdfGuide: ["farmerTrainingPage"],
  researchInnovationPage: ["researchInnovationPage"],
  agroforestryPage: ["researchInnovationPage"],
  seedVarietiesPage: ["researchInnovationPage"],
  marketTradePage: ["marketTradePage"],
  timberPricesPage: ["marketTradePage"],
  exportInformationPage: ["marketTradePage"],
  memberPortalPage: ["memberPortalPage"],
  joinAssociationPage: ["memberPortalPage"],
  farmerRegistrationPage: ["memberPortalPage"],
};

export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<WebhookPayload>(
      req,
      process.env.SANITY_REVALIDATE_SECRET,
      true
    );

    if (!isValidSignature) {
      return new Response("Invalid signature", { status: 401 });
    }

    if (!body?._type) {
      return new Response("Missing _type in body", { status: 400 });
    }

    const tags = TYPE_TAG_MAP[body._type] ?? [body._type];
    tags.forEach((tag) => revalidateTag(tag));

    return NextResponse.json({ revalidated: tags, type: body._type });
  } catch (err) {
    console.error("[revalidate route]", err);
    return new Response((err as Error).message, { status: 500 });
  }
}
