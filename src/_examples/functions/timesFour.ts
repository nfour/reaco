import { Action } from '../../components/Action';
import { Http } from '../../middlewares/Http';

const multiply = new Action(({ n, multiplier }) => n * multiplier);

export const timesFour = new Action(async ({ request: { body } }) => {
  const multiplied: number = await multiply.execute({ n: body.n, multiplier: 4 });

  return {
    statusCode: 200,
    body: multiplied,
  };
})
  .use(Http());
