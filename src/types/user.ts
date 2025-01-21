export interface User {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  subscriptions?: string[];
}
