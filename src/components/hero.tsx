import Link from "next/link";
import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative w-full py-12 lg:py-24 xl:py-32 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mask Image */}
          <Image
            src="/imgBanner.png"
            alt="Máscara Geoalienz"
            width={1000}
            height={1000}
            className="w-full"
            priority
          />

          {/* Content */}
          <div className="flex flex-col items-center lg:items-start space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="h-px w-24 bg-white/20 mx-auto lg:mx-0" />
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-brand-green">
                GEOALIENZ
              </h1>
              <p className="max-w-[600px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-light">
                Arte Alienígena Ancestral: Un legado iconográfico de
                civilizaciones no humanas.
              </p>
              <div className="h-px w-full bg-white/20" />
            </div>

            <div className="w-full flex justify-center lg:justify-end">
              <Button
                asChild
                className="bg-white hover:bg-white/90 text-black p-5 w-full max-w-xs rounded-md font-bold text-lg flex items-center gap-2"
              >
                <Link href="/galeria">
                  <ImageIcon className="h-5 w-5" />
                  Galería
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
