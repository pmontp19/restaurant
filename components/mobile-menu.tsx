"use client"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { useState } from "react"

export default function MobileMenu() {
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetTitle className="sr-only" id="mobile-menu-title">Menú de navegació</SheetTitle>
        <nav className="flex flex-col gap-4 mt-8" aria-labelledby="mobile-menu-title">
          <Link
            href="#history"
            className="text-lg font-medium py-2 px-4 rounded-md hover:bg-muted hover:text-primary transition-colors"
            onClick={handleClose}
          >
            Història
          </Link>
          <Link
            href="#espais"
            className="text-lg font-medium py-2 px-4 rounded-md hover:bg-muted hover:text-primary transition-colors"
            onClick={handleClose}
          >
            Espais
          </Link>
          <Link
            href="#menu"
            className="text-lg font-medium py-2 px-4 rounded-md hover:bg-muted hover:text-primary transition-colors"
            onClick={handleClose}
          >
            Carta
          </Link>
          <Link
            href="#location"
            className="text-lg font-medium py-2 px-4 rounded-md hover:bg-muted hover:text-primary transition-colors"
            onClick={handleClose}
          >
            Ubicació
          </Link>
          <Link
            href="#contact"
            className="text-lg font-medium py-2 px-4 rounded-md hover:bg-muted hover:text-primary transition-colors"
            onClick={handleClose}
          >
            Contacte
          </Link>
          <div className="mt-4">
            <Button asChild className="w-full" onClick={handleClose}>
              <Link href="tel:+34977773333">Reserves</Link>
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
