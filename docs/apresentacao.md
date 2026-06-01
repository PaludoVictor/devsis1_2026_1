# Apresentação do Projeto & Modelagem

Esta seção centraliza todos os artefatos de negócios, diagramas estruturais e protótipos do **Sistema de Gestão Pet Shop Amigo Fiel**. Conforme as diretrizes de avaliação, explicamos abaixo a estratégia comercial (Canva), o comportamento do software (Casos de Uso), a arquitetura de dados (ER/Classes) e os protótipos de interface.

---

## 🎨 1. Identidade Visual e Logos (Espaço Reservado)

Abaixo estão os espaços separados e configurados para as futuras logos oficiais da marca do **Pet Shop Amigo Fiel**. Assim que as imagens forem geradas, basta salvá-las na pasta `/docs/public/` substituindo os arquivos correspondentes.

<div class="container my-4">
  <div class="row g-3">
    <!-- Logo Principal Light -->
    <div class="col-md-4">
      <div class="card h-100 text-center shadow-sm">
        <div class="card-body d-flex flex-column justify-content-center align-items-center py-4 bg-light text-dark">
          <img src="/logo_amigo_fiel.png" class="img-fluid rounded-circle mb-3 shadow" style="max-height: 120px; max-width: 120px; border: 4px solid #2d6a4f;" alt="Logo Amigo Fiel Light" />
          <h6 class="card-title fw-bold mb-1">Logo Principal (Fundo Verde)</h6>
          <span class="badge bg-secondary mb-2">500 x 500 px</span>
          <p class="card-text small text-muted mb-0">Silhueta do cãozinho sorridente em espaço negativo integrado a um círculo verde floresta.</p>
        </div>
      </div>
    </div>
    <!-- Logo Principal Dark -->
    <div class="col-md-4">
      <div class="card h-100 text-center shadow-sm bg-dark text-white">
        <div class="card-body d-flex flex-column justify-content-center align-items-center py-4">
          <img src="/logo_amigo_fiel.png" class="img-fluid rounded-circle mb-3 shadow" style="max-height: 120px; max-width: 120px; border: 4px solid #8b5a2b;" alt="Logo Amigo Fiel Dark" />
          <h6 class="card-title fw-bold mb-1 text-white">Logo Principal (Fundo Marrom)</h6>
          <span class="badge bg-warning text-dark mb-2">500 x 500 px</span>
          <p class="card-text small text-muted mb-0 text-white-50">Combinação da logo com a borda de suporte em marrom chocolate para uso em modo escuro.</p>
        </div>
      </div>
    </div>
    <!-- Favicon / Ícone Simplificado -->
    <div class="col-md-4">
      <div class="card h-100 text-center shadow-sm">
        <div class="card-body d-flex flex-column justify-content-center align-items-center py-4 bg-light text-dark">
          <img src="/logo_amigo_fiel.png" class="img-fluid rounded-circle mb-3 shadow" style="max-height: 64px; max-width: 64px;" alt="Logo Amigo Fiel Favicon" />
          <h6 class="card-title fw-bold mb-1">Favicon / App Icon</h6>
          <span class="badge bg-primary mb-2">64 x 64 px</span>
          <p class="card-text small text-muted mb-0">Miniatura circular otimizada para abas de navegadores e ícones de atalho mobile.</p>
        </div>
      </div>
    </div>
  </div>
</div>

---

### 🎨 1.1 Definição da Nova Identidade Visual (Verde & Marrom)

A paleta de cores do **Pet Shop Amigo Fiel** foi pensada para criar uma ponte harmônica entre o rigor clínico e o cuidado amoroso:

