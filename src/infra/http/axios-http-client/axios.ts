import axios, { AxiosInstance } from "axios";

class Axios {
  private static _instance: AxiosInstance;

  public static getInstance() {
    if (Axios._instance) {
      return Axios._instance;
    }

    const url = process.env.REACT_APP_BASE_HTTP_URL || "localhost:5000";

    return (Axios._instance = axios.create({
      baseURL: `${url}/api`,
    }));
  }
}

export { Axios };
