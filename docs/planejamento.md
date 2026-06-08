# 7, 8 & 9. Planejamento, Riscos e Custos

Esta seção detalha o planejamento estratégico do projeto, englobando a linha do tempo (Cronograma), o mapeamento de incertezas operacionais (Riscos) e o planejamento financeiro inicial (Custos).

---

## 7. Cronograma e Entrega

Estruturamos o desenvolvimento do **Sistema de Gestão Pet Shop Amigo Fiel** em uma linha do tempo lógica de **14 semanas**, dividida em 5 fases principais com marcos de entrega bem definidos:

### Fases de Desenvolvimento:

| Fase | Descrição da Atividade | Duração | Data de Início | Data de Fim |
| :--- | :--- | :--- | :--- | :--- |
| **Fase 1** | **Concepção e Requisitos**: Elaboração do Minimundo, Canvas, Requisitos (RF/RNF) e Documento de Visão inicial. | 2 Semanas | 01/03/2026 | 14/03/2026 |
| **Fase 2** | **Modelagem e Arquitetura**: Criação dos diagramas de Caso de Uso e Entidade-Relacionamento (ER). Design dos protótipos de interface. | 3 Semanas | 15/03/2026 | 04/04/2026 |
| **Fase 3** | **Desenvolvimento Base**: Configuração do banco de dados relacional e desenvolvimento do front-end do painel administrativo. | 4 Semanas | 05/04/2026 | 02/05/2026 |
| **Fase 4** | **Desenvolvimento Avançado**: Integração de regras de negócio (cálculo de porte, restrições CRMV, alertas de estoque) e Portal do Cliente. | 3 Semanas | 03/05/2026 | 23/05/2026 |
| **Fase 5** | **Testes e Homologação**: Testes de caixa-preta, testes de usabilidade com veterinários/atendentes e publicação final na Vercel. | 2 Semanas | 24/05/2026 | 06/06/2026 |

---

### Marcos de Entrega:
* **M1 - Concepção Concluída (Semana 2)**: Entrega do Documento de Visão e validação do Minimundo pela gerência.
* **M2 - Design Validado (Semana 5)**: Aprovação dos diagramas e homologação visual dos protótipos de alta fidelidade no Figma.
* **M3 - Protótipo Funcional (Semana 9)**: Telas principais operando com dados mockados em ambiente de desenvolvimento local.
* **M4 - Homologação Final (Semana 14)**: Sistema publicado na **Vercel** com banco de dados ativo e treinamento da equipe concluído.

---

## 8. Riscos e Mitigação

Identificamos os principais riscos associados ao sucesso da implementação do software e estabelecemos estratégias preventivas de contingência:

| Descrição do Risco | Probabilidade | Impacto | Ação de Mitigação Preventiva | Plano de Contingência (Caso ocorra) |
| :--- | :--- | :--- | :--- | :--- |
| **Atraso na liberação de edições de prontuários** (complexidade técnica em travar edições após 24h). | Média | Alto | Modelar rigorosamente a tabela de banco de dados com gatilhos (`triggers`) temporais automáticos. | Criar script manual para o gerente forçar o bloqueio imediato do prontuário caso a rotina automática falhe. |
| **Resistência de uso pelos Veterinários** (alegação de que o prontuário digital atrasa as consultas). | Média | Médio | Envolver a equipe médica na validação do design da tela de prontuário, priorizando atalhos de digitação rápida. | Realizar sessões individuais de treinamento presencial e disponibilizar um canal de feedback rápido de usabilidade. |
| **Falhas no cálculo automático de preços** (atendentes aplicando descontos errados ou porte incorreto). | Baixa | Alto | Implementar testes automatizados unitários rígidos que testam exaustivamente diferentes portes de animais cadastrados. | Disponibilizar um log de auditoria no módulo do gerente exibindo todas as OS em que o preço calculado foi sobrescrito manualmente. |
| **Falta de Insumos Críticos (Vacinas)** (quebra no estoque de segurança por falha humana). | Média | Alto | Configurar alertas automatizados de "Estoque Crítico" na tela inicial do gerente com 15 dias de margem histórica. | O sistema envia automaticamente um e-mail de alerta de recompra direta aos fornecedores parceiros cadastrados. |

---

## 9. Custos e Orçamento

Apresentamos a estimativa orçamentária para a construção, implantação e manutenção técnica inicial do sistema por um período de **12 meses**. 

Como base de cálculo, foi utilizado o **valor-hora médio de um programador pleno no Brasil de R$ 80,00** (faixa de mercado entre R$ 60,00 e R$ 120,00). O esforço estimado para a equipe de 6 desenvolvedores (dedicando 10 horas semanais por membro ao longo das 14 semanas do projeto) totaliza **840 horas**.

### 🛠️ Custos de Desenvolvimento (Investimento Inicial)
* **Design de UI/UX e Modelagem** (Fase 2 - 180 horas da equipe): R$ 14.400,00
* **Desenvolvimento de Software** (Fases 3 e 4 - 420 horas da equipe): R$ 33.600,00
* **Gestão de Projeto, Requisitos e Homologação** (Fases 1 e 5 - 240 horas da equipe): R$ 19.200,00
* **Total do Investimento de Implantação**: **R$ 67.200,00** (840h @ R$ 80,00/h)

---

### 🌐 Custos de Infraestrutura e Licenciamento (Mensais)
* **Hospedagem na Vercel (Plano Pro/Team)**: R$ 120,00 / mês.
* **Banco de Dados PostgreSQL Gerenciado (ex: Supabase/AWS)**: R$ 150,00 / mês.
* **Ferramentas de Suporte (Figma, GitHub Team)**: R$ 80,00 / mês.
* **Manutenção Técnica e Suporte (10h semanais / 40h mensais @ R$ 80,00/h)**: R$ 3.200,00 / mês.
* **Total de Custeio Operacional**: **R$ 3.550,00 / mês** (Totalizando R$ 42.600,00 ao ano).

::: tip 💡 Viabilidade Financeira
Considerando que o sistema automatiza o faturamento por porte (recuperando perdas de faturamento estimadas em 15% por erros manuais) e reduz em 30% a perda de vacinas vencidas por falta de controle de lotes, o Retorno sobre o Investimento (ROI) é estimado em **24 meses** após a implantação completa.
:::
