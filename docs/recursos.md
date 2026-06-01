# 3. Recursos e Funcionalidades

Esta seção apresenta a especificação formal de Engenharia de Requisitos do **Sistema de Gestão Pet Shop Amigo Fiel**, mapeando as necessidades de negócios em funcionalidades específicas.

---

## 3.1 Requisitos Funcionais (RF)

Os Requisitos Funcionais descrevem as ações e comportamentos que o software deve ser capaz de realizar em resposta a interações dos usuários.

### 👤 Módulo de Cadastros e Acesso
* **RF01 - Cadastro de Clientes (Tutores)**: O sistema deve permitir registrar e consultar clientes contendo: Nome completo, CPF (único), Endereço completo e Telefone de contato.
* **RF02 - Cadastro de Pets**: O sistema deve permitir vincular um ou mais animais de estimação a um Tutor. Cada Pet conterá: Nome, Espécie (Cão, Gato, Outros), Raça, Data de Nascimento e histórico de medições de Peso.
* **RF03 - Controle de Acesso por Perfil**: O sistema deve restringir telas e ações com base no perfil logado:
  * *Veterinário*: Apenas perfis médicos podem criar, editar e visualizar prontuários eletrônicos protegidos.
  * *Atendente*: Módulo comercial de caixa, agendamento de estética e cadastro de clientes/pets.
  * *Gerente*: Acesso irrestrito incluindo faturamentos e controle analítico de estoque.

---

### 📅 Módulo de Banho & Tosa (Estética)
* **RF04 - Agendamento de Serviços Estéticos**: O sistema deve permitir agendar horários para Banho e Tosa, especificando data, hora, o pet associado, o tipo de serviço (Banho Simples, Tosa Higiênica, Tosa Completa) e o funcionário esteticista responsável.
* **RF05 - Cálculo de Preços por Porte**: O sistema deve calcular automaticamente o valor final do serviço somando ao valor base um **acréscimo proporcional** dependendo do porte cadastrado no perfil do pet:
  * *Porte Pequeno*: Sem acréscimo (valor base).
  * *Porte Médio*: Acréscimo padrão de 20% sobre o valor base.
  * *Porte Grande*: Acréscimo padrão de 40% sobre o valor base.

---

### 🩺 Módulo Clínico Veterinário
* **RF06 - Registro de Prontuário Eletrônico**: Durante o atendimento clínico, o sistema deve permitir que o Veterinário preencha uma ficha eletrônica contendo: Sintomas relatados, Diagnóstico médico detalhado e a Prescrição de medicamentos recomendados.
* **RF07 - Controle de Aplicação de Vacinas**: O sistema deve permitir registrar as vacinas aplicadas nos pets durante o atendimento, vinculando a vacina, o lote de fabricação, a data de aplicação e o veterinário aplicador.
* **RF08 - Alerta Preventivo de Revacinação**: O sistema deve calcular de forma automática as próximas datas estimadas de revacinação com base no tipo de imunizante aplicado e gerar alertas preventivos na tela inicial e no portal do tutor.

---

### 📦 Módulo de Loja de Conveniência e Estoque
* **RF09 - Controle de Estoque de Produtos**: O sistema deve manter o estoque de itens comerciais de conveniência (rações, brinquedos, acessórios) contendo: Código de Barras, Descrição, Preço de Venda, Quantidade Atual e Quantidade Mínima recomendada.
* **RF10 - Alerta de Estoque Crítico**: O sistema deve disparar notificações automáticas na tela inicial do Gerente sempre que o estoque de um produto atingir um nível igual ou inferior à quantidade mínima cadastrada.

---