<div class="container my-4">
  <div class="row g-3">
    <!-- Cor 1: Verde Floresta -->
    <div class="col-md-4">
      <div class="card h-100 border-0 shadow-sm" style="background-color: #f8f9fa;">
        <div class="card-body text-center p-4">
          <div class="rounded-circle mx-auto mb-3 shadow" style="width: 70px; height: 70px; background-color: #2D6A4F;"></div>
          <h6 class="fw-bold mb-1 text-dark">Verde Floresta</h6>
          <code class="text-success fw-bold">#2D6A4F</code>
          <p class="small text-muted mt-2 mb-0">Representa saúde, bem-estar animal, vitalidade e a seriedade clínica dos médicos veterinários (CRMV).</p>
        </div>
      </div>
    </div>
    <!-- Cor 2: Marrom Chocolate -->
    <div class="col-md-4">
      <div class="card h-100 border-0 shadow-sm" style="background-color: #f8f9fa;">
        <div class="card-body text-center p-4">
          <div class="rounded-circle mx-auto mb-3 shadow" style="width: 70px; height: 70px; background-color: #8B5A2B;"></div>
          <h6 class="fw-bold mb-1 text-dark">Marrom Chocolate</h6>
          <code class="text-warning fw-bold">#8B5A2B</code>
          <p class="small text-muted mt-2 mb-0">Evoca aconchego, afeto animal, o ambiente natural e a proximidade afetiva do pet shop com os donos de pets.</p>
        </div>
      </div>
    </div>
    <!-- Cor 3: Creme / Off-White -->
    <div class="col-md-4">
      <div class="card h-100 border-0 shadow-sm" style="background-color: #f8f9fa;">
        <div class="card-body text-center p-4">
          <div class="rounded-circle mx-auto mb-3 shadow border" style="width: 70px; height: 70px; background-color: #F4F1EA;"></div>
          <h6 class="fw-bold mb-1 text-dark">Creme Suave</h6>
          <code class="text-secondary fw-bold">#F4F1EA</code>
          <p class="small text-muted mt-2 mb-0">Fundo de suporte neutro que suaviza o contraste de leitura em relação ao branco puro, oferecendo conforto visual.</p>
        </div>
      </div>
    </div>
  </div>
</div>

---

## 📊 2. Apresentação Executiva do Projeto

Aqui está o espaço reservado para carregar a apresentação de slides final (PDF ou incorporação do Google Slides / Canva).

<div class="card my-4 border-primary">
  <div class="card-header bg-primary text-white d-flex align-items-center justify-content-between">
    <h5 class="mb-0 fw-bold">📽️ Slides da Apresentação Oficial</h5>
    <span class="badge bg-light text-primary">Apresentação.pdf</span>
  </div>
  <div class="card-body text-center py-5 bg-light text-dark">
    <div class="fs-1 mb-3 text-muted">📊</div>
    <h4 class="fw-bold">Visualizador de Apresentação</h4>
    <p class="text-muted mx-auto" style="max-width: 600px;">
      Este espaço está reservado para a incorporação do slide final ou do arquivo PDF de apresentação. O arquivo <code>Apresentação.pdf</code> já está disponível na raiz do seu repositório.
    </p>
    
    <div class="d-flex flex-wrap gap-2 justify-content-center my-4">
      <a href="/Apresentação.pdf" download class="btn btn-outline-primary fw-bold">
        📥 Baixar Apresentação Atualizada (PDF)
      </a>
      <button class="btn btn-secondary disabled fw-bold" title="Disponível quando os slides forem hospedados online">
        🔗 Incorporar Google Slides / Canva (Placeholder)
      </button>
    </div>

    <div class="border border-secondary rounded p-4 bg-white text-muted mx-auto text-center" style="border-style: dashed !important; max-width: 80%;">
      <span class="fw-bold d-block text-secondary">🚧 ESPAÇO RESERVADO PARA SLIDES 🚧</span>
      <span class="small d-block mt-2">Dica: Ao finalizar os slides, você pode incorporá-los aqui utilizando uma tag <code>&lt;iframe&gt;</code> do Google Drive ou Canva Presentation.</span>
    </div>
  </div>
</div>

---

## 📂 3. Artefatos Estratégicos de Modelagem

Utilize as abas abaixo para navegar pelos diagramas e explicações detalhadas de cada pilar técnico do projeto:

