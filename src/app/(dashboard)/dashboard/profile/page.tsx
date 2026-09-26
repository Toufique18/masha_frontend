import { ProfileView } from "@/features/dashboard/components/views/profile/ProfileView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile & Account | AI Control Center",
  description: "User trading profile and account credentials",
};

export default function ProfilePage() {
  return <ProfileView />;
}