### 🛒 Módulo Comercial (Ponto de Venda - PDV)
* **RF11 - Emissão de Ordem de Serviço (OS)**: O sistema deve possibilitar a consolidação de todas as despesas (itens de conveniência e serviços estéticos/clínicos) em um único cupom unificado de venda ou Ordem de Serviço para faturamento.
* **RF12 - Registro de Pagamentos**: No fechamento da OS, o sistema deve registrar a data e a forma de pagamento escolhida pelo cliente: Dinheiro, Cartão de Crédito ou Cartão de Débito.
* **RF13 - Relatórios de Faturamento e Auditoria**: O sistema deve gerar relatórios mensais analíticos para o Gerente contendo:
  * Faturamento total agrupado por forma de pagamento.
  * Ranking dos serviços mais procurados no período.
  * Listagem de clientes inativos (sem nenhuma OS cadastrada) há mais de 3 meses.

---

### 🌐 Portal do Cliente (Tutor)
* **RF14 - Consulta de Histórico Online**: O sistema deve disponibilizar um portal web onde o Tutor (cliente) pode consultar o histórico de vacinas de seus pets e visualizar prontuários clínicos que tenham sido explicitamente liberados para visualização externa pelo Veterinário.
* **RF15 - Solicitação de Agendamento Online**: O Tutor poderá verificar horários livres e solicitar o agendamento de Banho e Tosa através do portal, pendente de aprovação por um atendente físico na recepção.

---

## 3.2 Requisitos Não Funcionais (RNF)

Os Requisitos Não Funcionais especificam as propriedades qualitativas, restrições e critérios técnicos que o sistema como um todo deve atender.

| Identificador | Requisito Não Funcional | Categoria | Critério Técnico de Aceitação |
| :--- | :--- | :--- | :--- |
| **RNF01** | **Segurança de Dados Clínicos** | Segurança | A gravação e alteração de prontuários eletrônicos deve exigir autenticação de dois fatores e cruzamento com um CRMV ativo. Apenas o veterinário responsável pode editar o prontuário por até 24h após a consulta. |
| **RNF02** | **Desempenho e Velocidade** | Performance | As consultas de listagem de estoque ou cadastro de clientes devem retornar dados em menos de 1,5 segundos sob carga normal de trabalho. |
| **RNF03** | **Disponibilidade e Hospedagem** | Confiabilidade | A aplicação web e o portal do cliente devem ser hospedados na plataforma **Vercel** com garantia de 99.9% de uptime (disponibilidade de acesso). |
| **RNF04** | **Arquitetura Estática (VitePress)** | Portabilidade | A documentação técnica do projeto deve ser gerada estaticamente com **VitePress**, garantindo SEO otimizado e carregamento instantâneo em navegadores. |
| **RNF05** | **Responsividade de Interface** | Usabilidade | A interface do portal do cliente e das telas administrativas deve ser 100% responsiva (Mobile-First), funcionando com fluidez em smartphones, tablets e desktops. |
| **RNF06** | **Integridade de Dados Relacionais** | Confiabilidade | O banco de dados deve utilizar transações atômicas estruturadas para impedir inconsistências: uma Ordem de Serviço só pode ser concluída se houver decremento bem-sucedido dos estoques envolvidos. |
| **RNF07** | **Escalabilidade da Infraestrutura** | Arquitetura | A infraestrutura do banco de dados relacional e serviços auxiliares na nuvem deve ser projetada modularmente, suportando escalabilidade horizontal automática para atender picos de acesso. |
| **RNF08** | **Acessibilidade Digital (WCAG)** | Usabilidade | A interface pública do Portal do Cliente deve seguir as diretrizes de acessibilidade do WCAG 2.1 nível AA, garantindo navegação por teclado e compatibilidade com leitores de tela para tutores com deficiências. |
| **RNF09** | **Qualidade e Cobertura de Código** | Manutenibilidade | A arquitetura de software deve adotar princípios de Clean Code e SOLID, assegurando uma cobertura mínima de 80% em testes unitários automatizados nas regras de faturamento, cálculo de porte e estoque crítico. |
| **RNF10** | **Política de Backup e Disaster Recovery** | Confiabilidade | O sistema deve realizar backups incrementais diários e completos semanais de forma automatizada na nuvem, com tempo objetivo de recuperação (RTO) inferior a 2 horas em caso de desastres. |
