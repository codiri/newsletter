import { getGroupedNewsLettersService } from "@/services/newsletter";
import { NewsletterCard } from "./newsletter-card";

export async function NewsletterGroups() {
  const groups = await getGroupedNewsLettersService();

  return (
    <div className="flex flex-col space-y-12">
      {groups.map((group) => (
        <section key={group.site}>
          <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
            {group.site}
          </h2>
          <div className="h-1 w-16 bg-red-500 mt-2" />
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 mt-4">
            {group.newsletters.map((newsletter) => (
              <NewsletterCard key={newsletter.id} newsletter={newsletter} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
