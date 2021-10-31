import { Request, Response } from 'express';
import { Color } from '../../models/color';

export const indexColor = async (req: Request, res: Response) => {
  const color = await Color.find();

  res.send(color);
}