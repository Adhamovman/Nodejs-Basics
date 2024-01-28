import { workerData, parentPort } from "worker_threads";
const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  const compute = (input) => {
    const result = nthFibonacci(input);
    return result;
  };
  try {
    const result = compute(workerData);
    parentPort.postMessage({ status: "resolved", data: result });
  } catch (error) {
    parentPort.postMessage({ status: "error", data: null });
  }
};

sendResult();
