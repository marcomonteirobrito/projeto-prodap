import Salary from '../models/Salary';

class SalaryController {
  async index(request, response) {
    const userCalculations = await Salary.findAll();

    return response.json(userCalculations);
  }

  async store(request, response) {
    const { name, fixedSalary, totalSale } = request.body;

    const fixed_salary = Number(fixedSalary);
    const total_sale = Number(totalSale);

    const total_salary = (fixed_salary + (total_sale * 0.15));

    const newSalary = await Salary.create({
      name,
      fixed_salary,
      total_sale,
      total_salary
    });

    return response.status(200).json(newSalary);
  }

  async delete(request, response) {
    const { deleteSalaryId } = request.params;

    await Salary.destroy({
      where: {
        id: deleteSalaryId
      },
      force: true
    });

    return response.status(200).json({ response: 'Deletado com sucesso' });
  }
}

export default new SalaryController();