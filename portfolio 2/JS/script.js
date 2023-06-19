// typing animation 
var typed = new Typed(".typing",{
    strings:["Student","Junior developer","Gamer","front-end-developer"],
    typeSpeed:150,
    BackSpeed:150,
    loop:true
})

// aside
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;
      for(let i = 0; i <= totalNavList ; i++)
      {
        const a = navList[i].querySelector("a");
        a.addEventListener("click" , function()
        {
            for(let i = 0; i <totalSection; i++)
            {
              allSection[i].classList.remove("back-section");
            }
            for(let j = 0; j<totalNavList ; j++ )
            {
              if(navList[j].querySelector("a").classList.contains("active"))
               {
                allSection[j].classList.add("back-section");
              }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active");
            showSection(this);
            if(window.innerWidth < 1200){
              const task2 = document.querySelector(".nav-toggler");
              const task1 = document.querySelector(".aside");
              task1.classList.toggle("open");
              task2.classList.toggle("open");
              for(let i = 0 ; i,totalSection; i++){
                allSection[i].classList.toggle("open");
              }
                        }
        })
      }
      function showSection(element)
      {
        for(let i = 0; i <totalSection; i++)
        {
          allSection[i].classList.remove("active");
        }

        const target= element.getAttribute("href").split("#")[1];
        document.querySelector("#"+ target).classList.add("active");
      }
      function updateNav(element){
        for(let i = 0 ; i <totalNavList ; i++)
        {
          navList[i].querySelector("a").classList.remove("active");
          const target= element.getAttribute("href").split("#")[1];
          if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
          {
            navList[i].querySelector("a").classList.add("active");
          }
        }
      }

      function test(){
        showSection(this);
        updateNav(this);
      }
function myFunction() {
  const task2 = document.querySelector(".nav-toggler");
  const task1 = document.querySelector(".aside");
  task1.classList.toggle("open");
  task2.classList.toggle("open");
  for(let i = 0 ; i,totalSection; i++){
    allSection[i].classList.toggle("open");
  }
}
