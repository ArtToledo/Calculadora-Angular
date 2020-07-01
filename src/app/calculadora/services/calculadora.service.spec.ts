import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // Os testes sempre são criados com essa palavra reservada "it", que é uma função do Jasmine
  it('Must ensure that 1 + 4 = 5',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let soma = service.calcular(1, 4, CalculadoraService.SOMA);
      expect(soma).toEqual(5);
    })
  );

  it('Must ensure that 4 - 3 = 1',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let subtracao = service.calcular(4, 3, CalculadoraService.SUBTRACAO);
      expect(subtracao).toEqual(1);
    })
  );

  it('Must ensure 1 / 4 = 0.25',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let divisao = service.calcular(1, 4, CalculadoraService.DIVISAO);
      expect(divisao).toEqual(0.25);
    })
  );

  it('Must ensure 2 * 4 = 8',
    inject([CalculadoraService], (service: CalculadoraService) => {
      let multiplicacao = service.calcular(2, 4, CalculadoraService.MULTIPLICACAO);
      expect(multiplicacao).toEqual(8);
    })
  );
});
