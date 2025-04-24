import React from "react"

const FloatingWhatsappButton = () => (
  <a
    href="https://api.whatsapp.com/send?phone=34653951416"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contactar per WhatsApp"
    className="fixed bottom-6 right-6 z-50 bg-transparent rounded-full p-1 flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-green-300"
  >
    <img
      src="/icons/WhatsApp.svg.webp"
      alt="WhatsApp"
      width={56}
      height={56}
      style={{ display: 'block' }}
    />
    <span className="sr-only">Contactar per WhatsApp</span>
  </a>
)

export default FloatingWhatsappButton
