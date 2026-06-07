import Page from "../../components/services/Page";
import { Header } from "@/src/app/components/common/Header";
import { Footer } from "@/src/app/components/common/Footer";
import PropertyManagers from "@/src/app/components/team/PropertyManagers";

export default function page() {
  return (
    <main className="min-h-screen bg-[#f9fdfe]">
      <Header />
      <Page />
      <PropertyManagers />
      <Footer />
    </main>
  );
}
