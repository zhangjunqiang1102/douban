import axios from './index';

//获取主页数据

export let getHome=()=>{
    return axios.get('/home')
};
export function getHomeDetail(id) {
    return axios.get(`/home/${id}`);
}








