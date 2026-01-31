# BikePro - Site Institucional Premium

Site institucional completo para oficina especializada em bicicletas, desenvolvido com HTML, CSS e JavaScript puro.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📋 Estrutura do Projeto

```
bike-oficina/
├── index.html                 # Página inicial
├── css/
│   ├── main.css              # Estilos principais e componentes
│   └── pages.css             # Estilos específicos das páginas internas
├── js/
│   └── main.js               # JavaScript principal com todas as funcionalidades
├── pages/
│   ├── servicos.html         # Página de serviços detalhados
│   ├── sobre.html            # Página sobre a oficina
│   ├── contato.html          # Página de contato com formulário
│   └── localizacao.html      # Página com mapa e instruções
└── README.md                 # Documentação do projeto
```

## 🎨 Design System

### Paleta de Cores
- **Primary**: #0066cc (Azul vibrante)
- **Secondary**: #003d7a (Azul escuro)
- **Accent**: #00a8ff (Azul claro)
- **Dark**: #0a0a0a
- **White**: #ffffff

### Tipografia
- **Display**: Rajdhani (títulos e elementos de destaque)
- **Body**: Barlow (textos gerais)

### Espaçamento
Sistema de espaçamento consistente baseado em múltiplos de 8px (0.5rem, 1rem, 1.5rem, 2rem, 3rem, 4rem, 6rem)

## 🚀 Funcionalidades

### Navegação
- Menu responsivo com hamburger para mobile
- Scroll suave entre seções
- Indicação visual de página ativa
- Header fixo com efeito blur no scroll

### Animações
- Fade-up animações ao scroll (Intersection Observer)
- Transições suaves em hover
- Animações CSS para micro-interações
- Loading states e feedback visual

### Formulários
- Validação client-side completa
- Máscara para telefone brasileiro
- Feedback visual de erros
- Mensagens de sucesso

### WhatsApp Integration
- Botão flutuante fixo em todas as páginas
- Links diretos com mensagens pré-formatadas
- CTAs estratégicos para conversão

### Performance
- Lazy loading de imagens
- CSS otimizado com arquitetura modular
- JavaScript não-bloqueante
- Fontes com preload

## 📱 Responsividade

### Breakpoints
- Desktop: > 968px
- Tablet: 640px - 968px
- Mobile: < 640px

### Mobile-First
Desenvolvido com abordagem mobile-first, garantindo excelente experiência em todos os dispositivos.

## ♿ Acessibilidade

- HTML semântico
- ARIA labels onde necessário
- Navegação por teclado
- Contraste adequado (WCAG AA)
- Alt texts em imagens

## 🖥️ Como Visualizar Localmente

Para visualizar o site localmente, siga estes passos:

1. Clone o repositório ou baixe os arquivos.
2. Abra o arquivo `index.html` em um navegador web.
3. Navegue pelas páginas usando o menu.
4. Ou clique no link

## 🔧 Customização

### Cores
Edite as variáveis CSS em `main.css`:
```css
:root {
    --color-primary: #0066cc;
    --color-secondary: #003d7a;
    /* ... */
}
```

### Conteúdo
- **Contato**: Altere o número do WhatsApp em todos os links
- **Endereço**: Atualize o iframe do Google Maps em `localizacao.html`
- **E-mail**: Substitua `contato@bikepro.com.br`
- **Horários**: Edite as informações de funcionamento

### Textos e Serviços
Todos os textos são facilmente editáveis diretamente nos arquivos HTML. Os serviços estão estruturados de forma modular.

## 🌐 SEO

### Meta Tags
Cada página possui meta tags otimizadas:
- Title único e descritivo
- Meta description relevante
- Keywords locais

### Estrutura
- Headings hierárquicos (H1 > H2 > H3)
- URLs amigáveis
- Schema markup pronto para implementação

### Local SEO
- Endereço completo em todas as páginas
- Google Maps integrado
- Informações de contato estruturadas

## 📦 Deployment

### Hosting Estático
O site pode ser hospedado em qualquer serviço de hosting estático:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront


**Versão**: 1.0.0  
**Última atualização**: Janeiro 2024
**Desenvolvedor**: Guilherme


