import CEOMessage from '@/components/home/CEOMessage';
import CEOPage from '@/components/pages/CEO'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What AI Services - AI Executive Assistants for CEOs",
  description: "Discover top-tier AI Executive Assistants tailored for CEOs. Enhance your leadership with intelligent, round-the-clock support.",
};

const page = () => {
  return (
    <div>
      <CEOPage />
      <CEOMessage/>
    </div>
  )
}

export default page
