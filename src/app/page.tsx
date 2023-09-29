import { TopBlock } from "@modules/top-block";
import { ReviewSection } from "@modules/review-section";
import { BenefitSection } from "@modules/benefit-section";
import { HowItWorkSection } from "@modules/how-it-work-section";

export default function Home() {
  return (
    <main>
      <TopBlock/>
      <BenefitSection/>
      <HowItWorkSection/>
      <ReviewSection/>
    </main>
  )
}
