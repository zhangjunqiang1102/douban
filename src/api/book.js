import axios from "./index";

//获取电影数据
export let getBook=(id)=>{
    return axios.get(`book${id}`)
};
