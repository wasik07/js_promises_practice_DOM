var n=document.body,e=function(e,t){var r=document.createElement("div");r.className=t?"error":"success",r.textContent="".concat(e),r.dataset.qa="notification",n.appendChild(r)},t=new Promise(function(e,t){var r=setTimeout(function(){return t(Error("First promise was rejected"))},3e3);n.addEventListener("click",function(){clearTimeout(r),e("First promise was resolved")})}),r=new Promise(function(e){var t=function(t){return n.addEventListener(t,function(){return e("Second promise was resolved")})};t("click"),t("contextmenu")}),c=new Promise(function(e){var t=function(t,r){return n.addEventListener(t,function(){n.addEventListener(r,function(){e("Third promise was resolved")})})};t("click","contextmenu"),t("contextmenu","click")});t.then(function(n){return e(n)}).catch(function(n){return e(n,!0)}),r.then(function(n){return e(n)}),c.then(function(n){return e(n)});
//# sourceMappingURL=index.ddb33978.js.map
