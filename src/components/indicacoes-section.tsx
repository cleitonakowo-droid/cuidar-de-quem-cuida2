import { ArrowUpRight, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function IndicacoesSection() {
  return (
    <section id="indicacoes">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-6 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Profissionais indicadas</p>
        <h2 className="mt-2 text-3xl md:text-4xl">Indicações da psicóloga</h2>

        <Tabs defaultValue="ilka" className="mt-6 md:mt-10">
          <TabsList className="h-auto w-full max-w-md flex-wrap">
            <TabsTrigger value="ilka" className="min-h-11 flex-1">Ilka Oliveira</TabsTrigger>
            <TabsTrigger value="ana-beatriz" className="min-h-11 flex-1">Ana Beatriz Barbosa</TabsTrigger>
          </TabsList>

          <TabsContent value="ilka" className="mt-6">
            <article className="max-w-2xl rounded-xl border bg-card p-6 md:p-8">
              <h3 className="text-2xl leading-snug">Ilka Oliveira</h3>
              <p className="mt-2 text-sm font-semibold text-primary">Psicóloga Clínica · CRP 06/231423</p>
              <p className="mt-1 text-sm font-semibold">Psicoterapia online</p>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Te auxílio a desenvolver habilidades e modificar comportamentos que interferem na sua qualidade de vida.
              </p>
              <p className="mt-3 italic text-muted-foreground">Acolhimento e acompanhamento baseado em ciência.</p>
              <p className="mt-5 rounded-lg border-l-4 border-primary bg-muted p-4 font-serif text-lg">
                Parceria com o Projeto Cuidar de quem cuida
              </p>
              <div className="mt-6 flex flex-col gap-3 border-t pt-6 sm:flex-row sm:flex-wrap">
                <Button asChild className="h-12 justify-start px-5">
                  <a href="https://wa.me/5511945816351" target="_blank" rel="noopener noreferrer">
                    <MessageCircle />WhatsApp · (11) 94581-6351<ArrowUpRight />
                  </a>
                </Button>
                <Button asChild variant="outline" className="h-12 justify-start px-5">
                  <a href="https://www.instagram.com/ilkaoliveirapsi" target="_blank" rel="noopener noreferrer">
                    <Instagram />@ilkaoliveirapsi<ArrowUpRight />
                  </a>
                </Button>
              </div>
            </article>
          </TabsContent>

          <TabsContent value="ana-beatriz" className="mt-6">
            <article className="max-w-3xl rounded-xl border bg-card p-6 md:p-8">
              <h3 className="text-2xl leading-snug">Dra. Ana Beatriz Barbosa</h3>
              <p className="mt-2 text-sm font-semibold text-primary">PodPeople · Burnout de professores</p>
              <iframe
                src="https://www.youtube-nocookie.com/embed/XceUMi1CowI"
                title="Burnout de Professores: Por Que a Educação Está Adoecendo? - PodPeople"
                className="mt-5 aspect-video w-full rounded-lg border-0 bg-muted"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <h4 className="mt-4 text-lg font-semibold leading-snug">Burnout de Professores: Por Que a Educação Está Adoecendo? - PodPeople</h4>
              <div className="mt-3 space-y-3 text-muted-foreground">
                <p>Você já parou pra pensar por que tantos professores estão esgotados, mas ninguém fala sobre isso?</p>
                <p>A Dra. Ana Beatriz fala sobre burnout na educação, o paralelo entre medicina e ensino no cuidado com vidas, e por que a formação de valores na infância é a base de tudo, inclusive da nossa própria saúde emocional quando adultos.</p>
                <p className="font-semibold text-foreground">Se você é professor ou trabalha com educação, esse papo é pra você.</p>
              </div>
              <div className="mt-6 border-t pt-6">
                <Button asChild variant="outline" className="h-12 justify-start px-5">
                  <a href="https://www.youtube.com/watch?v=XceUMi1CowI" target="_blank" rel="noopener noreferrer">
                    Assistir no YouTube<ArrowUpRight />
                  </a>
                </Button>
              </div>
            </article>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
