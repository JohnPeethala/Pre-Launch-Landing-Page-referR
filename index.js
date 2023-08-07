const validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const register = async () => {
  // checking for valid email
  if (!$("#email-input").val().match(validRegex)) {
    setAlert("error");
    return;
  }

  // sending an api request
  try {
    const response = await fetch(
      "https://api.packethouse.net/interest-registrations",
      {
        method: "POST",
        body: JSON.stringify({
          firstname: "Ananya",
          lastname: "Pandey",
          email: $("#email-input").val(),
        }),
      },
    );
    if (response.status === 200) {
      setAlert("success");
    } else if (response.status === 409) {
      setAlert("info");
    } else if (response.status === 400) {
      setAlert("error");
    } else {
      //redirect
    }
  } catch (error) {
    // redirect
  }
};

const setAlert = (alert) => {
  // remove existing classes
  $(".input-response-div").removeClass("success error info");
  $(".alert-icon").attr("src", ``);
  $(".alert-text").text("");

  // add class & img src
  $(".input-response-div").addClass(`${alert}`);
  $(".alert-icon").attr("src", `./public/alert-${alert}.svg`);

  // add alert text
  if (alert === "success") {
    $(".alert-text").text("Success!");
  }
  if (alert === "error") {
    $(".alert-text").text("Invalid email address.");
  }
  if (alert === "info") {
    $(".alert-text").text("Email already exists.");
  }
};
