(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e91ce"],{"8bc1":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("navbar"),n("b-container",[n("h2",[t._v("Campaigns")]),n("b-table",{attrs:{striped:"",hover:"",items:t.campaigns,fields:t.fields,dark:""},scopedSlots:t._u([{key:"cell(Action)",fn:function(e){return["Pending"===e.item.status?n("div",[n("b-button",{staticClass:"m-2",attrs:{size:"sm",variant:"success",props:e},on:{click:function(n){return t.updateCampaign(e.item._id,"Approved")}}},[t._v(" Approve ")]),n("b-button",{staticClass:"m-2",attrs:{size:"sm",variant:"danger"},on:{click:function(n){return t.updateCampaign(e.item._id,"Declined")}}},[t._v(" Decline ")])],1):t._e(),"Pending"!==e.item.status?n("b-td",[t._v(" "+t._s(e.item.status)+" ")]):t._e()]}}])})],1)],1)},s=[],r=n("1da1"),i=(n("96cf"),n("4da1")),c=n("48ac"),o=n.n(c),u=n("bc3a"),l=n.n(u),p=n("d178"),d={components:{Navbar:p["a"]},data:function(){return{campaigns:[],user:null,fields:["Topic","Message","PostedBy","PostedDate","status","Action"]}},methods:{getUserDetails:function(){var t=localStorage.getItem("jwt"),e=o.a.decode(t);this.user=e},updateCampaign:function(t,e){var n=this;console.log(t,e),l.a.post("http://localhost:8000/user/campaign/update",{id:t,status:e}).then(function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e.data),t.next=3,i["a"].getAllCampaigns();case 3:a=t.sent,n.campaigns=a;case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){alert("Error occured")}))}},mounted:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i["a"].getAllCampaigns();case 2:n=e.sent,t.campaigns=n,t.getUserDetails();case 5:case"end":return e.stop()}}),e)})))()}},m=d,g=n("2877"),f=Object(g["a"])(m,a,s,!1,null,null,null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d0e91ce.4e7a8a38.js.map