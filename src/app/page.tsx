//import MobileLayout from "@/components/MobileLayout";
import { redirect } from "next/navigation";

export default function Home() {
  // return <MobileLayout />;
  redirect("/timer");
}
