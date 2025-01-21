import { NewsletterGroups } from "@/components/newsletters-groups";
import { NewslettersHeader } from "@/components/newsletters-header";
import { UserSwitcher } from "@/components/user-switcher";
import { UserProvider } from "@/contexts/user-context";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Newsletters",
  description: "Liste des newsletters des Echos et marques satellites.",
};

// force the page to be SRR
export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <UserProvider>
      <div className="sticky top-0 bg-white/80 backdrop-blur-md z-10 border-b">
        <UserSwitcher className="max-w-[900px] mx-auto px-4 py-2" />
      </div>

      <main className="flex flex-col space-y-4 mx-auto max p-4 max-w-[900px]">
        <NewslettersHeader />
        {/* We use streaming data here to avoid waiting for all the newsletter data 
        to be fetched before sending the page to user */}
        <Suspense fallback={<div>...Loading</div>}>
          <NewsletterGroups />
        </Suspense>
      </main>
    </UserProvider>
  );
}
