import { Request } from 'express';

export const cookieExtractor = (req: Request) => {
  let token: string;

  if (req && req.cookies) {
    token = req.cookies['token'];
  }
  return token;
};
