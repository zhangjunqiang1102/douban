import axios from "./index";

//获取电影数据
export function getGroup(){
    return axios.get('/group')
}
