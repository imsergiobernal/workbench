import { eachLimit } from 'moduleskit/dist/async';

(async function main(): Promise<void> {
  eachLimit([1,2], 1, (value, done) => {
    console.log(value);
    done();
  });
  throw new Error('Main not implemented.');
}());
