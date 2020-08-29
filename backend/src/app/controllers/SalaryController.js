import Salary from '../models/Salary';

class SalaryController {
  async index(request, response) {
    const userCalculations = await Salary.findAll();

    return response.json(userCalculations);

  }
  
  async store (request, response) {
    const { name, fixed_salary, total_sale } = request.body;

    const total_salary = (fixed_salary + (total_sale * 0.15));

    const newSalary = await Salary.create({
      name, 
      fixed_salary,
      total_sale,
      total_salary
    });

    return response.status(200).json(newSalary);
  }
}

export default new SalaryController();