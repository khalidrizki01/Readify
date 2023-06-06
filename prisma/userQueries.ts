import prisma from './index';
import bcrypt from 'bcrypt';

interface User {
  email: string;
  username: string;
  password: string;
}

async function getAllUsers() {
  return prisma.user.findMany()
}
  
async function login(email: string, password: string) {
  const user = await prisma.user.findUnique({
    where: { email },
  });
  // console.log(user)
  if (!user) {
    throw new Error("Invalid email or password");
  }

  // Check if the provided password matches the stored password
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new Error("Invalid email or password");
  }

  // Return the logged-in user
  return user;
}

async function getUserById(userId: string) {
  return prisma.user.findUnique({
    where: {
      id: userId,
    }
  })
}

async function register(username: string, email: string, password: string) {

  const hashedPassword = await bcrypt.hash(password, 10);

  return prisma.user.create({
    data: {
      username: username, 
      email: email, 
      password: hashedPassword,
    }
  })
}

export {
  getAllUsers,
  getUserById, 
  register, 
  login
}