
      
    const observer = new IntersectionObserver((entrise)=>{
        entrise.forEach((entry)=>{
            if(entry.isIntersecting){
                entry.target.classList.add("show-items");
            }else{
                entry.target.classList.remove("show-items");

            }
        });
    });



    const ScrollScale = document.querySelectorAll(".scroll-scale");
    ScrollScale.forEach((el)=>observer.observe(el));

    const ScrollBottom = document.querySelectorAll(".scroll-bottom");
    ScrollBottom.forEach((el)=>observer.observe(el));

    const ScrollTop = document.querySelectorAll(".scroll-top");
    ScrollTop.forEach((el)=>observer.observe(el));




