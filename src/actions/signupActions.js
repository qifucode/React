// 引入网络请求
import axios from 'axios'

export const userSignupRequst = (userDate)=>{
    //  异步处理方案thunk
    return dispatch =>{
        return axios.post("api/users",userDate)
    }
}