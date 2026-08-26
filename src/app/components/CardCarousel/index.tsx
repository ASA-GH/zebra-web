"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { EmblaCarouselType as Api, EmblaOptionsType as Options } from "embla-carousel";
import {
  carouselRoot,
  carouselViewport,
  carouselContainer,
  carouselBtn,
  carouselBtnPrev,
  carouselBtnNext,
  carouselDots,
  carouselDot,
  carouselSlide,
} from "./styles";

interface CardCarouselProps {
  slides: ReactNode[];
  options?: Options;
}

function PrevBtn(props: Readonly<ButtonHTMLAttributes<HTMLButtonElement>>) {
  return (
    <button className={`${carouselBtn} ${carouselBtnPrev}`} type="button" {...props}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

function NextBtn(props: Readonly<ButtonHTMLAttributes<HTMLButtonElement>>) {
  return (
    <button className={`${carouselBtn} ${carouselBtnNext}`} type="button" {...props}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

export function CardCarousel({ slides, options }: Readonly<CardCarouselProps>) {
  const [emblaApi, setEmblaApi] = useState<Api>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onInit = useCallback((api: Api) => {
    setScrollSnaps(api.scrollSnapList());
  }, []);

  const clickHandler = useCallback(
    (index: number) => () => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi]
  );

  const prevHandler = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const nextHandler = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const [emblaRef, embla] = useEmblaCarousel(
    { ...options, align: "start", dragFree: false },
    []
  );

  useEffect(() => {
    if (embla) {
      setEmblaApi(embla);
      onInit(embla);
    }
  }, [embla, onInit]);

  useEffect(() => {
    if (!emblaApi) return;
    const selectHandler = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", selectHandler);
  }, [emblaApi]);

  return (
    <div className={carouselRoot}>
      <div className={carouselViewport} ref={emblaRef}>
        <div className={carouselContainer}>
          {slides.map((slide, i) => (
            <div key={i} className={carouselSlide}>
              {slide}
            </div>
          ))}
        </div>
      </div>

      <PrevBtn onClick={prevHandler} disabled={!emblaApi?.canScrollPrev()} aria-label="Previous" />
      <NextBtn onClick={nextHandler} disabled={!emblaApi?.canScrollNext()} aria-label="Next" />

      <div className={carouselDots}>
        {scrollSnaps.map((_, i) => (
          <button
            key={i}
            className={carouselDot}
            onClick={clickHandler(i)}
            data-selected={i === selectedIndex ? "" : undefined}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
