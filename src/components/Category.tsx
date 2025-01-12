"use client";

import * as React from "react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CategoryCarouselProps {
  items: readonly string[];
  name: string;
}

function getRandomColor() {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 70%, 80%)`;
}

export function CategoryCarousel({ name, items }: CategoryCarouselProps) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full ps-4"
    >
      <CarouselContent>
        {items.map((item) => (
          <CarouselItem key={item} className="md:basis-1/4 lg:basis-1/5">
            <Link href={`/categories/${name}/${item}`}>
              <div
                className="flex aspect-square cursor-pointer flex-col justify-end overflow-hidden rounded-lg transition-all hover:scale-105"
                style={{ backgroundColor: getRandomColor() }}
              >
                <div className="bg-black bg-opacity-50 p-2 text-white">
                  <span className="block text-center text-sm font-medium">
                    {item}
                  </span>
                </div>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
