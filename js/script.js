
 // Function to include HTML content from another file
function includeHTML() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("plans").innerHTML = this.responseText;
    }
    };
    xhttp.open("GET", "pages/plans.html", true);
    xhttp.send();
}

  // Call the includeHTML function to load the content
includeHTML();

const btn = document.querySelector(".button")
const plans = document.querySelector("#plans")
const close = document.querySelector(".close-btn")
const innerBtn = document.querySelector(".buttn ")


const displayPlans = () => {
  plans.style.display = "block"
  plans.style.position = "fixed"
  close.style.display = "block"
  close.style.position = "fixed"
}

const removePlans = () => {
  plans.style.display = "none"
  close.style.display = "none"
}

btn.addEventListener("click", displayPlans)
innerBtn.addEventListener("click", displayPlans)
close.addEventListener("click", removePlans)

