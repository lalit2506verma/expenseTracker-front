import { myAxios } from "./helper";

export const signUp = (user) => {

    return myAxios.post('/user/register', user).then((response) => response.data)
}