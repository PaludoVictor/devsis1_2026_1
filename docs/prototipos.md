# 6. Protótipos de Telas

Esta seção apresenta a materialização visual do **Sistema de Gestão Pet Shop Amigo Fiel**, demonstrando a experiência de uso (UX) e os fluxos de interface (UI) planejados para os operadores do sistema.

---

## 💻 6.1 Visão Geral da Plataforma (Dashboard do Gestor)

O Painel de Controle Principal centraliza os principais indicadores operacionais em uma visualização rápida e moderna para o gerente e atendentes:

![Visão Geral da Plataforma](/slide_3.png)

### Principais Componentes do Dashboard:
1. **Gestão de Fluxo**: Integração nativa entre o agendamento de Banho & Tosa e o caixa de Vendas.
2. **Segurança de Dados**: Menu administrativo de acesso restrito a prontuários eletrônicos exclusivamente para médicos veterinários autenticados (com CRMV).
3. **Automação de Estoque**: Painel com alertas rápidos atualizados em tempo real sempre que produtos comerciais ou insumos de vacinas atingem a quantidade mínima de segurança.

---

## 🎨 6.2 Protótipos de Alta Fidelidade das Telas Principais

Apresentamos abaixo as **5 interfaces de usuário (UI)** chave projetadas para a operação diária do Pet Shop.

```carousel
### 👤 1. Tela de Cadastro/Consulta de Clientes e Pets
Esta tela permite que a recepção registre e consulte novos tutores e seus respectivos animais com agilidade:

![Cadastro de Clientes e Pets](/tela_clientes_pets.png)

* **Formulário de Tutor**: Campos organizados de fácil digitação para Nome, CPF (com máscara automática), Endereço e Telefone de contato rápido.
* **Seção de Pets Vinculados**: Exibe uma listagem visual de todos os animais vinculados ao CPF do tutor. Mostra foto, espécie (cão/gato), raça e idade do animal.
* **Linha de Histórico de Peso**: Gráfico linear simplificado (sparkline) acoplado ao perfil de cada pet para acompanhamento rápido da evolução física do animal ao longo de consultas anteriores.
<!-- slide -->
### 📅 2. Tela de Agendamento Dinâmico de Banho & Tosa
Interface desenvolvida em formato de calendário interativo para gerenciar a ocupação dos esteticistas do pet shop:

![Agendamento de Banho e Tosa](/tela_agendamento.png)

* **Calendário Semanal/Diário**: Grid que exibe visualmente os horários livres e ocupados de cada funcionário da estética.
* **Painel de Reserva Rápida**: Formulário lateral onde o atendente seleciona o Tutor, o Pet e o tipo de serviço (Banho Simples, Tosa Higiênica ou Completa).
* **Precificação Automática por Porte**: Exibição imediata no rodapé do cálculo de acréscimo automático de valor baseado no porte físico do pet selecionado (pequeno, médio ou grande), eliminando erros de cobrança manual na recepção.
<!-- slide -->
### 🩺 3. Ficha Clínica e Prontuário Eletrônico (Acesso Veterinário)
Ficha clínica de uso exclusivo do médico veterinário, projetada para ser minimalista e focada na usabilidade durante a consulta:

![Ficha Clínica e Prontuário](/tela_prontuario.png)

* **Autenticação de CRMV**: Exibição do perfil do médico veterinário responsável ativo e seu respectivo registro profissional, assegurando a legalidade de cada prontuário.
* **Área de Anamnese e Receituário**: Campos amplos de texto para anotação detalhada de sintomas relatados, diagnóstico clínico e prescrição detalhada de medicamentos.
* **Módulo de Aplicação de Imunizantes**: Menu para registro rápido da vacina aplicada, informando o número do lote do fabricante para fins de rastreabilidade sanitária.
* **Agendamento Inteligente de Revacinação**: Cálculo e exibição da data estimada para a próxima dose preventiva, programando automaticamente o lembrete na conta do tutor.
<!-- slide -->
### 📦 4. Controle de Estoque e Notificação de Estoque Crítico
Painel de controle logístico projetado para garantir que a clínica nunca sofra com falta de vacinas ou produtos de conveniência populares:

![Controle de Estoque](/tela_estoque.png)

* **Grade Geral de Produtos**: Listagem analítica por Código de Barras, Descrição, Preço, Quantidade Atual e Quantidade Mínima de Segurança.
* **Banners e Destaques de Estoque Crítico**: Destaca em cores de alerta (vermelho/amarelo) produtos que atingiram níveis inferiores à quantidade de segurança, com botão rápido de "Enviar Solicitação de Compra".
* **Gráficos de Tendência**: Exibição visual de consumo médio diário para auxiliar o gerente na tomada de decisão sobre novos pedidos de compra com fornecedores parceiros.
<!-- slide -->
### 🛒 5. Frente de Caixa (PDV) e Fechamento de Vendas (OS)
Interface de ponto de venda unificada, permitindo consolidar atendimentos clínicos, serviços estéticos e compras de conveniência em uma única transação comercial rápida:

![Frente de Caixa](/tela_checkout.png)

* **Carrinho de Compras Consolidado**: Detalhamento em lista de todos os serviços realizados (ex: consulta + banho) e produtos adquiridos (ex: ração premium + brinquedos).
* **Cálculo Consolidado**: Exibe o total geral bruto, descontos promocionais aplicados e o valor final líquido a ser faturado.
* **Seleção Prática de Pagamento**: Botões rápidos de toque na tela para seleção da modalidade financeira: Dinheiro, Cartão de Crédito ou Cartão de Débito, finalizando e gerando a Ordem de Serviço impressa ou digital para o Tutor.
```
