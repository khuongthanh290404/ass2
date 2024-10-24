export interface Users {
  _id?: string;
  username: string;
  email: string;
  password: string;
  role?: "admin" | "member";
  image?: string;
}
