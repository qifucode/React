const express = require("express");
// 创建应用
const app = express();

const debug = require("debug")("my-application");
app.use(express.json())

app.use(express.urlencoded({ extended: false }))
const users = require("./routers/user");
app.use("/api/users",users);


app.listen(3030,(req,res)=>{
    debug('服务启动在3030端口')
});