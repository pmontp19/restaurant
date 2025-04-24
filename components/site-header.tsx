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
            src="/placeholder.svg?height=40&width=40"
            alt="Cal Gallisa Logo"
            width={40}
            height={40}
          />
          <span className="text-xl font-bold">Cal Gallisa</span>
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
