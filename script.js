//slider function to go to app screen
const slider = document.getElementById("mySlider");
const apiEP = "https://randomuser.me/api/";
let userList = [];

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

const fetchUsers = async (url) => {
  //fetch the user

  // // promise method
  // fetch(url)
  //   .then((response) => {
  //     console.log(response);
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch(() => {
  //     console.log(error);
  //   });

  //async await
  const response = await fetch(url); //to call await function async must be defined
  const data = await response.json();
  userList = data.results;
  console.log(userList);
};

fetchUsers(apiEP);
