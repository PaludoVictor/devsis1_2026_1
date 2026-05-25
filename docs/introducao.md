# 1. Introdução

Esta documentação apresenta o **Documento de Visão** do **Sistema de Gestão Pet Shop Amigo Fiel**, elaborado de acordo com os padrões formais de Engenharia de Requisitos para o desenvolvimento de softwares sob medida.

---

## 📝 Minimundo do Projeto

O texto abaixo descreve o funcionamento operacional do Pet Shop e as diretrizes do sistema a ser desenvolvido:

> [!NOTE] **Minimundo: Sistema de Gestão Pet Shop Amigo Fiel**
>
> O **Pet Shop Amigo Fiel** deseja informatizar suas operações para gerenciar melhor o fluxo de clientes, atendimentos veterinários e vendas de produtos. O sistema deve permitir o cadastro detalhado de clientes, armazenando nome, CPF, endereço e telefone. Cada cliente pode possuir um ou mais pets, sendo necessário registrar o nome, espécie (cão, gato, etc.), raça, data de nascimento e o histórico de peso de cada animal.
>
> A principal atividade do estabelecimento é a prestação de serviços, dividida em duas frentes: **Banho & Tosa** e **Atendimento Clínico**. Para o Banho & Tosa, o sistema deve permitir o agendamento de horários, especificando o tipo de serviço (banho simples, tosa higiênica ou completa) e o funcionário responsável. Cada serviço possui um valor base que sofre acréscimos dependendo do porte do animal (pequeno, médio ou grande). No setor clínico, o sistema registra consultas realizadas por veterinários cadastrados com seu respectivo CRMV. Durante a consulta, o veterinário deve preencher um prontuário eletrônico contendo sintomas, diagnóstico e a prescrição de medicamentos. O sistema também controla o estoque de vacinas, registrando as doses aplicadas e emitindo alertas para as próximas datas de revacinação.
>
> Além dos serviços, o pet shop possui uma **loja de conveniência** com controle de estoque de produtos (rações, brinquedos, acessórios), incluindo código de barras, descrição, preço e quantidade mínima. Quando um produto atinge o nível crítico, o sistema gera um aviso automático para o gerente. Todas as vendas e serviços são consolidados em uma "Ordem de Serviço" ou "Cupom de Venda", registrando a data e a forma de pagamento (dinheiro, cartão ou débito). O gerente terá acesso a relatórios mensais de faturamento, serviços mais procurados e lista de clientes inativos há mais de três meses.
>
> O sistema contará com um **Portal do Cliente**, onde os tutores poderão consultar o histórico de vacinação, visualizar prontuários liberados e agendar serviços diretamente online. O sistema também integrará um controle de acesso para funcionários, onde as permissões de edição de prontuários serão restritas aos veterinários, enquanto a gestão de estoque e vendas será de responsabilidade dos atendentes e do gerente, garantindo a integridade dos dados e a segurança das informações clínicas dos animais.

---

## 1.1 Objetivo

O objetivo principal deste projeto é desenvolver e implementar uma plataforma integrada de gestão para o **Pet Shop Amigo Fiel**. O software busca automatizar tarefas manuais, centralizar as informações clínicas e comerciais, e melhorar a fidelidade do cliente através de um portal web de autoatendimento.

### Objetivos Específicos:
* **Automatização Operacional**: Reduzir em 90% o uso de fichas de papel para agendamento de banho e tosa e fichas clínicas até o segundo mês de implantação.
* **Consistência de Cobrança**: Eliminar discrepâncias no faturamento aplicando acréscimos automáticos de serviços baseados no porte do animal cadastrado.
* **Controle de Estoque Inteligente**: Garantir zero interrupções de estoque de vacinas e produtos críticos de conveniência por meio de alertas automáticos em tempo real ao gerente.
* **Segurança e Privacidade**: Restringir acessos a informações clínicas sigilosas de prontuários médicos exclusivamente a profissionais veterinários ativos com CRMV.
* **Engajamento de Clientes**: Disponibilizar o histórico de vacinas e agendamento online para os tutores, reduzindo em 30% as faltas em serviços agendados por meio de lembretes preventivos.

