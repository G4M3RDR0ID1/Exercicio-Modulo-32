# Relatório Técnico de Performance Web – Exercicio Módulo 32

## Descrição do Projeto
Este repositório contém um projeto front-end desenvolvido durante o curso, utilizado nesta atividade prática com o objetivo de aplicar melhorias de performance web. A análise e otimização foram guiadas diretamente pelas métricas geradas pelo Lighthouse na ferramenta Chrome DevTools.

O foco principal foi medir o desempenho real da aplicação, identificar gargalos concretos e aplicar boas práticas para tornar o site mais rápido, estável e otimizado para dispositivos móveis.

---

## Gargalos Identificados pelo Lighthouse

Após gerar o relatório inicial no Lighthouse, foram apontados os seguintes problemas técnicos:

### Largest Contentful Paint Elevado
- O indicador **Largest Contentful Paint (LCP)** apresentou valor alto, indicando demora na exibição do conteúdo principal da página.
- Esse gargalo estava diretamente relacionado ao carregamento de imagens pesadas e excesso de arquivos estáticos.

### JavaScript Excessivo e Não Utilizado
- Diagnóstico: **Reduza o JavaScript – economia estimada de 285 KiB**
- Diagnóstico: **Reduza o JavaScript não usado – economia potencial de 301 KiB**
- Indicação clara de código JavaScript desnecessário sendo entregue ao navegador, causando lentidão e bloqueios na thread principal.

### Payloads de Rede Muito Grandes
- O Lighthouse indicou que a página possuía grande volume de dados transferidos, acima do recomendado para uma aplicação simples.
- Esse problema aumentava o tempo total de download e processamento inicial.

### Tarefas Longas na Thread Principal
- Foram encontradas **6 tarefas longas** que prejudicavam o tempo de resposta do navegador.
- Isso indicava scripts mal organizados e arquivos grandes demais para serem processados de uma vez.

### Recursos Bloqueando Renderização
- Insight: **Renderizar solicitações de bloqueio – economia estimada de 200 ms**
- CSS e scripts grandes estavam atrasando o primeiro render do site.

### Problemas de Cache
- O relatório mostrou que a aplicação estava **impedindo a restauração do cache de avanço e retorno**, dificultando o reaproveitamento de recursos já carregados pelo navegador.

---

## Melhorias Aplicadas

Com base exatamente nas auditorias acima, foram implementadas as seguintes otimizações:

### Refatoração do Código JavaScript
- Remoção de funções e trechos não utilizados.
- Eliminação de imports desnecessários.
- Reorganização dos scripts para reduzir o trabalho da thread principal.
- Minificação dos arquivos JavaScript finais.

### Unificação e Limpeza do CSS
- Centralização dos estilos de header e footer no arquivo `globals.css`.
- Remoção de duplicidades entre páginas.
- Redução do tamanho total de arquivos CSS.
- Minificação do CSS.

### Otimização de Imagens
- Redimensionamento das imagens para tamanhos adequados ao layout real.
- Redução do peso dos arquivos de imagem.
- Melhor adequação às dimensões exibidas.
- Aplicação de técnicas para diminuir o impacto no LCP.

### Melhorias de Responsividade
- Ajustes estruturais de layout com media queries.
- Correção do alinhamento da navegação.
- Eliminação de sobreposição entre elementos em telas pequenas.
- Padronização visual dos cards e componentes.

### Minificação Geral
- HTML, CSS e JS minificados para diminuir payloads de rede e tempo de parse.

---

## Comparativo Antes / Depois

### Pontuações Iniciais
- **Desempenho:** 60  
- **Acessibilidade:** 91  
- **Práticas Recomendadas:** 100  
- **SEO:** 82  

### Pontuações Finais (Após Otimizações)
- **Desempenho:** 99  
- **Acessibilidade:** 100  
- **Práticas Recomendadas:** 100  
- **SEO:** 100  

---

### Métricas Comparadas

| Indicador | Antes | Depois |
|---------|------|-------|
| Largest Contentful Paint | muito alto | 1,8 s |
| Total Blocking Time | elevado | 110 ms |
| Speed Index | regular | 0,9 s |
| Cumulative Layout Shift | com deslocamentos | 0 |
| Pontuação Performance | abaixo de 70 | 99 |

Este comparativo comprova, com base nas medições do Lighthouse, que houve grande evolução no desempenho e na experiência do usuário.

---

## 📎 Como Anexar os Relatórios de Performance

Para atender ao requisito de entrega dos relatórios Lighthouse antes e depois das otimizações, foi adotada a seguinte estratégia:

### Estrutura Utilizada no Repositório

Os arquivos de evidência foram organizados em duas pastas na raiz do projeto:

```
/
├── relatorios/
│   ├── lighthouse-antes.pdf
│   └── lighthouse-depois.pdf
│
└── prints/
    ├── lighthouse-performance-antes.png
    └── lighthouse-performance-depois.png
```

### Relatórios em PDF

- O relatório inicial gerado pelo Lighthouse foi salvo como:  
   **lighthouse-antes.pdf**

- Após todas as melhorias de performance, um novo relatório foi gerado e salvo como:  
   **lighthouse-depois.pdf**

Esses arquivos foram incluídos diretamente na pasta `/relatorios` do projeto para permitir fácil acesso pelo avaliador.

### Inclusão dos Prints

Além dos PDFs, foram registrados prints das pontuações nas DevTools para reforçar o comparativo visual, armazenados na pasta `/prints`.

Os relatórios podem ser acessados através dos links abaixo:

- [Relatório Lighthouse - Antes das Otimizações](./relatorios/lighthouse-antes.pdf)
- [Relatório Lighthouse - Depois das Otimizações](./relatorios/lighthouse-depois.pdf)

---

## Conteúdo da Entrega

Este repositório público contém:

- Código-fonte do projeto otimizado.
- Dois relatórios Lighthouse (antes e depois).
- Prints comparativos das métricas.
- Este arquivo README.md documentando todo o processo.

---
