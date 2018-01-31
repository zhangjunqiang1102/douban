import axios from "./index";

//获取电影数据
export let getMovie=(id)=>{
    return axios.get(`movie${id}`)
};