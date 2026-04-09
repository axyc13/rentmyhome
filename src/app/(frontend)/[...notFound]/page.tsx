import { Header } from "@/src/app/components/common/Header";
import { Footer } from "@/src/app/components/common/Footer";
import Link from "next/link";

export default async function NotFound() {
  return (
    <div>
      <Header />
      <section className="w-screen h-screen bg-white flex flex-col items-center justify-center gap-10">
        <h1 className="text-4xl font-serif font-bold">Hey there...</h1>
        <h1 className="w-[80vw] text-center text-base md:text-">
          We are currently working on this page. Please check back later!
        </h1>
        <Link href="/">
          <button className="border px-4 py-2 rounded-lg text-xs lg:text-base cursor-pointer hover:bg-[#ad0000] hover:text-white transition-colors">
            Return To Homepage
          </button>
        </Link>
      </section>
      <Footer />
    </div>
  );
}
