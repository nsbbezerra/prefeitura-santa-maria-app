import axios from "axios";
import { configs } from "./index";

const api = axios.create({
  baseURL: configs.default_url,
});

export { api };
