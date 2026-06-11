import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

export default function ArticleFeaturedImage({ src, alt }: Props) {
  return (
    <div className="mx-auto w-[90%] max-w-[1150px] -mt-15">
      <div className="relative w-full h-[480px] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
    </div>
  );
}
