
//获取电影数据

import axios from "./index";

//获取电影数据

export function getBook(){
    return axios.get('/book')
}

// 获取某一部电影
export function getBookDetail(id) {
    return axios.get(`/book/${id}`);
}

