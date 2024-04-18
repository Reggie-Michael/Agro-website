import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";

export function SplideCarousel() {
  return (
    <Splide
      options={{
        rewind: true,
        gap: "1rem",
        //    type: "loop",
        //    padding: "2rem",
        perPage: 2,
        perMove: 1,
        drag: "free",
        snap: true,
        pagination: false,
      }}
      aria-label="Categories"
    >
      <SplideSlide className="w-full">
        <Image
          width={164}
          height={104}
          src="/assets/images/image yam.png"
          alt="Image 1"
          className="2-32 aspect-square md:size-full"
        />
      </SplideSlide>
      <SplideSlide className="w-full">
        <Image
          width={164}
          height={104}
          src="/assets/images/image rice.png"
          alt="Image 2"
          className="aspect-square h-32 md:size-full"
        />
      </SplideSlide>
    </Splide>
  );
}
