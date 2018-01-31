import axios from "./index";

//获取电影数据
export function getBook(id){
    return axios.get(`book${id}`)
};