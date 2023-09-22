import express from 'express'
import cors from 'cors'
import getOrgs from './mockData/getOrgs'


const router = express.Router()
const baseUrl = ``
// ## Org API
// api/org/list/{name} : {name}替换成想要查询的字段
// api/org/add : 新增一条记录
// api/org/recommend/{keyWord} : {keyWord} 替换成推荐关键词
// api/org/list  : 查询所有机构
router.get(`${baseUrl}/api/org/list/name=:name`, (req, res) => {
    let name = req.params.name 
    return res.status(200).send(getOrgs)
})

router.get(`${baseUrl}/api/org/list`, (req, res) => {
    return res.status(200).send(getOrgs)
})

router.get(`${baseUrl}/api/org/recommend/name=:name`, (req, res) => {
    return res.status(200).send(getOrgs)
})

router.post(`${baseUrl}/api/org/add`, (req, res) => {
    return res.status(200).send({
        msg: 'success',
        code: 0,
        errorCode: 0,
        data: true
    })
})

let app = express()
app.use(
    cors(
        {
            credentials: true,
            origin: true,
        }
    )
)
app.use(express.json())
app.use('/', router)
app.listen(8080, () => {
    console.log('express server running with 8080')
})