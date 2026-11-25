// Todo o conteúdo do site fica aqui, em PT e EN.
// Para atualizar o portfólio, edite apenas este arquivo.
window.CONTENT = {
  pt: {
    meta: {
      title: "Lucas Theodoro · Engenheiro de Software Full Stack",
      description:
        "Portfólio de Lucas Theodoro, Engenheiro de Software Full Stack Pleno: Java/Spring, Angular, .NET, microsserviços, Kafka e arquitetura frontend.",
    },
    ui: {
      navAbout: "Sobre",
      navProject: "Projetos",
      sideTitle: "Outros projetos",
      sideIntro: "Projetos pessoais que criei para resolver problemas do meu dia a dia, do desktop à rede de casa.",
      navExperience: "Experiência",
      navSkills: "Habilidades",
      navContact: "Contato",
      downloadCv: "Baixar currículo",
      downloadCvShort: "CV",
      contactMe: "Fale comigo",
      greeting: "Olá, eu sou",
      role: "Engenheiro de Software Full Stack Pleno",
      location: "Araraquara, SP · Brasil",
      intro:
        "Construo sistemas escaláveis e fáceis de manter, do frontend ao backend. Hoje atuo com pagamentos no Internet Banking PJ de uma das maiores instituições financeiras do Brasil.",
      nowLabel: "Atualmente",
      nowText: "Engenheiro de Software na CI&T · Pagamentos (TED, Ordem de Pagamento, Crédito em Conta)",
      aboutTitle: "Sobre mim",
      projectEyebrow: "Projeto em destaque",
      projectVisit: "Visitar o site",
      projectBuilt: "O que construímos",
      projectMyRole: "Minha parte",
      videoNote: "O vídeo mostra a primeira versão do Atlas e serve só como introdução. A interface e os recursos mudaram bastante desde então.",
      projectShotAlt: "Página inicial do site da Oficina das Meninas, com o logo da ONG e o lema Amor, respeito e acolhimento",
      experienceTitle: "Experiência",
      present: "Presente",
      skillsTitle: "Habilidades",
      educationTitle: "Formação",
      languagesTitle: "Idiomas",
      contactTitle: "Vamos conversar?",
      contactText:
        "Estou aberto a conversas sobre oportunidades, projetos e tecnologia. O jeito mais rápido de falar comigo é por email ou LinkedIn.",
      footer: "Feito por Lucas Theodoro",
      themeToLight: "Mudar para tema claro",
      themeToDark: "Mudar para tema escuro",
      langLabel: "Idioma",
      backToTop: "Voltar ao topo",
    },
    about: [
      "Sou engenheiro de software full stack há 5 anos. Comecei como estagiário na Cognyte, num sistema de interceptação legal usado por grandes operadoras de telefonia, passei por ERPs e sistemas logísticos com Angular e .NET, e hoje trabalho com pagamentos no setor financeiro, com Java/Spring Boot, Kafka e Angular.",
      "O que mais gosto é cuidar da base dos projetos: arquitetura frontend, componentização, CI/CD e padrões que deixam o time mais rápido. Na GS Tecnologia, liderei a migração de um ERP em VB6 para a web e criei o framework interno que passou a ser a base de 5 projetos.",
      "Também gosto de ensinar. Treinei uma turma de 9 estagiários e conduzi um treinamento interno sobre IA aplicada ao desenvolvimento, que uso no dia a dia com Spec-Driven Development e agentes.",
    ],
    stats: [
      { value: "5", label: "anos de experiência" },
      { value: "~17", label: "módulos no ERP migrado de VB6 para a web" },
      { value: "5", label: "projetos de 2 times sobre o framework que criei" },
      { value: "9", label: "estagiários treinados" },
    ],
    project: {
      name: "Oficina das Meninas",
      tagline: "Plataforma web para uma ONG, em produção",
      myRole: "Fui responsável pela integração com o gateway de pagamentos PagBank, do frontend ao backend, que permite receber doações e apadrinhamentos online.",
      url: "https://oficinadasmeninas.org.br/",
      urlLabel: "oficinadasmeninas.org.br",
      description:
        "Desenvolvemos em equipe, como TCC, uma plataforma completa para uma ONG. Ela centraliza informações institucionais, doações, apadrinhamentos e a administração do conteúdo, e ajuda na sustentabilidade financeira da organização. O sistema está em produção na nuvem, com CI/CD.",
      highlights: [
        "Site institucional e sistema de apadrinhamento",
        "Integração com o gateway de pagamentos PagBank",
        "Painel administrativo com gestão de doadores",
        "Acompanhamento de doações",
        "Arquitetura com Domain-Driven Design",
        "Deploy em nuvem com Docker e CI/CD",
      ],
      tags: ["Spring Boot", "Angular", "PostgreSQL", "Docker", "CI/CD", "DDD", "PagBank"],
    },
    sideProjects: [
      {
        name: "Project Atlas",
        tagline: "App desktop para orquestrar agentes de IA",
        image: "assets/projects/atlas-specs.jpg",
        alt: "Tela de specs do Project Atlas, com as etapas proposta, requisitos, design, tarefas e revisão final aprovadas",
        description:
          "Cada workspace é um projeto local onde agentes de IA, com personalidade, runtime e modelo próprios, trabalham de forma independente. Tem um fluxo de Spec-Driven Development (proposta, requisitos, design, tarefas e revisão por um agente), MCP Hub e integração com Claude Code, Codex, Gemini e Copilot.",
        status: "Em desenvolvimento · instaladores para macOS, Windows e Linux",
        tags: ["Tauri 2", "Rust", "React", "TypeScript", "Agentes de IA", "MCP"],
        links: [
          { label: "GitHub", url: "https://github.com/LucasAlt40/project-atlas" },
          { label: "Baixar", url: "https://github.com/LucasAlt40/project-atlas/releases" },
          { label: "Vídeo de introdução", url: "https://drive.google.com/drive/folders/1Df3JqUlaGJBG0vcHeuTQg7YneI_gv-bg?usp=sharing", note: true },
        ],
      },
      {
        name: "CamBar",
        tagline: "Câmeras IP ao vivo na barra de menu do Mac",
        image: "assets/projects/cambar-visao-geral.jpg",
        alt: "Visão geral do CamBar com duas câmeras ao vivo, com resolução, codec e FPS de cada uma",
        description:
          "App nativo para macOS que mostra ao vivo as câmeras IP (RTSP) da rede local, feito para câmeras genéricas sem cliente para desktop. Tem visão geral em grade, janela expandida com telemetria, controle PTZ via ONVIF, busca de câmeras na rede e senhas no Keychain. Também ganhou um port nativo para Windows, em C# e WPF.",
        status: "macOS e Windows · código aberto",
        tags: ["Swift", "macOS", "RTSP", "ffmpeg", "ONVIF", "C# / WPF"],
        links: [
          { label: "GitHub (macOS)", url: "https://github.com/LucasAlt40/CamBar" },
          { label: "GitHub (Windows)", url: "https://github.com/LucasAlt40/CamBar-Windows" },
        ],
      },
    ],
    experience: [
      {
        company: "CI&T",
        location: "Remoto",
        role: "Engenheiro de Software Pleno",
        start: "Set. 2026",
        end: null,
        summary:
          "Projeto para uma das maiores instituições financeiras do Brasil, no canal de Internet Banking Pessoa Jurídica, no domínio de pagamentos.",
        highlights: [
          "Desenvolvo fluxos de pagamento de TED, Ordem de Pagamento e Crédito em Conta para clientes PJ.",
          "Microsserviços em Java/Spring Boot com comunicação orientada a eventos via Apache Kafka.",
          "Frontend em Angular com arquitetura de microfrontends.",
          "Pipelines CI/CD, GitHub e code reviews em squad multidisciplinar.",
        ],
        tags: ["Java", "Spring Boot", "Kafka", "Microsserviços", "Angular", "Microfrontends", "CI/CD", "GitHub"],
      },
      {
        company: "GS Tecnologia",
        location: "Remoto",
        role: "Desenvolvedor Full Stack Pleno",
        start: "Maio 2025",
        end: "Set. 2026",
        summary:
          "Liderei a arquitetura e a refatoração de um ERP logístico legado em VB6 para uma aplicação web moderna, usada por uma transportadora de grande porte com cerca de 110 usuários. Time de 6 pessoas.",
        highlights: [
          "Atuei em cerca de 17 módulos: Conhecimento de Transporte, CT-e, documentos fiscais, Ordem de Embarque e rotinas operacionais.",
          "Projetei e mantive um framework interno (Angular, PrimeNG, Tailwind, Storybook) usado por 2 times e 5 projetos.",
          "Criei uma pipeline CI/CD do zero com GitHub Actions, Docker e Linux.",
          "Implantei Spec-Driven Development no time e criei um fluxo de validação pré-QA com IA, MCP e Jira.",
          "Conduzi um treinamento interno sobre IA aplicada ao desenvolvimento.",
        ],
        tags: ["Angular 18+", ".NET C#", "SQL Server", "PrimeNG", "Tailwind", "Storybook", "Jest", "GitHub Actions", "Docker"],
      },
      {
        company: "Simples LTDA",
        location: "Araraquara, SP",
        role: "Desenvolvedor Full Stack",
        start: "Out. 2023",
        end: "Maio 2025",
        summary:
          "Desenvolvi aplicações full stack para sistemas logísticos, corporativos e de gestão, apoiando a padronização da arquitetura frontend e backend. Time de 4 pessoas.",
        highlights: [
          "Atuei em uma aplicação de frota inteligente (React, Zustand, Ant Design, .NET em Clean Architecture).",
          "Dei suporte técnico a outros times na adoção de boas práticas em Angular, TypeScript, .NET e Java.",
          "Treinei uma turma de 9 estagiários em Angular, JavaScript e TypeScript.",
        ],
        tags: ["Angular", "React", "ASP.NET C#", "Spring Boot", "Zustand", "Ant Design", "Clean Architecture"],
      },
      {
        company: "Cognyte Software",
        location: "Florianópolis, SC · Remoto",
        role: "Estagiário de Desenvolvimento Full Stack",
        start: "Nov. 2021",
        end: "Jul. 2023",
        summary:
          "Estágio no desenvolvimento de um sistema de interceptação legal de comunicações, solução de segurança usada por grandes operadoras de telefonia do Brasil.",
        highlights: [
          "Correções e melhorias em interfaces React e Redux.",
          "Apoio ao backend em Java/Spring Boot com Oracle Database.",
          "Testes unitários com Jest e React Testing Library.",
        ],
        tags: ["React", "Redux", "JavaScript", "Java", "Spring Boot", "Oracle", "Jest"],
      },
    ],
    skills: [
      { group: "Linguagens", items: ["Java", "TypeScript", "JavaScript", "C#", "Kotlin", "SQL", "PL/SQL"] },
      { group: "Frontend", items: ["Angular", "React", "Microfrontends", "PrimeNG", "Tailwind CSS", "Storybook", "Ant Design", "Redux", "Zustand"] },
      { group: "Backend", items: ["Spring Boot", "ASP.NET / .NET", "Microsserviços", "Apache Kafka", "APIs REST"] },
      { group: "Arquitetura", items: ["Clean Architecture", "Domain-Driven Design", "Orientada a eventos", "Design system", "Framework interno"] },
      { group: "Banco de dados", items: ["SQL Server", "Oracle", "PostgreSQL", "MySQL"] },
      { group: "DevOps e testes", items: ["Docker", "Linux", "GitHub Actions", "Git", "GitLab", "Jest", "Karma", "React Testing Library"] },
      { group: "IA no desenvolvimento", items: ["Claude Code", "OpenAI Codex", "Gemini", "MCP", "Spec-Driven Development", "Agentes de IA"] },
    ],
    education: [
      { school: "Instituto Federal de São Paulo (IFSP)", course: "Tecnólogo em Sistemas para Internet", period: "2023 – 2026", place: "Araraquara, SP" },
      { school: "Instituto Federal de São Paulo (IFSP)", course: "Técnico em Informática", period: "2021 – 2023", place: "Araraquara, SP" },
    ],
    languages: [
      { name: "Português", level: "Nativo" },
      { name: "Inglês", level: "Intermediário" },
    ],
  },

  en: {
    meta: {
      title: "Lucas Theodoro · Full Stack Software Engineer",
      description:
        "Portfolio of Lucas Theodoro, Mid-Level Full Stack Software Engineer: Java/Spring, Angular, .NET, microservices, Kafka, and frontend architecture.",
    },
    ui: {
      navAbout: "About",
      navProject: "Projects",
      sideTitle: "Side projects",
      sideIntro: "Personal projects I built to solve everyday problems, from the desktop to my home network.",
      navExperience: "Experience",
      navSkills: "Skills",
      navContact: "Contact",
      downloadCv: "Download resume",
      downloadCvShort: "CV",
      contactMe: "Get in touch",
      greeting: "Hi, I'm",
      role: "Mid-Level Full Stack Software Engineer",
      location: "Araraquara, SP · Brazil",
      intro:
        "I build scalable, maintainable systems, from frontend to backend. Today I work on payments for the corporate Internet Banking channel of one of the largest financial institutions in Brazil.",
      nowLabel: "Currently",
      nowText: "Software Engineer at CI&T · Payments (wire transfers, payment orders, account credit)",
      aboutTitle: "About me",
      projectEyebrow: "Featured project",
      projectVisit: "Visit the site",
      projectBuilt: "What we built",
      projectMyRole: "My part",
      videoNote: "The video shows the first version of Atlas and is just an introduction. The interface and features have changed a lot since then.",
      projectShotAlt: "Home page of the Oficina das Meninas website, showing the nonprofit's logo and its motto: love, respect, and care",
      experienceTitle: "Experience",
      present: "Present",
      skillsTitle: "Skills",
      educationTitle: "Education",
      languagesTitle: "Languages",
      contactTitle: "Let's talk",
      contactText:
        "I'm open to conversations about opportunities, projects, and technology. The fastest way to reach me is by email or LinkedIn.",
      footer: "Built by Lucas Theodoro",
      themeToLight: "Switch to light theme",
      themeToDark: "Switch to dark theme",
      langLabel: "Language",
      backToTop: "Back to top",
    },
    about: [
      "I've been a full stack software engineer for 5 years. I started as an intern at Cognyte, on a lawful interception system used by major telecom carriers, moved on to ERPs and logistics systems with Angular and .NET, and today I work on payments in the financial sector with Java/Spring Boot, Kafka, and Angular.",
      "What I enjoy most is taking care of a project's foundations: frontend architecture, componentization, CI/CD, and standards that make the team faster. At GS Tecnologia, I led the migration of a VB6 ERP to the web and built the internal framework that became the foundation for 5 projects.",
      "I also enjoy teaching. I trained a cohort of 9 interns and ran an internal training program on AI applied to software development, which I use every day with Spec-Driven Development and agents.",
    ],
    stats: [
      { value: "5", label: "years of experience" },
      { value: "~17", label: "modules in the ERP migrated from VB6 to the web" },
      { value: "5", label: "projects across 2 teams built on my framework" },
      { value: "9", label: "interns trained" },
    ],
    project: {
      name: "Oficina das Meninas",
      tagline: "A web platform for a nonprofit, live in production",
      myRole: "I owned the PagBank payment gateway integration, from frontend to backend, which lets the nonprofit receive donations and sponsorships online.",
      url: "https://oficinadasmeninas.org.br/",
      urlLabel: "oficinadasmeninas.org.br",
      description:
        "As our college final project, our team built a complete platform for a nonprofit. It brings together institutional information, donations, sponsorships, and content management, and supports the organization's financial sustainability. It runs in production in the cloud, with CI/CD.",
      highlights: [
        "Institutional website and sponsorship system",
        "PagBank payment gateway integration",
        "Admin panel with donor management",
        "Donation tracking",
        "Domain-Driven Design architecture",
        "Cloud deployment with Docker and CI/CD",
      ],
      tags: ["Spring Boot", "Angular", "PostgreSQL", "Docker", "CI/CD", "DDD", "PagBank"],
    },
    sideProjects: [
      {
        name: "Project Atlas",
        tagline: "A desktop app for orchestrating AI agents",
        image: "assets/projects/atlas-specs.jpg",
        alt: "Project Atlas specs screen, with the proposal, requirements, design, tasks, and final review steps approved",
        description:
          "Each workspace is a local project where AI agents, each with its own personality, runtime, and model, work independently. It has a Spec-Driven Development flow (proposal, requirements, design, tasks, and review by an agent), an MCP Hub, and integration with Claude Code, Codex, Gemini, and Copilot.",
        status: "In development · installers for macOS, Windows, and Linux",
        tags: ["Tauri 2", "Rust", "React", "TypeScript", "AI agents", "MCP"],
        links: [
          { label: "GitHub", url: "https://github.com/LucasAlt40/project-atlas" },
          { label: "Download", url: "https://github.com/LucasAlt40/project-atlas/releases" },
          { label: "Intro video", url: "https://drive.google.com/drive/folders/1Df3JqUlaGJBG0vcHeuTQg7YneI_gv-bg?usp=sharing", note: true },
        ],
      },
      {
        name: "CamBar",
        tagline: "Live IP cameras in the Mac menu bar",
        image: "assets/projects/cambar-visao-geral.jpg",
        alt: "CamBar overview with two live cameras, showing each one's resolution, codec, and FPS",
        description:
          "A native macOS app that shows live IP cameras (RTSP) on the local network, built for generic cameras with no desktop client. It has a grid overview, an expanded window with telemetry, PTZ control over ONVIF, network camera discovery, and passwords stored in the Keychain. It also has a native Windows port, in C# and WPF.",
        status: "macOS and Windows · open source",
        tags: ["Swift", "macOS", "RTSP", "ffmpeg", "ONVIF", "C# / WPF"],
        links: [
          { label: "GitHub (macOS)", url: "https://github.com/LucasAlt40/CamBar" },
          { label: "GitHub (Windows)", url: "https://github.com/LucasAlt40/CamBar-Windows" },
        ],
      },
    ],
    experience: [
      {
        company: "CI&T",
        location: "Remote",
        role: "Mid-Level Software Engineer",
        start: "Sep. 2026",
        end: null,
        summary:
          "Project for one of the largest financial institutions in Brazil, on the corporate (PJ) Internet Banking channel, in the payments domain.",
        highlights: [
          "Build wire transfer (TED), Payment Order, and Account Credit flows for business customers.",
          "Java/Spring Boot microservices with event-driven communication through Apache Kafka.",
          "Angular frontend in a micro-frontend architecture.",
          "CI/CD pipelines, GitHub, and code reviews in a cross-functional squad.",
        ],
        tags: ["Java", "Spring Boot", "Kafka", "Microservices", "Angular", "Micro-frontends", "CI/CD", "GitHub"],
      },
      {
        company: "GS Tecnologia",
        location: "Remote",
        role: "Mid-Level Full Stack Developer",
        start: "May 2025",
        end: "Sep. 2026",
        summary:
          "Led the architecture and refactoring of a legacy VB6 logistics ERP into a modern web application used by a large transportation company with about 110 users. 6-person team.",
        highlights: [
          "Worked across about 17 modules: freight documents, CT-e, fiscal documents, shipment orders, and operational routines.",
          "Designed and maintained an internal framework (Angular, PrimeNG, Tailwind, Storybook) used by 2 teams and 5 projects.",
          "Built a CI/CD pipeline from scratch with GitHub Actions, Docker, and Linux.",
          "Introduced Spec-Driven Development to the team and created an AI-assisted pre-QA flow with MCP and Jira.",
          "Ran an internal training program on AI applied to software development.",
        ],
        tags: ["Angular 18+", ".NET C#", "SQL Server", "PrimeNG", "Tailwind", "Storybook", "Jest", "GitHub Actions", "Docker"],
      },
      {
        company: "Simples LTDA",
        location: "Araraquara, SP",
        role: "Full Stack Developer",
        start: "Oct. 2023",
        end: "May 2025",
        summary:
          "Built full stack applications for logistics, enterprise, and management systems, helping standardize frontend and backend architecture. 4-person team.",
        highlights: [
          "Worked on a smart fleet application (React, Zustand, Ant Design, .NET with Clean Architecture).",
          "Supported other teams in adopting best practices in Angular, TypeScript, .NET, and Java.",
          "Trained a cohort of 9 interns in Angular, JavaScript, and TypeScript.",
        ],
        tags: ["Angular", "React", "ASP.NET C#", "Spring Boot", "Zustand", "Ant Design", "Clean Architecture"],
      },
      {
        company: "Cognyte Software",
        location: "Florianópolis, SC · Remote",
        role: "Full Stack Developer Intern",
        start: "Nov. 2021",
        end: "Jul. 2023",
        summary:
          "Internship working on a lawful interception system, a security solution used by major telecom carriers in Brazil.",
        highlights: [
          "Bug fixes and improvements in React and Redux interfaces.",
          "Backend support with Java/Spring Boot and Oracle Database.",
          "Unit tests with Jest and React Testing Library.",
        ],
        tags: ["React", "Redux", "JavaScript", "Java", "Spring Boot", "Oracle", "Jest"],
      },
    ],
    skills: [
      { group: "Languages", items: ["Java", "TypeScript", "JavaScript", "C#", "Kotlin", "SQL", "PL/SQL"] },
      { group: "Frontend", items: ["Angular", "React", "Micro-frontends", "PrimeNG", "Tailwind CSS", "Storybook", "Ant Design", "Redux", "Zustand"] },
      { group: "Backend", items: ["Spring Boot", "ASP.NET / .NET", "Microservices", "Apache Kafka", "REST APIs"] },
      { group: "Architecture", items: ["Clean Architecture", "Domain-Driven Design", "Event-driven", "Design systems", "Internal frameworks"] },
      { group: "Databases", items: ["SQL Server", "Oracle", "PostgreSQL", "MySQL"] },
      { group: "DevOps & testing", items: ["Docker", "Linux", "GitHub Actions", "Git", "GitLab", "Jest", "Karma", "React Testing Library"] },
      { group: "AI in development", items: ["Claude Code", "OpenAI Codex", "Gemini", "MCP", "Spec-Driven Development", "AI agents"] },
    ],
    education: [
      { school: "Federal Institute of São Paulo (IFSP)", course: "Associate Degree in Internet Systems", period: "2023 – 2026", place: "Araraquara, SP" },
      { school: "Federal Institute of São Paulo (IFSP)", course: "Technical Degree in Informatics", period: "2021 – 2023", place: "Araraquara, SP" },
    ],
    languages: [
      { name: "Portuguese", level: "Native" },
      { name: "English", level: "Intermediate" },
    ],
  },
};

// Links e arquivos comuns aos dois idiomas
window.LINKS = {
  email: "lucas.alt40@gmail.com",
  github: "https://github.com/LucasAlt40",
  linkedin: "https://www.linkedin.com/in/lucasalt40/",
  cv: {
    pt: "assets/cv/Lucas_Theodoro_Curriculo_PT.pdf",
    en: "assets/cv/Lucas_Theodoro_Resume_EN.pdf",
  },
};
