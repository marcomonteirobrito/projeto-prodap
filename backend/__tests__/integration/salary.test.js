import Salary from '../../src/app/models/Salary';

describe('Calculo de salário;', () => {
  it('A rota /salary com método post deve retornar um JSON quando um novo calculo de salário for criado', 
    async () => {
      const salary = await Salary.create({ 
        name: 'Marco',
        fixedSalary: '500.00',
        totalSale: '1230.30'
      });

      expect(salary.total_salary).toBe(684.545);
  });
});