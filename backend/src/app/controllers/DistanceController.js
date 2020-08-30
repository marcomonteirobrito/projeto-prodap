import Distance from '../models/Distance';

class DistanceController {
  async index (request, response) {
    const distances = await Distance.findAll();

    return response.json(distances);
  }
  
  async store (request, response) {
    const { spot1, spot2 } = request.body;

    const x1 = Number(spot1.split(' ')[0]);
    const y1 = Number(spot1.split(' ')[1]);
    const x2 = Number(spot2.split(' ')[0]);
    const y2 = Number(spot2.split(' ')[1]);

    const distance = Math.pow((
      Math.pow((x2 - x1), 2) +
      Math.pow((y2 - y1), 2)
    ) , 0.5);

    const resultDistance = await Distance.create({
      x1, 
      x2,
      y1,
      y2,
      distance,
    });

    return response.status(200).json(resultDistance);
  }
}

export default new DistanceController();