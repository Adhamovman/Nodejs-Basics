import { Worker, isMainThread } from "worker_threads";
import os from "os";
import path from "path";

const NUM_CORES = os.cpus().length;

const createWorker = (workerData) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker(
      path.join(process.cwd(), "src", "wt", "worker.js"),
      { workerData }
    );

    worker.on("message", (result) => {
      resolve(result);
      worker.terminate();
    });

    worker.on("error", (error) => {
      reject(error);
    });
  });
};

const createWorkers = async () => {
  const workers = [];
  for (let i = 0; i < NUM_CORES; i++) {
    const workerData = 10 + i;
    const workerPromise = createWorker(workerData);
    workers.push(workerPromise);
  }
  return Promise.all(workers);
};

const performCalculations = async () => {
  if (isMainThread) {
    try {
      const results = await createWorkers();
      console.log(results);
    } catch (error) {
      console.error(error);
    }
  }
};

await performCalculations();