---

## 1.2 Escopo

O escopo do sistema abrange todas as atividades comerciais, clínicas e administrativas do **Pet Shop Amigo Fiel**, dividindo-se entre áreas internas da empresa e canais voltados ao consumidor final.

### O que está no Escopo (In-Scope):
* **Módulo de Cadastros**: Clientes/Tutores, Pets (com pesos históricos), Funcionários e Veterinários (com CRMV).
* **Módulo de Banho & Tosa**: Gestão da agenda de banho e tosa, parametrização de valores por tipo de serviço e fator de acréscimo proporcional por porte do pet.
* **Módulo Clínico Veterinário**: Abertura de atendimentos clínicos, prontuário eletrônico completo (sintomas, diagnósticos, tratamentos, prescrições de remédios) e acompanhamento de vacinação (lotes aplicados e próximas datas sugeridas).
* **Módulo de Venda e Frente de Caixa (PDV)**: Consolidar serviços e itens de conveniência em uma única Ordem de Serviço, suportando dinheiro, cartões de crédito/débito.
* **Módulo de Estoque**: Cadastro de produtos de conveniência com código de barras, estoque mínimo, avisos de reposição ao gerente quando as quantidades atingem nível crítico.
* **Módulo de Relatórios**: Faturamento mensal geral, serviços de maior procura e listagem analítica de clientes inativos por mais de 90 dias.
* **Portal do Cliente**: Acesso exclusivo para tutores visualizarem prontuários liberados pelos veterinários, histórico de vacinas e agendamento de serviços online.

### O que NÃO está no Escopo (Out-of-Scope):
* Emissão de Notas Fiscais Eletrônicas de Serviço (NFS-e) ou de Produto (NF-e) integradas diretamente à Receita Federal (serão tratadas externamente nesta primeira versão).
* Processamento de pagamentos online por cartão dentro do Portal do Cliente (agendamento é feito online, mas o pagamento é finalizado fisicamente no balcão).
* Gestão complexa de folha de pagamento de funcionários ou contabilidade interna integral.

---

## 1.3 Definições, Acrônimos e Abreviações

A tabela abaixo define os termos técnicos e organizacionais empregados nesta documentação:

| Termo / Acrônimo | Definição |
| :--- | :--- |
| **CRMV** | Conselho Regional de Medicina Veterinária. Órgão que regulamenta e fiscaliza o exercício profissional de médicos veterinários no Brasil. |
| **PDV** | Ponto de Venda (Frente de Caixa). Módulo responsável por consolidar e finalizar o pagamento das compras. |
| **Tutor** | Termo utilizado no sistema para se referir ao Cliente/Proprietário legal do animal de estimação (Pet). |
| **Minimundo** | Descrição em linguagem natural que resume o funcionamento, as regras de negócio e os limites de atuação de um domínio a ser modelado. |
| **OS (Ordem de Serviço)** | Documento que unifica a venda de produtos e a realização de serviços associados a um pet em um único fechamento comercial. |
| **Estoque Crítico** | Estado de um produto de conveniência no estoque quando sua quantidade atual se iguala ou é menor do que a quantidade mínima definida para segurança operacional. |
| **ER (Entidade-Relacionamento)** | Modelo de dados conceitual que descreve como as tabelas (entidades) se organizam e se relacionam no banco de dados. |

---

## 1.4 Público-alvo

Este documento destina-se a orientar e servir de referência para:
1. **Equipe de Desenvolvimento**: Programadores, designers de interface e arquitetos de banco de dados responsáveis por construir o software conforme os requisitos acordados.
2. **Professor e Avaliadores (IFSC)**: Para fins de validação técnica do processo de análise e desenvolvimento de sistemas conduzido pelo grupo.
3. **Gerência do Pet Shop Amigo Fiel**: Decisores do estabelecimento para validação dos fluxos operacionais e validação do retorno sobre o investimento (ROI).
4. **Usuários Finais**: Recepcionistas, atendentes de banho e tosa, e médicos veterinários que utilizarão o sistema na sua rotina diária de trabalho.
