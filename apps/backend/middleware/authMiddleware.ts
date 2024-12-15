import { Request, Response, NextFunction } from 'express';
import firebaseAdmin from '../config/firebaseConfig';

const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    res.status(401).json({ message: 'Authorization token is required' });
    return
  }

  try {
    const decodedToken = await firebaseAdmin.auth().verifyIdToken(token);
    next()
  } catch (error) {
  
    res.status(401).json({ message: 'Unauthorized: Invalid or expired token' });
    return

  }
};

export default authMiddleware;
