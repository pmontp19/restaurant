import Image from "next/image"
import Link from "next/link"
import { MapPin, UtensilsCrossed, Clock, Phone, Mail, Compass } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import VideoPlayer from "@/components/video-player"
import MobileMenu from "@/components/mobile-menu"
import ImageGallery from "@/components/image-gallery"
import type { Metadata } from "next"

export const metadata: Metadata = {
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
        url: "/images/restaurant-exterior.jpg",
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
}

// Sample image data for galleries
const historicalImages = [
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Cal Gallisa als anys 50",
    width: 400,
    height: 300,
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "La cuina original",
    width: 400,
    height: 300,
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Celebració del 25è aniversari",
    width: 400,
    height: 300,
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Renovació del 2010",
    width: 400,
    height: 300,
  },
]

const salaMercadalImages = [
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Vista general de la Sala Mercadal",
    width: 400,
    height: 300,
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Detall de la decoració de la Sala Mercadal",
    width: 400,
    height: 300,
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Taula preparada per a un esdeveniment",
    width: 400,
    height: 300,
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Ambient nocturn a la Sala Mercadal",
    width: 400,
    height: 300,
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Detall arquitectònic de la Sala Mercadal",
    width: 400,
    height: 300,
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Celebració d'un esdeveniment a la Sala Mercadal",
    width: 400,
    height: 300,
  },
]

