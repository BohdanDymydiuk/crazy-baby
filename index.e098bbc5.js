var e=document.querySelector(".features__blocks"),t=document.querySelectorAll(".features__blocks article"),n=document.querySelector(".features__current-num"),o=document.querySelector(".features__button--prev"),r=document.querySelector(".features__button--next"),c=0;function a(o){o===t.length?c=0:o<0&&(c=t.length-1),t.forEach(function(e){e.classList.remove("features__block--active")}),t[c].classList.add("features__block--active"),e.style.transform="translateX(".concat(-(100*c),"%)"),n.innerHTML="0".concat(c+1)}a(),o.addEventListener("click",function(){a(--c)}),r.addEventListener("click",function(){a(++c)});var i=document.querySelector(".get-in-touch__form"),s=document.querySelector(".get-in-touch__form-input"),l=document.querySelector(".get-in-touch__form-textarea"),u=document.querySelector(".get-in-touch__form-textarea-wrapper"),d=document.querySelector(".get-in-touch__form-button");i.addEventListener("input",function(e){d.removeAttribute("disabled"),0===s.value.length&&0===l.value.length&&d.setAttribute("disabled","")}),d.addEventListener("click",function(){if(s.checkValidity())s.classList.remove("get-in-touch__form-input--invalid");else{s.classList.add("get-in-touch__form-input--invalid");return}if(l.checkValidity())l.classList.remove("get-in-touch__form-textarea--invalid"),u.classList.remove("get-in-touch__form-textarea-wrapper--invalid");else{l.classList.add("get-in-touch__form-textarea--invalid"),u.classList.add("get-in-touch__form-textarea-wrapper--invalid");return}i.reset(),d.setAttribute("disabled","")});var m=document.querySelector(".header__text-wrapper"),f=document.querySelectorAll("\n  .benefits__blocks,\n  .meet-luna,\n  .our-story,\n  .about-us,\n  .features,\n  .get-in-touch__title,\n  .get-in-touch__form"),_=document.querySelectorAll(".benefits__nav, .quote");function v(e){var t=e.getBoundingClientRect();return t.bottom>0&&t.top<(window.innerHeight||document.documentElement.clientHeight)}window.addEventListener("load",function(){v(m)&&m.classList.add("header__text-wrapper--fade-in")});var p=0;document.addEventListener("scroll",function(){v(m)?m.classList.add("header__text-wrapper--fade-in"):m.classList.remove("header__text-wrapper--fade-in");var e=window.scrollY||document.documentElement.scrollTop;e>p?_.forEach(function(e){v(e)?e.classList.add("start-position-for-scroll-down","fade-in-element"):e.classList.remove("start-position-for-scroll-down","fade-in-element")}):_.forEach(function(e){v(e)?e.classList.add("start-position-for-scroll-up","fade-in-element"):e.classList.remove("start-position-for-scroll-up","fade-in-element")}),p=e,f.forEach(function(e){v(e)?e.classList.add("fade-in-element"):e.classList.remove("fade-in-element")})});var h=document.querySelector(".page__scroll-button");window.onscroll=function(){document.body.scrollTop>660||document.documentElement.scrollTop>660?h.classList.add("fade-in-element"):h.classList.remove("fade-in-element")};
//# sourceMappingURL=index.e098bbc5.js.map
