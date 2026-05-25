import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'pt-BR',
  title: 'Pet Shop Amigo Fiel',
  description: 'Documentação do Sistema de Gestão do Pet Shop Amigo Fiel',

  themeConfig: {
    logo: '/slide_3.png', // Uses the mockup dashboard as a logo or custom logo if wanted
    siteTitle: 'Amigo Fiel',
    
    nav: [
      { text: 'Início', link: '/' },
      { text: 'Documentação', link: '/introducao' },
    ],

    sidebar: [
      {
        text: 'Documento de Visão',
        items: [
          { text: '1. Introdução', link: '/introducao' },
          { text: '2. Descrição do Projeto', link: '/descricao' },
          { text: '3. Recursos e Funcionalidades', link: '/recursos' },
          { text: '4 & 5. Modelagem do Sistema', link: '/modelagem' },
          { text: '6. Protótipos de Telas', link: '/prototipos' },
          { text: '7, 8 & 9. Planejamento e Custos', link: '/planejamento' },
          { text: '10. Considerações Finais', link: '/conclusao' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/PaludoVictor/devsis1_2026_1' }
    ],

    footer: {
      message: 'Trabalho de Desenvolvimento de Sistemas I - IFSC',
      copyright: 'Copyright © 2026 - Brenda, Caroline, Eloisa, Lucas, Samuel, Victor'
    }
  },
});
