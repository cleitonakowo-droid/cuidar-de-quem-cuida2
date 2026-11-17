import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/legal-page";

export const Route = createFileRoute("/privacidade")({
  head: () => ({ meta: [
    { title: "Política de Privacidade — Cuidar de quem cuida" },
    { name: "description", content: "Minuta de privacidade do projeto acadêmico Cuidar de quem cuida e informações sobre serviços externos." },
    { property: "og:title", content: "Política de Privacidade — Cuidar de quem cuida" },
    { property: "og:description", content: "Privacidade e proteção de dados no projeto Cuidar de quem cuida." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" },
  ] }),
  component: Privacy,
});

function Privacy() {
  return <LegalPage title="Política de Privacidade">
    <section><h2>O projeto</h2><p>Cuidar de quem cuida é um protótipo acadêmico com conteúdos educativos sobre bem-estar docente. A versão atual não oferece cadastro, pagamento ou formulário para envio de dados pessoais ou informações de saúde.</p></section>
    <section><h2>Serviços externos</h2><p>Os vídeos utilizam o player do YouTube em modo de privacidade aprimorada. A reprodução pode envolver tratamento de dados pelo YouTube. Links de podcasts e artigos levam a sites externos, sujeitos às políticas dos respectivos responsáveis. A hospedagem e o carregamento de fontes podem envolver dados técnicos, como endereço IP e informações do navegador.</p></section>
    <section><h2>Direitos previstos na LGPD</h2><p>A Lei nº 13.709/2018 prevê, conforme aplicável, direitos de confirmação de tratamento, acesso, correção, informação sobre compartilhamento e eliminação de dados, além de revogação de consentimento quando essa for a base legal utilizada.</p></section>
    <section><h2>Antes da implantação</h2><p>As responsáveis deverão definir e divulgar o controlador, um canal de contato para solicitações de privacidade, as finalidades e bases legais do tratamento, os prazos de retenção e os serviços de medição ou cookies eventualmente utilizados. Esta minuta não constitui certificação de conformidade com a LGPD.</p></section>
  </LegalPage>;
}