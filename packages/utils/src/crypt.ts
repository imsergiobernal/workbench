import { compare, hash } from 'bcryptjs';

export default {
  compare: (value: string | number, hashed: string): Promise<boolean> => {
    return compare(value.toString(), hashed);
  },
  hash: (value: string | number): Promise<string> => {
    return hash(value.toString(), 10);
  }
};
