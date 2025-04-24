import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import CookieConsent from "@/components/cookie-consent"
import FloatingWhatsappButton from "@/components/floating-whatsapp-button"
import "@/app/globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "Cal Gallisa - Restaurant a Reus",
    template: "%s | Cal Gallisa",
  },
  description:
    "Cal Gallisa, restaurant tradicional amb història a Reus. Gaudeix de la nostra cuina local en un entorn únic.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ca" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
          <CookieConsent />
          <FloatingWhatsappButton />
        </ThemeProvider>
      </body>
    </html>
  )
}
