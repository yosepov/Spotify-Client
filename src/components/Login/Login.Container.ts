import {useState, useEffect} from 'react';
import axios from "axios";


const useAuth = (code: string) => {
const [accessToken, setAccessToken] = useState("");
const [refreshToken, setRefreshToken] = useState("");
const [expiresIn, setExpiresIn] = useState("");

useEffect(() => {
    axios
      .post("http://localhost:3003/login", {
        code,
      })
      .then(res => {
        console.log(res.data);
        setAccessToken(res.data.accessToken);
        setRefreshToken(res.data.refresh_token);
        setExpiresIn(res.data.expiresIn);
        console.log("scond console " + res.data.accessToken);
        window.history.pushState({}, "", "/");
      })
      .catch((err) => {
        console.log(err);
        // window.location = ;
      });
  }, [code])

  useEffect(() => {
    if(!refreshToken || !expiresIn) return;
    const interval = setInterval(() =>{
    axios
      .post("http://localhost:3003/refresh", {
        refreshToken,
      })
      .then(res => {
        setAccessToken(res.data.accessToken)
        setExpiresIn(res.data.expiresIn)
        setRefreshToken(res.data.refreshToken)
        setExpiresIn(res.data.expiresIn);
      })
      .catch((err) => {
        console.log(err);
        // window.location = "/"
      });
    },(3000));

    return () => clearTimeout(interval);
  },[refreshToken, expiresIn]);

  return accessToken;
}
  
export default useAuth;