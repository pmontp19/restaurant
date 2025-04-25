import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  UtensilsCrossed,
  Clock,
  Phone,
  Mail,
  Compass,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import VideoPlayer from "@/components/video-player";
import MobileMenu from "@/components/mobile-menu";
import ImageGallery from "@/components/image-gallery";
import SiteHeader from "@/components/site-header";
import CookieSettingsFooterButton from "@/components/cookie-settings-footer-button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.calgallisa.com"),
  title: "Cal Gallisa - Restaurant a Reus",
  description:
    "Cal Gallisa, restaurant tradicional amb història a Reus. Gaudeix de la nostra cuina local en un entorn únic.",
  keywords:
    "restaurant reus, cal gallisa, cuina catalana, restaurant tradicional, menjar a reus, sala mercadal, sala soterrani",
  openGraph: {
    title: "Cal Gallisa - Restaurant a Reus",
    description:
      "Cal Gallisa, restaurant tradicional amb història a Reus. Gaudeix de la nostra cuina local en un entorn únic.",
    images: [
      {
        url: "/images/casa-navas.webp",
        width: 1200,
        height: 630,
        alt: "Cal Gallisa Restaurant",
      },
    ],
    locale: "ca",
    type: "website",
  },
  alternates: {
    canonical: "https://www.calgallisa.com",
  },
};

const salaMercadalImages = [
  {
    src: "/images/sales/sala-mercadal1.webp",
    alt: "Sala Mercadal - Vista general 1",
    width: 600,
    height: 400,
  },
  {
    src: "/images/sales/sala-mercadal2.webp",
    alt: "Sala Mercadal - Vista general 2",
    width: 600,
    height: 400,
  },
  {
    src: "/images/sales/sala-mercadal3.webp",
    alt: "Sala Mercadal - Vista general 3",
    width: 600,
    height: 400,
  },
  {
    src: "/images/sales/sala-mercadal4.webp",
    alt: "Sala Mercadal - Vista general 4",
    width: 600,
    height: 400,
  },
  {
    src: "/images/sales/sala-mercadal5.webp",
    alt: "Sala Mercadal - Vista general 5",
    width: 600,
    height: 400,
  },
  {
    src: "/images/sales/sala-mercadal6.webp",
    alt: "Sala Mercadal - Vista general 6",
    width: 600,
    height: 400,
  },
];

