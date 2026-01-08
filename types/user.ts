export interface UserType {
  id: string;
  name: string;
  email: string;
  emailVerified: Date | null;
  image: string | null;
}

export interface ProfileType {
  userId: string;
  role: string;
  description: string | null;
  badges: string[] | null;
  updatedAt: Date;
}
