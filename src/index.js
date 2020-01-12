import "./styles.css";
const parentDiv = document.getElementById("main");
const parentDivScrollListner = e => {
  const parentHeight = e.target.offsetHeight;
  const positionNow = e.target.scrollTop;
  if (positionNow > parentHeight / 2) {
    //method:1
    // document.getElementById("yellow").style.backgroundColor = "blue";
    //method:2
    var element = document.getElementById("yellow");
    element.classList.add("myStyle");
  }
};
parentDiv.addEventListener("scroll", parentDivScrollListner);
