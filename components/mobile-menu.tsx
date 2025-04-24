"use client"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4 mt-8">
          <Link
            href="#history"
            className="text-lg font-medium py-2 px-4 rounded-md hover:bg-muted hover:text-primary transition-colors"
          >
            Història
          </Link>
          <Link
            href="#espais"
            className="text-lg font-medium py-2 px-4 rounded-md hover:bg-muted hover:text-primary transition-colors"
          >
            Espais
          </Link>
          <Link
            href="#menu"
            className="text-lg font-medium py-2 px-4 rounded-md hover:bg-muted hover:text-primary transition-colors"
          >
            Carta
          </Link>
          <Link
            href="#location"
            className="text-lg font-medium py-2 px-4 rounded-md hover:bg-muted hover:text-primary transition-colors"
          >
            Ubicació
          </Link>
          <Link
            href="#contact"
            className="text-lg font-medium py-2 px-4 rounded-md hover:bg-muted hover:text-primary transition-colors"
          >
            Contacte
          </Link>
          <div className="mt-4">
            <Button asChild className="w-full">
              <Link href="tel:+34977773333">Reserves</Link>
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
