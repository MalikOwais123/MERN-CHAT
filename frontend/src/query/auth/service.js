import { post } from "../../utils/httpService";

const SERVICE_URLS = {
  login: () => `api/user/login`,
};

// ~@ login api
export const loginAPI = (data) => post(SERVICE_URLS.login(), data);
