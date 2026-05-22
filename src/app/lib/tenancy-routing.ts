export const TENANCY_LOCATIONS = ["Auckland", "Waikato"] as const;

export type TenancyLocation = (typeof TENANCY_LOCATIONS)[number];

export type PropertyManagerReferral = {
  slug: string;
  name: string;
  email: string;
};

export const referrals: PropertyManagerReferral[] = [
  {
    slug: "anuj-khatri",
    name: "Anuj Khatri",
    email: "anuj@acuberentals.com",
  },
  {
    slug: "aman-khatri",
    name: "Aman Khatri",
    email: "aman@rentmyhome.co.nz",
  },
  {
    slug: "gaurav-behl",
    name: "Gaurav Behl",
    email: "gaurav@rentmyhome.co.nz",
  },
  {
    slug: "prashant-chaudhary",
    name: "Prashant Chaudhary",
    email: "prashant@rentmyhome.co.nz",
  },
];

export const WAIKATO_OFFICE_EMAIL = "admin@rentmyhome.co.nz";
export const FALLBACK_ADMIN_EMAIL = "admin@acuberentals.com";

export function getPropertyManagerReferral(slug: string | null | undefined) {
  if (!slug) {
    return null;
  }

  return referrals.find((manager) => manager.slug === slug) ?? null;
}

export function getDefaultLocationForPathname(
  pathname: string | null | undefined,
): TenancyLocation | "" {
  if (!pathname) {
    return "";
  }

  if (pathname === "/auckland") {
    return "Auckland";
  }

  if (pathname === "/waikato") {
    return "Waikato";
  }

  return "";
}
