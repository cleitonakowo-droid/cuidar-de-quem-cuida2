import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/termos")({
  head: () => ({ meta: [
    { title: "Termos de Uso — Cuidar de quem cuida" },
    { name: "description", content: "Minuta dos termos de uso dos conteúdos educativos do projeto Cuidar de quem cuida." },
    { property: "og:title", content: "Termos de Uso — Cuidar de quem cuida" },
    { property: "og:description", content: "Caráter educativo, fontes e condições de uso do protótipo acadêmico." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ] }),
  component: Terms,
});

function Terms() {
  return <LegalPage title="Termos de Uso (LGPD)">
    <section><h2>Finalidade educativa</h2><p>O site reúne informações de bem-estar docente para professores. Os conteúdos não oferecem diagnóstico, terapia ou atendimento psicológico e não substituem avaliação ou acompanhamento profissional. Em emergência ou risco imediato à vida, procure atendimento de urgência ou ligue 192.</p></section>
    <section><h2>Autoria e fontes</h2><p>A autoria científica do projeto é de Geralda Alencar, Joice de Jesus Zanetti, Larissa Soares e Monalisa Monteiro de Moura, com orientação de Me. Pablo Carneiro, da Faculdade Engenheiro Salvador Arena. Artigos, vídeos e podcasts de terceiros mantêm seus respectivos créditos e direitos. A citação de estudos não implica participação ou endosso de seus autores ao projeto.</p></section>
    <section><h2>Acesso e links externos</h2><p>Esta versão é um protótipo de acesso livre. Assinaturas e vouchers descritos no site são propostas hipotéticas, sem contratação ou cobrança disponível. Conteúdos externos podem mudar ou ficar indisponíveis e são regidos pelos termos dos respectivos serviços.</p></section>
    <section><h2>Proteção de dados</h2><p>O tratamento de dados deverá observar a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018). Consulte a Política de Privacidade para as informações desta versão. As responsáveis deverão revisar estes termos e informar um canal de contato antes da implantação.</p></section>
  </LegalPage>;
}