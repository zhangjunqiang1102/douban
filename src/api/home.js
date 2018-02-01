import axios from './index';

//获取主页数据
export function getHome(){
    return axios.get(`/home`)
}





