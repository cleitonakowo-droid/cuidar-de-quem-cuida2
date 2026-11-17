import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Headphones, Users, LifeBuoy, Lock, Ticket, GraduationCap, Mail, Menu, ArrowUpRight, Play, House, BarChart3, Instagram, MessageCircle, Linkedin, Phone, MapPin, ArrowRight, Check, ShieldAlert, Megaphone, Globe, Flower2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import banner from "@/assets/banner.jpg";
import ilkaFoto from "@/assets/ilka-oliveira.jpg";
import eduardaFoto from "@/assets/eduarda-azevedo.jpg";
import { CreditsSection } from "@/components/credits-section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cuidar de quem cuida — Bem-estar docente" },
      { name: "description", content: "Conteúdos educativos sobre bem-estar para professores da rede municipal de São Bernardo do Campo." },
      { property: "og:title", content: "Cuidar de quem cuida — Bem-estar docente" },
      { property: "og:description", content: "Podcasts e orientações sobre bem-estar para professores." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  ["Sobre", "#sobre"],
  ["Conteúdos", "#conteudos"],
  ["Vídeos", "#videos"],
  ["Indicação de psicólogas", "#psicologas"],
  ["Onde buscar ajuda", "#ajuda"],
  ["Denúncia", "#denuncia"],
  ["Assinatura", "#acesso"],
  ["Nossas pesquisas", "#pesquisas"],
  ["Referências", "#referencias"],
  ["Créditos", "#creditos"],
];

const abas = [
  { label: "Início", href: "#inicio", icon: House },
  { label: "Conteúdos", href: "#conteudos", icon: Headphones },
  { label: "Vídeos", href: "#videos", icon: Play },
  { label: "Psicólogas", href: "#psicologas", icon: Users },
  { label: "Ajuda", href: "#ajuda", icon: LifeBuoy },
  { label: "Pesquisas", href: "#pesquisas", icon: BarChart3 },
  { label: "Créditos", href: "#creditos", icon: GraduationCap },
];

