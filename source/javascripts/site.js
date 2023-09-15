console.log("Javascript connected");

const btn = document.querySelectorAll(".btn-green");

btn.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const text = event.currentTarget;
    if (text.innerText === "See more") {
      text.innerText = "See less"
    } else {
      text.innerText = "See more"
    };
  });
});
