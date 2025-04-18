# Design System Taller

## Visão Geral
Este documento descreve o sistema de design da Taller, com foco em sua implementação e manutenção através de ferramentas AI/no-code.

## Componentes Base

### Botões
```json
{
  "button": {
    "primary": {
      "className": "bg-primary hover:bg-primary/90 text-white",
      "size": {
        "sm": "text-sm px-3 py-1.5",
        "md": "text-base px-4 py-2",
        "lg": "text-lg px-6 py-3"
      }
    },
    "secondary": {
      "className": "border-primary/50 text-white hover:border-primary hover:bg-primary/10 bg-transparent",
      "size": {
        "sm": "text-sm px-3 py-1.5",
        "md": "text-base px-4 py-2",
        "lg": "text-lg px-6 py-3"
      }
    }
  }
}
```

### Cores
```json
{
  "colors": {
    "primary": "#EA364C",
    "secondary": "#6366F1",
    "background": {
      "dark": "#0A0A0A",
      "light": "#FFFFFF"
    },
    "text": {
      "primary": "#FFFFFF",
      "secondary": "#A3A3A3"
    }
  }
}
```

### Tipografia
```json
{
  "typography": {
    "h1": {
      "className": "text-5xl md:text-6xl lg:text-7xl font-bold",
      "gradient": "gradient-text"
    },
    "h2": {
      "className": "text-4xl md:text-5xl font-bold",
      "gradient": "gradient-text"
    },
    "body": {
      "className": "text-base text-muted-foreground"
    }
  }
}
```

## Como Usar com AI/No-Code

### 1. Estrutura de Componentes
- Cada componente deve seguir o padrão Atomic Design
- Documentar todas as props e variantes
- Incluir exemplos de uso

### 2. Regras de Implementação
- Usar classes do Tailwind conforme documentado
- Seguir o padrão de nomenclatura estabelecido
- Manter consistência com o sistema de cores

### 3. Manutenção
- Atualizar documentação quando criar novos componentes
- Testar componentes em diferentes contextos
- Validar acessibilidade

### 4. Integração com AI
- Fornecer contexto completo do design system
- Especificar restrições e padrões
- Incluir exemplos de uso correto

## Exemplos de Uso

### Botão Primário
```tsx
<Button 
  size="lg" 
  className="bg-primary hover:bg-primary/90 text-white"
>
  Botão Primário
</Button>
```

### Botão Secundário
```tsx
<Button 
  size="lg" 
  variant="outline" 
  className="border-primary/50 text-white hover:border-primary hover:bg-primary/10 bg-transparent"
>
  Botão Secundário
</Button>
```

## Boas Práticas

1. **Consistência**
   - Usar sempre as classes definidas
   - Seguir o sistema de espaçamento
   - Manter a hierarquia visual

2. **Acessibilidade**
   - Garantir contraste adequado
   - Usar tamanhos de fonte responsivos
   - Incluir estados de foco

3. **Responsividade**
   - Testar em diferentes breakpoints
   - Usar classes responsivas do Tailwind
   - Manter a usabilidade em todos os dispositivos

## Atualizações

Este documento deve ser atualizado sempre que:
- Novos componentes forem adicionados
- Padrões forem modificados
- Novas regras forem estabelecidas 