function useSecaoAtiva() {
  const [ativa, setAtiva] = useState("#inicio");
  useEffect(() => {
    const secs = abas
      .map((a) => document.getElementById(a.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);
    const obs = new IntersectionObserver(
      (entradas) => {
        const vis = entradas
          .filter((e) => e.isIntersecting)
          .sort((x, y) => y.intersectionRatio - x.intersectionRatio)[0];
        if (vis) setAtiva(`#${vis.target.id}`);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.2, 0.5, 1] },
    );
    secs.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return ativa;
}

const videosSite = [
  {
    id: "8Fp4xcXtuO4",
    titulo: "Saúde mental dos professores, quem cuida de quem educa?",
    canal: "Mediação Psicologia Escolar e Educacional",
  },
  {
    id: "Eqjqwrm1mfA",
    titulo: "Burnout: como reconhecer os sinais?",
    canal: "Drauzio Varella",
  },
  {
    id: "TuGbn-9jK1g",
    titulo: "Síndrome de burnout | DrauzioCast",
    canal: "Drauzio Varella",
  },
  {
    id: "B9U0Xgx0HyE",
    titulo: "Cuidar de quem educa: quando e por que pedir ajuda | Episódio 1",
    canal: "Nova Escola",
  },
  {
    id: "7BAwIQP0kY4",
    titulo: "Cuidar de quem educa: projetos de saúde mental nas escolas | Episódio 2",
    canal: "Nova Escola",
  },
  {
    id: "k-VihRFMQDg",
    titulo: "Cuidar de quem educa: boas práticas para se inspirar | Episódio 3",
    canal: "Nova Escola",
  },
  {
    id: "4njRTan2k1w",
    titulo: "A Escola Está Adoecendo Professores e Alunos? | Ep. 047",
    canal: "PodPeople - Ana Beatriz Barbosa",
  },
  {
    id: "XceUMi1CowI",
    titulo: "Burnout de Professores: Por Que a Educação Está Adoecendo?",
    canal: "PodPeople - Ana Beatriz Barbosa",
  },
];

const livrosIndicados = [
  {
    t: "Adoecimento do professor da Educação Básica no Brasil",
    a: "Saulo Daniel Mendes Cunha, José de Andrade Matos Sobrinho, Aparecida Rosângela Silveira e Cristina Andrade Sampaio · Editora Unimontes, 2025",
    d: "E-book gratuito sobre o adoecimento docente na educação básica.",
    url: "https://www.editora.unimontes.br/adoecimento-do-professor-da-educacao-basica-no-brasil/",
  },
  {
    t: "A escola como ambiente de trabalho saudável para o professorado",
    a: "Rodrigo Manoel Giovanetti · Blucher Open Access",
    d: "Apoio social e fatores psicossociais no trabalho docente.",
    url: "https://www.blucher.com.br/a-escola-como-ambiente-de-trabalho-saudavel-para-o-professorado-9786555503531",
  },
  {
    t: "A saúde mental docente: um percurso profissional desafiador",
    a: "Clarice Bomdaruk e Maria Izabel Rodrigues Tognato · Edunespar, 2026",
    d: "A trajetória profissional de quem ensina e a saúde mental.",
    url: "https://editora.unespar.edu.br/assuntos/catalogo/apresentacao-dos-livros/copy5_of_livro%2017",
  },
  {
    t: "Cuidando do professor: estratégias para o autocuidado",
    a: "Fiocruz — Plataforma Educare",
    d: "Cartilha com estratégias práticas de autocuidado para professores.",
    url: "https://educare.fiocruz.br/resource/show?id=cj12-PvV",
  },
  {
    t: "A geração ansiosa",
    a: "Jonathan Haidt · Companhia das Letras",
    d: "Como a infância hiperconectada está causando uma epidemia de transtornos mentais.",
    url: "https://www.companhiadasletras.com.br/9788535938531-a-geracao-ansiosa-5873/p",
  },
  {
    t: "Sociedade do cansaço",
    a: "Byung-Chul Han · Editora Vozes",
    d: "Reflexões sobre o esgotamento na sociedade do desempenho.",
    url: "https://www.livrariavozes.com.br/sociedadedocansaco8532649963/p",
  },
  {
    t: "Não aguento mais não aguentar mais",
    a: "Anne Helen Petersen · HarperCollins Brasil",
    d: "Como os Millennials se tornaram a geração do burnout.",
    url: "https://harpercollins.com.br/products/nao-aguento-mais-nao-aguentar-mais-anne-helen-petersenrenata-correa",
  },
];

const podcasts = [
  {
    t: "Saúde mental dos professores",
    show: "Ame Sua Mente · Episódio 22",
    d: "Conversa sobre o desgaste de quem ensina.",
    url: "https://www.amesuamente.org.br/podcasts/episodio-22-saude-mental-dos-professores/",
  },
  {
    t: "Saúde mental dos professores",
    show: "Beabá da Educação · Episódio 14",
    d: "O cuidado emocional visto por quem está na escola.",
    url: "https://www.spreaker.com/episode/saude-mental-dos-professores-14-beaba-da-educacao--60313787",
  },
  {
    t: "Saúde mental e bem-estar do professor",
    show: "Teacher Talks · 4ª temporada, episódio 4",
    d: "Bem-estar de quem ensina, sem rodeios.",
    url: "https://portalconteudoaberto.com.br/podcast/teacher-talks-t04-e04-saude-mental-e-bem-estar-do-professor/",
  },
  {
    t: "Entre metas, aulas e afetos",
    show: "Inteligência Educacional · Episódio 35",
    d: "Saúde mental no ambiente escolar.",
    url: "https://podscan.fm/podcasts/podcast-inteligencia-educacional/episodes/episodio-35-entre-metas-aulas-e-afetos-saude-mental-no-ambiente-escolar",
  },
];

const fatoresDesgaste = [
  { label: "Indisciplina / Dificuldades de comportamento", pct: 23.4, n: 15 },
  { label: "Situações além das atribuições pedagógicas", pct: 15.6, n: 10 },
  { label: "Falta de reconhecimento / Valorização", pct: 9.4, n: 6 },
  { label: "Sobrecarga de trabalho", pct: 7.8, n: 5 },
  { label: "Conflitos / Relações interpessoais", pct: 6.2, n: 4 },
  { label: "Número elevado de alunos por turma", pct: 6.2, n: 4 },
  { label: "Trabalho não termina no expediente", pct: 6.2, n: 4 },
  { label: "Outros fatores mencionados", pct: 25, n: 16 },
];

const indicadoresPressao = [
  { label: "Impacto das condições na saúde/bem-estar", pct: 87.5 },
  { label: "Situações além das atribuições pedagógicas", pct: 79.7 },
  { label: "Burocracia/administração geram muito estresse", pct: 65.6 },
  { label: "Desgaste por relações interpessoais", pct: 62.5 },
  { label: "Carga de trabalho excessiva", pct: 59.4 },
];

function Section({ id, eyebrow, title, children, muted }: { id: string; eyebrow: string; title: string; children: React.ReactNode; muted?: boolean }) {
  return (
    <section id={id} className={muted ? "bg-muted" : ""}>
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-6 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>
        <h2 className="mt-2 text-3xl md:text-4xl">{title}</h2>
        <div className="mt-6 md:mt-10">{children}</div>
      </div>
    </section>
  );
}

function Card({ icon: Icon, title, children }: { icon: typeof BookOpen; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border bg-card p-6">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-lg">{title}</h3>
      <div className="mt-2 text-muted-foreground">{children}</div>
    </div>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const secaoAtiva = useSecaoAtiva();
  return (
    <div className="min-h-screen pb-[calc(4.5rem+env(safe-area-inset-bottom))] lg:pb-0">
      <header className="sticky top-0 z-20 border-b bg-background/90 backdrop-blur">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 py-3 sm:flex sm:justify-between md:px-6 md:py-4">
          <a href="#" className="min-w-0 font-serif text-lg text-primary md:text-xl">Cuidar de quem cuida</a>
          <nav aria-label="Navegação principal" className="hidden flex-1 flex-wrap justify-end gap-x-4 gap-y-2 text-sm lg:flex">
            {nav.map(([l, h]) => (
              <a key={h} href={h} className="text-muted-foreground hover:text-foreground">{l}</a>
            ))}
          </nav>
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-11 w-11 shrink-0 lg:hidden" aria-label="Abrir menu" title="Menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[min(85vw,360px)] overflow-y-auto overscroll-contain px-5 pt-14" aria-describedby="menu-description">
              <SheetTitle className="font-serif text-2xl text-primary">Cuidar de quem cuida</SheetTitle>
              <SheetDescription id="menu-description" className="mt-2">Bem-estar docente</SheetDescription>
              <nav aria-label="Menu de opções" className="mt-8 flex flex-col divide-y">
                {nav.map(([label, href]) => (
                  <Button key={href} asChild variant="ghost" className="h-auto min-h-14 justify-between whitespace-normal rounded-none px-0 text-left text-base hover:bg-transparent hover:text-primary" onClick={() => setMenuOpen(false)}>
                    <a href={href}>{label}<ArrowUpRight aria-hidden="true" /></a>
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <aside aria-label="Vouchers promocionais" className="border-b bg-secondary text-secondary-foreground">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-2 md:px-6">
          <div className="flex min-w-0 items-center gap-2 text-sm"><Ticket className="h-5 w-5 shrink-0" aria-hidden="true" /><p><strong>Vouchers promocionais</strong><span className="hidden sm:inline"> · Descontos em yoga e atendimento terapêutico</span></p></div>
          <Button asChild variant="link" className="h-auto min-h-11 shrink-0 px-0 text-secondary-foreground"><a href="#acesso">Saiba mais<ArrowRight aria-hidden="true" /></a></Button>
        </div>
      </aside>

      <section id="inicio" className="relative isolate overflow-hidden md:flex md:min-h-[640px] md:items-end">
        <div className="relative md:absolute md:inset-0 md:z-0">
          <img
            src={banner}
            alt="Professora sorrindo e sendo acolhida por uma colega, em um ambiente escolar aconchegante"
            width={1720}
            height={860}
            className="w-full object-cover md:h-full"
          />
          <div className="absolute inset-0 hidden bg-gradient-to-t from-foreground/85 via-foreground/40 to-foreground/10 md:block" />
        </div>
        <div className="relative mx-auto w-full max-w-6xl bg-foreground px-5 pb-9 pt-7 text-background md:bg-transparent md:px-6 md:pb-20 md:pt-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-background/80">Bem-estar docente</p>
          <h1 className="mt-3 max-w-2xl text-3xl leading-tight md:text-5xl">Quem cuida da educação também merece cuidado.</h1>
          <p className="mt-5 max-w-xl text-lg text-background/90">
            Conteúdos educativos e informações sobre bem-estar docente para professores da rede municipal de São Bernardo do Campo.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="h-12 bg-background px-5 font-semibold text-primary hover:bg-card"><a href="#conteudos">Explorar conteúdos</a></Button>
            <Button asChild variant="outline" className="h-12 border-background/60 bg-transparent px-5 font-semibold text-background hover:bg-background/10 hover:text-background"><a href="#ajuda">Onde buscar ajuda</a></Button>
          </div>
        </div>
      </section>

      <section aria-labelledby="convite-assinatura" className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-6 md:py-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold">ASSINATURA · EM BREVE</p>
            <h2 id="convite-assinatura" className="mt-2 text-2xl leading-snug md:text-3xl">Mais tempo para cuidar de você.</h2>
            <p className="mt-3 text-primary-foreground/90">Conheça a proposta de conteúdos aprofundados e vouchers promocionais para apoiar seu bem-estar docente.</p>
          </div>
          <Button asChild variant="secondary" className="h-auto min-h-12 shrink-0 whitespace-normal px-5"><a href="#acesso">Conhecer a assinatura<ArrowRight aria-hidden="true" /></a></Button>
        </div>
      </section>

      <Section id="sobre" eyebrow="O projeto" title="Por que este site existe" muted>
        <div className="grid gap-8 md:grid-cols-2 text-lg text-muted-foreground">
          <p>A alta demanda, a sobrecarga e o estresse do cotidiano escolar contribuem para o desgaste emocional de muitos professores da rede municipal de São Bernardo do Campo.</p>
          <p>Este site reúne podcasts e caminhos de cuidado para apoiar o professor na compreensão do próprio bem-estar. Ele não substitui acompanhamento profissional.</p>
        </div>
      </Section>

      <Section id="conteudos" eyebrow="Conteúdos educativos" title="Um momento para você">
        <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-muted-foreground">
          <p>Você, professor, sabe como a rotina escolar pode ser cansativa e desafiadora.</p>
          <p>São muitas aulas, provas para corrigir e responsabilidades que exigem sua dedicação.</p>
          <p>Com tantas tarefas, é comum sentir cansaço físico e desgaste emocional.</p>
          <p>Por isso, é importante reconhecer seus limites e cuidar da sua saúde mental.</p>
          <p>Você merece respeito, valorização e momentos de descanso.</p>
          <p className="font-semibold text-foreground">Lembre-se: cuidar de si mesmo também é uma forma de cuidar da educação!</p>
        </div>
        <h3 className="mb-5 mt-10 flex items-center gap-2 text-2xl"><Headphones className="h-5 w-5 text-primary" /> Podcasts</h3>
        <ul className="divide-y overflow-hidden rounded-xl border bg-card">
          {podcasts.map((p) => (
            <li key={p.url}>
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="flex items-start justify-between gap-3 p-5 transition-colors hover:bg-secondary/60">
                <span className="min-w-0">
                  <span className="block font-semibold">{p.t}</span>
                  <span className="block text-sm text-muted-foreground">{p.show}</span>
                  <span className="mt-1 block text-sm text-muted-foreground">{p.d}</span>
                  <span className="mt-2 inline-block text-sm font-semibold text-primary">Ouvir o episódio</span>
                </span>
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-primary" />
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="videos" eyebrow="Para assistir" title="Vídeos">
        <div className="grid gap-8 md:grid-cols-2">
          {videosSite.map((v) => (
            <div key={v.id} className="min-w-0">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${v.id}`}
                title={v.titulo}
                className="aspect-video w-full rounded-lg border-0 bg-muted"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <h4 className="mt-3 font-semibold leading-snug">{v.titulo}</h4>
              <p className="text-sm text-muted-foreground">{v.canal}</p>
              <Button asChild variant="link" className="mt-1 h-11 px-0"><a href={`https://www.youtube.com/watch?v=${v.id}`} target="_blank" rel="noopener noreferrer">Assistir no YouTube<ArrowUpRight /></a></Button>
            </div>
          ))}
        </div>
        <h3 className="mb-5 mt-12 flex items-center gap-2 text-2xl"><BookOpen className="h-5 w-5 text-primary" /> Livros</h3>
        <ul className="divide-y overflow-hidden rounded-xl border bg-card">
          {livrosIndicados.map((l) => (
            <li key={l.url}>
              <a href={l.url} target="_blank" rel="noopener noreferrer" className="flex items-start justify-between gap-3 p-5 transition-colors hover:bg-secondary/60">
                <span className="min-w-0">
                  <span className="block font-semibold">{l.t}</span>
                  <span className="block text-sm text-muted-foreground">{l.a}</span>
                  <span className="mt-1 block text-sm text-muted-foreground">{l.d}</span>
                  <span className="mt-2 inline-block text-sm font-semibold text-primary">Ver o livro</span>
                </span>
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-primary" />
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="psicologas" eyebrow="Cuidado profissional" title="Indicação de psicólogas" muted>
        <div className="grid gap-10 md:grid-cols-2">
          <article className="border-t border-border pt-6">
            <img src={ilkaFoto} alt="Ilka Oliveira, psicóloga clínica" width={236} height={236} className="mb-6 aspect-square w-48 rounded-lg object-cover" loading="lazy" />
            <h3 className="text-2xl">Ilka Oliveira</h3>
            <p className="mt-2 text-sm text-muted-foreground">CRP 06/231423 · Psicóloga Clínica</p>
            <p className="mt-2 font-semibold text-primary">Psicoterapia online</p>
            <p className="mt-3 text-sm font-semibold">Linha de trabalho: abordagem comportamental, com foco na modificação de comportamentos e desenvolvimento de habilidades.</p>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">Te auxilio a desenvolver habilidades e modificar comportamentos que interferem na sua qualidade de vida.</p>
            <p className="mt-3 italic text-muted-foreground">Acolhimento e acompanhamento baseado em ciência.</p>
            <p className="mt-5 text-sm font-semibold">Parceria com o Projeto Cuidar de quem cuida</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="h-auto min-h-11 whitespace-normal text-left"><a href="https://wa.me/5511945816351" target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" />WhatsApp · (11) 94581-6351<ArrowUpRight aria-hidden="true" /></a></Button>
              <Button asChild variant="outline" className="h-auto min-h-11 whitespace-normal text-left"><a href="https://www.instagram.com/ilkaoliveirapsi/" target="_blank" rel="noopener noreferrer"><Instagram aria-hidden="true" />@ilkaoliveirapsi<ArrowUpRight aria-hidden="true" /></a></Button>
            </div>
          </article>
          <article className="border-t border-border pt-6">
            <img src={eduardaFoto} alt="Eduarda Azevedo, psicóloga clínica" width={236} height={236} className="mb-6 aspect-square w-48 rounded-lg object-cover" loading="lazy" />
            <h3 className="text-2xl">Eduarda Azevedo</h3>
            <p className="mt-2 text-sm text-muted-foreground">CRP 06/233674 · Psicóloga Clínica</p>
            <p className="mt-2 font-semibold text-primary">Especialização em Análise do Comportamento Aplicada (ABA) — PUC</p>
            <p className="mt-3 text-sm font-semibold">Linha de trabalho: abordagem comportamental, baseada em evidências científicas.</p>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">Um espaço de escuta para quem também precisa de cuidado.</p>
            <p className="mt-3 italic text-muted-foreground">Atendimento individual, on-line ou presencial, conforme sua necessidade.</p>
            <p className="mt-5 text-sm font-semibold">Parceria com o Projeto Cuidar de quem cuida</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="h-auto min-h-11 whitespace-normal text-left"><a href="https://wa.me/5511914171997" target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" />WhatsApp · (11) 91417-1997<ArrowUpRight aria-hidden="true" /></a></Button>
              <Button asChild variant="outline" className="h-auto min-h-11 whitespace-normal text-left"><a href="https://www.instagram.com/psi.azevedo/" target="_blank" rel="noopener noreferrer"><Instagram aria-hidden="true" />@psi.azevedo<ArrowUpRight aria-hidden="true" /></a></Button>
              <Button asChild variant="outline" className="h-auto min-h-11 whitespace-normal text-left"><a href="https://www.linkedin.com/in/eduarda-azevedo-7235b6231" target="_blank" rel="noopener noreferrer"><Linkedin aria-hidden="true" />Eduarda Azevedo · LinkedIn<ArrowUpRight aria-hidden="true" /></a></Button>
            </div>
          </article>
        </div>
      </Section>

      <Section id="ajuda" eyebrow="Em momentos de crise" title="Onde procurar ajuda">
        <div className="grid gap-6 md:grid-cols-3">
          <Card icon={LifeBuoy} title="CVV — 188">
            <p>Apoio emocional gratuito e sigiloso, 24 horas por telefone. O chat tem horários próprios no site do CVV.</p>
            <div className="mt-5 flex flex-col items-start gap-2">
              <Button asChild><a href="tel:188"><Phone aria-hidden="true" />Ligar 188</a></Button>
              <Button asChild variant="link" className="h-auto min-h-11 whitespace-normal px-0 text-left"><a href="https://cvv.org.br/ligue-188-3/" target="_blank" rel="noopener noreferrer">Atendimento por telefone<ArrowUpRight aria-hidden="true" /></a></Button>
              <Button asChild variant="link" className="h-auto min-h-11 whitespace-normal px-0 text-left"><a href="https://cvv.org.br/chat/" target="_blank" rel="noopener noreferrer">Atendimento por chat<ArrowUpRight aria-hidden="true" /></a></Button>
            </div>
          </Card>
          <Card icon={LifeBuoy} title="SAMU — 192">
            <p>Em situações de emergência ou risco imediato à vida, ligue gratuitamente para o SAMU. O atendimento funciona 24 horas.</p>
            <div className="mt-5 flex flex-col items-start gap-2">
              <Button asChild><a href="tel:192"><Phone aria-hidden="true" />Ligar 192</a></Button>
              <Button asChild variant="link" className="h-auto min-h-11 whitespace-normal px-0 text-left"><a href="https://www.gov.br/saude/pt-br/composicao/saes/samu-192" target="_blank" rel="noopener noreferrer">Informações sobre o SAMU<ArrowUpRight aria-hidden="true" /></a></Button>
            </div>
          </Card>
          <Card icon={LifeBuoy} title="CAPS — Centros de Atenção Psicossocial">
            <p>Atendimento em saúde mental pelo SUS. Os CAPS acolhem casos graves e persistentes, inclusive por procura espontânea.</p>
            <div className="mt-5 flex flex-col items-start gap-2">
              <Button asChild variant="link" className="h-auto min-h-11 whitespace-normal px-0 text-left"><a href="https://saobernardo.sp.gov.br/web/sbc/caps" target="_blank" rel="noopener noreferrer">CAPS de São Bernardo do Campo<ArrowUpRight aria-hidden="true" /></a></Button>
              <Button asChild variant="link" className="h-auto min-h-11 whitespace-normal px-0 text-left"><a href="https://www.gov.br/saude/pt-br/composicao/saes/desmad/raps/caps/caps" target="_blank" rel="noopener noreferrer">Sobre os CAPS — Ministério da Saúde<ArrowUpRight aria-hidden="true" /></a></Button>
            </div>
          </Card>
        </div>
        <div className="mt-8 border-t pt-6">
          <h3 className="flex items-center gap-2 text-xl"><MapPin className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />Endereço de atendimento em São Bernardo</h3>
          <p className="mt-3 font-semibold">CAPS III Centro e Pronto Atendimento de Psiquiatria</p>
          <address className="mt-1 not-italic text-muted-foreground">Rua Pedro Jacobucci, 470 — Vila Euclides, São Bernardo do Campo — SP.</address>
          <div className="mt-3 flex flex-col items-start gap-2 sm:flex-row sm:flex-wrap sm:gap-5">
            <Button asChild variant="outline" className="h-auto min-h-11 whitespace-normal"><a href="tel:+551126306513"><Phone aria-hidden="true" />CAPS · (11) 2630-6513</a></Button>
            <Button asChild variant="outline" className="h-auto min-h-11 whitespace-normal"><a href="tel:+551126306506"><Phone aria-hidden="true" />Pronto atendimento · (11) 2630-6506</a></Button>
            <Button asChild variant="link" className="h-auto min-h-11 whitespace-normal px-0"><a href="https://www.google.com/maps/search/?api=1&query=Rua+Pedro+Jacobucci+470+Sao+Bernardo+do+Campo" target="_blank" rel="noopener noreferrer"><MapPin aria-hidden="true" />Ver no mapa<ArrowUpRight aria-hidden="true" /></a></Button>
          </div>
          <Button asChild variant="link" className="mt-2 h-auto min-h-11 whitespace-normal px-0 text-left"><a href="https://www.saobernardo.sp.gov.br/saude-mental-indice" target="_blank" rel="noopener noreferrer">Endereços e contatos oficiais da Prefeitura<ArrowUpRight aria-hidden="true" /></a></Button>
        </div>
        <Button asChild variant="link" className="mt-6 h-auto min-h-11 whitespace-normal px-0 text-left"><a href="#psicologas">Indicação de psicólogas<ArrowUpRight aria-hidden="true" /></a></Button>
      </Section>

      <Section id="denuncia" eyebrow="Canal de denúncia e orientação" title="Assédio no ambiente escolar: como buscar ajuda" muted>
        <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Nenhum profissional da educação deve conviver com assédio moral, sexual ou qualquer forma de violência no ambiente de trabalho. Os canais abaixo são oficiais, gratuitos e permitem registrar denúncias, pedir orientação e acompanhar o andamento do caso — inclusive de forma anônima, quando a ouvidoria permitir.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card icon={Megaphone} title="Ouvidoria do Estado de São Paulo">
            <p>Canal oficial para denúncias, reclamações e manifestações sobre órgãos públicos estaduais, incluindo situações de assédio no ambiente escolar.</p>
            <Button asChild variant="link" className="mt-5 h-auto min-h-11 whitespace-normal px-0 text-left"><a href="https://fala.sp.gov.br/" target="_blank" rel="noopener noreferrer">Acessar a Ouvidoria SP — fala.sp.gov.br<ArrowUpRight aria-hidden="true" /></a></Button>
          </Card>
          <Card icon={ShieldAlert} title="Ouvidoria Municipal de São Bernardo do Campo">
            <p>Acesso direto para registrar reclamações, denúncias e manifestações relacionadas à rede municipal de educação de São Bernardo do Campo.</p>
            <Button asChild variant="link" className="mt-5 h-auto min-h-11 whitespace-normal px-0 text-left"><a href="https://www.saobernardo.sp.gov.br/ouvidoria" target="_blank" rel="noopener noreferrer">Acessar a Ouvidoria Municipal<ArrowUpRight aria-hidden="true" /></a></Button>
          </Card>
        </div>
        <div className="mt-8 flex items-start gap-3 border-t pt-6">
          <LifeBuoy className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
          <p className="text-muted-foreground">Precisando de apoio emocional enquanto formaliza uma denúncia? O <a href="#ajuda" className="font-semibold text-primary underline-offset-2 hover:underline">CVV (188)</a> e os <a href="#ajuda" className="font-semibold text-primary underline-offset-2 hover:underline">CAPS</a> oferecem escuta e acompanhamento gratuitos.</p>
        </div>
      </Section>

      <Section id="acesso" eyebrow="Assinatura" title="Conteúdo ampliado e vouchers de bem-estar" muted>
        <p className="max-w-3xl text-lg text-muted-foreground">Podcasts, vídeos e caminhos de ajuda continuam gratuitos. A assinatura reúne materiais mais aprofundados e descontos exclusivos para quem dedica o dia a cuidar dos outros.</p>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="grid gap-6 sm:grid-cols-2">
            <Card icon={BookOpen} title="Guias de autocuidado"><p>Descanso, limites no trabalho e organização da rotina docente.</p></Card>
            <Card icon={Play} title="Vídeos e encontros"><p>Aulas gravadas e conversas sobre estresse e bem-estar na escola.</p></Card>
          </div>
          <div className="border-l-4 border-accent pl-5">
            <Ticket className="h-8 w-8 text-primary" aria-hidden="true" />
            <h3 className="mt-4 text-2xl">Seu cuidado merece espaço na rotina.</h3>
            <div className="mt-6 flex flex-col gap-6 sm:flex-row">
              <div className="flex flex-1 flex-col gap-2">
                <Button className="h-auto min-h-12 w-full whitespace-normal">Yoga — R$ 30,00 de desconto</Button>
                <p className="text-sm text-muted-foreground">Aula de yoga orientada por profissional especializado.</p>
              </div>
              <div className="flex flex-1 flex-col gap-2">
                <Button className="h-auto min-h-12 w-full whitespace-normal">Atendimento terapêutico — R$ 45,00 de desconto</Button>
                <p className="text-sm text-muted-foreground">Atendimento individual de acolhimento e bem-estar.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex items-start gap-3 border-t pt-6"><Lock className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" /><p className="text-muted-foreground">Materiais e vouchers acima são uma proposta; planos, preços e condições de resgate serão divulgados. Não há contratação ou cobrança nesta versão.</p></div>
      </Section>

      <Section id="yoga" eyebrow="Para você" title="Aula de Yoga — um momento para cuidar de você" muted>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-lg leading-relaxed text-muted-foreground">Permita-se desacelerar, respirar e reconectar-se consigo mesmo.</p>
            <p className="mt-4 text-muted-foreground">A aula de yoga será conduzida por profissional especializado, proporcionando um momento de relaxamento, alongamento, consciência corporal e equilíbrio entre corpo e mente.</p>
            <p className="mt-4 text-muted-foreground">Uma oportunidade para deixar as preocupações do dia a dia de lado e dedicar um tempo ao seu bem-estar.</p>
            <p className="mt-4 italic text-primary">Porque quem dedica tanto tempo a cuidar do outro também merece cuidar de si!</p>
          </div>
          <div className="mx-auto w-full max-w-sm">
            <div className="aspect-square overflow-hidden rounded-2xl border shadow-sm">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/j7rKKpwdXNE"
                title="Vídeo de exemplo — aula de yoga guiada"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="mt-3 text-center text-sm text-muted-foreground">Vídeo de exemplo: aula guiada de yoga para iniciantes.</p>
          </div>
        </div>
      </Section>

      <Section id="florais" eyebrow="Práticas complementares" title="Florais naturais — momento de acolhimento e relaxamento">
        <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">Um convite para desacelerar e olhar com carinho para si mesmo. Os florais são apresentados como uma prática complementar de bem-estar e autocuidado, proporcionando um momento de reflexão, acolhimento e conexão interior.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Card icon={Flower2} title="Floral de Bach — Rescue Remedy"><p>Mistura tradicional de essências florais, associada ao acolhimento em momentos de tensão e agitação emocional.</p></Card>
          <Card icon={Flower2} title="Floral de Bach — White Chestnut"><p>Essência tradicionalmente associada a pensamentos repetitivos e à busca por tranquilidade mental.</p></Card>
          <Card icon={Flower2} title="Floral de Bach — Impatiens"><p>Essência tradicionalmente associada à impaciência, inquietação e necessidade de desacelerar.</p></Card>
        </div>
      </Section>

      <Section id="pesquisas" eyebrow="Nossas pesquisas" title="Saúde Mental e Bem-Estar Docente na Rede Municipal de São Bernardo do Campo (SP)">
        <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-muted-foreground">
          <p>Este estudo analisou a percepção de docentes da rede municipal sobre como as condições de trabalho e as demandas do cotidiano escolar impactam seu bem-estar e saúde mental.</p>
          <p>Os resultados revelam um cenário de alta exigência relacional e burocrática: a maioria dos professores precisa lidar constantemente com situações que extrapolam suas funções pedagógicas e percebe forte impacto direto dessas condições sobre a sua saúde física e emocional.</p>
          <p>O estudo conclui que o desgaste emocional tem caráter multifatorial (unindo carga de trabalho, indisciplina e burocracia) e aponta a urgência de fortalecer redes de apoio institucional e políticas integradas entre Educação e Saúde.</p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col rounded-xl border bg-card p-6">
            <span className="w-fit rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-secondary-foreground">Dados da pesquisa</span>
            <h3 className="mt-4 text-xl leading-snug">Principais fatores apontados como fontes de desgaste emocional</h3>
            <p className="mt-1 text-sm text-muted-foreground">Percepções dos docentes sobre o principal fator que afeta a saúde mental (64 participantes).</p>
            <ul className="mt-6 space-y-4">
              {fatoresDesgaste.map((f) => (
                <li key={f.label}>
                  <div className="flex items-baseline justify-between gap-3 text-sm">
                    <span className="font-medium">{f.label}</span>
                    <span className="shrink-0 font-semibold text-primary">{f.pct.toLocaleString("pt-BR", { minimumFractionDigits: 1 })}% (n={f.n})</span>
                  </div>
                  <div className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-muted">
                    <div className="h-full rounded-full bg-primary" style={{ width: `${(f.pct / 25) * 100}%` }} aria-hidden="true" />
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t pt-4 text-xs text-muted-foreground">Fonte: dados da pesquisa (2026) — Tabela 3 do artigo. Amostra: n=64.</p>
          </div>
          <div className="flex flex-col rounded-xl border bg-card p-6">
            <span className="w-fit rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-secondary-foreground">Pesquisa científica · SBC</span>
            <h3 className="mt-4 text-xl leading-snug">Indicadores de pressão no trabalho docente</h3>
            <p className="mt-1 text-sm text-muted-foreground">Percentual de professores que relatam cada fator de estresse/pressão no cotidiano escolar (n=64).</p>
            <ul className="mt-6 space-y-4">
              {indicadoresPressao.map((f) => (
                <li key={f.label}>
                  <div className="flex items-baseline justify-between gap-3 text-sm">
                    <span className="font-medium">{f.label}</span>
                    <span className="shrink-0 font-semibold text-primary">{f.pct.toLocaleString("pt-BR", { minimumFractionDigits: 1 })}%</span>
                  </div>
                  <div className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-muted">
                    <div className="h-full rounded-full bg-primary" style={{ width: `${f.pct}%` }} aria-hidden="true" />
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t pt-4 text-xs text-muted-foreground">Fonte: pesquisa de pós-graduação (São Bernardo do Campo — SP). Valores expressos em porcentagem (%).</p>
          </div>
        </div>
      </Section>

      <Section id="referencias" eyebrow="Base acadêmica" title="Referências e autoria">
        <div className="grid gap-6 md:grid-cols-2">
          <Card icon={GraduationCap} title="Autoria">Projeto desenvolvido no curso de pós-graduação em Gestão Educacional.</Card>
          <Card icon={BookOpen} title="Referência">NÓVOA, António. <em>Professores: imagens do futuro presente</em>. Lisboa: Educa, 2009.</Card>
          <Card icon={BookOpen} title="Artigo — SciELO">SIMÕES, Elaine Cristina; CARDOSO, Maria Regina Alves. Violência contra professores da rede pública e esgotamento profissional. <em>Cadernos de Saúde Pública</em>, v. 27, n. 3, 2022.</Card>
          <Card icon={BookOpen} title="Artigo — Educação Pública">FALCÃO, Francisca Thanísia de Freitas; GAMEIRO, Danielle Campos Macedo; FREITAS, Kerginaldo Luiz de. Precarização do trabalho docente: impactos na saúde mental do professor da Educação Básica. <em>Revista Educação Pública</em>, Rio de Janeiro, v. 26, n. 22, 10 jun. 2026.</Card>
        </div>
        <div className="mt-8 rounded-xl border-l-4 border-accent bg-muted p-6 text-muted-foreground">
          Este é um protótipo acadêmico. Testes com usuários e implantação são etapas futuras.
        </div>
        <div className="mt-8 border-t pt-6">
          <h3 className="text-xl">Legislação — proteção de dados</h3>
          <Button asChild variant="link" className="mt-2 h-auto min-h-11 whitespace-normal px-0 text-left"><a href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm" target="_blank" rel="noopener noreferrer">Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais (LGPD)<ArrowUpRight className="shrink-0" /></a></Button>
          <p className="mt-3 text-sm text-muted-foreground">As demais leis federais e referências específicas do estudo aguardam o envio da bibliografia pelas autoras.</p>
        </div>
      </Section>

      <CreditsSection />

      <footer className="border-t">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 text-sm text-muted-foreground md:flex-row md:flex-wrap md:items-center md:justify-between md:gap-4">
          <p className="font-serif text-base text-primary">Cuidar de quem cuida</p>
          <a href="https://cuidar-de-quem-cuida1.lovable.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-medium text-foreground hover:text-primary"><Globe className="h-4 w-4" aria-hidden="true" />cuidar-de-quem-cuida1.lovable.app</a>
          <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> Contato institucional a definir</p>
        </div>
      </footer>

      <nav aria-label="Opções do site" className="fixed inset-x-0 bottom-0 z-30 border-t bg-background/95 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:hidden">
        <ul className="mx-auto grid max-w-6xl grid-cols-7">
          {abas.map((a) => {
            const Icon = a.icon;
            const ativa = secaoAtiva === a.href;
            return (
              <li key={a.href}>
                <a
                  href={a.href}
                  aria-current={ativa ? "page" : undefined}
                  className={`flex min-h-16 flex-col items-center justify-center gap-1 px-0.5 py-2 text-[10px] font-semibold leading-none tracking-tight transition-colors sm:text-[11px] sm:tracking-normal ${ativa ? "text-primary" : "text-muted-foreground"}`}
                >
                  <span className={`h-1 w-8 rounded-full ${ativa ? "bg-primary" : "bg-transparent"}`} aria-hidden="true" />
                  <Icon className="h-5 w-5" aria-hidden="true" />
                  {a.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
