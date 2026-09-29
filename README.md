# Desafio DevSecOps — Gerenciador de Tarefas

## Sobre o Projeto
Este repositório faz parte do desafio prático do módulo de DevSecOps da ADA Tech.
Você receberá este projeto com vulnerabilidades propositais e uma pipeline incompleta.
Seu objetivo é **implementar a pipeline de segurança** e **corrigir as vulnerabilidades**.

## Estado atual
A pipeline está **incompleta**. Os steps de segurança precisam ser implementados por você.

## Sua missão
1. Implementar os steps de segurança no `pipeline.yml`
2. Fazer a pipeline **quebrar** ao detectar os problemas
3. Corrigir as vulnerabilidades encontradas
4. Fazer a pipeline **passar** com tudo verde ✅
5. Documentar o funcionamento da pipeline neste README

## O que implementar
- [*] Secrets Scanning com **Gitleaks**
- [*] SAST com **Semgrep**
- [*] SCA com **Grype**
- [*] Deploy com **GitHub Pages**

## Como a pipeline funciona
> **Substitua este bloco pela sua explicação após implementar a pipeline.**
> Descreva cada step, o que ele faz e por que ele é importante para a segurança.
>
> CAIXAVERSO - FC4 | Agente de Segurança Cibernética - I | #1720
> ANOTAÇÃO de 15set2026 por Marcelo De Figueiredo Id: 1720020
>
> Registro aqui a minha consideração sobre o Projeto: Foi muito valoroso o primeiro contato com o Ambiente de Codificação, acessar tal ambiente mesmo que de forma rasa e controlada foi uma verdadeira recompensa que fez valer a pena toda a energia que apliquei até aqui, ainda valida a teoria que vimos e serviu de base para a realização do Projeto.
> 
>A pipeline DevSecOps possui etapas de segurança que impedem que o código vulnerável seja públicado em produção.
> Checkout do código: Download do código-fonte e Executa as verificações
> Build da Aplicação: construção e validação para execução da aplicação
> Secrets scannung com GITLEAKS: Analisa o código e o histórico de commits em busca de senhas, tokens, chaves de API e Credenciais.
>
> Assim como foi dado em aulas pelo professor Davi, logo que se vê:
> const API_KEY = "ghp_xK92mNpL34rTvQ87wZaB56cDeFgHiJkL";
const DB_PASSWORD = "admin@prod#2024";
> Fica claro que tem algo errado, é visível, mas ver o 'GITLEAKS' identificar a falha é como se faz profissionalmente. Usar a ferramenta é automação e escalabilidade. 
A07:2021 – Falhas de Identificação e Autenticação (Identification and Authentication Failures)
A02:2021 – Falhas Criptográficas (Cryptographic Failures)
A05:2021 – Configuração Incorreta de Segurança (Security Misconfiguration)

Correções de Análise Estática (SAST - Semgrep) Impactos de Segurança (OWASP Top 10 - A03: Injeção):
innerHTML: Permitia a injeção de scripts maliciosos no navegador (Cross-Site Scripting - XSS), podendo expor dados e sessões de usuários.
innerHTML: Permitia a injeção de scripts maliciosos no navegador (Cross-Site Scripting - XSS), podendo expor dados e sessões de usuários.
eval(): Permitia a execução arbitrária de código, criando brechas críticas no fluxo da aplicação.
Correção realizada:
Substituição de innerHTML por textContent para higienizar a renderização de dados no DOM.
Eliminação de eval(), substituindo-o por estruturas lógicas e parsers nativos seguros.

SCA com Grype: Software Composition Analysis com o Grype conecta-se a duas categorias do OWASP Top 10:
A06:2021 – Componentes Vulneráveis e Desatualizados
A08:2021 – Falhas na Integridade de Software e Dados
Ações de Mitigação: Varredura Automática: Execução do Grype e Política Break the Build: Configuração de falha automática para barrar vulnerabilidades severa.
Remediação: Atualização das versões das dependências vulneráveis antes de liberar o deploy.

Deploy com GitHub Pages: Automático e somente após a aprovação de todas as etapas da pipeline DevSecOps.
Garante que apenas código validado pelos controles de segurança seja publicado em produção.
A aplicação foi disponibilizada publicamente em: https://fig68.github.io/projeto-devsecop-desafio/

Implementado para analisar dependências e identificar vulnerabilidades conhecidas (CVEs).
Dependências vulneráveis foram atualizadas para versões mais seguras.
A pipeline falha automaticamente quando vulnerabilidades de severidade média ou superior são encontradas.
## URL de Produção
[https://fig68.github.io/projeto-devsecop-desafio/]
