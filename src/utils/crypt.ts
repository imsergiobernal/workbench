import bcrypt from 'bcryptjs';

export = {
  compare: (value: string | number, hashed: string): Promise<boolean> => {
    return bcrypt.compare(value.toString(), hashed);
  },
  hash: (value: string | number): Promise<string> => {
    return bcrypt.hash(value.toString(), 10);
  }
}
