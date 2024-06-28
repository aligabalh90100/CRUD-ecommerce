import baseUrl from "../Api/baseURL";
const useInsertData = async (url, params) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseUrl.post(url, params, config);
  return res;
};
const useCreateUser = async (url, params) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = await baseUrl.post(url, params, config);
  return res;
};
const useInsertDataWithImage = async (url, params) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseUrl.post(url, params, config);
  return res;
};
export { useInsertData, useInsertDataWithImage, useCreateUser };
