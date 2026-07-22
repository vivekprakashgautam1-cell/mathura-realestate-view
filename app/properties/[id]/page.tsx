import type { Metadata } from "next";
import { ComingSoonNotice } from "@/components/ComingSoonNotice";

export const metadata: Metadata = { title: "Property Details | Mathura RealEstate View" };

export default function PropertyDetailPage() {
  return <ComingSoonNotice title="Property Details — Coming Soon" />;
}
