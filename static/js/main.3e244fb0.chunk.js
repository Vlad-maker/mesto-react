(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(6),i=n.n(o),s=(n(14),n(9)),r=n(2),u=n.p+"static/media/logo.ff16f24b.svg",l=n(0);var p=function(){return Object(l.jsx)("header",{className:"header page__header",children:Object(l.jsx)("img",{className:"header__logo",src:u,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"})})},d=c.a.createContext();var h=function(e){var t=c.a.useContext(d),n=e.card.owner._id===t._id,a="card__deletion ".concat(n?"":"card__deletion_disabled"),o=e.card.likes.some((function(e){return e._id===t._id})),i="card__like ".concat(o?"card__like_active":"");return Object(l.jsxs)("li",{className:"card",children:[Object(l.jsx)("button",{className:a,onClick:function(){e.onCardDelete(e.card)}}),Object(l.jsx)("button",{className:"card__open-button",type:"button","aria-label":"\u041e\u0442\u043a\u0440\u044b\u0442\u044c",onClick:function(){e.onCardClick(e.card)},children:Object(l.jsx)("img",{className:"card__photo",src:e.link,alt:e.name})}),Object(l.jsxs)("div",{className:"card__description",children:[Object(l.jsx)("h2",{className:"card__title",children:e.name}),Object(l.jsxs)("div",{className:"card__like-section",children:[Object(l.jsx)("button",{className:i,type:"button","aria-label":"Like",onClick:function(){e.onCardLike(e.card)}}),Object(l.jsx)("p",{className:"card__like-number",children:e.likes.length})]})]})]})};var j=function(e){var t=c.a.useContext(d);return Object(l.jsxs)("main",{className:"content page__content",children:[Object(l.jsxs)("section",{className:"profile content__profile",children:[Object(l.jsx)("button",{className:"profile__avatar-button",type:"button",onClick:e.onEditAvatar,children:Object(l.jsx)("img",{className:"profile__avatar",src:t.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440"})}),Object(l.jsxs)("div",{className:"profile__info",children:[Object(l.jsx)("h1",{className:"profile__name",children:t.name}),Object(l.jsx)("p",{className:"profile__about",children:t.about}),Object(l.jsx)("button",{className:"profile__edit-button",type:"button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",onClick:e.onEditProfile})]}),Object(l.jsx)("button",{className:"profile__add-button",type:"button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",onClick:e.onAddPlace})]}),Object(l.jsx)("section",{className:"cards content__cards",children:Object(l.jsx)("ul",{className:"cards__grid",children:e.cards.map((function(t){return Object(l.jsx)(h,{card:t,name:t.name,link:t.link,likes:t.likes,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})})]})};var b=function(){return Object(l.jsx)("footer",{className:"footer page__footer",children:Object(l.jsx)("p",{className:"footer__content",children:"\xa9 2020 Mesto Russia"})})};var m=function(e){return Object(l.jsx)("div",{className:"popup page__popup popup_type_".concat(e.name," ").concat(e.isOpen&&"popup_opened"),children:Object(l.jsxs)("div",{className:"popup__container",children:[Object(l.jsx)("button",{className:"popup__close-button",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:e.onClose}),Object(l.jsx)("h2",{className:"popup__title",children:e.title}),Object(l.jsxs)("form",{className:"popup__form",name:e.name,noValidate:!0,onSubmit:e.onSubmit,children:[e.children,Object(l.jsx)("button",{className:"popup__save-button",type:"submit",children:e.buttonText})]})]})})};var _=function(e){var t=c.a.useContext(d),n=c.a.useState(""),a=Object(r.a)(n,2),o=a[0],i=a[1],s=c.a.useState(""),u=Object(r.a)(s,2),p=u[0],h=u[1];return c.a.useEffect((function(){(t.name||t.description)&&(i(t.name),h(t.about))}),[t]),Object(l.jsx)(m,{name:"edit-profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:e.isLoading?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:o,about:p})},children:Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("input",{className:"popup__input popup__input_name",id:"name-input",type:"text",name:"nameInput",placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"40",required:!0,value:o,onChange:function(e){i(e.target.value)}}),Object(l.jsx)("span",{className:"popup__input-error",id:"name-input-error"}),Object(l.jsx)("input",{className:"popup__input popup__input_about",id:"about-input",type:"text",name:"aboutInput",placeholder:"\u041e \u0441\u0435\u0431\u0435",minLength:"2",maxLength:"200",required:!0,value:p,onChange:function(e){h(e.target.value)}}),Object(l.jsx)("span",{className:"popup__input-error",id:"about-input-error"})]})})};var f=function(e){var t=c.a.useRef("");return c.a.useEffect((function(){e.isOpen||(t.current.value="")}),[e.isOpen]),Object(l.jsx)(m,{name:"change-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:e.isLoading?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},children:Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("input",{className:"popup__input popup__input_link",id:"avatar-link-input",type:"url",name:"avatarLinkInput",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,ref:t}),Object(l.jsx)("span",{className:"popup__input-error",id:"avatar-link-input-error"})]})})};var O=function(e){var t=c.a.useState(""),n=Object(r.a)(t,2),a=n[0],o=n[1],i=c.a.useState(""),s=Object(r.a)(i,2),u=s[0],p=s[1];return c.a.useEffect((function(){e.isOpen||(o(""),p(""))}),[e.isOpen]),Object(l.jsx)(m,{name:"add-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:e.isLoading?"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435...":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:a,link:u})},children:Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("input",{className:"popup__input popup__input_place",id:"place-input",type:"text",name:"placeInput",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30",required:!0,onChange:function(e){o(e.target.value)},value:a}),Object(l.jsx)("span",{className:"popup__input-error",id:"place-input-error"}),Object(l.jsx)("input",{className:"popup__input popup__input_link",id:"link-input",type:"url",name:"linkInput",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,onChange:function(e){p(e.target.value)},value:u}),Object(l.jsx)("span",{className:"popup__input-error",id:"link-input-error"})]})})};var v=function(e){return Object(l.jsx)("div",{className:"popup page__popup popup_type_view-image ".concat(e.card.link&&"popup_opened"),children:Object(l.jsxs)("figure",{className:"popup__img-container",children:[Object(l.jsx)("button",{className:"popup__close-button popup__close-button_view-image",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:e.onClose}),Object(l.jsx)("img",{className:"popup__img",src:e.card.link,alt:e.card.name}),Object(l.jsxs)("figcaption",{className:"popup__img-title",children:[e.card.name," "]})]})})};var g=function(e){return Object(l.jsx)(m,{name:"confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonText:e.isLoading?"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435...":"\u0414\u0430",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onConfirm(e.card)}})},x=n(7),k=n(8),C=new(function(){function e(t){Object(x.a)(this,e),this.Url=t.Url,this.headers=t.headers}return Object(k.a)(e,[{key:"getUserData",value:function(){var e=this;return fetch("".concat(this.Url,"/users/me"),{headers:this.headers}).then((function(t){return e._getResponse(t)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this.Url,"/cards"),{headers:this.headers}).then((function(t){return e._getResponse(t)}))}},{key:"editUserData",value:function(e){var t=this,n=e.name,a=e.about;return fetch("".concat(this.Url,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:n,about:a})}).then((function(e){return t._getResponse(e)}))}},{key:"postNewCard",value:function(e){var t=this,n=e.name,a=e.link;return fetch("".concat(this.Url,"/cards "),{method:"POST",headers:this.headers,body:JSON.stringify({name:n,link:a})}).then((function(e){return t._getResponse(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this.Url,"/cards/").concat(e),{method:"DELETE",headers:this.headers}).then((function(e){return t._getResponse(e)}))}},{key:"changeLikeStatus",value:function(e,t){var n=this;return t?fetch("".concat(this.Url,"/cards/likes/").concat(e),{method:"DELETE",headers:this.headers}).then((function(e){return n._getResponse(e)})):fetch("".concat(this.Url,"/cards/likes/").concat(e," "),{method:"PUT",headers:this.headers}).then((function(e){return n._getResponse(e)}))}},{key:"changeUserAvatar",value:function(e){var t=this;return fetch("".concat(this.Url,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return t._getResponse(e)}))}},{key:"_getResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}}]),e}())({Url:"https://mesto.nomoreparties.co/v1/cohort-19",headers:{authorization:"b88baff0-9a43-403c-833b-e4c683401608","Content-type":"application/json"}});var N=function(){var e=c.a.useState(!1),t=Object(r.a)(e,2),n=t[0],a=t[1],o=c.a.useState(!1),i=Object(r.a)(o,2),u=i[0],h=i[1],m=c.a.useState(!1),x=Object(r.a)(m,2),k=x[0],N=x[1],y=c.a.useState(!1),L=Object(r.a)(y,2),S=L[0],U=L[1],E=c.a.useState({}),D=Object(r.a)(E,2),P=D[0],T=D[1],A=c.a.useState({}),R=Object(r.a)(A,2),w=R[0],I=R[1],F=c.a.useState([]),q=Object(r.a)(F,2),J=q[0],B=q[1],H=c.a.useState(!1),M=Object(r.a)(H,2),z=M[0],V=M[1],G=c.a.useState({}),K=Object(r.a)(G,2),Q=K[0],W=K[1];function X(){a(!1),h(!1),N(!1),U(!1),T({})}function Y(e){"Escape"===e.key&&X()}function Z(e){e.target.classList.contains("popup")&&X()}return c.a.useEffect((function(){Promise.all([C.getUserData(),C.getInitialCards()]).then((function(e){var t=Object(r.a)(e,2),n=t[0],a=t[1];I(n),B(a)})).catch((function(e){console.log(e)}))}),[]),c.a.useEffect((function(){return document.addEventListener("keydown",Y),document.addEventListener("mouseup",Z),function(){document.removeEventListener("keydown",Y),document.removeEventListener("mouseup",Z)}})),Object(l.jsx)(d.Provider,{value:w,children:Object(l.jsx)("div",{className:"page",children:Object(l.jsxs)("div",{className:"page__container",children:[Object(l.jsx)(p,{}),Object(l.jsx)(j,{onEditProfile:function(){a(!0)},onAddPlace:function(){h(!0)},onEditAvatar:function(){N(!0)},onCardClick:T,cards:J,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===w._id}));C.changeLikeStatus(e._id,t).then((function(t){var n=J.map((function(n){return n._id===e._id?t:n}));B(n)})).catch((function(e){console.log(e)}))},onCardDelete:function(e){U(!0),W(e)}}),Object(l.jsx)(b,{}),Object(l.jsx)(_,{isOpen:n,onClose:X,onUpdateUser:function(e){V(!0),C.editUserData(e).then((function(e){I(e),V(!1),X()})).catch((function(e){console.log(e)}))},isLoading:z}),Object(l.jsx)(f,{isOpen:k,onClose:X,onUpdateAvatar:function(e){V(!0),C.changeUserAvatar(e).then((function(e){I(e),V(!1),X()})).catch((function(e){console.log(e)}))},isLoading:z}),Object(l.jsx)(O,{isOpen:u,onClose:X,onAddPlace:function(e){var t=e.name,n=e.link;V(!0),C.postNewCard({name:t,link:n}).then((function(e){B([e].concat(Object(s.a)(J))),V(!1),X()})).catch((function(e){console.log(e)}))},isLoading:z}),Object(l.jsx)(g,{isOpen:S,onClose:X,onConfirm:function(e){V(!0),C.deleteCard(e._id).then((function(){var t=J.filter((function(t){return t._id!==e._id}));B(t),X(),V(!1)})).catch((function(e){console.log(e)}))},card:Q,isLoading:z}),Object(l.jsx)(v,{card:P,onClose:X})]})})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),o(e),i(e)}))};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root")),y()}},[[16,1,2]]]);
//# sourceMappingURL=main.3e244fb0.chunk.js.map