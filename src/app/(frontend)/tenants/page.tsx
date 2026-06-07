import { Header } from "@/src/app/components/common/Header";
import { Footer } from "@/src/app/components/common/Footer";
import { Tenancy } from "@/src/app/components/common/Tenancy";
import Hero from "@/src/app/components/tenants/Hero";

export default function Landlords() {
  return (
    <main className="min-h-screen">
      <Header />
      <Tenancy />
      <Footer />
    </main>
  );
}
