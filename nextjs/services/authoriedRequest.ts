import DefaultAxios from "./defaultAxios";

declare var window: any;
// const API_URL = window._env.REACT_APP_API_URL;
const API_URL = 'ssss';

const authorizedRequest = new DefaultAxios(API_URL);
authorizedRequest.setToken();

export default authorizedRequest;
