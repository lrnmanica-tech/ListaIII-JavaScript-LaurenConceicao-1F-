# Lista III - JavaScript

* **Discente:** Lauren Manica Conceição
* **Disciplina:** Desenvolvimento Web I
* **Turma:** 1F

---

## Checkpoint - 0

* Na aba console da página do desenvolvedor.
* Para evitar erros de código durante o carregamento da página.
* O JavaScript não seria aplicado, pois estaria referenciando um arquivo inexistente.

## Checkpoint - 1

* Pois o operador `+` é responsável tanto pela soma entre números quanto pela concatenação de strings, e neste caso, ele recorre à concatenação de strings devido ao primeiro valor.
* Pois os parênteses podem indicar qual cálculo deve ser calculado primeiro.

## Checkpoint - 2

* Acredito que será impresso:
  * `'IFC Concórdia'`
  * `8.5`
  * `false`
  * Aparecerá em branco.
* `Uncaught SyntaxError: Missing initializer in const declaration`
* Os nomes de variáveis válidos são: `class` e `nota_final`. Os demais nomes estão errados pois:
  * O caractere `$` não é válido na nomenclatura de variáveis.
  * O caractere `-` não é permitido pois possui valor de cálculo.
  * Não é permitido utilizar números na nomenclatura de variáveis.
* Acredito que será impresso `16`; Foi impresso `16`.

## Checkpoint - 3

* `9`, `5`, `14`
* `3.5`
* `5`
* `49`
* `'Olá, Ana! 7 dividido por 2 é 3.5.'`
* `8.5`
* `"8.5"`
* Provavelmente, esta última linha dará um erro!
* A terceira linha deveria ser `1`. A penúltima linha deveria ser `7.51`. A última linha deveria ser `NaN`.
* Ao adicionarmos `Number`, o valor inserido tende a ser convertido para números, enquanto a outra operação apenas concatena o `1` ao `"7.5"`.
* `1`, `8`, `2.5`. Estão corretas.

## Checkpoint - 4

* Com temperatura igual a `20`, a mensagem será `"Agradável"`. Com `30`, `"Calor"`, pois as condições estão determinadas para que se a temperatura seja igual ou maior que 20, deverá imprimir `"Agradável"`, e se estiver igual ou maior que 30, deverá imprimir `"Calor"`.
* A saída será:
  * `true`
  * `false`
  * `true`
  * `false`
* E o `===` é importante pois com ele realizamos o teste de igualdade no JavaScript.

```javascript
let nota = 0;
if (0 <= nota && nota <= 10) {
  nota == true;
}
```

## Checkpoint - 5

* `6.875`.
* O índice inicial é `0`, e o final seria `4`.

```javascript
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
```

## Checkpoint - 6

* O objetivo da função era com que as variáveis `A` e `B` fossem somadas, entretanto, a função não retornava o valor. Para corrigir este erro, o ideal é adicionar um `return` ao lado da ação `A + B`.

```javascript
function ehPar(n) {
  return n % 2 == 0;
}
```

* O `console.log(x)` é utilizado apenas para a impressão de resultados em uma função, já o `return` é mais eficiente, pois podemos também utilizar seu retorno frutífero para outras ações não funcionais e armazená-lo.

## Checkpoint - 7

* `Uncaught TypeError: Cannot set properties of null (setting 'textContent') at script.js:5:24`, significando que o interpretador não consegue adicionar as propriedades definidas no JS devido a ausência do `defer`.
* A cada clique no botão, é somado o valor numérico `1` na variável `cliques`, e a variável `mensagem` se torna verde.
* Pois seu valor muda ao decorrer dos cliques.

## Checkpoint - 8

### Checkpoint - 8.3
* Pois ao escrevermos `n1 + n2 / 2`, sem os parênteses, o interpretador entende que devemos primeiro realizar `n2 / 2` e depois somar o resultado com `n1`.

### Checkpoint - 8.6

| Nota 1 | Nota 2 | Resultado Esperado | Deu certo? |
| :--- | :--- | :--- | :--- |
| 8 | 7 | Média: 7.5 - Aprovado | Média: 7.5 - Situação: Aprovado! |
| 5 | 6 | Média: 5.5 - Abaixo da média | Média: 5.5 - Situação: Abaixo da média! |
| 6 | 6 | Média: 6.0 - Aprovado (limite) | Média: 6.0 - Situação: Aprovado! |
| 10 | 10 | Média: 10.0 - Aprovado | Média: 10.0 - Situação: Aprovado! |
| (vazio) | 5 | Mensagem de erro | Informe duas notas entre 0 e 10! |
| 11 | 5 | Mensagem de erro | Informe duas notas entre 0 e 10! |

* Para o fornecimento de um código reutilizável e uma melhor organização do código.
* Apenas a primeira linha, onde está armazenada a variável `NOTA_MINIMA`.
