import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID y1uRHhc6yjobIKd_r51a3eDsipz3UEgdw_bIDKARiMI",
  },
});
