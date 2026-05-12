"use client"

import { LogIn } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const MIDNIGHT = "oklch(0.22 0.07 260)"
const MIDNIGHT_DEEP = "oklch(0.16 0.06 262)"

export function TopBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-10">
      <div className="absolute inset-0 bg-[oklch(0.985_0.004_95_/_0.7)] backdrop-blur-md border-b border-[oklch(0.22_0.07_260_/_0.08)]" />

      <span
        className="relative font-semibold text-lg tracking-[-0.04em] font-mono"
        style={{ color: MIDNIGHT_DEEP }}
      >
        Venqor
      </span>

      <Dialog>
        <DialogTrigger asChild>
          <button
            type="button"
            className="relative px-4 py-1.5 text-sm font-medium rounded-lg transition-colors duration-200"
            style={{
              color: MIDNIGHT,
              border: "1px solid oklch(0.22 0.07 260 / 0.2)",
              backgroundColor: "oklch(1 0 0 / 0.6)",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "oklch(0.22 0.07 260 / 0.45)"
              e.currentTarget.style.backgroundColor = "oklch(1 0 0 / 0.9)"
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "oklch(0.22 0.07 260 / 0.2)"
              e.currentTarget.style.backgroundColor = "oklch(1 0 0 / 0.6)"
            }}
          >
            Se connecter
          </button>
        </DialogTrigger>
        <DialogContent
          showCloseButton
          className="sm:max-w-[420px] gap-0 overflow-hidden p-0 shadow-2xl"
          style={{
            backgroundColor: "oklch(0.99 0.004 95)",
            border: "1px solid oklch(0.22 0.07 260 / 0.1)",
            color: MIDNIGHT_DEEP,
            boxShadow:
              "0 24px 60px -20px oklch(0.16 0.06 262 / 0.25), 0 8px 24px -12px oklch(0.16 0.06 262 / 0.15)",
          }}
        >
          <div
            className="h-1 w-full"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.45 0.13 258), oklch(0.22 0.07 260), oklch(0.45 0.13 258))",
            }}
          />
          <div className="relative px-6 pb-6 pt-5">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.5]"
              style={{
                backgroundImage:
                  "linear-gradient(oklch(0.22 0.07 260 / 0.04) 1px, transparent 1px), linear-gradient(90deg, oklch(0.22 0.07 260 / 0.04) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            <DialogHeader className="relative space-y-3 text-left">
              <div
                className="flex size-11 items-center justify-center rounded-xl"
                style={{
                  border: "1px solid oklch(0.22 0.07 260 / 0.12)",
                  backgroundColor: "oklch(0.22 0.07 260 / 0.06)",
                }}
              >
                <LogIn className="size-5" style={{ color: MIDNIGHT }} aria-hidden />
              </div>
              <DialogTitle
                className="text-xl font-semibold tracking-tight"
                style={{ color: MIDNIGHT_DEEP }}
              >
                Connexion à Venqor
              </DialogTitle>
              <DialogDescription
                className="text-[0.9375rem] leading-relaxed"
                style={{ color: "oklch(0.4 0.04 258)" }}
              >
                Accédez à votre espace sécurisé pour piloter vos contrats et vos encaissements.
              </DialogDescription>
            </DialogHeader>

            <form
              className="relative mt-6 space-y-4"
              onSubmit={e => {
                e.preventDefault()
              }}
            >
              <div className="space-y-2">
                <Label
                  htmlFor="login-email"
                  style={{ color: "oklch(0.3 0.05 258)" }}
                >
                  Adresse e-mail
                </Label>
                <Input
                  id="login-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="vous@domaine.com"
                  className="h-11"
                  style={{
                    border: "1px solid oklch(0.22 0.07 260 / 0.15)",
                    backgroundColor: "oklch(1 0 0 / 0.7)",
                    color: MIDNIGHT_DEEP,
                  }}
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <Label
                    htmlFor="login-password"
                    style={{ color: "oklch(0.3 0.05 258)" }}
                  >
                    Mot de passe
                  </Label>
                  <button
                    type="button"
                    className="text-xs font-medium transition-colors"
                    style={{ color: MIDNIGHT }}
                  >
                    Oublié ?
                  </button>
                </div>
                <Input
                  id="login-password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="••••••••"
                  className="h-11"
                  style={{
                    border: "1px solid oklch(0.22 0.07 260 / 0.15)",
                    backgroundColor: "oklch(1 0 0 / 0.7)",
                    color: MIDNIGHT_DEEP,
                  }}
                />
              </div>
              <Button
                type="submit"
                className="mt-2 h-11 w-full rounded-xl border-0 font-semibold text-white shadow-lg transition-all hover:opacity-95"
                style={{
                  backgroundColor: MIDNIGHT,
                  boxShadow:
                    "0 12px 24px -12px oklch(0.22 0.07 260 / 0.45), 0 4px 8px -2px oklch(0.16 0.06 262 / 0.25)",
                }}
              >
                Se connecter
              </Button>
            </form>

            <p
              className="relative mt-5 text-center text-xs"
              style={{ color: "oklch(0.5 0.04 258)" }}
            >
              Pas encore d&apos;accès ?{" "}
              <button
                type="button"
                className="font-medium transition-colors"
                style={{ color: MIDNIGHT }}
              >
                Demander une invitation
              </button>
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  )
}
