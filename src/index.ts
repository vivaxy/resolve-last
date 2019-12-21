/**
 * @since 2019-12-21 10:32
 * @author vivaxy
 */
export default function resolveLast<I extends Array<any>, O>(
  fn: (...args: I) => Promise<O>,
) {
  let lastResolve: (value?: O | PromiseLike<O>) => void = Promise.resolve;
  let lastReject: (reason?: any) => void = Promise.reject;
  function cleanMemory() {
    lastResolve = Promise.resolve;
    lastReject = Promise.reject;
  }
  return function resolveLastRunner(...args: I) {
    return new Promise(function(resolve, reject) {
      lastResolve = resolve;
      lastReject = reject;
      fn(...args)
        .then(function(result) {
          if (lastResolve === resolve) {
            lastResolve(result);
            cleanMemory();
          }
        })
        .catch(function(reason) {
          if (lastReject === reject) {
            lastReject(reason);
            cleanMemory();
          }
        });
    });
  };
}
