export const asyncPromise = async () => {
  function simulateNetworkRequest(shouldSuccess: boolean): Promise<string> {
    console.log("start work promise - status pending");

    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        if (shouldSuccess) {
          console.log("end work promise - status resolved");
          resolve("success");
        } else {
          console.log("end work promise - status rejected");
          reject(new Error("error"));
        }
      }, 2000);
    });
  }
  //   simulateNetworkRequest(true)
  //   simulateNetworkRequest(false)

  function promiseChainExample(): void {
    console.log("start work promise chain - status pending");
    simulateNetworkRequest(true)
      .then((result) => {
        console.log("end work promise chain - status resolved", result);
      })
      .catch((error) => {
        console.log("end work promise chain - status rejected", error);
      })
      .finally(() => {
        console.log("end work promise chain - status finally");
      });
  }

  promiseChainExample();
};
