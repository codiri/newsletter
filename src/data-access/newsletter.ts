import { NEWSLETTER_ITEMS } from "@/mocks/newsletters";

export async function getNewsletters() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return NEWSLETTER_ITEMS;
}
