import axiosInstance from "./axiosSetup";

interface Data {
  name: string;
  error: any;
}

interface Config {
  data: Data;
  loading: boolean;
}

async function getConfig() {
  try {
    return await axiosInstance.get("/getConfig", {
      params: {
        clientId: process.env.REACT_APP_CLIENT_ID,
      },
    });
  } catch (e) {
    return {} as Config;
  }
}

export { getConfig };
