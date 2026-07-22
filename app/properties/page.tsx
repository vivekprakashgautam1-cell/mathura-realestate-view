import type { Metadata } from "next";
import { ComingSoonNotice } from "@/components/ComingSoonNotice";

export const metadata: Metadata = { title: "All Properties | Mathura RealEstate View" };

export default function PropertiesPage() {
  return <ComingSoonNotice title="Full Property Listings — Coming Soon" />;
}
