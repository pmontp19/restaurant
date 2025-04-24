"use client"

import { useState, useEffect } from "react"
import { Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

type CookiePreferences = {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  preferences: boolean
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true and can't be changed
    analytics: false,
    marketing: false,
    preferences: false,
  })

  useEffect(() => {
    // Check if user has already made a choice
    const consentGiven = localStorage.getItem("cookieConsent")

    if (!consentGiven) {
      // If no consent has been given, show the banner
      setShowBanner(true)
    } else {
      // Load saved preferences
      try {
        const savedPreferences = JSON.parse(consentGiven)
        setPreferences(savedPreferences)
      } catch (e) {
        // If there's an error parsing, reset consent
        localStorage.removeItem("cookieConsent")
        setShowBanner(true)
      }
    }
  }, [])

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    }
    setPreferences(allAccepted)
    localStorage.setItem("cookieConsent", JSON.stringify(allAccepted))
    setShowBanner(false)
  }

  const rejectNonEssential = () => {
    const essentialOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    }
    setPreferences(essentialOnly)
    localStorage.setItem("cookieConsent", JSON.stringify(essentialOnly))
    setShowBanner(false)
  }

  const savePreferences = () => {
    localStorage.setItem("cookieConsent", JSON.stringify(preferences))
    setShowBanner(false)
    setShowSettings(false)
  }

  const handlePreferenceChange = (key: keyof CookiePreferences) => {
    if (key === "necessary") return // Can't change necessary cookies

    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const openSettings = () => {
    setShowSettings(true)
  }

  return (
    <>
      {/* Cookie Banner */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 p-4 md:p-6">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-2">Utilitzem cookies</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Utilitzem cookies per millorar la teva experiència de navegació, mostrar-te contingut personalitzat i
                  analitzar el nostre trànsit. Pots acceptar totes les cookies, rebutjar les no essencials o
                  personalitzar les teves preferències.
                </p>
                <Button variant="link" className="text-sm p-0 h-auto text-primary" onClick={openSettings}>
                  Més informació sobre les cookies
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                <Button variant="outline" onClick={rejectNonEssential} className="flex-1 sm:flex-initial">
                  Només essencials
                </Button>
                <Button variant="outline" onClick={openSettings} className="flex-1 sm:flex-initial">
                  Personalitzar
                </Button>
                <Button onClick={acceptAll} className="flex-1 sm:flex-initial">
                  Acceptar totes
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Settings Dialog */}
      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Preferències de cookies</DialogTitle>
            <DialogDescription>
              Configura les teves preferències de cookies. Les cookies essencials són necessàries per al funcionament
              bàsic del lloc web.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="necessary" className="font-medium">
                  Cookies essencials
                </Label>
                <p className="text-sm text-muted-foreground">
                  Necessàries per al funcionament del lloc web. No es poden desactivar.
                </p>
              </div>
              <Switch id="necessary" checked={true} disabled />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="analytics" className="font-medium">
                  Cookies analítiques
                </Label>
                <p className="text-sm text-muted-foreground">Ens ajuden a entendre com utilitzes el lloc web.</p>
              </div>
              <Switch
                id="analytics"
                checked={preferences.analytics}
                onCheckedChange={() => handlePreferenceChange("analytics")}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="marketing" className="font-medium">
                  Cookies de màrqueting
                </Label>
                <p className="text-sm text-muted-foreground">Utilitzades per mostrar-te anuncis rellevants.</p>
              </div>
              <Switch
                id="marketing"
                checked={preferences.marketing}
                onCheckedChange={() => handlePreferenceChange("marketing")}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="preferences" className="font-medium">
                  Cookies de preferències
                </Label>
                <p className="text-sm text-muted-foreground">
                  Recorden les teves preferències per millorar la teva experiència.
                </p>
              </div>
              <Switch
                id="preferences"
                checked={preferences.preferences}
                onCheckedChange={() => handlePreferenceChange("preferences")}
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowSettings(false)}>
              Cancel·lar
            </Button>
            <Button onClick={savePreferences}>Desar preferències</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Floating button to reopen cookie settings */}
      {!showBanner && (
        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-4 left-4 z-50 rounded-full shadow-md bg-white hover:bg-gray-100"
          onClick={openSettings}
          title="Configuració de cookies"
        >
          <Settings className="h-5 w-5" />
          <span className="sr-only">Configuració de cookies</span>
        </Button>
      )}
    </>
  )
}
