import type { Pricing } from "../types/pricing.type";
import { isEurope } from "../utils/helper";

export const pricingPlans: Pricing[] = [
  {
    title: "Open Source",
    price: "Free",
    features: [
      "50 hours/month",
      "Limited Prebuilds",
      "Public Repos",
      "Private repos 30d trial",
    ],
    btnText: "Install now",
    btnHref: "/docs/self-hosted/latest/self-hosted",
  },
  {
    title: "Professional",
    price: isEurope() ? "€18" : "$20",
    duration: "Per User/Month",
    features: [
      "Unlimited Prebuilds",
      "Admin Dashboard",
      "Unlimited hours",
      "Shared Workspaces",
      "Teams",
    ],
    btnText: "Request license",
    btnHref: "/enterprise-license",
  },
];
