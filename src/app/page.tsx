import { TopBlock } from "@modules/top-block";
import { BenefitSection } from "@modules/benefit-section";
import { ReviewSection } from "@modules/review-section";

export default function Home() {
  return (
    <main>
      <TopBlock/>
      <BenefitSection/>
      <ReviewSection/>
    </main>
  )
}
