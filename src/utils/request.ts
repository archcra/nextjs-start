import axios from 'axios';
// const SERVER_URL = 'http://127.0.0.1:6789' 'http://101.133.162.173:3333'
const SERVER_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3344'
    : 'https://zhoubangfu.com';

const serverInstance = axios.create({
  baseURL: `${SERVER_URL}/ui-api`,
  timeout: 8170
});

const browserInstance = axios.create({
  baseURL: `${SERVER_URL}/ui-api`,
  timeout: 8170
});

browserInstance.interceptors.request.use(
  (config) => {
    // 在结合redux后，在此判断登录状态，向所有请求添加某些参数，比如header
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

browserInstance.interceptors.response.use(
  (response) => {
    if (response.data.code === 0) {
      return response.data;
    } else {
      throw response.data;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const devAxios = serverInstance;
export default browserInstance;
