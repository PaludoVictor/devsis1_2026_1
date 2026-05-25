# 2. Descrição do Projeto

Esta seção detalha o alinhamento estratégico do **Sistema de Gestão Pet Shop Amigo Fiel** sob a ótica de negócios e engajamento de partes interessadas (stakeholders).

---

## 2.1 Visão Geral do Projeto

O **Pet Shop Amigo Fiel** opera em um setor dinâmico e de rápido crescimento, unindo saúde clínica animal, serviços de estética e varejo de conveniência. Atualmente, a falta de integração dessas operações gera gargalos de faturamento, atrasos em atendimentos e dificuldades no controle de estoque de insumos críticos.

A implantação da plataforma integrada visa unificar esses três pilares:
1. **Atendimento Veterinário**: Assegurando confidencialidade médica por meio de permissões exclusivas a veterinários credenciados.
2. **Estética (Banho & Tosa)**: Automatizando a precificação proporcional e a agenda de execução de forma integrada à equipe.
3. **Ponto de Venda e Conveniência**: Otimizando o controle de estoque de produtos e unificando serviços e compras em uma fatura integrada ao cliente.

---

### 2.1.1 Canvas do Projeto (Business Model Canvas)

O Canvas abaixo resume a modelagem da estratégia de negócio e como a plataforma técnica dá suporte direto aos processos operacionais e de geração de receitas:

![Business Model Canvas](/slide_2.png)

#### Análise Detalhada dos Quadrantes do Canvas:

1. **Proposta de Valor**:
   * **O que oferecemos**: Gestão centralizada e integrada da saúde, bem-estar e alimentação do animal em um único local.
   * **Diferencial**: O histórico unificado de consultas e peso, associado a um agendamento inteligente e alertas preventivos de vacinação, proporciona comodidade real ao tutor.

2. **Segmentos de Clientes**:
   * **Tutores de pets**: Indivíduos que buscam serviços de saúde e estética de alta confiança.
   * **Clientes de conveniência**: Clientes de passagem que frequentam a loja física para comprar produtos rápidos, rações ou acessórios.

3. **Canais**:
   * **Atendimento no Balcão**: Canal tradicional presencial na recepção da loja física.
   * **Portal do Cliente Online**: Canal digital que permite agendamento remoto de serviços e consulta simplificada do histórico de vacinas e exames do pet.

4. **Relacionamento com o Cliente**:
   * **Alertas Preventivos Automatizados**: Notificações automáticas sobre datas de revacinação e confirmações de horário, evitando o absenteísmo.
   * **Acompanhamento Médico e Físico**: Acesso liberado aos prontuários clínicos autorizados pelo veterinário diretamente no portal.

5. **Atividades Principais**:
   * **Prestação de Serviços Veterinários**: Realização de exames, consultas gerais e aplicação de vacinas.
   * **Estética Animal**: Execução de banho simples, tosa higiênica e tosa completa por profissionais de estética.
   * **Controle Rigoroso de Estoque**: Gerenciamento de entrada e saída de insumos de saúde (vacinas) e produtos comerciais.

6. **Recursos Principais**:
   * **Capital Humano**: Médicos veterinários ativos portadores de CRMV e atendentes capacitados.
   * **Infraestrutura**: Plataforma digital de gestão integrada unificando clínica, estética, caixa e estoque.

7. **Parcerias Principais**:
   * **Fornecedores**: Distribuidores de medicamentos veterinários, vacinas, marcas de ração e acessórios pet para a loja.

8. **Estrutura de Custos**:
   * **Recursos Humanos**: Custos salariais e comissões de especialistas de estética e veterinários credenciados.
   * **Operação Física e Tecnológica**: Manutenção da infraestrutura da clínica e custos de hospedagem da plataforma web.

9. **Fontes de Receita**:
   * **Serviços de Estética**: Faturamento por banho e tosa parametrizado por porte físico do animal (pequeno, médio, grande).
   * **Consultas Clínicas**: Honorários de atendimentos clínicos especializados.
   * **Loja de Conveniência**: Venda direta de produtos, rações, brinquedos e aplicação de vacinas recomendadas.

---

## 2.2 Stakeholders

Para garantir que o software atenda às expectativas de todos os envolvidos, mapeamos os principais stakeholders do projeto, seus papéis, interesses e o impacto gerado pela nova ferramenta:

| Nome do Stakeholder | Papel no Projeto | Interesse Principal no Sistema | Nível de Impacto no Software |
| :--- | :--- | :--- | :--- |
| **Gerente / Proprietário** | Administrador Geral | Acesso a relatórios de faturamento mensais simplificados, análises de serviços mais demandados, alertas de estoque mínimo crítico e auditoria de vendas. | **Altíssimo** (Decisor e mantenedor da plataforma) |
| **Médico Veterinário** | Operador Técnico da Saúde | Registro rápido e eficiente de sintomas, diagnósticos e receitas em prontuários eletrônicos protegidos. Consulta a históricos clínicos e registro seguro de vacinas. | **Alto** (Necessita de restrições rígidas via CRMV e usabilidade focada) |
| **Atendente de Recepção** | Operador Comercial e de Caixa | Agilização no cadastro de clientes/pets, facilidade no agendamento de serviços, precificação correta sem erros manuais de porte e agilidade no fechamento de OS (PDV). | **Alto** (Principal operador diário dos módulos de caixa e cadastro) |
| **Tutor do Pet (Cliente)** | Usuário Final do Portal | Facilidade no agendamento online de serviços estéticos, consulta direta a receitas médicas e acompanhamento preventivo das vacinas de seu pet. | **Médio** (Consumidor das funcionalidades externas e receptor de alertas) |
| **Equipe de Desenvolvimento** | Desenvolvedores / Analistas | Especificações de engenharia de requisitos bem delimitadas para programar a lógica de negócios e as regras de banco de dados sem ambiguidades. | **Altíssimo** (Criadores do artefato técnico final) |
