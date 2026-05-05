import Page from "../../components/aboutus/Page";
import { Header } from "@/src/app/components/common/Header";
import { Footer } from "@/src/app/components/common/Footer";
import { Appraisal } from "@/src/app/components/common/Appraisal";

export default function page() {
  return (
    <main className="min-h-screen bg-[#f9fdfe]">
      <Header />
      <Page />
      <Appraisal />
      <Footer />
    </main>
  );
}
