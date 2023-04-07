// printMessageTest.test.js
const { info, printMessage } = require('../src/printMessage');
describe('2 - Implemente o caso de teste para a função `printMessage`', () => {
    it('teste objeto info', () => {
    expect(info).toHaveProperty('personagem');
  });
});

describe('3 - Ainda sobre a função `printMessage`, adicione os casos de teste a seguir`', () => {
  
  it('teste função printMessage', () => {
    expect(printMessage(info)).toMatch('Boas vindas,');
    expect(printMessage(info)).toMatch(info.personagem);
  });
});

describe('4 - Crie um fluxo de exceção para a função `printMessage`', () => {
  it('teste fluxo de exceção função printMessage', () => {
    expect(() => printMessage('Margarida')).toThrow('objeto inválido');
  });
});