function interested() {
  let name = prompt("What's your first name?");
  let email = prompt("What is your e-mail address?");
  let size = prompt("Do you prefer small or large wall hangings?");
  size = size.toLowerCase();
  if (size == "small") {
    alert(
      "Lovely " +
        name +
        "! We'll be in touch to discuss all your wishes, so we can make the perfect small wall hanging for you! 💛"
    );
  } else {
    alert(
      "Great choice " +
        name +
        "! We'll be in touch to discuss all your wishes, so we can make the perfect large wall hanging for you! 💕"
    );
  }
}

let interestedButton = document.querySelector("button");
interestedButton.addEventListener("click", interested);
