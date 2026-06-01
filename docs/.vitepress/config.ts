import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'pt-BR',
  title: 'Pet Shop Amigo Fiel',
  description: 'Documentação do Sistema de Gestão do Pet Shop Amigo Fiel',

  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js' }]
  ],

  themeConfig: {
    logo: '/logo_amigo_fiel.png', // Uses the newly generated circular logo
    siteTitle: 'Amigo Fiel',
    
    nav: [
      { text: 'Início', link: '/' },
      { text: 'Documento de Visão', link: '/introducao' },
      { text: 'Apresentação', link: '/apresentacao' },
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
      {
        text: 'Apresentação do Projeto',
        items: [
          { text: 'Apresentação & Modelagem', link: '/apresentacao' },
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

