(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d0d4aa1"],{"0592":function(a,t,s){"use strict";s.d(t,"a",(function(){return d}));var e=s("5530"),o=s("bc07"),r="/v1/stats";function d(a){return Object(o["a"])({url:r,method:"post",data:Object(e["a"])({method:"get.stats.data"},a)})}},"211e":function(a,t,s){"use strict";var e=s("5a70"),o=s.n(e);o.a},"5a70":function(a,t,s){},"8e28":function(a,t,s){"use strict";s.r(t);var e=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("cs-container",[s("div",{staticClass:"cs-p"},[s("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[s("div",{staticClass:"box-card-header",attrs:{slot:"header"},slot:"header"},[s("span",[a._v("今日实时")]),s("span",{staticClass:"update-time"},[a._v("更新时间："+a._s(a.updateTime))])]),s("div",{staticClass:"cs-today flex-wrap"},a._l(a.todayData,(function(t,e){return s("div",{key:e,staticClass:"cs-today__block"},[s("div",{staticClass:"cs-today__content"},[s("div",{staticClass:"cs-today__info"},[s("p",{staticClass:"cs-today__title"},[a._v(a._s(a.baseMap[e]))]),s("p",{staticClass:"cs-today__number"},[a._v(a._s(t))]),s("p",{staticClass:"cs-today__yesterday"},[a._v("昨日："+a._s(a.yesterdayData[e]))])])])])})),0)]),s("el-row",{staticClass:"cs-mt",attrs:{gutter:20}},[s("el-col",{attrs:{span:14}},[s("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[s("div",{staticClass:"box-card-header",attrs:{slot:"header"},slot:"header"},[s("span",[a._v("实时订单")])]),s("ve-histogram",{attrs:{data:a.orderHoursData,colors:a.colors,settings:{labelMap:{today:"今天",yesterday:"昨天"}}}})],1)],1),s("el-col",{attrs:{span:10}},[s("el-table",{staticClass:"table-card",attrs:{data:a.goodsData,"header-cell-style":{padding:"8px 0"}}},[s("el-table-column",{attrs:{type:"index",label:"排行",width:"56"}}),s("el-table-column",{attrs:{label:"名称","show-overflow-tooltip":""},scopedSlots:a._u([{key:"default",fn:function(t){return[s("span",{staticClass:"link",on:{click:function(s){return a.handleView(t.row.goods_id)}}},[a._v(a._s(t.row.name))])]}}])}),s("el-table-column",{attrs:{prop:"sales_sum",label:"销售量",align:"center",width:"100"}})],1)],1)],1),s("el-card",{staticClass:"box-card cs-mt",attrs:{shadow:"never"}},[s("div",{staticClass:"box-card-header",attrs:{slot:"header"},slot:"header"},[s("span",[a._v("本月订单量")])]),s("ve-line",{attrs:{data:a.orderMonthData,colors:a.colors,settings:{labelMap:{count:"订单量合计"}}}})],1),s("el-card",{staticClass:"box-card cs-mt",attrs:{shadow:"never"}},[s("div",{staticClass:"box-card-header",attrs:{slot:"header"},slot:"header"},[s("span",[a._v("本月会员数")])]),s("ve-histogram",{attrs:{data:a.clientMonthData,colors:a.colors,settings:{labelMap:{count:"会员数合计"}}}})],1)],1)])},o=[],r=(s("d3b7"),s("0592")),d=s("c9a0"),n={name:"stats-data-shop",components:{VeLine:function(){return Promise.all([s.e("chunk-f28d2c00"),s.e("chunk-fa8d21ca"),s.e("chunk-7ca7f530")]).then(s.t.bind(null,"c3da",7))},VeHistogram:function(){return Promise.all([s.e("chunk-f28d2c00"),s.e("chunk-fa8d21ca"),s.e("chunk-5255dea8")]).then(s.t.bind(null,"d768",7))}},data:function(){return{colors:d["a"],baseMap:{order:"订单量",sales:"销售额",trade:"交易完成",goods:"新增商品数",collect:"新增收藏量",client:"新增会员数",service:"新增售后单",withdraw:"新增提现单"},goodsData:[],todayData:{},yesterdayData:{},orderHoursData:{columns:["hour","today","yesterday"],rows:[]},orderMonthData:{columns:["day","count"],rows:[]},clientMonthData:{columns:["day","count"],rows:[]},updateTime:""}},mounted:function(){this.handleSubmit()},methods:{handleSubmit:function(){var a=this;Object(r["a"])({type:"shop"}).then((function(t){var s=t.data;s&&(a.goodsData=s.goods,a.todayData=s.today,a.yesterdayData=s.yesterday,a.orderHoursData.rows=s.order_hours,a.orderMonthData.rows=s.order_month,a.clientMonthData.rows=s.client_month,a.updateTime=s.update_time)}))},handleView:function(a){this.$router.push({name:"goods-admin-view",params:{goods_id:a}})}}},c=n,l=(s("211e"),s("2877")),i=Object(l["a"])(c,e,o,!1,null,"73b1158e",null);t["default"]=i.exports},c9a0:function(a,t,s){"use strict";t["a"]=["#5ab1ef","#19d4ae","#fa6e86","#ffb980","#0067a6","#c4b4e4","#d87a80","#9cbbff","#d9d0c7","#87a997","#d49ea2","#5b4947","#7ba3a8"]}}]);