import { Header } from "@/src/app/components/common/Header";
import { Footer } from "@/src/app/components/common/Footer";
import { Appraisal } from "@/src/app/components/common/Appraisal";
import ZeroPercent from "@/src/app/components/landlords/ZeroPercent";

export default function Landlords() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="pt-30 pb-30 text-center">
        <div className="mx-auto w-[90%] max-w-325">
          <h4 className="text-[15px] text-red tracking-[2px] mb-5">
            Landlord Hub
          </h4>
          <h1 className="font-serif font-bold text-[52px] leading-[1.2] mb-6">
            Coming Soon
          </h1>
          <p className="text-[#666] text-lg leading-loose max-w-150 mx-auto">
            We&apos;re putting together something great. Our landlord hub will
            be available shortly.
          </p>
        </div>
      </section>
      {/* <ZeroPercent /> */}
      <Footer />
    </main>
  );
}
