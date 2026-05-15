import Page from "../../components/about/Page";
import { Header } from "@/src/app/components/common/Header";
import { Footer } from "@/src/app/components/common/Footer";
import { Appraisal } from "@/src/app/components/common/Appraisal";
import PropertyManagers from "@/src/app/components/team/PropertyManagers";

export default function page() {
  return (
    <main className="min-h-screen bg-[#f9fdfe]">
      <Header />
      <Page />
      <PropertyManagers />
      <Appraisal />
      <Footer />
    </main>
  );
}
