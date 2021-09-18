let hamb = document.getElementById("hamb")
let sidelist = document.getElementsByClassName("sidelist")[0]

hamb.addEventListener("click", ()=>{ 
  console.log("clicked");
  if(sidelist.style.marginLeft == "0px"){
    sidelist.style.marginLeft ="-270px"
  }
  else{
    sidelist.style.marginLeft = "0px"
  }
}
)