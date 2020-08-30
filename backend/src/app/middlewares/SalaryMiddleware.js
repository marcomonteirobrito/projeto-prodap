import * as Yup from 'yup';

export default async (request, response, next) => {
  const { name, fixedSalary, totalSale } = request.body;

  const schema = Yup.object().shape({
    name: Yup.string().required(),
    fixedSalary: Yup.string().required(),
    totalSale: Yup.string().required(),
  });

  if (!(await schema.isValid(request.body))) {
    return response.status(400).json({ error: 'Informe todos os campos' });
  }

  return next();
}