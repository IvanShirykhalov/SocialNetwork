"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[176],{9176:function(e,r,n){n.r(r),n.d(r,{default:function(){return I}});var s=n(5671),o=n(3144),t=n(136),i=n(5716),u=n(364),l=n(5732),a=n(2791),c=n(885),g="Users_usersPhoto__Sb4o6",h="Users_selectedPage__QJo1h",f=n(184),d=function(e){for(var r=Math.ceil(e.totalUsersCount/e.pageSize),n=[],s=1;s<=r;s++)n.push(s);var o=Math.ceil(r/10),t=(0,a.useState)(1),i=(0,c.Z)(t,2),u=i[0],l=i[1],g=10*(u-1)+1,d=10*u;return(0,f.jsxs)("div",{children:[u>1?(0,f.jsx)("button",{onClick:function(){return l(u-1)},children:"PREV"}):(0,f.jsx)("button",{disabled:!0,children:"PREV"}),n.filter((function(e){return e>=g&&e<=d})).map((function(r){return(0,f.jsx)("button",{onClick:function(){e.onPageChanged(r)},className:e.currentPage===r?h:"",children:r},r)})),o>u?(0,f.jsx)("button",{onClick:function(){return l(u+1)},children:"NEXT"}):(0,f.jsx)("button",{disabled:!0,children:"PREV"})]})},p=n(1523),P=n(14),w=function(e){return(0,f.jsxs)("div",{children:[(0,f.jsxs)("span",{children:[(0,f.jsx)("div",{children:(0,f.jsx)(p.OL,{to:"/profile/".concat(e.user.id),children:(0,f.jsx)("img",{className:g,src:e.user.photos.small?e.user.photos.small:P,alt:"user avatar"})})}),(0,f.jsx)("div",{children:(0,f.jsx)("button",{disabled:e.followingInProgress.some((function(r){return r===e.user.id})),onClick:function(){e.toggleFollowingProgress(!0,e.user.id),e.user.followed?e.unfollow(e.user.id):e.follow(e.user.id)},children:e.user.followed?"unsubscribed":"subscribed"})})]}),(0,f.jsx)("span",{children:(0,f.jsxs)("span",{children:[(0,f.jsx)("div",{children:e.user.name}),(0,f.jsx)("div",{children:e.user.status})]})})]},e.user.id)},b=a.memo((function(e){return(0,f.jsxs)("div",{children:[(0,f.jsx)(d,{pageSize:e.pageSize,totalUsersCount:e.totalUsersCount,onPageChanged:e.onPageChanged,currentPage:e.currentPage}),e.users.map((function(r){return(0,f.jsx)(w,{user:r,followingInProgress:e.followingInProgress,toggleFollowingProgress:e.toggleFollowingProgress,follow:e.follow,unfollow:e.unfollow},r.id)}))]})})),j=n(6746),A=n(7781),C=function(e){return e.usersPage.users},m=function(e){return e.usersPage.pageSize},U=function(e){return e.usersPage.totalUsersCount},y=function(e){return e.usersPage.currentPage},R=function(e){return e.usersPage.isFetching},v=function(e){return e.usersPage.followingInProgress},x=function(e){(0,t.Z)(n,e);var r=(0,i.Z)(n);function n(){var e;(0,s.Z)(this,n);for(var o=arguments.length,t=new Array(o),i=0;i<o;i++)t[i]=arguments[i];return(e=r.call.apply(r,[this].concat(t))).onPageChanged=function(r){e.props.requestUsers(r,e.props.pageSize)},e}return(0,o.Z)(n,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return(0,f.jsx)(f.Fragment,{children:this.props.isFetching?(0,f.jsx)(j.p,{}):(0,f.jsx)(b,{pageSize:this.props.pageSize,totalUsersCount:this.props.totalUsersCount,onPageChanged:this.onPageChanged,currentPage:this.props.currentPage,users:this.props.users,followingInProgress:this.props.followingInProgress,subscriptionChange:this.props.subscriptionChange,toggleFollowingProgress:this.props.toggleFollowingProgress,follow:this.props.follow,unfollow:this.props.unfollow})})}}]),n}(a.Component),I=(0,A.qC)((0,u.$j)((function(e){return{users:C(e),pageSize:m(e),totalUsersCount:U(e),currentPage:y(e),isFetching:R(e),followingInProgress:v(e)}}),{subscriptionChange:l.yd,setCurrentPage:l.D4,toggleFollowingProgress:l.ZH,requestUsers:l.D7,follow:l.ZN,unfollow:l.fv}))(x)},14:function(e){e.exports="data:image/png;base64,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"},885:function(e,r,n){n.d(r,{Z:function(){return o}});var s=n(181);function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var s,o,t=[],i=!0,u=!1;try{for(n=n.call(e);!(i=(s=n.next()).done)&&(t.push(s.value),!r||t.length!==r);i=!0);}catch(l){u=!0,o=l}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return t}}(e,r)||(0,s.Z)(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=176.e86ed658.chunk.js.map