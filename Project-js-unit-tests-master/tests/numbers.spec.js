/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const numbers = require('../src/numbers');

/*
  A função numbers recebe um array (tamanho variável) e retorna true se todos os parâmetros forem do tipo 'number' e false caso contrário.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, 'a']; [].
  Comportamento:
    - numbers([2, 3, 4]); // Retorna: true
    - numbers([2, 'errado', 5]); // Retorna: false

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('2 - Implemente os casos de teste para a função `numbers`', () => {
  it('Verifica se a função `numbers`retorna `true` quando o array contém apenas numeros e falso caso contrário', () => {
    // assert.fail();
    // Escreva um teste em que a função recebe [1, 2, 3, 4, 5] e retorna true
    const array1 = [1, 2, 3, 4, 5];
    assert.strictEqual(numbers(array1), true);
    // Escreva um teste em que a função recebe [1, 2, '3', 4, 5] e retorna false
    const array2 = [1, 2, '3', 4, 5];
    assert.strictEqual(numbers(array2), false);
    // Escreva um teste em que a função recebe [1, 'a', 3] e retorna false
    const array3 = [1, 'a', 3];
    assert.strictEqual(numbers(array3), false);
    // Escreva um teste em que a função recebe [' '] e retorna false
    const array4 = [' '];
    assert.strictEqual(numbers(array4), false);
  });
});
