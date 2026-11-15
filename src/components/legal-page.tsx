import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main className="min-h-screen bg-background px-5 py-8 text-foreground md:py-12">
      <div className="mx-auto max-w-3xl">
        <Button asChild variant="ghost" className="mb-8 px-0"><Link to="/" hash="creditos"><ArrowLeft />Cuidar de quem cuida</Link></Button>
        <h1 className="text-3xl md:text-4xl">{title}</h1>
        <p className="mt-5 border-l-4 border-primary bg-muted p-4 text-sm text-muted-foreground">Minuta para revisão pelas responsáveis pelo projeto antes da implantação. O contato do responsável pelo tratamento de dados ainda não foi informado.</p>
        <div className="mt-8 space-y-8 leading-relaxed [&_h2]:mb-3 [&_h2]:text-2xl [&_p]:text-muted-foreground">{children}</div>
      </div>
    </main>
  );
}