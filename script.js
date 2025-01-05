// Dynamic Greeting
const header = document.querySelector("header h1");
const now = new Date();
const hours = now.getHours();

let greeting;
if (hours < 12) {
  greeting = "Good Morning!";
} else if (hours < 18) {
  greeting = "Good Afternoon!";
} else {
  greeting = "Good Evening!";
}

header.textContent = `${greeting} Welcome to My Portfolio`;

// Form Validation
const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    event.preventDefault(); // Stop form submission
    alert("Please fill out all fields before submitting.");
  }
});


// Modal Popup
const modal = document.getElementById("modal");
const modalText = document.getElementById("modal-text");
const closeModal = document.querySelector(".close");

document.querySelectorAll(".view-details").forEach((button) => {
  button.addEventListener("click", () => {
    const projectNumber = button.getAttribute("data-project");
    modalText.textContent = `Details about Project ${projectNumber}`;
    modal.style.display = "flex";
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});


// Scroll-to-Top Button
const scrollToTopButton = document.getElementById("scroll-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopButton.style.display = "flex";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
