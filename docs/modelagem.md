# 4 & 5. Modelagem do Sistema

Esta seção apresenta a modelagem técnica do **Sistema de Gestão Pet Shop Amigo Fiel**, dividida entre o modelo de comportamento (Caso de Uso) e o modelo de persistência de dados (Entidade-Relacionamento).

---

## 4. Diagrama de Caso de Uso

O Diagrama de Caso de Uso mapeia como os diferentes atores interagem com as fronteiras funcionais do sistema:

![Diagrama de Caso de Uso](/caso_uso.jpeg)

---

### 4.1 Descrição de Casos de Uso (Detalhado)

Mapeamos e detalhamos os dois principais casos de uso críticos para o negócio:

#### 📂 UC01 - Agendar Serviço de Banho e Tosa
* **Descrição**: Permite o agendamento de serviços de estética para um pet, associando o tipo de serviço, profissional responsável e calculando o preço final com acréscimo proporcional por porte.
* **Atores**: *Atendente* (na recepção) ou *Cliente* (via Portal do Cliente).
* **Pré-condições**: Tutor e Pet já devem estar previamente cadastrados na base de dados com as informações de porte físico atualizadas.
* **Fluxo Principal**:
  1. O ator solicita a abertura da tela de agendamento de estética.
  2. O sistema solicita a identificação do Tutor (por CPF ou Nome) e do Pet correspondente.
  3. O ator seleciona o Pet e o tipo de serviço estético desejado: **Banho Simples**, **Tosa Higiênica** ou **Tosa Completa**.
  4. O sistema exibe os profissionais de estética disponíveis na data escolhida. O ator seleciona o esteticista responsável.
  5. O sistema recupera o porte físico do Pet (`pequeno`, `médio` ou `grande`) e calcula automaticamente o valor total estimado:
     * *Porte Pequeno*: $ValorFinal = ValorBase$
     * *Porte Médio*: $ValorFinal = ValorBase \times 1.20$ (20% de acréscimo)
     * *Porte Grande*: $ValorFinal = ValorBase \times 1.40$ (40% de acréscimo)
  6. O ator confirma as informações de data, horário e preço calculado.
  7. O sistema valida que o esteticista e o horário não possuem conflitos, reserva a agenda e altera o status do horário para "Reservado".
* **Fluxos Alternativos / Exceções**:
  * **FA01 - Pet sem Porte Cadastrado**: Se o cadastro do pet não contiver a informação de porte/peso, o sistema impede a finalização do agendamento e abre um atalho para edição imediata do prontuário físico do pet.
  * **FA02 - Conflito de Horário**: Caso o esteticista ou o horário selecionado já tenham sido reservados em outra transação paralela, o sistema notifica o ator e sugere os horários livres mais próximos do mesmo dia.
* **Pós-condições**: O horário é reservado na agenda do sistema, associando pet e profissional, e o valor do agendamento é lançado como item pendente na Ordem de Serviço daquele tutor.

---

#### 📂 UC02 - Realizar Atendimento Clínico e Preencher Prontuário
* **Descrição**: Permite a condução de consultas médicas por veterinários autenticados, com escrita restrita de sintomas, diagnósticos, tratamentos e agendamento de vacinas.
* **Atores**: *Médico Veterinário*.
* **Pré-condições**: O Veterinário deve estar logado no sistema com perfil ativo e número de CRMV registrado. O Pet deve estar em uma consulta ativa na clínica.
* **Fluxo Principal**:
  1. O Veterinário seleciona o Pet em atendimento na fila da clínica.
  2. O sistema exibe o histórico médico completo do pet (pesos anteriores, consultas antigas e histórico de vacinação).
  3. O Veterinário inicia o preenchimento da ficha de consulta e digita os **Sintomas** descritos e observados.
  4. O Veterinário registra o **Diagnóstico** clínico formal do animal.
  5. O Veterinário preenche a **Prescrição Médica** (medicamentos, posologia e exames necessários).
  6. *(Opcional)* Se houver vacinação em consulta, o Veterinário seleciona a vacina aplicada, registra o código do lote físico utilizado e confirma a aplicação.
  7. O Veterinário clica em "Finalizar Consulta".
  8. O sistema registra o atendimento, decrementa do estoque as vacinas utilizadas, calcula automaticamente a próxima data de revacinação e gera um alerta preventivo na conta do tutor.
