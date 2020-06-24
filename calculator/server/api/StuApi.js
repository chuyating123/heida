const models = require('../db')
const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const $sql = require('../sqlMap')
// 连接数据库
const conn = mysql.createConnection(models.mysql)
conn.connect()
const jsonWrite = function (res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '1', msg: '操作失败'
        })
    } else {
        res.json(
            ret
        )
    }
}
// 接口：增加信息
router.post('/addStu', (req, res) => {
    const sql = $sql.Stu.add1
    const params = req.body
    console.log('添加', params)
    conn.query(sql, [params.record_time,params.record_comment], function (err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            jsonWrite(res, result)
        }
    })
})

// 接口：查询全部
router.get('/showStu', (req, res) => {
    const sql = $sql.Stu.show1
    const params = req.body
    console.log(params)
    conn.query(sql, [params.record_time,params.record_comment], function (err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            jsonWrite(res, result)
        }
    })
})

//接口：删除信息
router.post('/delStu', (req, res) => {
    const sql = $sql.Stu.del1
    const params = req.body
    console.log('删除', params)
    conn.query(sql, [params.record_time,params.record_comment], function (err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            jsonWrite(res, result)
        }
    })
})
router.post('/addStu1', (req, res) => {
    const sql = $sql.Stu.add2
    const params = req.body
    console.log('添加', params)
    conn.query(sql, [params.record_time,params.record_comment], function (err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            jsonWrite(res, result)
        }
    })
})
router.post('/delStu1', (req, res) => {
    const sql = $sql.Stu.del2
    const params = req.body
    console.log('删除', params)
    conn.query(sql, [params.record_time,params.record_comment], function (err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            jsonWrite(res, result)
        }
    })
})
// 接口：查询全部
router.get('/showStu1', (req, res) => {
    const sql = $sql.Stu.show2
    const params = req.body
    console.log(params)
    conn.query(sql, [params.record_time,params.record_comment], function (err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            jsonWrite(res, result)
        }
    })
})
router.post('/addStu2', (req, res) => {
    const sql = $sql.Stu.add3
    const params = req.body
    console.log('添加', params)
    conn.query(sql, [params.record_time,params.record_comment], function (err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            jsonWrite(res, result)
        }
    })
})
router.post('/delStu2', (req, res) => {
    const sql = $sql.Stu.del3
    const params = req.body
    console.log('删除', params)
    conn.query(sql, [params.record_time,params.record_comment], function (err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            jsonWrite(res, result)
        }
    })
})
// 接口：查询全部
router.get('/showStu2', (req, res) => {
    const sql = $sql.Stu.show3
    const params = req.body
    console.log(params)
    conn.query(sql, [params.record_time,params.record_comment], function (err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            jsonWrite(res, result)
        }
    })
})
// // 接口：修改信息
// router.post('/updateStu', (req, res) => {
//     const sql = $sql.Stu.update
//     const params = req.body
//     console.log('修改', params)
//     conn.query(sql, [params.stu_name, params.stu_sex, params.stu_college, params.stu_class, params.stu_Id], function (err, result) {
//         if (err) {
//             console.log(err)
//         }
//         if (result) {
//             jsonWrite(res, result)
//         }
//     })
// })

module.exports = router