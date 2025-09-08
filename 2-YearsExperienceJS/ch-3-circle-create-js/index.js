let circleCount = 0;

// when we click circle will creates.
window.document.addEventListener("click", (e) => {
    circleCount++;
    console.log(circleCount);

    if(circleCount >=3 ) {
      document.querySelectorAll(".circle").forEach(c =>  c.remove());
      circleCount = 1;
    }
     let myCircle =document.createElement("div");
     myCircle.classList.add("circle");
     myCircle.style.backgroundColor = "red";
     myCircle.style.height = "20px";
     myCircle.style.width = "20px";
     myCircle.style.borderRadius = "50%";
     myCircle.style.position = "absolute";

    // main.
    myCircle.style.left = (e.clientX) + "px";
    myCircle.style.top = (e.clientY) + "px";
    myCircle.style.pointerEvents = "none";


    //  body.
    document.body.appendChild(myCircle);
})