import { Link } from "@tanstack/react-router";
import { ArrowUpRight, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import geralda from "@/assets/geralda-creditos.jpg";
import joice from "@/assets/joice-creditos.jpg";
import larissa from "@/assets/larissa-creditos.jpg";
import monalisa from "@/assets/monalisa-creditos.jpg";

const autoras = [
  { nome: "Geralda Alencar", foto: geralda, papel: "Professora · Educação inclusiva", bio: "Formada em Pedagogia pela Faculdade Anchieta em 2014, possui experiência na Educação Infantil e no Ensino Fundamental I. É pós-graduada em Autismo e Deficiência Intelectual e cursa Gestão Educacional pela CEFSA. Atua na rede municipal de São Bernardo do Campo, com foco na aprendizagem e na educação inclusiva." },
  { nome: "Joice de Jesus Zanetti", foto: joice, papel: "Pedagoga · Psicopedagogia", bio: "Formada em Pedagogia pelo Centro Universitário Fundação Santo André, é pós-graduada em Psicopedagogia Clínica e Institucional pelo Instituto Coração de Jesus. É pós-graduanda em Gestão Educacional pela CEFSA." },
  { nome: "Larissa Soares", foto: larissa, papel: "Professora · Educação inclusiva", bio: "Formada em Pedagogia pela Faculdade de Diadema, cursa Ciências na Universidade Federal de São Paulo (UNIFESP) e pós-graduação em Gestão Educacional pela CEFSA.", detalhe: "Na apresentação: Larissa Soares Rossi." },
  { nome: "Monalisa Monteiro de Moura", foto: monalisa, papel: "Professora · Gestão educacional", bio: "Professora desde 2002, com experiência no Ensino Fundamental I. Formada em Pedagogia pela Faculdade de São Bernardo e pós-graduada em Educação Inclusiva pela Universidade de São Paulo. Cursa Gestão Educacional pela Fundação Salvador Arena e exerce a função de vice-diretora em uma escola da Prefeitura de São Bernardo do Campo." },
];

export function CreditsSection() {
  return (
    <section id="creditos" className="bg-muted">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-6 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Quem fez o projeto</p>
        <h2 className="mt-2 text-3xl md:text-4xl">Créditos</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {autoras.map((autora) => (
            <article key={autora.nome} className="min-w-0 rounded-lg border bg-card p-5 md:p-6">
              <div className="flex items-center gap-4">
                <img src={autora.foto} alt={autora.nome} width={112} height={112} loading="lazy" className="h-20 w-20 shrink-0 rounded-full object-cover md:h-24 md:w-24" />
                <div className="min-w-0">
                  <h3 className="text-xl leading-snug">{autora.nome}</h3>
                  <p className="mt-2 text-sm font-semibold text-primary">{autora.papel}</p>
                </div>
              </div>
              <p className="mt-5 leading-relaxed text-muted-foreground">{autora.bio}</p>
              {autora.detalhe && <p className="mt-3 text-sm text-muted-foreground">{autora.detalhe}</p>}
            </article>
          ))}
        </div>
        <div className="mt-10 border-t pt-8">
          <h3 className="flex items-center gap-3 text-2xl"><GraduationCap className="h-6 w-6 shrink-0 text-primary" />Créditos Científicos</h3>
          <dl className="mt-5 space-y-5 leading-relaxed">
            <div><dt className="font-semibold">Autores</dt><dd className="text-muted-foreground">Geralda Alencar, Joice de Jesus Zanetti, Larissa Soares, Monalisa Monteiro de Moura.</dd></div>
            <div><dt className="font-semibold">Orientação</dt><dd className="text-muted-foreground">Me. Pablo Carneiro (Faculdade Engenheiro Salvador Arena).</dd></div>
            <div><dt className="font-semibold">Vínculo Institucional</dt><dd className="text-muted-foreground">Faculdade Engenheiro Salvador Arena.</dd></div>
          </dl>
        </div>
        <div className="mt-8 border-t pt-6">
          <h3 className="text-xl">Links Legais</h3>
          <div className="mt-3 flex flex-col items-start gap-1 sm:flex-row sm:flex-wrap sm:gap-5">
            <Button asChild variant="link" className="h-auto min-h-11 whitespace-normal px-0 text-left"><Link to="/privacidade">Política de Privacidade<ArrowUpRight /></Link></Button>
            <Button asChild variant="link" className="h-auto min-h-11 whitespace-normal px-0 text-left"><Link to="/termos">Termos de Uso (LGPD)<ArrowUpRight /></Link></Button>
            <Button asChild variant="link" className="h-auto min-h-11 whitespace-normal px-0 text-left"><a href="#referencias">Referências bibliográficas<ArrowUpRight /></a></Button>
          </div>
        </div>
      </div>
    </section>
  );
}