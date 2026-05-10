import { Header } from "@/src/app/components/common/Header";
import { Footer } from "@/src/app/components/common/Footer";
import { Appraisal } from "@/src/app/components/common/Appraisal";
import ZeroPercent from "@/src/app/components/landlords/ZeroPercent";

export default function Landlords() {
  return (
    <main className="min-h-screen">
      <Header />
      <ZeroPercent />
      <Appraisal />
      <Footer />
    </main>
  );
}
