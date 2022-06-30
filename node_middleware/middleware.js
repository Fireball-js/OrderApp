// node.js中间件

let express = require("express")
let app = express()

app.get("/allgoods_sidebar", (req, res) => {
    console.log("allgoods_sidebar 被访问！！！！！");
    let data_obj = [{
            title: '早餐主食',
            goods: [{
                    name: "牛肉煲",
                    text: "肉多",
                    img: "https://img1.baidu.com/it/u=3402155676,1879435561&fm=253&fmt=auto&app=120&f=JPEG?w=620&h=451",
                    num: '已售7756组',
                    goodsId: 1,
                    goodsNum: 1,
                    price: "￥1.5"
                },
                {
                    name: "酸菜包",
                    text: "香香香香",
                    img: "https://img1.baidu.com/it/u=3402155676,1879435561&fm=253&fmt=auto&app=120&f=JPEG?w=620&h=451",
                    num: '已售772组',
                    goodsId: 2,
                    goodsNum: 1,
                    price: "￥1.5"
                },
                {
                    name: "馒头",
                    text: "松软甜香",
                    img: "https://img1.baidu.com/it/u=3402155676,1879435561&fm=253&fmt=auto&app=120&f=JPEG?w=620&h=451",
                    num: '已售223组',
                    goodsId: 3,
                    goodsNum: 1,
                    price: "￥0.5"
                },
                {
                    name: "牛奶",
                    text: "不加水",
                    img: "https://img1.baidu.com/it/u=3402155676,1879435561&fm=253&fmt=auto&app=120&f=JPEG?w=620&h=451",
                    num: '已售7756组',
                    goodsId: 4,
                    goodsNum: 1,
                    price: "￥3"
                },
            ]
        },
        {
            title: '功夫大菜',
            goods: [{
                    name: "留香鱼片",
                    text: "限时，香辣过瘾",
                    img: "https://img2.baidu.com/it/u=2745303477,428639672&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333",
                    num: '已售7756组',
                    goodsId: 5,
                    goodsNum: 1,
                    price: "￥99.5"
                },
                {
                    name: "麻辣香锅",
                    text: "多种菜品",
                    img: "https://img2.baidu.com/it/u=2745303477,428639672&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333",
                    num: '已售772组',
                    goodsId: 6,
                    goodsNum: 1,
                    price: "￥43.5"
                },
                {
                    name: "干锅兔",
                    text: "足斤足两",
                    img: "https://img1.baidu.com/it/u=3402155676,1879435561&fm=253&fmt=auto&app=120&f=JPEG?w=620&h=451",
                    num: '已售223组',
                    goodsId: 7,
                    goodsNum: 1,
                    price: "￥99.5"
                },
                {
                    name: "干锅肥肠",
                    text: "辣味十足",
                    img: "https://img1.baidu.com/it/u=3402155676,1879435561&fm=253&fmt=auto&app=120&f=JPEG?w=620&h=451",
                    num: '已售7756组',
                    goodsId: 8,
                    goodsNum: 1,
                    price: "￥66.6"
                },
            ]
        },
        {
            title: '多样一人食',
            goods: [{
                    name: "留香鱼片",
                    text: "限时，香辣过瘾",
                    img: "https://img1.baidu.com/it/u=3402155676,1879435561&fm=253&fmt=auto&app=120&f=JPEG?w=620&h=451",
                    num: '已售7756组',
                    goodsId: 9,
                    goodsNum: 1,
                    price: "￥99.5"
                },
                {
                    name: "麻辣香锅",
                    text: "多种菜品",
                    img: "https://img1.baidu.com/it/u=3402155676,1879435561&fm=253&fmt=auto&app=120&f=JPEG?w=620&h=451",
                    num: '已售772组',
                    goodsId: 10,
                    goodsNum: 1,
                    price: "￥43.5"
                },
                {
                    name: "干锅兔",
                    text: "足斤足两",
                    img: "https://img1.baidu.com/it/u=3402155676,1879435561&fm=253&fmt=auto&app=120&f=JPEG?w=620&h=451",
                    num: '已售223组',
                    goodsId: 11,
                    goodsNum: 1,
                    price: "￥99.5"
                },
                {
                    name: "干锅肥肠",
                    text: "辣味十足",
                    img: "https://img1.baidu.com/it/u=3402155676,1879435561&fm=253&fmt=auto&app=120&f=JPEG?w=620&h=451",
                    num: '已售7756组',
                    goodsId: 12,
                    goodsNum: 1,
                    price: "￥66.6"
                },
            ]
        },
        {
            title: '热粥',
            goods: [{
                    name: "留香鱼片",
                    text: "限时，香辣过瘾",
                    img: "https://img1.baidu.com/it/u=3402155676,1879435561&fm=253&fmt=auto&app=120&f=JPEG?w=620&h=451",
                    num: '已售7756组',
                    goodsId: 13,
                    goodsNum: 1,
                    price: "￥99.5"
                },
                {
                    name: "麻辣香锅",
                    text: "多种菜品",
                    img: "https://img1.baidu.com/it/u=3402155676,1879435561&fm=253&fmt=auto&app=120&f=JPEG?w=620&h=451",
                    num: '已售772组',
                    goodsId: 14,
                    goodsNum: 1,
                    price: "￥43.5"
                },
                {
                    name: "干锅兔",
                    text: "足斤足两",
                    img: "https://img1.baidu.com/it/u=3402155676,1879435561&fm=253&fmt=auto&app=120&f=JPEG?w=620&h=451",
                    num: '已售223组',
                    goodsId: 15,
                    goodsNum: 1,
                    price: "￥99.5"
                },
                {
                    name: "干锅肥肠",
                    text: "辣味十足",
                    img: "https://img1.baidu.com/it/u=3402155676,1879435561&fm=253&fmt=auto&app=120&f=JPEG?w=620&h=451",
                    num: '已售7756组',
                    goodsId: 16,
                    goodsNum: 1,
                    price: "￥66.6"
                },
            ]
        },
        {
            title: '包子',
            goods: [{
                    name: "留香鱼片",
                    text: "限时，香辣过瘾",
                    img: "https://img1.baidu.com/it/u=3402155676,1879435561&fm=253&fmt=auto&app=120&f=JPEG?w=620&h=451",
                    num: '已售7756组',
                    goodsId: 17,
                    goodsNum: 1,
                    price: "￥99.5"
                },
                {
                    name: "麻辣香锅",
                    text: "多种菜品",
                    img: "https://img1.baidu.com/it/u=3402155676,1879435561&fm=253&fmt=auto&app=120&f=JPEG?w=620&h=451",
                    num: '已售772组',
                    goodsId: 18,
                    goodsNum: 1,
                    price: "￥43.5"
                },
                {
                    name: "干锅兔",
                    text: "足斤足两",
                    img: "https://img1.baidu.com/it/u=3402155676,1879435561&fm=253&fmt=auto&app=120&f=JPEG?w=620&h=451",
                    num: '已售223组',
                    goodsId: 19,
                    goodsNum: 1,
                    price: "￥99.5"
                },
                {
                    name: "干锅肥肠",
                    text: "辣味十足",
                    img: "https://img1.baidu.com/it/u=3402155676,1879435561&fm=253&fmt=auto&app=120&f=JPEG?w=620&h=451",
                    num: '已售7756组',
                    goodsId: 20,
                    goodsNum: 1,
                    price: "￥66.6"
                },
            ]
        },
        {
            title: '包子',
            goods: [{
                    name: "留香鱼片",
                    text: "限时，香辣过瘾",
                    img: "https://img1.baidu.com/it/u=3402155676,1879435561&fm=253&fmt=auto&app=120&f=JPEG?w=620&h=451",
                    num: '已售7756组',
                    goodsId: 21,
                    goodsNum: 1,
                    price: "￥99.5"
                },
                {
                    name: "麻辣香锅",
                    text: "多种菜品",
                    img: "https://img1.baidu.com/it/u=3402155676,1879435561&fm=253&fmt=auto&app=120&f=JPEG?w=620&h=451",
                    num: '已售772组',
                    goodsId: 22,
                    goodsNum: 1,
                    price: "￥43.5"
                },
                {
                    name: "干锅兔",
                    text: "足斤足两",
                    img: "https://img1.baidu.com/it/u=3402155676,1879435561&fm=253&fmt=auto&app=120&f=JPEG?w=620&h=451",
                    num: '已售223组',
                    goodsId: 23,
                    goodsNum: 1,
                    price: "￥99.5"
                },
                {
                    name: "干锅肥肠",
                    text: "辣味十足",
                    img: "https://img1.baidu.com/it/u=3402155676,1879435561&fm=253&fmt=auto&app=120&f=JPEG?w=620&h=451",
                    num: '已售7756组',
                    goodsId: 24,
                    goodsNum: 1,
                    price: "￥66.6"
                },
            ]
        },
    ]
    let hot_sell_data = data_obj[req.query.index]
    res.send(hot_sell_data)
})

app.listen(8081, () => {
    console.log("serve run in 8081");
})