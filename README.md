# Desafio DevSecOps — Gerenciador de Tarefas
## Resultado do Projeto
 
Todos os steps de segurança foram implementados e validados.
A pipeline bloqueia automaticamente a publicação caso sejam encontrados segredos expostos, vulnerabilidades de código ou dependências vulneráveis.

## Funcionamento da Pipeline

### Step 1 - Checkout
Baixa o código-fonte do repositório.
 
### Step 2 - Build
Realiza a construção e validação da aplicação.
 
### Step 3 - Gitleaks
Detecta segredos expostos no código.
 
### Step 4 - Semgrep
Executa análise estática de segurança (SAST).
 
### Step 5 - Grype
Analisa dependências vulneráveis (SCA).
 
### Step 6 - Deploy
Publica a aplicação após aprovação de todos os gates de segurança.

## Vulnerabilidades Corrigidas

A07:2021 – Falhas de Identificação e Autenticação (Identification and Authentication Failures)
A02:2021 – Falhas Criptográficas (Cryptographic Failures)
A05:2021 – Configuração Incorreta de Segurança (Security Misconfiguration)

Correções de Análise Estática (SAST - Semgrep) Impactos de Segurança (OWASP Top 10 - A03: Injeção):
innerHTML: Permitia a injeção de scripts maliciosos no navegador (Cross-Site Scripting - XSS), podendo expor dados e sessões de usuários.
eval(): Permitia a execução arbitrária de código, criando brechas críticas no fluxo da aplicação.
Correção realizada:
Substituição de innerHTML por textContent para higienizar a renderização de dados no DOM.
Eliminação de eval(), substituindo-o por estruturas lógicas e parsers nativos seguros.

SCA com Grype: Software Composition Analysis com o Grype conecta-se a duas categorias do OWASP Top 10:
A06:2021 – Componentes Vulneráveis e Desatualizados
A08:2021 – Falhas na Integridade de Software e Dados
Ações de Mitigação: Varredura Automática: Execução do Grype e Política Break the Build: Configuração de falha automática para barrar vulnerabilidades severas.
Remediação: Atualização das versões das dependências vulneráveis antes de liberar o deploy.

Deploy com GitHub Pages: Automático e somente após a aprovação de todas as etapas da pipeline DevSecOps.
Garante que apenas código validado pelos controles de segurança seja publicado em produção.
A aplicação foi disponibilizada publicamente em: https://fig68.github.io/projeto-devsecop-desafio/

## OWASP Top 10 Relacionado
Categorias OWASP citadas seguem a versão 2021, adotada pelas ferramentas e pelo material do desafio.

## Evidências
 Todos os steps de segurança foram implementados e validados.
A pipeline bloqueia automaticamente a publicação caso sejam encontrados segredos expostos, vulnerabilidades de código ou dependências vulneráveis.
- Execução do Gitleaks aprovada
- Execução do Semgrep aprovada
- Execução do Grype aprovada
- Deploy GitHub Pages aprovado

Implementado para analisar dependências e identificar vulnerabilidades conhecidas (CVEs).
Dependências vulneráveis foram atualizadas para versões mais seguras.
A pipeline falha automaticamente quando vulnerabilidades de severidade média ou superior são encontradas.

## URL de Produção
https://fig68.github.io/projeto-devsecop-desafio/
