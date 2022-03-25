import axios, { AxiosError } from 'axios';

const apiUrl = "https://localhost:44347";

const PostNameApi = {
    addName: (name) => {
        console.log("name: " + name);
    return axios
      .post(`${apiUrl}/Names?name=`+ name)
      .catch((error) => {
        return Promise.reject(error);
      });
  },
  getNames: async () => {
        try {
    return 	await axios.get(`${apiUrl}/Names`)
     } catch (error) {
        const err = error as AxiosError
        if (err.response) {
           console.log(err.response.status)
           console.log(err.response.data)
        }
     }
  },
};

export default PostNameApi;
