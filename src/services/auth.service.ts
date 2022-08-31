import { sign } from 'jsonwebtoken';
import { hash, compare } from 'bcrypt';

// Service
export default {
  async login(data: { email: String; password: String }) {
    try {
      // Find document in database
      /* 
        ** EXAMPLE
        const user = await db.findOne({ email: data.email }, 'email password');

        const match = await compare(data.password, user.password);

        if (!match) throw Error('Invalid credentials');
      */

      // Create and return JWT
      const jwt = await sign({ foo: 'bar' }, 'superSecret');

      return {
        token: jwt,
      };
    } catch (e: any) {
      throw Error(e.message || 'Error handling request');
    }
  },

  async register(data: { email: String; password: String }) {
    try {
      let user;

      // Create document in database
      /* 
        ** EXAMPLE
        const hash = await hash(data.password, 10);

        user = await db.create({ email: data.email, password: hash });
      */

      // Create and return JWT
      const jwt = await sign({ foo: 'bar' }, 'superSecret');

      return {
        user,
        token: jwt,
      };
    } catch (e: any) {
      throw Error(e.message || 'Error handling request');
    }
  },
};
