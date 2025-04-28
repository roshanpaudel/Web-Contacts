//slider function to go to app screen
const slider = document.getElementById("mySlider");

slider.addEventListener("change", (e) => {
  const { value } = e.target;
  const label = document.getElementById("label");
  console.log(value);
  if (value > 80) {
    label.textContent = "";
  } else {
    label.textContent = "Slide to unlock";
    e.target.value = 0;
  }
});

const appScreenLoader = () => {};
