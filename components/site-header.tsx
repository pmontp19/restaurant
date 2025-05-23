import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MobileMenu from "@/components/mobile-menu";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/mini.png"
            alt="Cal Gallisa Logo"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
          />
          <span className="sr-only">Cal Gallisa</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="24"
            viewBox="700 0 5159.0996 992.162"
            fill="black"
            aria-label="Cal Gallisa logo"
            className="h-6 md:h-8 w-auto text-black"
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
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="#history"
            className="text-sm font-medium hover:text-primary hover:underline underline-offset-4"
          >
            Història
          </Link>
          <Link
            href="#espais"
            className="text-sm font-medium hover:text-primary hover:underline underline-offset-4"
          >
            Espais
          </Link>
          <Link
            href="#menu"
            className="text-sm font-medium hover:text-primary hover:underline underline-offset-4"
          >
            Carta
          </Link>
          <Link
            href="#location"
            className="text-sm font-medium hover:text-primary hover:underline underline-offset-4"
          >
            Ubicació
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:text-primary hover:underline underline-offset-4"
          >
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
  );
}
