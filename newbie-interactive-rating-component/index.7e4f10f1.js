const formContainer=document.querySelector(".rating__form"),submittedContainer=document.querySelector(".rating__submitted");formContainer.addEventListener("submit",(function(t){t.preventDefault();const e=[...new FormData(this)],{rating:n}=Object.fromEntries(e);submittedContainer.querySelector(".rating__selected").textContent=`You selected ${n} out of 5`,formContainer.classList.add("hidden"),submittedContainer.classList.remove("hidden")}));
//# sourceMappingURL=index.7e4f10f1.js.map
