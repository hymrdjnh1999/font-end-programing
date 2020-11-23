var acc = document.querySelectorAll(".accordion");
var i;
console.log(acc);
for (i = 0; i < acc.length; i++) {
    console.log([acc[i]].values());  
    acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    this.classList.toggle('rotate-down');

    var iconElement = this;
    console.log(iconElement);
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}