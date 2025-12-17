import HRAssistant from '@/components/pages/HRAssistant'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What AI Services - AI HR Assistants for Human Resources",
  description: "Explore our AI HR Assistants designed to streamline human resources tasks. Improve efficiency and employee engagement with intelligent support.",
};
const page = () => {
  return (
    <div>
      <HRAssistant />
    </div>
  )
}

export default page
