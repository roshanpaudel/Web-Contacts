//slider function to go to app screen
const slider = document.getElementById("mySlider");

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
  const homescreen = document.getElementsByClassName("homescreen");
  console.log(homescreen); //returns HTMLCollection

  //selects the first items of HTMLCollection that has same classname
  homescreen[0].style.display = "none";

  const appScreen = document.getElementsByClassName("appScreen");
  appScreen[0].style.display = "";
};
