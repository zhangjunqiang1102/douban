import axios from "./index";

//获取电影数据
export let getGroup=(id)=>{
    return axios.get(`group${id}`)
};