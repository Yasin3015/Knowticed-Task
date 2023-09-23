// /////////////////// save page URL 

let termsLinks = document.querySelectorAll(".open__terms");
    console.log(termsLinks)
    termsLinks.forEach(ele=>{
      ele.addEventListener("mouseenter",()=>{
        window.localStorage.setItem("URL",window.location)
      })
})