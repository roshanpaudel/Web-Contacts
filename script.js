//slider function to go to app screen
const slider = document.getElementById("mySlider");
const apiEP = "https://randomuser.me/api?results=2";
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
  userList = data.results; //accesses the results property of the parsed JSON object
  console.log(userList);

  // hide spinner after fetch
  document.querySelector(".showSpinner").style.display = "none";

  //displays fetched and parsed data
  displayList(userList);
};

fetchUsers(apiEP);

//display contact list
const displayList = (userList) => {
  const contactList = document.getElementById("list");
  contactList.style.display = "";
  let str = "";
  //concatenates the list
  userList.map((item, i) => {
    // Populating the userList data in HTML
    str += `<div class="accordion-item">
  <h2 class="accordion-header">
    <button
      class="accordion-button"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapse${item.i}"
      aria-expanded="true"
      aria-controls="collapse${item.i}"
    >
      <img
      src=${item.picture.large}
      " alt="profile-pic" width="50px" class="rounded-circle"/>
      <div class="ms-4">
        <div class="fw-bolder">Roshan Paudel</div>
        <small>1 George street, Sydney</small>
      </div>
    </button>
  </h2>
  <div
    id="collapse${item.i}"
    class="accordion-collapse collapse show"
    data-bs-parent="#accordionExample"
  >
    <div
      class="accordion-body d-flex flex-column align-items-center"
    >
      <img
      src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
      " alt="profile-pic" width="150px" class="rounded-circle"/>
      <div>
        <div class="fw-bolder mt-2">
          <i class="bi bi-person-circle me-1"></i>
          Roshan Paudel
        </div>
      </div>
      <div>
        <a href="tel:+0456398673"
          ><i class="bi bi-phone-fill me-1"></i>0456398673</a
        >
      </div>
      <div>
        <a href="mailto:xyz@gmail.com"
          ><i class="bi bi-envelope-fill me-1"></i
          >xyz@gmail.com</a
        >
      </div>
      <div>
        <a
          href="https://www.google.com/maps/place/1+George+St,+Sydney+NSW+2041"
          target="_blank"
        >
          <i class="bi bi-globe-asia-australia me-1"></i>1
          George Street, Sydney</a
        >
      </div>
    </div>
  </div>
</div>`;
  });

  //diplay the string in html
  document.getElementById("accordionExample").innerHTML = str;
};
