"use client"

export default function CookieSettingsFooterButton() {
  return (
    <button
      type="button"
      className="text-sm text-muted-foreground hover:text-primary bg-transparent border-0 p-0 m-0 cursor-pointer"
      onClick={() => window.dispatchEvent(new Event("openCookieSettings"))}
    >
      Cookies
    </button>
  );
}
