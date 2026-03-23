import { blockContent } from "./shared/blockContent";
import { seoFields } from "./shared/seoFields";
import { localeString } from "./shared/localeString";
import { localeText } from "./shared/localeText";
import { localeBlockContent } from "./shared/localeBlockContent";
import { ourStoryPage } from "./ourStoryPage";
import { whyChooseUsPage } from "./whyChooseUsPage";
import { farmerBenefitsPage } from "./farmerBenefitsPage";
import { helpSupportPage } from "./helpSupportPage";
import { financeHelpPage } from "./financeHelpPage";
import { legalStepsPage } from "./legalStepsPage";
import { ourMembersPage } from "./ourMembersPage";
import { joinNowPage } from "./joinNowPage";
import { homePage } from "./homePage";
import { member } from "./member";
import { contactPage } from "./contactPage";
import { contactSubmission } from "./contactSubmission";

export const schemaTypes = [
  // Shared
  blockContent,
  seoFields,
  localeString,
  localeText,
  localeBlockContent,
  // Pages
  homePage,
  member,
  contactPage,
  // New pages
  ourStoryPage,
  whyChooseUsPage,
  farmerBenefitsPage,
  helpSupportPage,
  financeHelpPage,
  legalStepsPage,
  ourMembersPage,
  joinNowPage,
  contactSubmission,
];
