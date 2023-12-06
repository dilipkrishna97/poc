import http from "./ApiConfig";

// export const addChild = (data) => {
//   return http.post("/addChild", data, {
//     params: { withoutAuth: true },
//   });
// };

export const addChild = (data) => {
    // make the actual api call to get the response
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("The child details have been saved.");
    }, 2000);
  });
};
