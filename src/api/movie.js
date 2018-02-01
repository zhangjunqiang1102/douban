import axios from "./index";

//获取电影数据

export function getMovie(){
    return axios.get('/mock/movie')
};
