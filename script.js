//slider function to go to app screen
const slider = document.getElementById("mySlider");
const apiEP = "https://randomuser.me/api/";

slider.addEventListener("change", (e) => {
  const { value } = e.target;
  const label = document.getElementById("label");
  console.log(value);
  if (value > 80) {
    label.textContent = "";
    appScreenLoader();
  } else {
    label.textContent = "Slide to unlock";
    e.target.value = 0;
  }
});

const appScreenLoader = () => {
  document.querySelector(".homescreen").remove();
  document.querySelector(".appScreen").style.display = "block";
};

const fetchUsers = (url) => {
  //fetch the user

  // promise method
  fetch(url);
  //async await
};

fetchUsers(apiEP);
