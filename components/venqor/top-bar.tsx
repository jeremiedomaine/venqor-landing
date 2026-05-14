"use client"

import { LogIn } from "lucide-react"

import { VenqorLogo } from "@/components/venqor/venqor-logo"
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

export function TopBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-10">
      <div className="absolute inset-0 border-b border-slate-200/80 bg-white/75 backdrop-blur-md" />

      <div className="relative">
        <VenqorLogo size="navbar" />
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <button
            type="button"
            className="relative rounded-lg border border-slate-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-slate-900 shadow-sm transition-colors hover:border-primary/40 hover:bg-white"
          >
            Se connecter
          </button>
        </DialogTrigger>
        <DialogContent
          showCloseButton
          className="gap-0 overflow-hidden border-slate-200 bg-white p-0 text-slate-900 shadow-2xl sm:max-w-[420px]"
        >
          <div className="h-1 w-full bg-gradient-to-r from-indigo-400 via-primary to-indigo-600" />
          <div className="relative px-6 pb-6 pt-5">
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "linear-gradient(rgb(15 23 42 / 0.04) 1px, transparent 1px), linear-gradient(90deg, rgb(15 23 42 / 0.04) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            <DialogHeader className="relative space-y-3 text-left">
              <div className="flex size-11 items-center justify-center rounded-xl border border-slate-200 bg-primary/5">
                <LogIn className="size-5 text-primary" aria-hidden />
              </div>
              <DialogTitle className="text-xl font-semibold tracking-tight text-slate-900">
                Connexion à Venqor
              </DialogTitle>
              <DialogDescription className="text-[0.9375rem] leading-relaxed text-slate-600">
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
                <Label htmlFor="login-email" className="text-slate-700">
                  Adresse e-mail
                </Label>
                <Input
                  id="login-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="vous@domaine.com"
                  className="h-11 border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <Label htmlFor="login-password" className="text-slate-700">
                    Mot de passe
                  </Label>
                  <button
                    type="button"
                    className="text-xs font-medium text-primary transition-opacity hover:opacity-80"
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
                  className="h-11 border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400"
                />
              </div>
              <Button
                type="submit"
                className="mt-2 h-11 w-full rounded-xl font-semibold shadow-md"
              >
                Se connecter
              </Button>
            </form>

            <p className="relative mt-5 text-center text-xs text-slate-500">
              Pas encore d&apos;accès ?{" "}
              <button
                type="button"
                className="font-medium text-primary transition-opacity hover:opacity-80"
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
