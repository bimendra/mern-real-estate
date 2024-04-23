import passport from 'passport';
import { Strategy } from 'passport-local';

const mockUsers = [
  {
    username: 'johndoe',
    email: 'john@doe.com',
    password: 'password',
  },
  {
    username: 'janedoe',
    email: 'jane@doe.com',
    password: 'password',
  },
];

export default passport.use(
  new Strategy(function verify(username: string, password: string, done) {
    console.log(`auth:login with username: ${username}, password: ${password}`);
    try {
      const foundUser = mockUsers.find((user) => user.username === username);
      if (!foundUser) {
        throw new Error('User not found');
      }
      if (foundUser?.password !== password) {
        throw new Error('Invalid credentials');
      }
      done(null, foundUser);
    } catch (error) {
      done(error, undefined);
    }
  })
);
