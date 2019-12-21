/**
 * @since 2019-12-21 10:32
 * @author vivaxy
 */
import resolveLast from '../index';

test('resolveLast', async function() {
  // original async function
  function sleep(timeout: number): Promise<void> {
    return new Promise(function(resolve) {
      setTimeout(resolve, timeout);
    });
  }

  // transformed async function
  const resolveLastFunction = resolveLast<[number], void>(sleep);

  // callback function
  const callback = jest.fn();

  // function runner
  async function runFunction(timeout: number) {
    await resolveLastFunction(timeout);
    callback(timeout);
  }

  // function run times and arguments
  const args = [20, 10];

  // run function
  args.forEach(runFunction);

  // wait for all functions done
  await sleep(Math.max.apply(Math, args));

  // expect to be called once and with the correct arguments
  expect(callback).toHaveBeenCalledTimes(1);
  expect(callback).toHaveBeenCalledWith(args[args.length - 1]);
});
