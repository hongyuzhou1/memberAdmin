import axios from './config'
// 登录
export const login = data => axios.post ("/login",data);
// 查询会员数据报表
export const selectMemberData = params => axios.get("/memberData",{params});
// 查询会员
export const selectMember = params => axios.get("/member",{params});
// 添加会员
export const addMember = data => axios.post("/member",data);
// 修改积分
export const editScore = data => axios.put("/member",data);
// 条件查找
export const searchMember = params => axios.get("/searchMember",{params});
// 充值
export const addMony = data => axios.put("/addMony",data)