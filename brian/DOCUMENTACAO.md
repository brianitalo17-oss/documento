# 📋 Documentação - Belezas do Mundo

**Versão:** 1.0  
**Data:** 29 de Janeiro de 2026  
**Projeto:** Plataforma de E-commerce de Paisagens e Maravilhas do Mundo

---

## 📑 Índice

1. [Resumo Executivo](#resumo-executivo)
2. [Análise SWOT](#análise-swot)
3. [Canvas](#canvas)
4. [Requisitos do Projeto](#requisitos-do-projeto)
5. [Arquitetura Técnica](#arquitetura-técnica)
6. [Dados & API](#dados--api)

---

## 🎯 Resumo Executivo

**"Belezas do Mundo"** é uma plataforma de e-commerce inovadora que oferece pacotes exclusivos de viagem para as principais maravilhas do mundo moderno. O projeto integra tecnologias modernas como Firebase, autenticação segura e um carrinho de compras intuitivo em uma interface responsiva.

**Objetivo Principal:** Permitir que usuários explorem, comparem e adquiram pacotes de viagem para os principais destinos turísticos mundiais.

---

## 📊 Análise SWOT

### ✅ FORÇAS (Strengths)

| Força | Descrição |
|-------|-----------|
| **Tecnologia Moderna** | Uso de Firebase (Firestore, Authentication) para escalabilidade |
| **Interface Responsiva** | Design Tailwind CSS compatível com todos os dispositivos |
| **Catálogo Curado** | Apenas as 7 Maravilhas do Mundo - conteúdo premium e diferenciado |
| **Autenticação Segura** | Sistema de login/cadastro com Firebase Authentication |
| **Carrinho Inteligente** | Sistema de carrinho com múltiplos tamanhos (Pequeno, Médio, Grande) |
| **Histórico Educacional** | Descrições detalhadas e ricas em contexto histórico |

### ❌ FRAQUEZAS (Weaknesses)

| Fraqueza | Descrição |
|----------|-----------|
| **Catálogo Limitado** | Apenas 5-7 destinos disponíveis (menos diversidade) |
| **Sem Pagamento Real** | Não há integração com gateway de pagamento (Stripe, PayPal) |
| **Sem Sistema de Avaliações** | Falta de reviews e ratings de usuários |
| **Sem Filtros Avançados** | Busca é básica, sem filtros por preço, região, etc |
| **Performance em Larga Escala** | Pode ter limitações com milhões de usuários simultâneos |
| **Sem Imagens Locais** | Dependência de URLs externas (Unsplash, Wikimedia) |

### 🚀 OPORTUNIDADES (Opportunities)

| Oportunidade | Descrição |
|--------------|-----------|
| **Expansão de Catálogo** | Adicionar mais destinos turísticos e experiências |
| **Pacotes Personalizados** | Criar bundles de múltiplos destinos com desconto |
| **Programa de Fidelidade** | Pontos de recompensa para compras recorrentes |
| **Integração com Agências** | Parcerias com agências de turismo locais |
| **App Mobile** | Desenvolver aplicativo nativo para iOS/Android |
| **Sistema de Recomendação** | IA para sugerir destinos baseado no histórico |
| **Marketplace** | Permitir que agências terceiras vendam pacotes |

### ⚠️ AMEAÇAS (Threats)

| Ameaça | Descrição |
|--------|-----------|
| **Concorrência Forte** | Plataformas consolidadas como Booking, Airbnb, TripAdvisor |
| **Flutuação de Preços** | Variação cambial afeta preços de destinos internacionais |
| **Sazonalidade Turística** | Demanda sazonal dos destinos afeta vendas |
| **Questões de Segurança** | Possíveis violações de dados de usuários e pagamentos |
| **Regulações Governamentais** | Mudanças em políticas de viagem e vistos |
| **Crises Sanitárias** | Pandemia ou surtos podem reduzir turismo |

---

## 🎨 Canvas

### Business Model Canvas

```
┌─────────────────────────────────────────────────────────────────────┐
│                      BUSINESS MODEL CANVAS                           │
├──────────────────────┬──────────────────────┬──────────────────────┤
│                      │                      │                      │
│  PARCEIROS CHAVE     │   ATIVIDADES CHAVE   │   PROPOSIÇÃO DE      │
│  ─────────────────   │   ──────────────     │   VALOR              │
│  • Firebase          │   • Curação de       │   ──────────────     │
│  • Unsplash/         │     destinos         │   • Pacotes          │
│    Wikimedia         │   • Experiência UX   │     exclusivos        │
│  • Agências de       │   • Marketing        │   • Preços           │
│    turismo           │   • Atendimento      │     competitivos      │
│  • Processadoras     │                      │   • Educação         │
│    de pagamento      │                      │     histórica         │
│                      │                      │   • Sem taxas         │
│                      │                      │     ocultas           │
├──────────────────────┴──────────────────────┴──────────────────────┤
│                                                                      │
│  RECURSOS CHAVE              │  CANAIS DE DISTRIBUIÇÃO             │
│  ─────────────────────       │  ─────────────────────────          │
│  • Plataforma web            │  • Website responsivo               │
│  • Banco de dados            │  • App mobile (futuro)              │
│  • Equipe de dev             │  • Email marketing                  │
│  • Conteúdo histórico        │  • Redes sociais                    │
│  • Design UI/UX              │  • Parcerias (agências)             │
│                              │  • SEO                              │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘
│                                    │                                 │
│  SEGMENTAÇÃO DE CLIENTES           │  ESTRUTURA DE CUSTOS             │
│  ─────────────────────────         │  ────────────────────           │
│  • Turistas adventure              │  • Infraestrutura (Firebase)    │
│  • Famílias em feriado             │  • Salários da equipe           │
│  • Casais em lua de mel            │  • Marketing e aquisição        │
│  • Empresas (viagens executivas)   │  • Servidores & CDN             │
│  • Pesquisadores históricos        │  • Suporte ao cliente           │
│                                    │  • Parcerias                    │
│  RELACIONAMENTO COM CLIENTES       │                                 │
│  ───────────────────────────       │  FONTES DE RECEITA              │
│  • Suporte 24/7                    │  ──────────────────            │
│  • Chat em tempo real              │  • Venda de pacotes             │
│  • Email personalizado             │  • Premium membership (futuro)  │
│  • Programa de fidelidade          │  • Comissões de parceiros       │
│  • Reviews e ratings              │  • Publicidade                  │
└────────────────────────────────────┴─────────────────────────────────┘
```

### Value Proposition Canvas

```
CLIENTE                          │        SOLUÇÃO
                                 │
JOBS TO BE DONE                  │    PRODUTOS/SERVIÇOS
─────────────────                │    ──────────────────
• Planejar viagem                │    • Catálogo de destinos
• Encontrar bom preço            │    • Carrinho de compras
• Comparar opções                │    • Sistema de autenticação
• Aprender história              │    │ Pagamento seguro
• Viajar com conforto            │    • Suporte ao cliente
                                 │    • Descrições históricas
DORES                            │
──────                           │    CRIADORES DE VALOR
• Plataformas confusas           │    ────────────────────
• Preços altos                   │    ✓ Preços 20-30% menores
• Falta de confiança             │    ✓ Interface intuitiva
• Muita burocracia               │    ✓ Segurança garantida
• Informações incompletas        │    ✓ Histórico educacional
• Viagens genéricas              │    ✓ Personalizacao por tamanho
                                 │    ✓ Login rápido e seguro
GANHOS ESPERADOS                 │    ✓ Atendimento imediato
─────────────────                │
• Economia de tempo              │    AMENIZADORES DE DOR
• Melhor ROI da viagem           │    ──────────────────────
• Experiência memorável          │    • Chat 24/7
• Segurança financeira           │    • Garantia de melhor preço
• Conhecimento cultural          │    • Certificado de autenticidade
                                 │    • Cancelamento gratuito
```

---

## 📋 Requisitos do Projeto

### Requisitos Funcionais (RF)

#### RF-01: Catálogo de Paisagens
- **Descrição:** O sistema deve exibir um catálogo de paisagens/maravilhas do mundo
- **Critério de Aceitação:**
  - ✅ Mínimo 5 paisagens disponíveis
  - ✅ Cada paisagem com: Nome, Preço, Imagem, Localização, História
  - ✅ Carregamento de dados do Firestore ou fallback local (JSON)
  - ✅ Função `renderPaisagens()` funcionando corretamente

#### RF-02: Sistema de Carrinho
- **Descrição:** Usuário pode adicionar/remover paisagens do carrinho
- **Critério de Aceitação:**
  - ✅ Adicionar à lista de compras
  - ✅ Exibir contador de itens
  - ✅ Calcular total automaticamente
  - ✅ Remover itens do carrinho
  - ✅ Limpar carrinho após compra

#### RF-03: Autenticação de Usuários
- **Descrição:** Sistema de login/cadastro com Firebase Authentication
- **Critério de Aceitação:**
  - ✅ Cadastro com: Email, Senha, Nome, Telefone
  - ✅ Login com Email e Senha
  - ✅ Logout
  - ✅ Persistência de sessão
  - ✅ Perfil do usuário em banco de dados
  - ✅ Validação de email e força de senha

#### RF-04: Visualização de Detalhes
- **Descrição:** Modal com informações completas da paisagem selecionada
- **Critério de Aceitação:**
  - ✅ Exibir imagem em alta qualidade
  - ✅ Histórico detalhado
  - ✅ Localização exata
  - ✅ Preço e opcoes de tamanho (Pequeno, Médio, Grande)
  - ✅ Botão de adição ao carrinho

#### RF-05: Busca e Filtros
- **Descrição:** Pesquisar destinos por nome
- **Critério de Aceitação:**
  - ✅ Input de busca funcional
  - ✅ Sugestões em tempo real
  - ✅ Filtrar paisagens por nome/localização
  - ✅ Limpar busca

#### RF-06: Finalização de Compra
- **Descrição:** Processar pedido e salvar no Firestore
- **Critério de Aceitação:**
  - ✅ Validar carrinho não vazio
  - ✅ Calcular total com acurácia
  - ✅ Salvar pedido em `collection('pedidos')`
  - ✅ Limpar carrinho após sucesso
  - ✅ Mensagem de confirmação

#### RF-07: Interface Responsiva
- **Descrição:** Funcionar em Desktop, Tablet e Mobile
- **Critério de Aceitação:**
  - ✅ CSS Tailwind bem configurado
  - ✅ Menu adaptável
  - ✅ Cards responsivos
  - ✅ Modais acessíveis

### Requisitos Não-Funcionais (RNF)

| RNF | Especificação | Prioridade |
|-----|--------------|-----------|
| **RNF-01: Performance** | Página carrega em < 2 segundos | Alta |
| **RNF-02: Segurança** | Senhas criptografadas, HTTPS obrigatório | Alta |
| **RNF-03: Disponibilidade** | 99.5% uptime | Alta |
| **RNF-04: Escalabilidade** | Suporta 1M+ usuários simultâneos | Média |
| **RNF-05: Acessibilidade** | WCAG 2.1 nível AA | Média |
| **RNF-06: Compatibilidade** | Chrome, Firefox, Safari, Edge últimas 2 versões | Alta |
| **RNF-07: Manutenibilidade** | Código bem documentado e testado | Média |
| **RNF-08: Localização** | Suporte para múltiplas moedas | Baixa |

---

## 🏗️ Arquitetura Técnica

### Stack Tecnológico

```
┌─────────────────────────────────────────────────┐
│         CAMADA DE APRESENTAÇÃO                   │
│  ┌────────────────────────────────────────────┐ │
│  │  HTML5 + CSS3 (Tailwind) + JavaScript ES6+ │ │
│  │  • index.html (Estrutura)                   │ │
│  │  • styles.css (Estilos custom)              │ │
│  │  • script.js (Lógica & Eventos)             │ │
│  └────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────┐
│      CAMADA DE LÓGICA & GERENCIAMENTO           │
│  ┌────────────────────────────────────────────┐ │
│  │  JavaScript Puro (Vanilla JS)              │ │
│  │  • Gerenciamento de carrinho               │ │
│  │  • Modais e eventos                        │ │
│  │  • Formatação de moeda (BRL)               │ │
│  └────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────┐
│         CAMADA DE BACKEND & DADOS                │
│  ┌────────────────────────────────────────────┐ │
│  │  Firebase Services                         │ │
│  │  ┌──────────────┐  ┌──────────────────┐   │ │
│  │  │ Firestore DB │  │ Authentication   │   │ │
│  │  │ • paisagens  │  │ • Email/Password │   │ │
│  │  │ • pedidos    │  │ • Sessões        │   │ │
│  │  │ • users      │  │ • Tokens JWT     │   │ │
│  │  └──────────────┘  └──────────────────┘   │ │
│  └────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────┘
```

### Fluxo de Dados

```
USUÁRIO
  ↓
[index.html] → Carrega página & scripts
  ↓
[script.js] → Inicializa Firebase & carrega paisagens
  ↓
[Firebase Config] → Valida credenciais
  ↓
[Firestore] → Busca collection 'paisagens' (ou fallback local)
  ↓
[renderPaisagens()] → Renderiza cards na galeria
  ↓
[USUÁRIO INTERAGE]
  ├─→ Clica "Ver detalhes" → openModal(p)
  ├─→ Clica "Adicionar" → addToCart(p, tamanho)
  ├─→ Clica "Carrinho" → Exibe modal com itens
  ├─→ Clica "Finalizar" → Salva pedido em Firestore
  └─→ Clica "Login/Cadastro" → Autentica com Firebase Auth
  ↓
[updateCartUI()] → Atualiza UI (contador, total)
  ↓
[Firebase Firestore] → Persiste dados (pedidos, usuários)
```

---

## 📊 Dados & API

### Estrutura de Dados - Paisagens

```javascript
{
  id: Number,              // ID único
  nome: String,            // Nome da maravilha
  preco: Number,           // Preço base em BRL
  imagem: String,          // URL da imagem (Unsplash/Wikimedia)
  localizacao: String,     // Local geográfico
  historia: String         // Descrição histórica detalhada
}
```

**Exemplo:**
```json
{
  "id": 1,
  "nome": "Grande Muralha da China",
  "preco": 329.90,
  "imagem": "https://images.unsplash.com/photo-...",
  "localizacao": "Beijing, China",
  "historia": "A Grande Muralha da China é uma das maiores obras..."
}
```

### Estrutura de Dados - Carrinho

```javascript
{
  id: Number,              // ID da paisagem
  nome: String,            // Nome da paisagem
  tamanho: String,         // 'pequeno' | 'medio' | 'grande'
  preco: Number            // Preço final (com multiplicador)
}
```

**Multiplicadores de Tamanho:**
- Pequeno: 1.0x (base)
- Médio: 1.5x
- Grande: 2.0x

### Estrutura de Dados - Pedidos (Firestore)

```javascript
{
  itens: Array[
    {
      id: Number,
      nome: String,
      tamanho: String,
      preco: Number
    }
  ],
  total: Number,           // Soma de todos os itens
  criadoEm: Timestamp,     // Data/hora do pedido
  userId: String           // UID do usuário (se autenticado)
}
```

### Estrutura de Dados - Usuários (Firestore)

```javascript
{
  uid: String,             // UID do Firebase (chave)
  email: String,
  name: String,
  phone: String,
  createdAt: Timestamp,
  lastLogin: Timestamp     // (Futuro)
}
```

### Collections Firestore Necessárias

| Collection | Documentos | Campos |
|------------|-----------|--------|
| **paisagens** | 5-7 documentos | id, nome, preco, imagem, localizacao, historia |
| **pedidos** | Dinâmico | itens[], total, criadoEm, userId |
| **users** | Dinâmico | email, name, phone, createdAt |

---

## 🚀 Como Executar

### Pré-requisitos
- Node.js 14+ (para ferramentas de build)
- Conta Firebase ativa
- Navegador moderno (Chrome, Firefox, Safari, Edge)

### Setup

1. **Clonar Repositório**
   ```bash
   git clone <url-do-repo>
   cd brian
   ```

2. **Configurar Firebase**
   - Editar `firebase-config.js` com suas credenciais
   - Ativar Firestore Database
   - Ativar Firebase Authentication (Email/Senha)

3. **Executar Localmente**
   ```bash
   # Com Python
   python -m http.server 8000
   
   # Com Node.js
   npx http-server
   
   # Com Live Server (VS Code)
   Alt + L + O
   ```

4. **Acessar**
   ```
   http://localhost:8000
   ```

---

## 📝 Roadmap Futuro

### v1.1 (Próximas 2 semanas)
- [ ] Integração com Stripe/PayPal
- [ ] Sistema de Reviews e Ratings
- [ ] Filtros avançados (preço, localização, avaliação)
- [ ] Email de confirmação de pedido

### v1.5 (1-2 meses)
- [ ] App mobile com React Native
- [ ] Sistema de recomendação com IA
- [ ] Pacotes combinados com desconto
- [ ] Programa de fidelidade

### v2.0 (3-6 meses)
- [ ] Marketplace para agências terceiras
- [ ] Dashboard administrativo
- [ ] Suporte para múltiplas moedas
- [ ] Integração com Google Maps

---

## 📞 Suporte & Contato

**Email:** suporte@belezasdomunsdo.com  
**Telefone:** +55 (11) 99999-9999  
**Website:** https://belezasdomunsdo.com

---

**Documento preparado para análise e aprovação.**  
*Última atualização: 29 de Janeiro de 2026*
