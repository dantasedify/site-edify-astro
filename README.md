# Site Edify - Astro com Tema Agency03

Este projeto utiliza o tema Astro Agency03 como base, permitindo usar componentes do tema diretamente ou customizá-los conforme necessário.

## 🚀 Estrutura do Projeto

```
/
├── public/                 # Arquivos públicos
├── src/
│   ├── assets/            # Recursos estáticos (imagens, CSS, etc.)
│   ├── components/        # Componentes customizados ou copiados do tema
│   ├── layouts/           # Layouts da aplicação
│   ├── pages/             # Páginas da aplicação
│   ├── content/           # Conteúdo MDX (blog, etc.)
│   ├── config/            # Configurações
│   └── styles/            # Estilos personalizados
└── package.json
```

## 🧞 Sistema de Desenvolvimento

### Como Funciona

1. **Código Ativo**: Em `src/` - todo o tema está incorporado e é editável
2. **Componentização**: importe de `src/` usando o alias `@`
   - Ex.: `import Header from "@/components/ui/Header.astro"`

### Desenvolvimento

1. **Para usar um componente**: Importe de `src/` (o tema está em `src/`)
2. **Para customizar um componente**: Edite o arquivo diretamente em `src/`
3. **Use o alias `@`** para imports estáveis

## 🛠️ Comandos

| Comando              | Ação                                           |
| :------------------- | :--------------------------------------------- |
| `npm run dev`        | Inicia servidor de desenvolvimento             |
| `npm run build`      | Build para produção                           |
| `npm run preview`    | Preview do build                              |

## 🎨 Personalização

### Exemplos de Uso

**Importar componente:**
```astro
---
import Header from "@/components/ui/Header.astro";
---
<Header />
```



## 🚀 Deploy

Para fazer deploy:

```bash
npm run build
```

O build será gerado em `./dist/` e pode ser deployado em qualquer plataforma que suporte arquivos estáticos.

## 📚 Mais Informações

- [Documentação do Astro](https://docs.astro.build)
- [Preview do Tema Agency03](https://astro-agency03.vercel.app/)
