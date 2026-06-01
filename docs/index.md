---
layout: home

hero:
  name: "Pet Shop Amigo Fiel"
  text: "Sistema de Gestão Integrada"
  tagline: "Uma plataforma unificada para otimizar o fluxo de clientes, atendimentos clínicos, controle de estoque crítico e vendas."
  image:
    src: /slide_3.png
    alt: Mockup do Painel de Controle Amigo Fiel
  actions:
    - theme: brand
      text: "Documento de Visão"
      link: /introducao
    - theme: alt
      text: "Apresentação & Modelos"
      link: /apresentacao
    - theme: alt
      text: "GitHub"
      link: https://github.com/PaludoVictor/devsis1_2026_1

features:
  - icon: 🩺
    title: "Gestão Clínica Veterinária"
    details: "Prontuários eletrônicos protegidos, restritos a médicos veterinários via CRMV, com histórico de vacinas e alertas."
  - icon: 📅
    title: "Agendamento Inteligente"
    details: "Agendamentos integrados de Banho & Tosa com cálculo automático de acréscimo proporcional ao porte do animal."
  - icon: 📦
    title: "Estoque e Loja de Conveniência"
    details: "Alertas automáticos para produtos com nível crítico de estoque e PDV completo integrado com serviços."
---

# Sobre o Projeto Amigo Fiel

O **Sistema de Gestão Pet Shop Amigo Fiel** é um software desenvolvido para informatizar, centralizar e otimizar todas as operações de uma clínica veterinária e pet shop moderno. Nascido como parte da disciplina de **Desenvolvimento de Sistemas I** no Instituto Federal de Santa Catarina (IFSC), o projeto visa resolver gargalos operacionais reais de clínicas e lojas de conveniência de pets.

---

## 👥 Equipe de Desenvolvimento
Nosso projeto foi idealizado e construído por:
* **Brenda Dick**
* **Caroline Matte**
* **Eloisa dos Santos**
* **Lucas Fernandes**
* **Samuel Mittanck**
* **Victor Paludo**

---

## 📊 Estrutura e Explicação dos Artefatos de Modelagem
Conforme as diretrizes de avaliação do projeto, detalhamos abaixo o papel e a relevância de cada um dos quatro pilares estratégicos de modelagem que guiam o desenvolvimento do software.

::: info 💡 O que representam os nossos artefatos?
A modelagem serve para materializar a estratégia comercial e traduzi-la em requisitos de arquitetura e interface de software antes da codificação.
:::

```carousel
### 📋 1. Business Model Canvas (Canva)
O Business Model Canvas (Canva) representa a **estratégia de negócio que sustenta o sistema**. Ele divide a lógica operacional em duas frentes complementares:
* **Lado da Operação**: Identifica as **Parcerias Principais** (fornecedores de vacinas e rações), as **Atividades Principais** (serviços de atendimento clínico, banho/tosa e reposição de estoque) e os **Recursos Principais** (veterinários portadores de CRMV e a infraestrutura do sistema).
* **Lado do Cliente**: Mapeia o **Relacionamento** (atendimento humanizado, alertas preventivos), os **Canais** (portal do cliente e terminal físico) e os **Segmentos de Clientes** (tutores exigentes e clientes de conveniência).
* **Fundação Econômica**: Define as **Fontes de Receita** (consultas, planos de vacina, venda de produtos e banho por porte) e as **Estruturas de Custos** (manutenção técnica e salários da equipe).
<!-- slide -->
### 👥 2. Diagrama de Caso de Uso
O Diagrama de Caso de Uso mapeia as **fronteiras do sistema** e as interações entre os atores externos e os comportamentos internos do software:
* **Atores Mapeados**: *Cliente* (interage via portal para agendar ou verificar vacinas), *Atendente* (opera vendas, agenda banhos), *Veterinário* (prescreve receitas e vacinas com acesso restrito) e *Gerente* (acessa relatórios de faturamento).
* **Fluxos de Interação**: Demonstra como os processos se acoplam. Por exemplo, o caso de uso `Agendar Serviço de Banho e Tosa` inclui obrigatoriamente a funcionalidade de `Selecionar Funcionário` e estende condicionalmente a aplicação de taxas de porte.
* **Garantia de Segurança**: O diagrama visualiza de forma clara que apenas o ator *Veterinário* é capaz de `Preencher Prontuário Eletrônico`, protegendo o sigilo e a legalidade das consultas.
<!-- slide -->
### 🗄️ 3. Diagrama de Entidade e Relacionamento (ER / Classes)
O modelo de banco de dados do sistema foi arquitetado para garantir a **consistência lógica e a saúde dos dados operacionais**:
* **Resolução de Gargalos Clínicos**: Mapeamos uma relação de 1-N (Um-para-Muitos) entre `cliente` e `pet` (um CPF gerencia múltiplos animais com seu histórico de peso individual) e de 1-1 (Um-para-Um) rígido entre `atendimento` e `prontuario` (um atendimento gera obrigatoriamente um único prontuário de sintomas e prescrições).
* **Estrutura de Vendas N-N**: A relação de vendas é tratada de forma associativa através da tabela intermediária `itens_venda` conectando `ordem_servico` e `produto` de forma escalável e atômica.
* **Linha do Tempo Preventiva**: A vacinação utiliza a tabela associativa `historico_vacinas` entre `pet` e `vacina` para controlar doses aplicadas, fabricantes e alertas inteligentes de revacinação.
<!-- slide -->
### 🎨 4. Protótipos de Interfaces (Telas)
Os protótipos de alta fidelidade representam a **experiência do usuário (UX/UI)** materializada. Eles garantem que o sistema seja intuitivo e atenda à rotina rápida dos funcionários do pet shop:
* **Dashboard do Gestor**: Exibe em tempo real alertas de reposição, faturamento e fluxo do dia.
* **Tela de Agendamento Dinâmico**: Permite ao atendente arrastar compromissos na agenda e ver o acréscimo de porte calculado automaticamente no rodapé.
* **Prontuário Rápido**: Interface minimalista com atalhos de digitação rápida para veterinários preencherem sintomas e emitirem prescrições digitais eficientes.
```

---

<div style="text-align: center; margin-top: 3rem; display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
  <a href="/introducao" style="background-color: var(--vp-c-brand); color: white; padding: 0.8rem 1.8rem; border-radius: 8px; text-decoration: none; font-weight: bold; transition: all 0.2s;">Ir para a Introdução ➜</a>
  <a href="/apresentacao" style="background-color: var(--vp-c-brand-soft); color: var(--vp-c-brand); padding: 0.8rem 1.8rem; border-radius: 8px; text-decoration: none; font-weight: bold; transition: all 0.2s;">Ver Apresentação & Modelos 📽️</a>
</div>
