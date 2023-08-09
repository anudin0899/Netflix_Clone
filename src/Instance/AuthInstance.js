import axios from "axios"

const AuthInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
  });
// const instance = true

export default AuthInstance;