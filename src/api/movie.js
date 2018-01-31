import axios from "./index";

//获取电影数据
export function getMovie(id){
    return axios.get(`movie${id}`)
}