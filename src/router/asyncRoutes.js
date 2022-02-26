let asyncRoutes = [
    // 概况
    {
        path:'/home',
        name:"layout",
        meta:{
            title:'概况',
            icon:'el-icon-menu'
        },
        component:() => import('@/views/layout'),
        redirect:'/home/dashboard',
        children:[
            {
                path:'dashboard',
                name:'dashboard',
                component:() => import('@/views/dashboard'),
                meta:{
                    title:'实时概况',
                    icon:''
                }
            }
        ]
    },
    //会员管理
    {
        path:'/memberAdmin',
        name:'memberAdmin',
        meta:{
            title:'会员管理',
            icon:'el-icon-user-solid'
        },
        component:() => import('@/views/layout'),
        children:[
            {
                path:'memberSearch',
                name:'memberSearch',
                component:() => import('@/views/memberAdmin/memberSearch'),
                meta:{
                    title:'会员查询',
                    icon:''
                },
                // children:[
                //     {
                //         path:'memberDetail',
                //         name:'memberDetail',
                //         component:() => import('@/views/memberAdmin/memberDetail'),
                //         meta:{
                //             title:'会员详情'
                //         }
                //     }
                // ]
            },
            {
                path:'memberDetail',
                name:'memberDetail',
                component:() => import('@/views/memberAdmin/memberDetail'),
                meta:{
                    title:'会员详情',
                    icon:'',
                    hidden:true
                }
            },
            {
                path:'memberGrade',
                name:'memberGrade',
                component:() => import('@/views/memberAdmin/memberGrade'),
                meta:{
                    title:'会员等级',
                    icon:''
                }
            },
            {
                path:'memberEquity',
                name:'memberEquity',
                component:() => import('@/views/memberAdmin/memberEquity'),
                meta:{
                    title:'会员权益',
                    icon:''
                }
            },
        ]
    },
    // 订单管理
    {
        path:'/orderAdmin',
        name:"orderAdmin",
        meta:{
            title:'订单管理',
            icon:'el-icon-tickets'
        },
        component:() => import('@/views/layout'),
        children:[
            {
                path:'orderSearch',
                name:'orderSearch',
                component:() => import('@/views/orderAdmin/orderSearch'),
                meta:{
                    title:'订单查询',
                    icon:''
                }
            }
        ]
    },
    //营销
    {
        path:'/marketing',
        name:'marketing',
        meta:{
            title:'营销',
            icon:'el-icon-s-goods'
        },
        component:() => import('@/views/layout'),
        children:[
            {
                path:'ticket',
                name:'ticket',
                component:() => import('@/views/marketing/ticket'),
                meta:{
                    title:'优惠券',
                    icon:''
                }
            },
            {
                path:'seckill',
                name:'seckill',
                component:() => import('@/views/marketing/seckill'),
                meta:{
                    title:'秒杀',
                    icon:''
                }
            },
            {
                path:'group',
                name:'group',
                component:() => import('@/views/marketing/group'),
                meta:{
                    title:'拼团',
                    icon:''
                }
            },
        ]
    },
    //数据分析
    {
        path:'/dataAnalysis',
        name:'dataAnalysis',
        meta:{
            title:'数据分析',
            icon:'el-icon-s-data'
        },
        component:() => import('@/views/layout'),
        children:[
            {
                path:'dataInfo',
                name:'dataInfo',
                component:() => import('@/views/dataAnalysis/dataInfo'),
                meta:{
                    title:'数据概况',
                    icon:''
                }
            },
            {
                path:'dealAnalysis',
                name:'dealAnalysis',
                component:() => import('@/views/dataAnalysis/dealAnalysis'),
                meta:{
                    title:'交易分析',
                    icon:''
                }
            },
            {
                path:'memberAnalysis',
                name:'memberAnalysis',
                component:() => import('@/views/dataAnalysis/memberAnalysis'),
                meta:{
                    title:'会员分析',
                    icon:''
                }
            },
        ]
    },
    //设置
    {
        path:'/set',
        name:'set',
        meta:{
            title:'设置',
            icon:'el-icon-s-tools'
        },
        component:() => import('@/views/layout'),
        children:[
            {
                path:'storeInfo',
                name:'storeInfo',
                component:() => import('@/views/set/storeInfo'),
                meta:{
                    title:'店铺信息',
                    icon:''
                }
            },
            {
                path:'personInfo',
                name:'personInfo',
                component:() => import('@/views/set/personInfo'),
                meta:{
                    title:'个人信息',
                    icon:''
                }
            }
        ]
    },
]

export default asyncRoutes