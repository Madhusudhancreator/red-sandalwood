import { blockContent } from "./shared/blockContent";
import { seoFields } from "./shared/seoFields";
import { homePage } from "./homePage";
import { aboutPage, aboutVision, member, partner } from "./aboutPage";
import {
  knowledgeCenterPage,
  treeInformationPage,
  farmingTechniquesPage,
  climateSoilPage,
} from "./knowledgeCenterPage";
import {
  farmingGuidePage,
  nurseryPage,
  plantationPage,
  maintenancePage,
  harvestingPage,
} from "./farmingGuidePage";
import {
  legalGuidelinesPage,
  forestDeptRulesPage,
  treeRegistrationPage,
  transportPermitsPage,
} from "./legalGuidelinesPage";
import { farmerTrainingPage, workshop, trainingVideo, pdfGuide } from "./farmerTrainingPage";
import {
  researchInnovationPage,
  agroforestryPage,
  seedVarietiesPage,
} from "./researchInnovationPage";
import {
  marketTradePage,
  timberPricesPage,
  exportInformationPage,
} from "./marketTradePage";
import {
  memberPortalPage,
  joinAssociationPage,
  farmerRegistrationPage,
} from "./memberPortalPage";
import { contactPage } from "./contactPage";

export const schemaTypes = [
  // Shared
  blockContent,
  seoFields,
  // Pages
  homePage,
  aboutPage,
  aboutVision,
  member,
  partner,
  knowledgeCenterPage,
  treeInformationPage,
  farmingTechniquesPage,
  climateSoilPage,
  farmingGuidePage,
  nurseryPage,
  plantationPage,
  maintenancePage,
  harvestingPage,
  legalGuidelinesPage,
  forestDeptRulesPage,
  treeRegistrationPage,
  transportPermitsPage,
  farmerTrainingPage,
  workshop,
  trainingVideo,
  pdfGuide,
  researchInnovationPage,
  agroforestryPage,
  seedVarietiesPage,
  marketTradePage,
  timberPricesPage,
  exportInformationPage,
  memberPortalPage,
  joinAssociationPage,
  farmerRegistrationPage,
  contactPage,
];
