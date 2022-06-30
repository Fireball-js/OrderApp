const DATA_Obj = {
    //首页slider的图片png
    headerImg: [
        "https://pic.rmb.bdstatic.com/bjh/news/b1712642cc7934abfd56116fcf1a2106.jpeg@c_1,w_960,h_871,x_0,y_0",
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi2.chuimg.com%2F685759eebb4a4b0abd3bc14f219e1927_1280w_1280h.jpg%3FimageView2%2F2%2Fw%2F600%2Finterlace%2F1%2Fq%2F90&refer=http%3A%2F%2Fi2.chuimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657079661&t=06c0fee410ef32a78335185e12660366",
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic201.nipic.com%2Ffile%2F20190105%2F9885883_170741500592_2.jpg&refer=http%3A%2F%2Fpic201.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657079661&t=4e44df90292f2417d3775f197775892e"
    ],
    t_limit_img: [{
            name: "牛肉干",
            price: 55.9,
            origin_price: 70,
            img_url: "https://img2.baidu.com/it/u=4229716679,2809390702&fm=253&fmt=auto&app=138&f=JPEG?w=350&h=350"
        },
        {
            name: "猪肉脯",
            price: 66.2,
            origin_price: 108,
            img_url: "https://img2.baidu.com/it/u=4229716679,2809390702&fm=253&fmt=auto&app=138&f=JPEG?w=350&h=350"
        },
        {
            name: "脆豌豆",
            price: 12,
            origin_price: 20,
            img_url: "https://img2.baidu.com/it/u=4229716679,2809390702&fm=253&fmt=auto&app=138&f=JPEG?w=350&h=350"
        },
        {
            name: "乐事薯片",
            price: 7.9,
            origin_price: 11,
            img_url: "https://img2.baidu.com/it/u=4229716679,2809390702&fm=253&fmt=auto&app=138&f=JPEG?w=350&h=350"
        },
        {
            name: "有友鸡爪",
            price: 12.9,
            origin_price: 17,
            img_url: "https://img2.baidu.com/it/u=4229716679,2809390702&fm=253&fmt=auto&app=138&f=JPEG?w=350&h=350"
        },
        {
            name: "大白兔奶糖",
            price: 22.2,
            origin_price: 32,
            img_url: "https://img2.baidu.com/it/u=4229716679,2809390702&fm=253&fmt=auto&app=138&f=JPEG?w=350&h=350"
        },
        {
            name: "牛肉葱包",
            price: 0.8,
            origin_price: 1.2,
            img_url: "https://img2.baidu.com/it/u=4229716679,2809390702&fm=253&fmt=auto&app=138&f=JPEG?w=350&h=350"
        },
    ],

    hot_sell_data: [{
            title: '早餐主食',
            goods: [{
                    name: "牛肉煲",
                    text: "肉多",
                    img: "https://img1.baidu.com/it/u=3402155676,1879435561&fm=253&fmt=auto&app=120&f=JPEG?w=620&h=451",
                    num: '已售7756组',
                    price: "￥1.5"
                },
                {
                    name: "酸菜包",
                    text: "香香香香",
                    img: "https://img1.baidu.com/it/u=3402155676,1879435561&fm=253&fmt=auto&app=120&f=JPEG?w=620&h=451",
                    num: '已售772组',
                    price: "￥1.5"
                },
                {
                    name: "馒头",
                    text: "松软甜香",
                    img: "https://img1.baidu.com/it/u=3402155676,1879435561&fm=253&fmt=auto&app=120&f=JPEG?w=620&h=451",
                    num: '已售223组',
                    price: "￥0.5"
                },
                {
                    name: "牛奶",
                    text: "不加水",
                    img: "https://img1.baidu.com/it/u=3402155676,1879435561&fm=253&fmt=auto&app=120&f=JPEG?w=620&h=451",
                    num: '已售7756组',
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
                    price: "￥99.5"
                },
                {
                    name: "麻辣香锅",
                    text: "多种菜品",
                    img: "https://img2.baidu.com/it/u=2745303477,428639672&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333",
                    num: '已售772组',
                    price: "￥43.5"
                },
                {
                    name: "干锅兔",
                    text: "足斤足两",
                    img: "https://img1.baidu.com/it/u=3402155676,1879435561&fm=253&fmt=auto&app=120&f=JPEG?w=620&h=451",
                    num: '已售223组',
                    price: "￥99.5"
                },
                {
                    name: "干锅肥肠",
                    text: "辣味十足",
                    img: "https://img1.baidu.com/it/u=3402155676,1879435561&fm=253&fmt=auto&app=120&f=JPEG?w=620&h=451",
                    num: '已售7756组',
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
                    price: "￥99.5"
                },
                {
                    name: "麻辣香锅",
                    text: "多种菜品",
                    img: "https://img1.baidu.com/it/u=3402155676,1879435561&fm=253&fmt=auto&app=120&f=JPEG?w=620&h=451",
                    num: '已售772组',
                    price: "￥43.5"
                },
                {
                    name: "干锅兔",
                    text: "足斤足两",
                    img: "https://img1.baidu.com/it/u=3402155676,1879435561&fm=253&fmt=auto&app=120&f=JPEG?w=620&h=451",
                    num: '已售223组',
                    price: "￥99.5"
                },
                {
                    name: "干锅肥肠",
                    text: "辣味十足",
                    img: "https://img1.baidu.com/it/u=3402155676,1879435561&fm=253&fmt=auto&app=120&f=JPEG?w=620&h=451",
                    num: '已售7756组',
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
                    price: "￥99.5"
                },
                {
                    name: "麻辣香锅",
                    text: "多种菜品",
                    img: "https://img1.baidu.com/it/u=3402155676,1879435561&fm=253&fmt=auto&app=120&f=JPEG?w=620&h=451",
                    num: '已售772组',
                    price: "￥43.5"
                },
                {
                    name: "干锅兔",
                    text: "足斤足两",
                    img: "https://img1.baidu.com/it/u=3402155676,1879435561&fm=253&fmt=auto&app=120&f=JPEG?w=620&h=451",
                    num: '已售223组',
                    price: "￥99.5"
                },
                {
                    name: "干锅肥肠",
                    text: "辣味十足",
                    img: "https://img1.baidu.com/it/u=3402155676,1879435561&fm=253&fmt=auto&app=120&f=JPEG?w=620&h=451",
                    num: '已售7756组',
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
                    price: "￥99.5"
                },
                {
                    name: "麻辣香锅",
                    text: "多种菜品",
                    img: "https://img1.baidu.com/it/u=3402155676,1879435561&fm=253&fmt=auto&app=120&f=JPEG?w=620&h=451",
                    num: '已售772组',
                    price: "￥43.5"
                },
                {
                    name: "干锅兔",
                    text: "足斤足两",
                    img: "https://img1.baidu.com/it/u=3402155676,1879435561&fm=253&fmt=auto&app=120&f=JPEG?w=620&h=451",
                    num: '已售223组',
                    price: "￥99.5"
                },
                {
                    name: "干锅肥肠",
                    text: "辣味十足",
                    img: "https://img1.baidu.com/it/u=3402155676,1879435561&fm=253&fmt=auto&app=120&f=JPEG?w=620&h=451",
                    num: '已售7756组',
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
                    price: "￥99.5"
                },
                {
                    name: "麻辣香锅",
                    text: "多种菜品",
                    img: "https://img1.baidu.com/it/u=3402155676,1879435561&fm=253&fmt=auto&app=120&f=JPEG?w=620&h=451",
                    num: '已售772组',
                    price: "￥43.5"
                },
                {
                    name: "干锅兔",
                    text: "足斤足两",
                    img: "https://img1.baidu.com/it/u=3402155676,1879435561&fm=253&fmt=auto&app=120&f=JPEG?w=620&h=451",
                    num: '已售223组',
                    price: "￥99.5"
                },
                {
                    name: "干锅肥肠",
                    text: "辣味十足",
                    img: "https://img1.baidu.com/it/u=3402155676,1879435561&fm=253&fmt=auto&app=120&f=JPEG?w=620&h=451",
                    num: '已售7756组',
                    price: "￥66.6"
                },
            ]
        },
    ],

}

module.exports = DATA_Obj