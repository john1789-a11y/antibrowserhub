import type { Metadata } from "next";
import ReviewsContent from "./ReviewsContent";

export const metadata: Metadata = {
  title: "Antidetect Browser Reviews",
  description: "Comprehensive, honest reviews of the best antidetect browsers.",
};

export default function ReviewsPage() {
  return <ReviewsContent />;
}