const salaSoterraImages = [
  {
    src: "/images/sales/sala-refugi1.webp",
    alt: "Sala Refugi - Vista general 1",
    width: 600,
    height: 400,
  },
  {
    src: "/images/sales/sala-refugi2.webp",
    alt: "Sala Refugi - Vista general 2",
    width: 600,
    height: 400,
  },
  {
    src: "/images/sales/sala-refugi3.webp",
    alt: "Sala Refugi - Vista general 3",
    width: 600,
    height: 400,
  },
  {
    src: "/images/sales/sala-refugi4.webp",
    alt: "Sala Refugi - Vista general 4",
    width: 600,
    height: 400,
  },
  {
    src: "/images/sales/sala-refugi5.webp",
    alt: "Sala Refugi - Vista general 5",
    width: 600,
    height: 400,
  },
  {
    src: "/images/sales/sala-refugi6.webp",
    alt: "Sala Refugi - Vista general 6",
    width: 600,
    height: 400,
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <Image
            src="/images/refugi-2.webp"
            alt="Interior del restaurant Cal Gallisa"
            width={1600}
            height={600}
            className="w-full h-[70vh] object-cover"
            priority
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="container text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="sr-only">Cal Gallisa</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="320"
                  height="62"
                  viewBox="700 0 5159.0996 992.162"
                  fill="white"
                  aria-label="Cal Gallisa logo"
                  className="mx-auto h-16 md:h-24 w-auto"
                  role="img"
                >
                  <title>Cal Gallisa</title>
                  <path d="m 4069.3277,940.39966 h -331.4 V 362.89967 h 123.6 v 453.9 h 207.7" style={{strokeMiterlimit:10}} />
                  <path d="m 4477.0277,940.39966 h -331.3 V 362.89967 h 123.6 v 453.9 h 207.7" style={{strokeMiterlimit:10}} />
                  <path d="m 4553.4277,940.39966 h 123.6 V 361.39967 h -123.6 z" style={{strokeMiterlimit:10}} />
                  <path d="m 3379.0277,522.49967 87.2,205.7 h -174.3 z m -177.1,417.89999 37.5,-88.59999 h 279.1 l 37.5,88.59999 h 134.2 l -311.2,-734.59999 -311.3,734.59999" style={{strokeMiterlimit:10}} />
                  <path d="m 2333.8277,940.39966 h -331.4 V 362.89967 h 123.6 v 453.9 h 207.7" style={{strokeMiterlimit:10}} />
                  <path d="m 5478.8277,522.49967 87.2,205.7 h -174.4 z m -177.1,417.89999 37.5,-88.59999 h 279.1 l 37.5,88.59999 h 134.2 l -311.2,-734.59999 -311.3,734.59999" style={{strokeMiterlimit:10}} />
                  <path d="m 5066.0277,740.49967 v 0 m 94.7,-125.7 c -30.1,-45 -80.1,-80.7 -148.6,-106.1 -32.4,-12 -70.4,-15.7 -76.9,-19.9 -3.3,-2 -2.2,-7 1.6,-8 3.8,-1 36.5,-3.6 95.1,10.5 a 819.8,819.8 0 0 1 84.9,25.7 l 21.8,-57.8 21.8,-57.8 a 931.5,931.5 0 0 0 -100.4,-30.4 c -32.7,-7.8 -62.3,-12.6 -87.8,-14.3 -39,-2.5 -70,2.3 -94.7,14.5 l -1.2,0.6 -1.2,0.6 c -7.8,4.3 -47.2,28.5 -60.5,84.8 -2.9,11.5 -11.9,57.2 12.7,98.1 15.4,25.7 40.1,43.1 71.3,50.4 l 2.3,0.5 2.3,0.4 a 384.6,384.6 0 0 1 65.6,18 c 42.4,15.8 74,36.7 88.9,59 10.9,16.2 13.4,34.2 8.1,56.5 -0.9,3.2 -16,54.7 -60.1,71.1 -19.2,7.1 -43,7.5 -70.7,1 -39.8,-9.3 -86.3,-32.1 -138.3,-67.8 l -69.6,101.9 c 91.3,62.6 173.4,94.09999 245.2,94.09999 a 218.1,218.1 0 0 0 78.7,-14.2 c 44.5,-17.09999 82,-49.49999 108.4,-93.89999 18.5,-31.1 25.5,-57.7 26.7,-62.7 13.6,-56.1 4.8,-109.6 -25.4,-154.8" style={{strokeMiterlimit:10}} />
                  <path d="m 1067.8277,940.39966 c -84.90005,0 -165.00005,-30.69999 -225.50004,-86.59999 a 300.3,300.3 0 0 1 -69.9,-95.8 285.2,285.2 0 0 1 0,-238 300.2,300.2 0 0 1 69.9,-95.8 c 60.49999,-55.8 140.59999,-86.6 225.50004,-86.6 a 337.1,337.1 0 0 1 133.6,27.2 319.5,319.5 0 0 1 106.9,74.2 l -89.8,84.9 c -37.7,-39.9 -92.7,-62.8 -150.8,-62.8 -109.10005,0 -197.80004,79.8 -197.80004,177.8 0,98 88.79999,177.8 197.80004,177.8 67.7,0 130,-30.7 166.7,-82.1 l 100.6,71.8 c -59.8,83.8 -159.8,133.89999 -267.3,133.89999" style={{strokeMiterlimit:10}} />
                  <path d="m 3063.5277,730.99967 c 10.4,-14.2 17.9,-21.6 13.4,-33.5 -4.5,-11.9 -20.9,-12.7 -20.9,-12.7 l -364.4,-9.7 51.4,73.1 c 0,0 12.1,15.4 14.1,29.8 0,0 69.9,-1.7 110.6,17.4 a 217,217 0 0 1 -75.5,13.4 c -109.1,0 -197.8,-79.8 -197.8,-177.8 0,-98 88.8,-177.8 197.8,-177.8 58.1,0 113,22.9 150.8,62.8 l 89.8,-84.9 a 319.4,319.4 0 0 0 -106.9,-74.2 337,337 0 0 0 -133.6,-27.2 c -84.9,0 -165,30.7 -225.5,86.6 a 300.1,300.1 0 0 0 -69.9,95.8 285.1,285.1 0 0 0 0,238 300.1,300.1 0 0 0 69.9,95.8 c 60.5,55.8 140.6,86.59999 225.5,86.59999 a 339.9,339.9 0 0 0 125.1,-23.69999 v 0 c 0,0 35.8,-15.2 101.4,31.69999 0,0 -17.9,-71.49999 -9.7,-103.59999 8.2,-32.1 44,-91.7 54.4,-105.8" style={{strokeMiterlimit:10}} />
                  <path d="m 5590.5277,171.49967 h -223.4 l 22.7,-67.49993 22.7,-67.499995 89,67.499995" style={{strokeMiterlimit:10}} />
                  <path d="m 1643.5277,522.49967 87.2,205.7 h -174.4 z m -177.1,417.89999 37.5,-88.59999 h 279.1 l 37.5,88.59999 h 134.2 l -311.2,-734.59999 -311.3,734.59999" style={{strokeMiterlimit:10}} />
                </svg>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                Un restaurant al cor de Reus
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="#menu">Veure la carta</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="hover:bg-primary/80"
                  asChild
                >
                  <Link href="#contact">Contacta'ns</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="history" className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              La nostra història
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <p className="text-lg mb-6">
                  Segons explica Conrad Gallisà, l'Esparteria Gallisà es va
                  obrir el 1910. Inicialment, era gestionada pel seu avi i el
                  germà d'aquest. Als anys 20, el seu avi es va quedar amb la
                  botiga, mentre que el seu germà va obrir un magatzem d'adobs
                  al carrer Sant Llorenç.
                </p>
                <p className="text-lg mb-6">
                  Durant la Guerra Civil, una bomba va destruir l'establiment,
                  fet que va obligar l'avi de Gallisà a reconstruir-lo des dels
                  fonaments. Ell va dirigir la botiga fins a la seva mort el
                  1960. Llavors, el pare de Conrad Gallisà se'n va fer càrrec
                  fins a la seva jubilació.
                </p>
                <p className="text-lg">
                  Avui, Cal Gallisa és un referent gastronòmic a Reus, on es
                  fusiona la cuina tradicional catalana amb tocs contemporanis,
                  sempre utilitzant productes locals de la màxima qualitat.
                </p>
              </div>
              <div className="order-first md:order-last">
                <Image
                  src="/images/historia-gallisa.webp"
                  alt="Fotografia històrica de Cal Gallisa"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="espais" className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              Els nostres espais
            </h2>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12">
              Cal Gallisa disposa de dos espais diferenciats amb caràcter propi,
              cadascun amb el seu encant particular, perfectes per a diferents
              tipus de celebracions i esdeveniments.
            </p>

            <div className="mb-16">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">Sala Mercadal</h3>
                  <p className="text-lg mb-4">
                    La Sala Mercadal és el nostre espai principal, amb una
                    decoració elegant i acollidora que combina elements
                    tradicionals amb tocs moderns. Amb capacitat per a 60
                    comensals, és ideal per a celebracions familiars, dinars
                    d'empresa o qualsevol ocasió especial.
                  </p>
                  <p className="text-lg mb-4">
                    Aquesta sala es caracteritza per la seva lluminositat
                    natural durant el dia i per la seva atmosfera càlida i
                    íntima a la nit, gràcies a la seva acurada il·luminació.
                  </p>
                  <ul className="list-disc list-inside mb-6 text-muted-foreground">
                    <li>Capacitat: fins a 60 persones</li>
                    <li>
                      Ideal per a celebracions familiars i esdeveniments
                      d'empresa
                    </li>
                    <li>Climatització</li>
                    <li>Accés per a persones amb mobilitat reduïda</li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <Image
                    src="/images/mercadal.jpg"
                    alt="Sala Mercadal"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
              </div>

              <h4 className="text-xl font-semibold mb-4">
                Galeria Sala Mercadal
              </h4>
              <ImageGallery images={salaMercadalImages} title="Sala Mercadal" />
            </div>

            <div className="mb-16">
              <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">Sala Soterrani</h3>
                  <p className="text-lg mb-4">
                    La Sala Soterrani és un espai únic amb voltes de pedra del
                    segle XVIII que ofereix un ambient íntim i exclusiu. Amb
                    capacitat per a 30 comensals, és perfecta per a sopars
                    romàntics, reunions privades o celebracions especials en un
                    entorn amb història.
                  </p>
                  <p className="text-lg mb-4">
                    Les seves parets de pedra vista i la il·luminació tènue
                    creen una atmosfera màgica que transporta els comensals a
                    una altra època, mentre gaudeixen de la nostra cuina
                    contemporània.
                  </p>
                  <ul className="list-disc list-inside mb-6 text-muted-foreground">
                    <li>Capacitat: fins a 30 persones</li>
                    <li>Ideal per a sopars íntims i reunions privades</li>
                    <li>Climatització</li>
                    <li>Decoració amb elements històrics originals</li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <Image
                    src="/images/refugi.webp"
                    alt="Sala Soterrani"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
              </div>

              <h4 className="text-xl font-semibold mb-4">
                Galeria Sala Soterrani
              </h4>
              <ImageGallery images={salaSoterraImages} title="Sala Soterrani" />
            </div>

            <div className="bg-primary/10 rounded-lg p-8 text-center mt-12">
              <h3 className="text-2xl font-bold mb-4">Visita virtual</h3>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                Explora els nostres espais amb una visita virtual 360° i
                descobreix cada racó de Cal Gallisa abans de la teva visita.
              </p>
              <Button size="lg" className="gap-2" asChild>
                <a
                  href="/virtual"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Compass className="h-5 w-5" />
                  Iniciar visita virtual
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <VideoPlayer
              title="Descobreix Cal Gallisa"
              description="Un viatge gastronòmic per la nostra història i els nostres plats"
              videoUrl="https://www.youtube.com/embed/TktJhmXgoTs"
            />
          </div>
        </section>

        <section id="menu" className="py-16 md:py-24">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              La nostra carta
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-10">
              A Cal Gallisa oferim una selecció de plats tradicionals catalans
              elaborats amb productes frescos i de proximitat.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              <Card>
                <CardContent className="p-6">
                  <div className="aspect-square relative mb-4">
                    <Image
                      src="/images/entrants.webp"
                      alt="Entrants"
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Entrants</h3>
                  <p className="text-muted-foreground">
                    Deliciosos entrants per començar el teu àpat amb bon peu.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="aspect-square relative mb-4">
                    <Image
                      src="/images/principals.webp"
                      alt="Plats principals"
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Plats principals</h3>
                  <p className="text-muted-foreground">
                    Especialitats de la casa amb el sabor autèntic de la nostra
                    terra.
                  </p>
                </CardContent>
              </Card>
              <Card className="sm:col-span-2 lg:col-span-1">
                <CardContent className="p-6">
                  <div className="aspect-square relative mb-4">
                    <Image
                      src="/images/postres.webp"
                      alt="Postres"
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Postres</h3>
                  <p className="text-muted-foreground">
                    Dolços casolans per acabar amb un toc dolç.
                  </p>
                </CardContent>
              </Card>
            </div>
            <Button size="lg" asChild>
              <a
                href="https://app.cartamovil.com/calgallisa/14384/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <UtensilsCrossed className="mr-2 h-5 w-5" />
                Veure carta completa
              </a>
            </Button>
          </div>
        </section>

        <section id="location" className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              On som
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Troba'ns</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-2 mt-1 text-primary" />
                    <div>
                      <p className="font-medium">Cal Gallisa</p>
                      <p className="text-muted-foreground">
                        Plaça Mercadal, 12
                      </p>
                      <p className="text-muted-foreground">
                        43201 Reus, Tarragona
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-primary" />
                    <div>
                      <p className="font-medium">Horari</p>
                      <p className="text-muted-foreground">
                        Consulta l'horari d'obertura a Google
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild>
                    <a
                      href="/maps"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Com arribar
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="#contact">Contacta'ns</Link>
                  </Button>
                </div>
              </div>
              <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=1.10737681388855%2C41.15415336810691%2C1.1105659604072573%2C41.15561550390693&amp;layer=mapnik&amp;marker=41.154884440083485%2C1.1089713871479034"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Cal Gallisa Location (OpenStreetMap)"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Contacte
            </h2>
            <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Posa't en contacte</h3>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-primary" />
                  <a
                    href="tel:+34977773333"
                    className="hover:underline hover:text-primary"
                  >
                    +34 977 77 33 33
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-primary" />
                  <a
                    href="mailto:gallisareus@gmail.com"
                    className="hover:underline hover:text-primary"
                  >
                    gallisareus@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <img src="/icons/WhatsApp.svg.webp" alt="WhatsApp" className="h-5 w-5 mr-3 text-primary" />
                  <a
                    href="https://wa.me/34977773333"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-primary"
                  >
                    WhatsApp
                  </a>
                </div>
                <div className="pt-4">
                  <h4 className="font-bold mb-2">Segueix-nos</h4>
                  <div className="flex space-x-4">
                    <a
                      href="/facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                    >
                      <div className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                      </div>
                    </a>
                    <a
                      href="/instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <div className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <rect
                            x="2"
                            y="2"
                            width="20"
                            height="20"
                            rx="5"
                            ry="5"
                          />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-8 md:py-12 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Sobre nosaltres</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#history"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Història
                  </Link>
                </li>
                <li>
                  <Link
                    href="#espais"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Espais
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Gastronomia</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#menu"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Carta
                  </Link>
                </li>
                <li>
                  <Link
                    href="#espais"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Esdeveniments privats
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Visita'ns</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#location"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Com arribar
                  </Link>
                </li>
                <li>
                  <Link
                    href="#location"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Aparcament
                  </Link>
                </li>
                <li>
                  <Link
                    href="#location"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Accessibilitat
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/legal"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Privacitat
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Condicions
                  </Link>
                </li>
                <li>
                  <CookieSettingsFooterButton />
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Cal Gallisa. Tots els drets
              reservats.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
