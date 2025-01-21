export interface Newsletter {
  id: string;
  image: string;
  description: string;
  title: string;
  site: string;
  subscriptions: string[];
}
export interface NewsletterGroup {
  site: string;
  newsletters: Newsletter[];
}
