const e=document.querySelector(".modal-menu"),t=document.querySelector(".mobile-menu"),o=t.querySelector("ul"),s=document.querySelector("body"),c=document.querySelector(".root");s.addEventListener("click",(function(e){"button"===e.target.localName&&e.target.hasAttribute("data-atribut")&&(document.querySelector(`.backdrop.${e.target.dataset.atribut}`).classList.add("is-open"),s.classList.add("is-scroll"),backdrop=document.querySelector(".backdrop.is-open"))})),c.addEventListener("click",(function(e){console.log(e.target),"button"===e.target.localName&&e.target.hasAttribute("data-atribut")&&"close"===e.target.dataset.atribut&&(document.querySelector(".backdrop.is-open").classList.remove("is-open"),s.classList.remove("is-scroll"))})),e.addEventListener("click",(function(){e.classList.toggle("is-open"),t.classList.toggle("is-open"),s.classList.toggle("is-scroll")})),o.addEventListener("click",(function(o){"a"===o.target.localName&&(e.classList.remove("is-open"),t.classList.remove("is-open"),s.classList.remove("is-scroll"))}));
//# sourceMappingURL=index.e4368ab8.js.map
