import DemoPage from '@/components/pages/Demo'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What AI Services - AI Demos and Trials",
  description: "Explore our AI demos and trials to experience the power of artificial intelligence firsthand. Try before you buy with our interactive AI solutions.",
};
const page = () => {
  return (
    <div>
      <DemoPage />
    </div>
  )
}

export default page
