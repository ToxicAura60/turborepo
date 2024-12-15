// src/controllers/userController.ts
import { Request, Response } from 'express';
import * as userRepository from '../repository/userCollection';
import { User } from '../entities/user';


export const createUserController = async (req: Request, res: Response): Promise<void> => {
  const { displayName, email, password, phone, photoURL }: User = req.body;

  try {
    const userId = await userRepository.createUser({ displayName, email, password, photoURL, phone});
    res.status(201).json({
      message: 'User created successfully',
      userId: userId,
    });
  } catch (e) {
    res.status(500).json({ message: (e as Error).message });
  }
};

export const getAllUsersController = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await userRepository.getAllUsers();
    res.status(200).json(users);
  } catch (e) {
    res.status(500).json({ message: (e as Error).message });
  }
};

export const getUserByIdController = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const user = await userRepository.getUserById(id);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(200).json(user);
    }
  } catch (e) {
    res.status(500).json({ message: (e as Error).message });
  }
};


export const updateUserController = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const updatedData: Partial<User> = req.body;

  try {
    await userRepository.updateUser(id, updatedData);
    res.status(200).json({ message: 'User updated successfully' });
  } catch (e) {
    res.status(500).json({ message: (e as Error).message });
  }
};

export const deleteUserController = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    await userRepository.deleteUser(id);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (e) {
    res.status(500).json({ message: (e as Error).message });
  }
};




  





