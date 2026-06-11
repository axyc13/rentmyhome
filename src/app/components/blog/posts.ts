export type Post = {
  slug: string;
  category: string;
  title: string;
  description: string;
  image: string;
};

export const posts: Post[] = [
  {
    slug: "vacancy",
    category: "Property Management",
    title: "7 Smart Ways Auckland Landlords Can Reduce Vacancy Periods",
    description:
      "Discover practical strategies professional property managers use to keep rental properties occupied and profitable.",
    image: "/building.jpg",
  },
  {
    slug: "healthy-homes",
    category: "Compliance NZ",
    title: "Healthy Homes Standards Every Landlord Should Know",
    description:
      "Everything landlords need to know about compliance and maintaining legal rental standards.",
    image: "/office.jpeg",
  },
  {
    slug: "tenant-retention",
    category: "Rental Growth",
    title: "How Better Communication Increases Tenant Retention",
    description:
      "Why proactive communication plays a massive role in long-term tenant relationships.",
    image: "/team.jpg",
  },
];
