import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ImageIcon } from "lucide-react";

const values = [
  {
    title: "Investigación",
    description:
      "Exploramos y documentamos piezas arqueológicas con características únicas que desafían la comprensión convencional de la historia.",
  },
  {
    title: "Preservación",
    description:
      "Comprometidos con la difusión y conservación del arte y los símbolos de culturas que trascienden la historia conocida.",
  },
  {
    title: "Difusión",
    description:
      "Compartimos este legado iconográfico con el mundo a través de exposiciones, libros y plataformas digitales.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative w-full py-24 overflow-hidden border-b border-white/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="h-px w-16 bg-brand-green" />
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white">
                CONÓCENOS
              </h1>
              <p className="text-white/70 text-lg leading-relaxed max-w-lg">
                Geoalienz: Descubre el arte prohibido de los dioses que vinieron del cielo.
              </p>
              <div className="h-px w-full bg-white/10" />
              <p className="text-white/60 text-base leading-relaxed max-w-lg">
                Nuestra misión es documentar, preservar y difundir estas piezas
                únicas: máscaras, esculturas y grabados que narran una historia
                paralela a la oficial, una que aún espera ser descifrada.
              </p>
              <Button
                asChild
                className="bg-white hover:bg-white/90 text-black px-8 py-5 rounded-md font-bold"
              >
                <Link href="/galeria">
                  <ImageIcon className="h-5 w-5 mr-2" />
                  Ver Galería
                </Link>
              </Button>
            </div>

            <div className="relative aspect-square w-full max-w-[520px] mx-auto">
              <div className="absolute inset-0 bg-brand-green/5 blur-3xl rounded-full" />
              <Image
                src="/123.png"
                alt="Artefacto Geoalienz"
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 space-y-3">
            <div className="h-px w-12 bg-brand-green mx-auto" />
            <h2 className="text-4xl font-black tracking-tight text-white">
              NUESTROS PILARES
            </h2>
            <p className="text-white/50 text-sm max-w-md mx-auto">
              Los principios que guían cada paso de nuestra investigación y
              difusión.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <div
                key={i}
                className="p-8 border border-white/10 rounded-xl hover:border-brand-green/40 transition-colors group"
              >
                <div className="text-5xl font-black text-brand-green/20 group-hover:text-brand-green/40 transition-colors mb-4 leading-none">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-brand-green">
            El legado persiste.
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-lg">
            Únete a nuestra comunidad y sé parte de quienes exploran lo que la
            historia oficial aún no ha explicado.
          </p>
          <Button
            asChild
            className="bg-white hover:bg-white/90 text-black px-10 py-5 rounded-md font-bold text-lg"
          >
            <Link href="/contactanos">Contáctanos</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
