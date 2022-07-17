import type { NextPage } from "next";
import Home from "../containers/home";
import Head from "next/head";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Stone - Produtos financeiros muito além da Maquininha</title>
        <meta
          name="description"
          content="Conectamos seu negócio com soluções de pagamento e gestão à um serviço local, que fala sua língua e te conhece pelo nome. Vem ser Stone."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org",
              "@type": "Corporation",
              "name": "Stone",
              "url": "https://www.stone.com.br/",
              "logo": "https://www.stone.com.br/public/images/favicon.ico",
              "contactPoint": [{
                "@type": "ContactPoint",
                "telephone": "3004-9680",
                "contactType": "customer service",
                "areaServed": "BR",
                "availableLanguage": ["Brazilian Portuguese"]
              },{
                "@type": "ContactPoint",
                "telephone": "3004-9681",
                "contactType": "sales",
                "areaServed": "BR",
                "availableLanguage": ["Brazilian Portuguese"]
              },{
                "@type": "ContactPoint",
                "telephone": "0800 326-0506",
                "contactType": "customer service",
                "contactOption": "TollFree",
                "areaServed": "BR",
                "availableLanguage": ["Brazilian Portuguese"]
              }],
              "sameAs": [
                "https://www.facebook.com/stonepagamentos/",
                "https://twitter.com/sejastone",
                "https://www.instagram.com/stone/",
                "https://www.youtube.com/channel/UCk4L4JykgoDkN8YeuxkNqIQ",
                "https://www.linkedin.com/company/stone-pagamentos",
                "https://pt.wikipedia.org/wiki/Stone_Pagamentos"
              ]
            }`,
          }}
        />
        <link rel="canonical" href="https://www.stone.com.br/" />
      </Head>
      <Home />;
    </>
  );
};

export default HomePage;