<!-- Bootstrap Tab Navigation -->
<ul class="nav nav-pills nav-fill gap-2 p-2 bg-light rounded-pill border mb-4" id="modelagemTabs" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active rounded-pill fw-bold" id="canvas-tab" data-bs-toggle="tab" data-bs-target="#canvas-content" type="button" role="tab" aria-controls="canvas-content" aria-selected="true">
      📋 1. Business Canvas
    </button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link rounded-pill fw-bold" id="casos-tab" data-bs-toggle="tab" data-bs-target="#casos-content" type="button" role="tab" aria-controls="casos-content" aria-selected="false">
      👥 2. Casos de Uso
    </button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link rounded-pill fw-bold" id="classes-tab" data-bs-toggle="tab" data-bs-target="#classes-content" type="button" role="tab" aria-controls="classes-content" aria-selected="false">
      🗄️ 3. Diagrama Classes/ER
    </button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link rounded-pill fw-bold" id="prototipos-tab" data-bs-toggle="tab" data-bs-target="#prototipos-content" type="button" role="tab" aria-controls="prototipos-content" aria-selected="false">
      🎨 4. Protótipos de Tela
    </button>
  </li>
</ul>

<!-- Tab Contents -->
<div class="tab-content border rounded p-4 bg-white text-dark shadow-sm" id="modelagemTabsContent">
  
  <!-- TAB 1: CANVAS -->
  <div class="tab-pane fade show active" id="canvas-content" role="tabpanel" aria-labelledby="canvas-tab">
    <h3 class="fw-bold mb-3">📋 Business Model Canvas (Canva de Negócio)</h3>
    <p class="text-muted">
      O Canvas mapeia a viabilidade comercial do <strong>Pet Shop Amigo Fiel</strong>, fornecendo a base estratégica necessária para as regras de software implementadas.
    </p>
    
    <div class="text-center my-4">
      <img src="/slide_2.png" class="img-fluid border rounded shadow" alt="Business Model Canvas" style="max-height: 500px;" />
    </div>

    <div class="row g-3 mt-4">
      <div class="col-md-6">
        <div class="card h-100 bg-light">
          <div class="card-body">
            <h5 class="fw-bold text-primary">💼 Proposta de Valor Integrada</h5>
            <p class="small text-muted">
              Centralização e automatização das operações estéticas e de saúde animal em uma plataforma unificada. O faturamento integrado e a rastreabilidade clínica garantem praticidade e segurança jurídica e financeira.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card h-100 bg-light">
          <div class="card-body">
            <h5 class="fw-bold text-success">💰 Fontes de Receita & Custos</h5>
            <p class="small text-muted">
              <strong>Entradas:</strong> Serviços estéticos com taxa dinâmica de acréscimo proporcional por porte do pet, consultas veterinárias e venda rápida na loja de conveniência.
              <strong>Saídas:</strong> Infraestrutura em nuvem, licenciamento de ferramentas de suporte e honorários de especialistas.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB 2: CASOS DE USO -->
  <div class="tab-pane fade" id="casos-content" role="tabpanel" aria-labelledby="casos-tab">
    <h3 class="fw-bold mb-3">👥 Diagrama de Caso de Uso</h3>
    <p class="text-muted">
      Define as fronteiras do sistema e demonstra quais atores (Clientes, Atendentes, Veterinários e Gerente) podem executar cada ação específica do software.
    </p>

    <div class="text-center my-4">
      <img src="/slide_4.png" class="img-fluid border rounded shadow" alt="Diagrama de Caso de Uso" style="max-height: 500px;" />
    </div>

    <!-- Placeholder Diagrama Caso de Uso Atualizado -->
    <div class="border border-primary rounded p-4 bg-light text-center my-4" style="border-style: dashed !important;">
      <h6 class="fw-bold text-primary mb-1">🖼️ Espaço Separado para Diagrama de Caso de Uso Atualizado</h6>
      <p class="small text-muted mb-0">Quando atualizar o diagrama, basta substituir o arquivo <code>slide_4.png</code> na pasta <code>/docs/public/</code> ou alterar esta referência.</p>
    </div>

    <div class="row g-3">
      <div class="col-md-6">
        <div class="card h-100">
          <div class="card-body">
            <h6 class="fw-bold mb-2">🐾 Atores Clínicos (Veterinário)</h6>
            <ul class="small text-muted ps-3">
              <li>Iniciar Atendimento Veterinário</li>
              <li>Preencher Prontuário Eletrônico (Sintomas e Receituário)</li>
              <li>Registrar Aplicação de Vacinas</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card h-100">
          <div class="card-body">
            <h6 class="fw-bold mb-2">🛍️ Atores Comerciais (Atendente / Tutor)</h6>
            <ul class="small text-muted ps-3">
              <li>Agendar Banho e Tosa por porte (Atendente e Tutor)</li>
              <li>Operar Frente de Caixa e Fechamento de Vendas (Atendente)</li>
              <li>Acessar Histórico Clínico Online (Tutor no Portal)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB 3: DIAGRAMA DE CLASSES E ER -->
  <div class="tab-pane fade" id="classes-content" role="tabpanel" aria-labelledby="classes-tab">
    <h3 class="fw-bold mb-3">🗄️ Diagrama de Classes e Entidade-Relacionamento (ER)</h3>
    <p class="text-muted">
      Estrutura lógica da persistência de dados estruturada para sanar os principais gargalos relacionais do Pet Shop.
    </p>

    <div class="text-center my-4">
      <img src="/slide_5.png" class="img-fluid border rounded shadow" alt="Diagrama ER Geral" style="max-height: 450px;" />
    </div>

    <!-- Placeholder Diagrama de Classes Atualizado -->
    <div class="border border-success rounded p-4 bg-light text-center my-4" style="border-style: dashed !important;">
      <h6 class="fw-bold text-success mb-1">🖼️ Espaço Separado para Diagrama de Classes / ER Atualizado</h6>
      <p class="small text-muted mb-0">Quando gerar a nova versão do seu diagrama estrutural, substitua o arquivo <code>slide_5.png</code> na pasta <code>/docs/public/</code>.</p>
    </div>

    <div class="row g-3 mt-2">
      <!-- Relação Clínicas -->
      <div class="col-md-4">
        <div class="card h-100 border-light shadow-sm">
          <div class="card-body">
            <h6 class="fw-bold text-primary mb-2">🩺 Área Clínica (1:1 e 1:N)</h6>
            <img src="/slide_6.png" class="img-fluid rounded mb-2 border" alt="Gargalos Clínicos" />
            <p class="small text-muted lh-sm">
              Um prontuário eletrônico está estritamente vinculado 1:1 a uma consulta clínica, garantindo conformidade médica e impedindo consultas sem histórico correspondente.
            </p>
          </div>
        </div>
      </div>
      <!-- Relação Vendas N-N -->
      <div class="col-md-4">
        <div class="card h-100 border-light shadow-sm">
          <div class="card-body">
            <h6 class="fw-bold text-success mb-2">🛒 Área Comercial (N:N)</h6>
            <img src="/slide_7.png" class="img-fluid rounded mb-2 border" alt="Estruturas N-N Vendas" />
            <p class="small text-muted lh-sm">
              A tabela associativa <code>itens_venda</code> resolve a relação Muitos-para-Muitos entre Ordem de Serviço e Produtos, possibilitando a correta dedução física de estoques e faturamento correto.
            </p>
          </div>
        </div>
      </div>
      <!-- Relação Preventiva N-N -->
      <div class="col-md-4">
        <div class="card h-100 border-light shadow-sm">
          <div class="card-body text-center d-flex flex-column justify-content-center align-items-center">
            <div class="fs-1 text-danger">💉</div>
            <h6 class="fw-bold text-danger mb-2">📅 Vacinação (N:N)</h6>
            <p class="small text-muted lh-sm">
              A tabela intermediária <code>historico_vacinas</code> registra a aplicação das doses preventivas, relacionando Pets e Vacinas, armazenando o lote de fabricação, o veterinário aplicador e a próxima data automática de revacinação.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- TAB 4: PROTÓTIPOS DE TELA -->
  <div class="tab-pane fade" id="prototipos-content" role="tabpanel" aria-labelledby="prototipos-tab">
    <h3 class="fw-bold mb-3">🎨 Protótipos de Alta Fidelidade (Telas Chave)</h3>
    <p class="text-muted">
      Demonstração das interfaces desenhadas para oferecer máxima fluidez e eficiência nas operações diárias do Pet Shop.
    </p>

    <!-- Portfolio Grid of Screens -->
    <div class="row g-4 mt-2">
      <!-- Tela 1 -->
      <div class="col-md-6 col-lg-4">
        <div class="card h-100 shadow-sm border-light">
          <img src="/tela_clientes_pets.png" class="card-img-top border-bottom" alt="Cadastro de Clientes e Pets" />
          <div class="card-body p-3">
            <span class="badge bg-primary mb-2">Recepção</span>
            <h6 class="fw-bold mb-1">1. Cadastro de Clientes e Pets</h6>
            <p class="small text-muted mb-0">Campos ágeis de tutores vinculados a múltiplos animais, com sparkline histórica de peso do pet.</p>
          </div>
        </div>
      </div>
      <!-- Tela 2 -->
      <div class="col-md-6 col-lg-4">
        <div class="card h-100 shadow-sm border-light">
          <img src="/tela_agendamento.png" class="card-img-top border-bottom" alt="Agendamento Dinâmico" />
          <div class="card-body p-3">
            <span class="badge bg-success mb-2">Estética</span>
            <h6 class="fw-bold mb-1">2. Agendamento Banho & Tosa</h6>
            <p class="small text-muted mb-0">Calendário de esteticistas com cálculo automático de acréscimo dinâmico por porte do pet.</p>
          </div>
        </div>
      </div>
      <!-- Tela 3 -->
      <div class="col-md-6 col-lg-4">
        <div class="card h-100 shadow-sm border-light">
          <img src="/tela_prontuario.png" class="card-img-top border-bottom" alt="Ficha Clínica" />
          <div class="card-body p-3">
            <span class="badge bg-danger mb-2">Acesso Restrito</span>
            <h6 class="fw-bold mb-1">3. Prontuário Veterinário</h6>
            <p class="small text-muted mb-0">Interface segura validada por CRMV com diagnóstico, receituário e alertas preventivos de vacinas.</p>
          </div>
        </div>
      </div>
      <!-- Tela 4 -->
      <div class="col-md-6 col-lg-4">
        <div class="card h-100 shadow-sm border-light">
          <img src="/tela_estoque.png" class="card-img-top border-bottom" alt="Controle de Estoque" />
          <div class="card-body p-3">
            <span class="badge bg-warning text-dark mb-2">Gerência</span>
            <h6 class="fw-bold mb-1">4. Controle de Estoque Crítico</h6>
            <p class="small text-muted mb-0">Listagem analítica com sinalização em tempo real de produtos e vacinas sob risco de quebra de estoque.</p>
          </div>
        </div>
      </div>
      <!-- Tela 5 -->
      <div class="col-md-6 col-lg-4">
        <div class="card h-100 shadow-sm border-light">
          <img src="/tela_checkout.png" class="card-img-top border-bottom" alt="Checkout PDV" />
          <div class="card-body p-3">
            <span class="badge bg-info text-dark mb-2">Caixa</span>
            <h6 class="fw-bold mb-1">5. Frente de Caixa e Fechamento</h6>
            <p class="small text-muted mb-0">Fechamento integrado agrupando itens comerciais e serviços clínicos/estéticos em uma única OS rápida.</p>
          </div>
        </div>
      </div>
      <!-- Dashboard Geral Placeholder -->
      <div class="col-md-6 col-lg-4">
        <div class="card h-100 shadow-sm border-light">
          <img src="/slide_3.png" class="card-img-top border-bottom" alt="Dashboard Principal" />
          <div class="card-body p-3">
            <span class="badge bg-secondary mb-2">Painel de Controle</span>
            <h6 class="fw-bold mb-1">Visão Geral do Painel Administrativo</h6>
            <p class="small text-muted mb-0">Mockup inicial de centralização exibindo faturamento do dia, agendamentos da hora e alertas.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>

<style>
.border-dashed {
  border-style: dashed !important;
  border-width: 2px !important;
  border-color: #dee2e6 !important;
}
.nav-pills .nav-link {
  color: #495057;
  transition: all 0.2s ease-in-out;
}
.nav-pills .nav-link.active {
  background-color: var(--vp-c-brand) !important;
  color: #fff !important;
}
.nav-pills .nav-link:hover:not(.active) {
  background-color: #e9ecef;
}
.tab-content {
  border-color: #dee2e6 !important;
}
</style>
