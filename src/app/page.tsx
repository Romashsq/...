import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { LandingClient } from "@/components/landing/landing-client";

export default async function LandingPage() {
  const session = await auth();
  if (session) redirect("/dashboard");

  return <LandingClient />;
}
