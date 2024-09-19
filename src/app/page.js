export default function Home() {
  return (
    <section className="bg-colors-backgroundClar2 dark:bg-colors-background2 p-5 mt-4 rounded-lg flex flex-col gap-8">
      <div className="flex flex-col">
        <h1 className="text-black dark:text-colors-textoPrincipal font-bold mb-2 text-2xl">
          Sobre mim
        </h1>
        <div className="w-16 h-2 bg-colors-destaque rounded-xl"></div>
      </div>

      <p className="text-colors-paragrafo2 dark:text-colors-paragrafo text-base sm:text-lg">
        Olá, sou Arthur e seja bem-vindo ao meu site! Aqui você encontrará
        detalhes sobre minha jornada profissional, projetos e artigos.
      </p>
      <p className="text-colors-paragrafo2 dark:text-colors-paragrafo text-base sm:text-lg">
        Minha trajetória começou na faculdade de Bacharelado em
        <span className=" mx-2 text-colors-destaque font-bold">
          Ciências da Tecnologia
        </span>
        na Universidade Federal do ABC, que ingressei em 2018, ainda na
        universidade, iniciei o meu interrese pela ciências da computação,
        ganhando experiência com a aréa de programação.
      </p>
      <p className="text-colors-paragrafo2 dark:text-colors-paragrafo text-base sm:text-lg">
        Após isso, transicionei minha carreira acadêmica para o curso de
        <span className=" mx-2 text-colors-destaque font-bold">
          Analise e Desenvolvimento de Sistema.
        </span>
        Meu dia a dia envolve estudar muito e desenvolver projetos e trabalhos
        freelancer em{" "}
        <span className="text-colors-destaque font-bold">React</span>,
        <span className="text-colors-destaque font-bold"> Next.js</span>,
        <span className="text-colors-destaque font-bold"> MongoDB</span>,
        <span className="text-colors-destaque font-bold"> Node</span>,
        <span className="text-colors-destaque font-bold"> JavaScript </span>e
        <span className="text-colors-destaque font-bold"> Typescript</span>.
      </p>
      <p className="text-colors-paragrafo2 dark:text-colors-paragrafo text-base sm:text-lg">
        Além da graduação, investi em minha formação contínua através de
        diversos cursos na Alura, Fiap e fundação Bradesco. E pretendo iniciar
        minha pós graduação em breve.
      </p>
      <p className="text-colors-paragrafo2 dark:text-colors-paragrafo text-base sm:text-lg">
        Estou sempre buscando crescer profissionalmente. Meus objetivos incluem
        conseguir meu primeiro emprego fixo como desenvolvedor e com isso
        conseguir participar de projetos inovadores e explorar novas
        tecnologias, especialmente na área fullstack onde acredito que o saber
        de cada parte de uma aplicação, seja a essência para um bom processo de
        desenvolvimento e evolução pessoal.
      </p>
      <p className="text-colors-paragrafo2 dark:text-colors-paragrafo text-base sm:text-lg">
        Com isso, convido você a explorar meus projetos e blog. Espero também
        que algo que fiz inspire ou ajude você em sua trajetória.
      </p>
    </section>
  );
}
