import ManagerAssistant from '@/components/pages/ManagerAssistant'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What AI Services - AI Manager Assistants for Project Management",
  description: "Discover our AI Manager Assistants designed to streamline project management tasks. Improve team productivity and project outcomes with intelligent support.",
};

const page = () => {
  return (
    <div>
      <ManagerAssistant />
    </div>
  )
}

export default page
