import Salary from '../models/Salary';

class SalaryController {
  async index(request, response) {
    const userCalculations = await Salary.findAll();

    return response.json(userCalculations);

  }
  
  async store (request, response) {
    const { name, fixed_salary, total_sale, commission } = request.body;

    const total_salary = (fixed_salary + (total_sale * (commission / 100)));

    const user = await Salary.create({
      name, 
      fixed_salary,
      total_sale,
      commission,
      total_salary
    });

    return response.status(200).json(user);
  }
}

export default new SalaryController();