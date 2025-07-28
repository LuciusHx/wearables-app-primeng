export interface User {
  id: string;
  name: string;
  username: string;
  phone: string;
  email: string;
  role: "ADMIN" | "CLIENT";
  avatarUrl?: string;
}
