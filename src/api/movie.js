import axios from "./index";

//获取电影数据
export let getMove=()=>{
    return axios.get('/move')
};