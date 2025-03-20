export const data = {
  person: {
    name: "Oswaldo Guirra Pereira de Castro",
    shortname: "Oswaldo Castro",
    nationality: "Brasileiro",
    status: "Solteiro",
    age: 39,
    role: {
      web: "Desenvolvedor Web",
      pj: "Prestador de Serviço",
    },
    address: {
      street: "Rua Santa Zita",
      number: 105,
      complement: "casa 2",
      municipality: "Vila Mendes",
      city: "São Paulo",
      state: {
        name: "São Paulo",
        uf: "SP",
      },
    },
    phones: {
      cellphone: {
        country: "Brasil",
        code: 55,
        ddd: 11,
        number: 999766295,
      },
    },
    links: {
      email: "oswaldogpc@gmail.com",
      portfolio: "https://oswaldo-castro.netlify.app",
      github: {
        url: "https://github.com/tufcoder",
        user: "tufcoder",
      },
    },
    objective:
      "Atuar como Desenvolvedor Web em projetos desafiadores, contribuindo com minha experiência em tecnologias modernas para criar soluções eficazes.",
    summary:
      "Desenvolvedor Web com mais de 10 anos de experiência em criação e manutenção de sistemas para diferentes setores como Saúde e Seguros. Especialista em .NET, Node.js e bancos de dados relacionais e não relacionais. Focado em metodologias ágeis e entrega de soluções robustas e escaláveis.",
    tags: [
      { name: ".NET C#", bg: { default: "purple", tailwind: "bg-purple-500" } },
      { name: "Node.js", bg: { default: "green", tailwind: "bg-green-800" } },
      { name: "MS-SQL", bg: { default: "orange", tailwind: "bg-orange-400" } },
      { name: "Git", bg: { default: "red", tailwind: "bg-red-500" } },
      {
        name: "JavaScript",
        bg: { default: "light-green", tailwind: "bg-green-600" },
      },
      { name: "React.js", bg: { default: "cyan", tailwind: "bg-blue-400" } },
    ],
  },
  education: {
    "42sp": {
      name: "42 São Paulo",
      course: "Cadete em Engenharia de Software",
      status: "Incompleto",
      period: "2022-2023",
    },
    fiap: {
      name: "Faculdade de Informática e Administração Paulista | FIAP",
      course: "Análise e Desenvolvimento de Sistemas",
      status: "Incompleto",
      period: "2016-2017",
    },
    fatec: {
      name: "Centro Tecnológico da Zona Leste | Fatec ZL",
      course: "Informática com Ênfase em Gestão de Negócios",
      status: "Incompleto",
      period: "2006-2010",
    },
  },
  languages: {
    portuguese: {
      name: "Português Brasileiro",
      status: "Língua materna",
    },
    english: {
      name: "Inglês técnico",
      status: "leitura e escrita avançada; conversação intermediária",
    },
    spanish: {
      name: "Espanhol",
      status: "Básico",
    },
  },
  skills: {
    backend: [
      "C# (.NET Framework, .NET Core, .NET 5+)",
      "Node.js (Express)",
      "Python",
      "Docker",
    ],
    frontend: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "Bootstrap",
      "Tailwind",
      "Sass",
      "React (Vite, Next.js)",
    ],
    patterns: ["POO", "MVC", "SOLID", "DDD", "Clean Architecture"],
    libraries: {
      test: ["XUnit", "NUnit", "Jest", "Pytest", "Supertest", "Vitest"],
    },
    mobile: ["React Native", "Expo"],
    databases: {
      relational: ["MS-SQL Server", "Oracle", "MySQL", "SQLite", "PostgreSQL"],
      nonrelational: ["MongoDB", "Redis"],
      orms: ["Entity Framework Core", "Dapper", "Prisma", "Knex", "TypeORM"],
    },
    vcs: {
      name: "Sistemas de Controle de Versão",
      git: "Git",
      tfs: "TFS (atual Azure DevOps)",
    },
    methodologies: ["Scrum", "Kanban"],
  },
  extracurricular: {
    harvard: {
      name: "CS50's Introduction to Programming with Python",
      period: "01/2024-02/2024",
      description:
        "Curso online da Harvard University com foco em lógica de programação e Python.",
      certificate:
        "https://cs50.harvard.edu/certificates/fa64420d-37f2-4350-a9a4-28a560a12a86",
    },
    piscina: {
      name: "Piscina 42sp",
      period: "01/2022-02/2022",
      description:
        "Foco intensivo em GNU/Linux, Shell Script e Linguagem C para a formação em Engenharia de Software.",
    },
    rocketseat: {
      name: "Bootcamp GoStack",
      period: "08/2020-11/2020",
      description:
        "Formação Full Stack com as tecnologias: Node.js, React e React Native.",
      modules: {
        nivel1: [
          "Back-end com Node.js: npm ou yarn, RESTful APIs, HTTP Methods, Middlewares.",
          "Front-end com React.js: Babel/Webpack, Componentização, Imutabilidade.",
          "Mobile com React Native: Expo SDK",
          "TypeScript",
        ],
        nivel2: [
          "Estruturas e Padrões: Editor Config, ESLint e Prettier.",
          "Construindo Aplicação: Models, Repositories e Services.",
          "Back-end: Knex Query Builder, Docker, JWT",
        ],
        nivel3: [
          "React.js e TypeScript: Rotas e envio de arquivos com formulário.",
          "Front-end web: Projeto GoBarber.",
          "Aplicativo Mobile: Projeto GoBarber.",
        ],
        nivel4: [
          "Arquitetura e Testes no Node.js: SOLID, Jest, Coverage.",
          "Rotas e Controllers.",
          "MongoDB, Variáveis de Ambiente, Cache, Segurança.",
        ],
        nivel5: ["Recuperação de Senha.", "Dashboard."],
        nivel6: [
          "Deploy de aplicações Node.js.",
          "Deploy de aplicações React.js",
          "Publicação de apps com React Native.",
        ],
      },
    },
    ka: {
      name: "Ka Solution - Centro de Treinamento Oficial Microsoft",
      period: "05/2011-08/2011",
      description:
        "Desenvolvimento de software com a linguagem C# utilizando a ferramenta do MS-Visual Studio através dos módulos:",
      modules: [
        "Módulo 10266 - Programming in C#",
        "Módulo 10267 - Introduction to Web Development",
        "Módulo 10265 - Developing Data Access Solutions",
        "Módulo 10264 - Developing Web Applications",
      ],
    },
  },
  experience: {
    actual: {
      name: "Guirra & Castro Serviços de Informática",
      job: "Prestador de Serviços em Desenvolvimento Web",
      bg: {
        default: "linear-gradient(to right light-green, green)",
        tailwind: "bg-linear-to-bl from-amber-700 to-amber-800",
      },
      contract: "PJ",
      period: "01/2020-Atual",
      works: [
        "Participação em projetos legados com o .NET Framework e na construção ou manutenção de sistemas web com .NET 5+ e Node.js.",
        "Criação de SPAs com React e Razor Pages.",
        "Migrations com Entity Framework Core, Dapper, Prisma, Knex.",
        "Aulas particulares para desenvolvedores utilizando as plataformas Discord ou Slack abordando temas como: Lógica de Programação e Estruturas de Dados.",
        "Projetos para exemplos nas aulas: Filtrar elementos na DOM, Template CSS, Dropdown, Calculadora.",
        "Sistemas de Versionamento e Deploy: Git, Github Actions, Netlify, Render, Heroku.",
      ],
      tags: [
        {
          name: ".NET C#",
          bg: { default: "purple", tailwind: "bg-purple-500" },
        },
        { name: "React.js", bg: { default: "cyan", tailwind: "bg-blue-400" } },
        { name: "Node.js", bg: { default: "green", tailwind: "bg-green-800" } },
      ],
    },
    eicon: {
      name: "Eicon: SISS Saúde ERP",
      url: "https://www.eicon.com.br/siss/",
      bg: {
        default: "linear-gradient(to right light-green, green)",
        tailwind: "bg-linear-to-bl from-emerald-950 to-emerald-800",
      },
      job: "Analista Desenvolvedor .NET Pleno",
      contract: "CLT",
      period: "09/2017-12/2019",
      works: [
        "Participação nos projetos SISS Hospitalar e SISS Ambulatorial.",
        "Desenvolvimento e manutenção com o .NET Framework utilizando Web Forms e MVC.",
        "Bancos de dados: MS-SQL Server e Oracle.",
        "Software no conceito DDD (Domain-Driven Design).",
        "RESTful APIs e documentação com Swagger.",
        "JWT Tokens e Autenticação com OAuth.",
        "Refatoração e Revisão de código.",
        "Metodologias ágeis com Scrum e Kanban.",
        "Participação nas reuniões diárias da equipe com feedbacks constantes para gerência do backlog.",
        "Entrega de novas funcionalidades através de Sprints.",
        "Sistemas de Versionamento: TFS (atual Azure DevOps) e Git.",
      ],
      tags: [
        {
          name: ".NET C#",
          bg: { default: "purple", tailwind: "bg-purple-500" },
        },
        {
          name: "MS-SQL",
          bg: { default: "orange", tailwind: "bg-orange-400" },
        },
        { name: "Oracle", bg: { default: "red", tailwind: "bg-red-500" } },
        {
          name: "Agile",
          bg: { default: "light-green", tailwind: "bg-green-600" },
        },
      ],
    },
    ampsoft: {
      name: "Ampsoft: Tecnologia para Seguros - SIES ERP",
      url: "https://www.ampsoft.com.br/",
      bg: {
        default: "linear-gradient(to right light-green, green)",
        tailwind: "bg-linear-to-bl from-blue-900 to-sky-950",
      },
      job: "Analista Desenvolvedor .NET",
      contract: "PJ",
      period: "04/2010-05/2017",
      works: [
        "Análise, manutenção e desenvolvimento de software ERP para Seguros com o .NET Framework (3.5+) e .NET Core",
        "Desenvolvimento e manutenção de Web Forms.",
        "Bancos de dados: MS-SQL Server.",
        "Desenvolvimento e manutenção de Stored Procedures, Triggers, Views e Jobs.",
        "Desenvolvimento e manutenção de relatórios utilizando o Reporting Services.",
        "Levantamento de Requisitos e documentação.",
        "Sistemas de Versionamento: TFS (atual Azure DevOps).",
      ],
      tags: [
        {
          name: ".NET C#",
          bg: { default: "purple", tailwind: "bg-purple-500" },
        },
        {
          name: "MS-SQL",
          bg: { default: "orange", tailwind: "bg-orange-400" },
        },
        { name: "Seguros", bg: { default: "red", tailwind: "bg-red-400" } },
      ],
    },
    seepix: {
      name: "Seepix: Comunicação e Tecnologia",
      url: "https://seepix.com.br/",
      bg: {
        default: "linear-gradient(to right light-green, green)",
        tailwind: "bg-linear-to-bl from-orange-950 to-orange-900",
      },
      job: "Desenvolvedor Web Júnior",
      contract: "CLT",
      period: "09/2009-03/2010",
      works: [
        "Desenvolvimento e manutenção de web sites, portais e campanhas digitais de clientes como Vivo, Google e Votorantim.",
        "Experiência em Digital Signage para comunicação através de painéis informativos em locais públicos ou privados.",
        "Stack principal de desenvolvimento: ActionScript, PHP, XML, Apache, JQuery, MySQL e ASP.",
      ],
      tags: [
        {
          name: "ActionScript",
          bg: { default: "red", tailwind: "bg-red-500" },
        },
        { name: "PHP", bg: { default: "orange", tailwind: "bg-orange-400" } },
        { name: "JQuery", bg: { default: "green", tailwind: "bg-green-500" } },
        { name: "MySQL", bg: { default: "red", tailwind: "bg-red-700" } },
      ],
    },
    piaget: {
      name: "Jean Piaget: Sistema de Ensino",
      url: "https://jpiaget.com.br/",
      bg: {
        default: "linear-gradient(to right light-green, green)",
        tailwind: "bg-linear-to-bl from-sky-900 to-sky-950",
      },
      job: "Estagiário em Desenvolvimento Web",
      contract: "Estágio",
      period: "06/2008-06/2009",
      works: [
        "Responsável pela manutenção, gerenciamento e evoluções do website e demais hotsites do sistema de ensino Piaget com a linguagem ASP.",
        "Desenvolvimento de jogos com o Adobe Flash e ActionScript 2.0 através do sistema de ensino multimídia do Jean Piaget para Ensino Fundamental e Médio, exclusivo para seus alunos.",
        "Experiência em administração de bancos de dados com o MS-SQL Server.",
        "Experiência em aplicar o processo seletivo e treinamento de novos estagiários com o Adobe Flash, ActionScript e ASP.",
      ],
      tags: [
        {
          name: "ActionScript",
          bg: { default: "red", tailwind: "bg-red-500" },
        },
        { name: "ASP", bg: { default: "green", tailwind: "bg-green-500" } },
        {
          name: "MS-SQL",
          bg: { default: "orange", tailwind: "bg-orange-400" },
        },
      ],
    },
    ka: {
      name: "Ka Solution: Tecnologia em Software",
      url: "https://www.kasolution.com.br/",
      bg: {
        default: "linear-gradient(to right light-green, green)",
        tailwind: "bg-linear-to-bl from-violet-950 to-violet-900",
      },
      job: "Estagiário em Desenvolvimento Web",
      contract: "Estágio",
      period: "06/2008-06/2009",
      works: [
        "Área de e-learning utilizando o Adobe Flash como ferramenta de desenvolvimento para os cursos oficiais Microsoft e cursos corporativos disponibilizados pela Ka Solution aos seus clientes.",
        "Experiência em gerenciamento da equipe de estagiários sob a supervisão do responsável do setor de desenvolvimento web.",
        "Experiência de contato com clientes em reuniões presenciais no levantamento de requisitos para a confecção de cursos corporativos sob a supervisão do responsável da área de e-learning.",
        "Sistemas de Versionamento: Visual Source Safe.",
      ],
      tags: [
        {
          name: "ActionScript",
          bg: { default: "red", tailwind: "bg-red-500" },
        },
        {
          name: "Adobe Flash",
          bg: { default: "pink", tailwind: "bg-pink-500" },
        },
        {
          name: "E-Learning",
          bg: { default: "brown", tailwind: "bg-stone-700" },
        },
      ],
    },
  },
};
