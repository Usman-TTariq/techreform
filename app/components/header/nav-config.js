import {
  APP_DEVELOPMENT_ITEMS,
  COMPANY_ITEMS,
  ECOMMERCE_ITEMS,
  INDUSTRIES_ITEMS,
  MOBILE_SERVICE_ITEMS,
  SOLUTIONS_ITEMS,
  STAFF_SERVICE_ITEMS,
} from "@/app/constants/site-nav";

export const DROPDOWN_ITEMS = [
  { key: "mobile", label: "Mobile" },
  { key: "ecommerce", label: "Ecommerce" },
  { key: "staff", label: "Hire/Staff Augmentation" },
  { key: "industries", label: "Industries" },
  { key: "solutions", label: "Solutions" },
  { key: "portfolio", label: "Portfolio", href: "/portfolio" },
  { key: "company", label: "Company" },
];

export const MEGA_MENU = {
  mobile: {
    sidebar: [{ label: "Services" }, { label: "Native & Cross-Platform" }],
    sections: [
      { heading: "Services", items: MOBILE_SERVICE_ITEMS },
      { heading: "Native & Cross-Platform", items: APP_DEVELOPMENT_ITEMS },
    ],
  },
  ecommerce: {
    sidebar: [{ label: "Services" }],
    sections: [{ heading: "Services", items: ECOMMERCE_ITEMS }],
  },
  staff: {
    sidebar: [{ label: "Our Services" }],
    sections: [{ heading: "Our Services", items: STAFF_SERVICE_ITEMS }],
  },
  industries: {
    sidebar: [{ label: "Industries" }],
    sections: [{ heading: "Industries", items: INDUSTRIES_ITEMS }],
  },
  solutions: {
    sidebar: [{ label: "Solutions" }],
    sections: [{ heading: "Solutions", items: SOLUTIONS_ITEMS }],
  },
  company: {
    sidebar: [{ label: "Company" }],
    sections: [
      {
        heading: "Company",
        items: COMPANY_ITEMS.filter((item) => item.href !== "/portfolio"),
      },
    ],
  },
};
