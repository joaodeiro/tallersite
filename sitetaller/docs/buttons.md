# Sistema de Botões

## Variantes

### 1. CTA (Call-to-Action)
- **Estado Normal**:
  - Background: degradê de primary para secondary
  - Texto: branco
  - Padding: px-6 py-3
  - Border Radius: rounded-lg
  - Transição: duration-500
- **Hover**:
  - Opacidade: 90%
  - Escala: scale-105
  - Transição: duration-500
- **Active**:
  - Opacidade: 80%
  - Escala: scale-95
- **Focus**:
  - Outline: 2px solid primary
  - Outline Offset: 2px

### 2. Secundário
- **Estado Normal**:
  - Background: transparent
  - Border: 2px solid primary
  - Texto: primary
  - Padding: px-6 py-3
  - Border Radius: rounded-lg
  - Transição: duration-500
- **Hover**:
  - Background: primary/10
  - Escala: scale-105
  - Transição: duration-500
- **Active**:
  - Background: primary/20
  - Escala: scale-95
- **Focus**:
  - Outline: 2px solid primary
  - Outline Offset: 2px

### 3. Terciário
- **Estado Normal**:
  - Background: transparent
  - Texto: cinza-300
  - Padding: px-4 py-2
  - Border Radius: rounded-md
  - Transição: duration-500
- **Hover**:
  - Texto: degradê de primary para secondary
  - Background: primary/5
  - Transição: duration-500
- **Active**:
  - Background: primary/10
- **Focus**:
  - Outline: 1px solid primary
  - Outline Offset: 1px

### 4. Link
- **Estado Normal**:
  - Background: transparent
  - Texto: primary
  - Padding: px-2 py-1
  - Transição: duration-500
- **Hover**:
  - Texto: degradê de primary para secondary
  - Transição: duration-500
- **Active**:
  - Opacidade: 80%
- **Focus**:
  - Outline: 1px solid primary
  - Outline Offset: 1px

## Classes Base
```css
.button-base {
  @apply transition-all duration-500;
}

.button-cta {
  @apply gradient-bg text-white px-6 py-3 rounded-lg hover:opacity-90 hover:scale-105;
}

.button-secondary {
  @apply bg-transparent border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/10 hover:scale-105;
}

.button-tertiary {
  @apply bg-transparent text-gray-300 px-4 py-2 rounded-md hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:bg-primary/5;
}

.button-link {
  @apply bg-transparent text-primary px-2 py-1 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-secondary;
}
```

## Uso Recomendado
- **CTA**: Ações principais, como "Fale Conosco", "Começar Agora"
- **Secundário**: Ações alternativas, como "Saiba Mais", "Ver Todos"
- **Terciário**: Ações menos importantes, como filtros, ações secundárias
- **Link**: Navegação, links de texto, ações menos visíveis 