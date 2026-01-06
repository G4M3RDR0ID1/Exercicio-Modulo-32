# 🌎 Projeto: Site de Viagens – Exercicio Módulo 32

## 📌 Descrição
Este projeto consiste em um site front-end voltado para apresentação de destinos turísticos. Ele foi desenvolvido durante o curso e utilizado nesta atividade com o objetivo de aplicar técnicas de otimização de performance web e melhorias de código, com base em métricas concretas analisadas através do Chrome DevTools e Lighthouse.

---

## Gargalos Identificados (Análise Inicial)

Durante a avaliação inicial do projeto, foram encontrados os seguintes problemas principais:

### 📱 Layout não responsivo em telas pequenas
- Navegação sobreposta ao logo em dispositivos móveis.
- Falta de media queries para reorganizar elementos.
- Estrutura inadequada para diferentes resoluções.

### 🧭 Estrutura de navegação centralizada indevidamente
- Logo e botões não estavam fixados nos cantos.
- Cortes visuais em telas grandes.
- Alinhamento inconsistente entre páginas.

### 🎨 Falta de consistência visual
- Header e footer com estilos diferentes em cada página.
- Cards de destinos sem padronização.
- Problemas de espaçamento e tipografia.

### ⚡ Performance
- Imagens pesadas sem compressão.
- Scripts bloqueando a renderização.
- Requisições e arquivos CSS duplicados.

---

## 🛠️ Melhorias Aplicadas

Com base nos gargalos identificados, foram realizadas diversas otimizações:

### 🖼️ Imagens
- Redimensionamento das imagens para tamanhos adequados.
- Sugestão de uso de formatos modernos e otimizados.
- Aplicação de boas práticas para reduzir o peso do carregamento.

### 🧹 Código CSS
- Unificação de estilos globais no arquivo `globals.css`.
- Remoção de duplicidades entre arquivos.
- Limpeza do `Destinos.module.css`, mantendo apenas estilos específicos.

### 📐 Navegação e alinhamento
- Logo fixado corretamente no canto esquerdo.
- Botões “Home” e “Destinos” alinhados no canto direito.
- Ajuste de espaçamentos laterais.

### 📲 Responsividade
- Criação e aplicação de media queries.
- Reorganização do header em dispositivos móveis.
- Aumento do padding e altura do header para melhor legibilidade.

### 🌀 Scripts
- Ajuste dos scripts com `async/defer`.
- Redução do bloqueio de renderização.
- Carregamento mais eficiente do JavaScript.

---

## 📊 Comparativo Antes / Depois

### 1. Estrutura de CSS

**Antes:**
- Header e footer duplicados em vários arquivos.
- Dificuldade de manutenção.
- Inconsistência visual entre páginas.

**Depois:**
- Estilos centralizados em `globals.css`.
- Arquivos CSS mais enxutos.
- Layout consistente em todo o site.

---

### 2. Navegação e alinhamento

**Antes:**
- Elementos centralizados indevidamente.
- Botão “Destinos” cortando na borda.
- Falta de espaçamento lateral.

**Depois:**
- Alinhamento correto nos cantos.
- Conteúdo sem cortes.
- Melhor usabilidade em telas grandes.

---

### 3. Responsividade

**Antes:**
- Navegação sobreposta ao logo.
- Header muito fino.
- Layout quebrado em mobile.

**Depois:**
- Media queries aplicadas.
- Logo centralizado em telas pequenas.
- Navegação reposicionada abaixo.
- Ausência total de sobreposição.

---

### 4. Performance

**Antes:**
- Imagens pesadas.
- Scripts bloqueantes.
- CSS não minificado.

**Depois:**
- Imagens mais leves.
- Scripts não bloqueando o carregamento.
- Melhor tempo de renderização.
- Experiência de usuário mais rápida.

---

## 🚀 Resumo das Melhorias de Maior Impacto

As técnicas que trouxeram maior resultado prático foram:

1. **Unificação do CSS global**
   - Eliminou duplicidade de código.
   - Garantiu identidade visual consistente.
   - Facilitou manutenção futura.

2. **Correção do header**
   - Alinhamento correto do logo e navegação.
   - Remoção de cortes em telas grandes.

3. **Aplicação de responsividade**
   - Media queries tornaram o site acessível em qualquer dispositivo.
   - Melhor organização dos elementos em mobile.

4. **Otimização de performance**
   - Imagens mais leves e scripts eficientes reduziram o tempo de carregamento.

---

## 📦 Conteúdo da Entrega

Este repositório contém:

- Código-fonte do projeto já otimizado.
- Relatórios de performance antes e depois.
- Este README documentando todo o processo de análise e melhoria.

---

## 🔗 Link do Repositório

Repositório público para avaliação:

👉 https://github.com/G4M3RDR0ID1/Exercicio-Modulo-22