const salaSoterraImages = [
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Entrada a la Sala Soterrani",
    width: 400,
    height: 300,
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Voltes de pedra de la Sala Soterrani",
    width: 400,
    height: 300,
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Ambient íntim de la Sala Soterrani",
    width: 400,
    height: 300,
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Detall de la il·luminació de la Sala Soterrani",
    width: 400,
    height: 300,
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Taula per a grups a la Sala Soterrani",
    width: 400,
    height: 300,
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Vista general de la Sala Soterrani",
    width: 400,
    height: 300,
  },
]

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/placeholder.svg?height=40&width=40" alt="Cal Gallisa Logo" width={40} height={40} />
            <span className="text-xl font-bold">Cal Gallisa</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#history" className="text-sm font-medium hover:text-primary hover:underline underline-offset-4">
              Història
            </Link>
            <Link href="#espais" className="text-sm font-medium hover:text-primary hover:underline underline-offset-4">
              Espais
            </Link>
            <Link href="#menu" className="text-sm font-medium hover:text-primary hover:underline underline-offset-4">
              Carta
            </Link>
            <Link
              href="#location"
              className="text-sm font-medium hover:text-primary hover:underline underline-offset-4"
            >
              Ubicació
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary hover:underline underline-offset-4">
              Contacte
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild className="hidden md:flex">
              <Link href="tel:+34977773333">Reserves</Link>
            </Button>
            <MobileMenu />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <Image
            src="/placeholder.svg?height=600&width=1600"
            alt="Interior del restaurant Cal Gallisa"
            width={1600}
            height={600}
            className="w-full h-[70vh] object-cover"
            priority
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="container text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Cal Gallisa</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">Tradició i sabor al cor de Reus des de 1950</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="#menu">Veure la carta</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-primary/80" asChild>
                  <Link href="#contact">Contacta'ns</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="history" className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">La nostra història</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <p className="text-lg mb-6">
                  Cal Gallisa va obrir les seves portes l'any 1950 com un petit negoci familiar al centre històric de
                  Reus. L'edifici, que data del segle XVIII, ha estat testimoni de la història de la ciutat.
                </p>
                <p className="text-lg mb-6">
                  Durant més de 70 anys, hem mantingut viva la tradició culinària de la regió, adaptant-nos als nous
                  temps però sense perdre l'essència que ens caracteritza.
                </p>
                <p className="text-lg">
                  Avui, Cal Gallisa és un referent gastronòmic a Reus, on es fusiona la cuina tradicional catalana amb
                  tocs contemporanis, sempre utilitzant productes locals de la màxima qualitat.
                </p>
              </div>
              <div className="order-first md:order-last">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Fotografia històrica de Cal Gallisa"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-6">Galeria històrica</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {historicalImages.map((image, index) => (
                <div key={index} className="relative group overflow-hidden rounded-lg">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="w-full h-auto aspect-square object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                    <p className="text-white p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
                      {image.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline" className="mt-4">
                Veure més fotografies històriques
              </Button>
            </div>
          </div>
        </section>

        <section id="espais" className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Els nostres espais</h2>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12">
              Cal Gallisa disposa de dos espais diferenciats amb caràcter propi, cadascun amb el seu encant particular,
              perfectes per a diferents tipus de celebracions i esdeveniments.
            </p>

            <div className="mb-16">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">Sala Mercadal</h3>
                  <p className="text-lg mb-4">
                    La Sala Mercadal és el nostre espai principal, amb una decoració elegant i acollidora que combina
                    elements tradicionals amb tocs moderns. Amb capacitat per a 60 comensals, és ideal per a
                    celebracions familiars, dinars d'empresa o qualsevol ocasió especial.
                  </p>
                  <p className="text-lg mb-4">
                    Aquesta sala es caracteritza per la seva lluminositat natural durant el dia i per la seva atmosfera
                    càlida i íntima a la nit, gràcies a la seva acurada il·luminació.
                  </p>
                  <ul className="list-disc list-inside mb-6 text-muted-foreground">
                    <li>Capacitat: fins a 60 persones</li>
                    <li>Ideal per a celebracions familiars i esdeveniments d'empresa</li>
                    <li>Climatització</li>
                    <li>Accés per a persones amb mobilitat reduïda</li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Sala Mercadal"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
              </div>

              <h4 className="text-xl font-semibold mb-4">Galeria Sala Mercadal</h4>
              <ImageGallery images={salaMercadalImages} title="Sala Mercadal" />
            </div>

            <div className="mb-16">
              <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">Sala Soterrani</h3>
                  <p className="text-lg mb-4">
                    La Sala Soterrani és un espai únic amb voltes de pedra del segle XVIII que ofereix un ambient íntim
                    i exclusiu. Amb capacitat per a 30 comensals, és perfecta per a sopars romàntics, reunions privades
                    o celebracions especials en un entorn amb història.
                  </p>
                  <p className="text-lg mb-4">
                    Les seves parets de pedra vista i la il·luminació tènue creen una atmosfera màgica que transporta
                    els comensals a una altra època, mentre gaudeixen de la nostra cuina contemporània.
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
                    src="/placeholder.svg?height=400&width=600"
                    alt="Sala Soterrani"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
              </div>

              <h4 className="text-xl font-semibold mb-4">Galeria Sala Soterrani</h4>
              <ImageGallery images={salaSoterraImages} title="Sala Soterrani" />
            </div>

            <div className="bg-primary/10 rounded-lg p-8 text-center mt-12">
              <h3 className="text-2xl font-bold mb-4">Visita virtual</h3>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                Explora els nostres espais amb una visita virtual 360° i descobreix cada racó de Cal Gallisa abans de la
                teva visita.
              </p>
              <Button size="lg" className="gap-2" asChild>
                <a href="https://www.calgallisa.com/visita-virtual" target="_blank" rel="noopener noreferrer">
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
              videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder - replace with actual video
            />
          </div>
        </section>

        <section id="menu" className="py-16 md:py-24">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">La nostra carta</h2>
            <p className="text-lg max-w-2xl mx-auto mb-10">
              A Cal Gallisa oferim una selecció de plats tradicionals catalans elaborats amb productes frescos i de
              proximitat.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              <Card>
                <CardContent className="p-6">
                  <div className="aspect-square relative mb-4">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="Entrants"
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Entrants</h3>
                  <p className="text-muted-foreground">Deliciosos entrants per començar el teu àpat amb bon peu.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="aspect-square relative mb-4">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="Plats principals"
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Plats principals</h3>
                  <p className="text-muted-foreground">
                    Especialitats de la casa amb el sabor autèntic de la nostra terra.
                  </p>
                </CardContent>
              </Card>
              <Card className="sm:col-span-2 lg:col-span-1">
                <CardContent className="p-6">
                  <div className="aspect-square relative mb-4">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="Postres"
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Postres</h3>
                  <p className="text-muted-foreground">Dolços casolans per acabar amb un toc dolç.</p>
                </CardContent>
              </Card>
            </div>
            <Button size="lg" asChild>
              <a href="https://www.calgallisa.com/menu" target="_blank" rel="noopener noreferrer">
                <UtensilsCrossed className="mr-2 h-5 w-5" />
                Veure carta completa
              </a>
            </Button>
          </div>
        </section>

        <section id="location" className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">On som</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Troba'ns</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-2 mt-1 text-primary" />
                    <div>
                      <p className="font-medium">Cal Gallisa</p>
                      <p className="text-muted-foreground">Carrer de Sant Llorenç, 23</p>
                      <p className="text-muted-foreground">43201 Reus, Tarragona</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-primary" />
                    <div>
                      <p className="font-medium">Horari</p>
                      <p className="text-muted-foreground">Dilluns a diumenge: 13:00 - 16:00 i 20:00 - 23:00</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild>
                    <a href="https://maps.google.com/?q=Cal+Gallisa+Reus" target="_blank" rel="noopener noreferrer">
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.3731641326147!2d1.1066!3d41.1539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a15a7a1c3f8f8f%3A0x1a1a1a1a1a1a1a1a!2sCal%20Gallisa!5e0!3m2!1sen!2ses!4v1650000000000!5m2!1sen!2ses"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Cal Gallisa Location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contacte</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Posa't en contacte</h3>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-primary" />
                  <a href="tel:+34977773333" className="hover:underline hover:text-primary">
                    +34 977 77 33 33
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-primary" />
                  <a href="mailto:info@calgallisa.com" className="hover:underline hover:text-primary">
                    info@calgallisa.com
                  </a>
                </div>
                <div className="pt-4">
                  <h4 className="font-bold mb-2">Segueix-nos</h4>
                  <div className="flex space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
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
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
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
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                      </div>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
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
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Nom
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="El teu nom"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Correu electrònic
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="El teu correu"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Assumpte
                    </label>
                    <input
                      id="subject"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Motiu del contacte"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Missatge
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="El teu missatge..."
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Enviar missatge
                  </Button>
                </form>
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
                  <Link href="#history" className="text-sm text-muted-foreground hover:text-primary">
                    Història
                  </Link>
                </li>
                <li>
                  <Link href="#espais" className="text-sm text-muted-foreground hover:text-primary">
                    Espais
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Equip
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Gastronomia</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#menu" className="text-sm text-muted-foreground hover:text-primary">
                    Carta
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Esdeveniments privats
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Targetes regal
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Visita'ns</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#location" className="text-sm text-muted-foreground hover:text-primary">
                    Com arribar
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Aparcament
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Accessibilitat
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Privacitat
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Condicions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Cal Gallisa. Tots els drets reservats.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
