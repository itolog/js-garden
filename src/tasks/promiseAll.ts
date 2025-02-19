const promiseAll = <T>(arr: Promise<T>[]) => {
  return new Promise(async (resolve, reject) => {
    const res: T[] = [];

    for (let i = 0; i < arr.length; i++) {
      try {
        const data = await arr[i];
        res.push(data);
      } catch (e) {
        reject(e);
      }
    }

    if (arr.length === res.length) {
      return resolve(res);
    }
  });
};

export default promiseAll;
