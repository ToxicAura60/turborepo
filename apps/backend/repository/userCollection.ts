
import { DocumentReference } from 'firebase-admin/firestore'
import firebaseAdmin  from '../config/firebaseConfig'
import { User } from '../entities/user';

const firebaseFirestore = firebaseAdmin.firestore();
const firebaseAuth = firebaseAdmin.auth();

const USERS_COLLECTION = 'users';

function replaceUndefinedWithNull(obj: any): any {
  return JSON.parse(
    JSON.stringify(obj, (key, value) => (value === undefined ? null : value))
  );
}

export const createUser = async (user: User): Promise<string> => {
  try {
   
    var userRecord = await firebaseAdmin.auth().createUser({
      ...user
    })
    const userRef = firebaseFirestore.collection(USERS_COLLECTION).doc(userRecord.uid); 
    const { password, ...userWithoutPassword } = user;
    const updatedUser = replaceUndefinedWithNull(userWithoutPassword);

    await userRef.set({
      ...updatedUser,
    });
    return userRecord.uid;
  } catch (e) {
    throw new Error(`Error creating user: ${(e as Error).message}`);
  }
};

export const deleteUser = async (userId: string): Promise<void> => {
  try {
    await firebaseAdmin.auth().deleteUser(userId)
    const userRef = firebaseFirestore.collection(USERS_COLLECTION).doc(userId);
    await userRef.delete();
  } catch (e) {
    throw new Error(`Error deleting user: ${(e as Error).message}`);
  }
};

export const getAllUsers = async (): Promise<User[]> => {
  try {
    const usersSnapshot = await firebaseFirestore.collection(USERS_COLLECTION).get();
    const users: User[] = [];
    usersSnapshot.forEach(doc => {
      var data = doc.data()
      users.push(doc.data() as User);
    });
    return users;
  } catch (e) {
    throw new Error(`Error fetching users: ${(e as Error).message}`);
  }
};

export const getUserById = async (userId: string): Promise<User | null> => {
  try {
    const userRef = firebaseFirestore.collection(USERS_COLLECTION).doc(userId);
    const doc = await userRef.get();
    if (!doc.exists) {
      return null;
    }
    return doc.data() as User;
  } catch (e) {
    throw new Error(`Error fetching user: ${(e as Error).message}`);
  }
};

export const updateUser = async (userId: string, updatedData: Partial<User>): Promise<void> => {
  try {
    const { password, ...rest } = updatedData;
    const updatedUser = replaceUndefinedWithNull(rest);
    const userRef = firebaseFirestore.collection(USERS_COLLECTION).doc(userId);
    await userRef.update(updatedUser);
  } catch (e) {
    throw new Error(`Error updating user: ${(e as Error).message}`)
  }
};
