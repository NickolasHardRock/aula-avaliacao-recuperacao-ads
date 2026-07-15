# Avaliação Prática: Automação de Testes

> LEIA TUDO ATENTAMENTE <

## Mínimo

5 Unitários
20 Integracao
20 API

## Objetivo

Nesta atividade, você atuará como Analista de Qualidade de Software. Sua responsabilidade será analisar uma API já desenvolvida e implementar uma suíte de testes automatizados para verificar seu funcionamento.

Seu foco não será desenvolver novas funcionalidades ou corrigir código, mas sim identificar os comportamentos que precisam ser validados e automatizar esses testes utilizando as bibliotecas vistas em aula.

> Vale reforçar que essa API não usa o type module mas o commonjs.

## Requisitos

Você deverá analisar a estrutura do projeto e identificar quais testes podem ser implementados.

A avaliação deve conter, no mínimo:

* Testes Unitários
  * Validar funções ou métodos isoladamente.
  * Testar diferentes cenários, incluindo casos de sucesso e de erro.

* Testes de Integração
  * Validar o funcionamento conjunto entre diferentes camadas da aplicação.
  * Verificar se operações como criação, consulta, atualização e remoção produzem os resultados esperados.

* Testes de API
  * Validar os endpoints disponíveis.
  * Verificar códigos de status HTTP.
  * Validar o corpo das respostas.
  * Testar cenários positivos e negativos.

## Orientações

* Organize os testes em arquivos e diretórios apropriados.
* Utilize `describe()` para agrupar testes relacionados.
* Dê nomes claros aos casos de teste utilizando `test()` ou `it()`.
* Evite código duplicado sempre que possível.
* Os testes devem ser independentes, ou seja, a execução de um não deve comprometer os demais.
* Documente o que achar necessário dentro do `README.md` da pasta `__tests__`.
* Suba a pasta de `coverage` no PR.

## O que será observado

A avaliação não considera apenas a quantidade de testes implementados. Também será analisada a capacidade de:

* compreender o funcionamento da API;
* identificar cenários relevantes de teste;
* selecionar corretamente o tipo de teste (unitário, API ou integração);
* escrever testes claros, organizados e de fácil manutenção;
* validar tanto cenários de sucesso quanto situações de erro e exceções.

**Importante:** Não é permitido alterar a lógica de negócio da API fornecida. Caso algum comportamento esteja incorreto, ele deverá ser evidenciado por meio dos testes automatizados, e não corrigido diretamente no código da aplicação. O objetivo desta avaliação é validar sua capacidade de analisar um sistema existente, identificar cenários de teste e automatizar sua verificação.
**Importante 2** É obrigatório subir a pasta COVERAGE no github, caso contrário a avaliação será desconsiderada.
