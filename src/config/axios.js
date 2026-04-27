import axios from "axios";

// This is the standard public API used by most open-source Aniwatch clones
const instance = axios.create({
  baseURL: "https://api-amvstrm.pwa.sh/api/v1/", 
});

export default instance;