* **Fluxos Alternativos / Exceções**:
  * **FA01 - Perfil Não Autorizado**: Caso um atendente ou gerente tente abrir a ficha de edição clínica de prontuário, o sistema exibe uma tela de erro de segurança e registra uma tentativa de violação de acessibilidade.
  * **FA02 - Falta de Insumo no Estoque**: Se a vacina selecionada não contiver saldo disponível no lote físico, o sistema alerta o veterinário para substituição do lote ou registro manual de reabastecimento urgente pelo gerente.
* **Pós-condições**: O prontuário clínico é bloqueado para edição após 24 horas (tornando-se um registro histórico imutável), o histórico de vacinas do pet é atualizado e o custo da consulta clínica é consolidado na OS ativa do Tutor.

---

## 5. Diagrama de Entidade e Relacionamento - ER

O modelo lógico do banco de dados relacional foi desenvolvido para assegurar integridade referencial robusta e consistência operacional em todas as áreas comerciais e clínicas do pet shop:

![Diagrama de Entidade e Relacionamento Completo](/der.png)

---

### 5.1 Análise Detalhada de Cardinalidade e Gargalos

Para resolver gargalos específicos mapeados na modelagem de negócios, estruturamos relacionamentos relacionais específicos divididos em três grandes áreas operacionais:

#### 🩺 1. Resolução de Gargalos Clínicos (Cardinalidade 1-N e 1-1)

Mapeamento focado em isolar e assegurar a integridade do prontuário médico animal:

* **Hierarquia de Tutela (Relação `cliente` e `pet` - 1:N)**:
  * **Explicação**: Um `cliente` (tutor) está associado a muitos (`N`) animais de estimação sob sua tutela jurídica e financeira. No entanto, cada `pet` está estritamente vinculado a um único (`1`) tutor responsável por meio do seu CPF. Isso evita conflitos legais de propriedade e centraliza todas as cobranças financeiras em uma única conta de faturamento.
* **O Registro Médico Obrigatório (Relação `atendimento` e `prontuario` - 1:1)**:
  * **Explicação**: Existe um relacionamento rígido de Um-para-Um (`1:1`) entre `atendimento` clínico e `prontuario`. Isso garante estruturalmente no banco de dados que é impossível faturar um atendimento clínico sem que haja o preenchimento obrigatório e correspondente de sintomas, diagnóstico e prescrição pelo veterinário. Não há prontuários órfãos e nem atendimentos sem documentação médica.

---

#### 📦 2. Estrutura de Vendas Comercial (Cardinalidade N-N)

Mapeamento que garante a escalabilidade das transações de caixa:

* **Flexibilidade Comercial (Relação `ordem_servico`, `itens_venda` e `produto` - N:N)**:
  * **Explicação**: Uma `ordem_servico` (OS ou Cupom de Venda) pode conter vários produtos e serviços vendidos de forma simultânea. Do mesmo modo, um `produto` pode constar em dezenas de ordens de serviços diferentes ao longo do tempo. Para sanar essa relação Muitos-para-Muitos (`N:N`), criamos a tabela associativa `itens_venda`, que armazena dados transacionais atômicos como quantidade vendida e subtotal calculado, permitindo a correta baixa física automática de estoques.

---

#### 💉 3. Linha do Tempo de Saúde Preventiva (Cardinalidade N-N)

Controle dinâmico de vacinação dos animais:

* **Histórico de Vacinas (Relação `pet`, `historico_vacinas` e `vacina` - N:N)**:
  * **Explicação**: Um `pet` receberá diversas vacinas preventivas ao longo de sua vida útil saudável, enquanto um tipo de `vacina` (ex: Antirrábica, V8) é aplicado em uma infinidade de pets cadastrados. Essa relação Muitos-para-Muitos é resolvida pela tabela associativa `historico_vacinas` que atua como o registro oficial médico da vacinação do animal, documentando a data exata da dose aplicada, lote do fabricante, o veterinário credenciado aplicador e a data programada para a próxima dose (revacinação preventiva).
