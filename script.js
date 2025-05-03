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
  icon = document.querySelector(".icon-click");
  icon.addEventListener("click", (e) => {
    contactScreenLoader();
  });
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

//display contact list
const displayList = (userList) => {
  const contactList = document.getElementById("list");
  contactList.style.display = "";
  let userCount = userList.length;

  let str = "";
  //concatenates the list
  userList.map((item, i) => {
    // Populating the userList data in HTML
    str += `<div class="accordion-item">
  <h2 class="accordion-header">
    <button
      class="accordion-button collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapse${i}"
      aria-expanded="false"
      aria-controls="collapse${i}"
    >
      <img
      src=${item.picture.large}
      " alt="profile-pic" width="50px" class="rounded-circle"/>
      <div class="ms-4">
        <div class="fw-bolder">${item.name.first} ${item.name.last}</div>
        <small>${item.location.street.number} ${item.location.street.name}, ${item.location.city}</small>
      </div>
    </button>
  </h2>
  <div
    id="collapse${i}"
    class="accordion-collapse collapse"
    data-bs-parent="#accordionExample"
  >
    <div
      class="accordion-body d-flex flex-column align-items-center"
    >
      <img
      src=${item.picture.large}
      " alt="profile-pic" width="150px" class="rounded-circle"/>
      <div>
        <div class="fw-bolder mt-2">
          <i class="bi bi-person-circle me-1"></i>
           ${item.name.title} ${item.name.first} ${item.name.last}
        </div>
      </div>
      <div>
        <a href="tel:${item.phone}"
          ><i class="bi bi-phone-fill me-1"></i>${item.phone}</a
        >
      </div>
      <div>
        <a href="mailto:${item.email}"
          ><i class="bi bi-envelope-fill me-1"></i
          >${item.email}</a
        >
      </div>
      <div>
        <a
          href="https://www.google.com.au/maps/search/${item.location.street.number}+${item.location.street.name},+${item.location.city},+${item.location.state},+${item.location.country}"
          target="_blank"
        >
          <i class="bi bi-globe-asia-australia me-1 text-center"></i>${item.location.street.number} ${item.location.street.name}, ${item.location.city},${item.location.country}</a
        >
      </div>
    </div>
  </div>
</div>`;
  });

  //diplay the string in html
  document.getElementById("accordionExample").innerHTML = str;

  // adding number of contatcts

  let userCountHTML = document.getElementById("userCount");
  if (userCount !== 1) {
    userCountHTML.innerText = `${userCount} Contacts`;
  } else {
    userCountHTML.innerText = `${userCount} Contact`;
  }
  document.getElementById("userCount").innerText = `${userCount} Contact`;
};

//search contact
document.getElementById("search");
addEventListener("keypress", (e) => {
  const { value } = e.target;

  console.log(value);
  const filteredUsers = userList.filter((item) => {
    const name = (item.name.first + " " + item.name.last).toLowerCase();
    return name.includes(value.toLowerCase());
  });
  displayList(filteredUsers);
});

//display contact screen
const contactScreenLoader = () => {
  document.querySelector(".appScreen").remove();
  document.querySelector(".contactListsScreen").style.display = "block";
  fetchUsers(apiEP);
};
