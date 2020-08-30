import * as Yup from 'yup';

export default async (request, response, next) => {
  const { spot1, spot2 } = request.body;

  const schema = Yup.object().shape({
    spot1: Yup.string().required(),
    spot2: Yup.string().required(),
  });

  if (!(await schema.isValid(request.body))) {
    return response.status(400).json({ error: 'Informe todos os campos' });
  }

  return next();
}