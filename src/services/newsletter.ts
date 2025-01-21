import "server-only";

import { getNewsletters } from "@/data-access/newsletter";
import { Newsletter, NewsletterGroup } from "@/types/newsletter";

export async function getGroupedNewsLettersService() {
  const newsletters = await getNewsletters();

  const groupedNewsletters = newsletters.reduce<Record<string, Newsletter[]>>(
    (acc, newsletter) => {
      if (!acc[newsletter.site]) {
        acc[newsletter.site] = [];
      }
      acc[newsletter.site].push(newsletter);
      return acc;
    },
    {}
  );

  // Convert to array of NewsletterGroup
  const groups: NewsletterGroup[] = Object.entries(groupedNewsletters).map(
    ([site, newsletters]) => ({
      site,
      newsletters,
    })
  );

  return groups;
}
