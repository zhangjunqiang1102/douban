import axios from "./index";

//获取小组数据
export function getGroup(){
    return axios.get('/mock/group')
}
