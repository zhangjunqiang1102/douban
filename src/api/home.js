import axios from './index';

//获取主页数据
export let getHome=(id)=>{
    return axios.get(`/home${id}`)
};





