document.addEventListener("DOMContentLoaded", () => {
  const joinButton = document.getElementById("joinButton");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const backMessage = document.getElementById("backMessage");

  joinButton.addEventListener("click", () => {
    const username = usernameInput.value;
    const password = passwordInput.value;

    const userData = {
      username: username,
      password: password,
    };

    fetch("http://192.168.43.50:5000/join-circle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        backMessage.innerText = data.message;
      })
      .catch((error) => {
        console.error("Error:", error);
        backMessage.innerText = "Ocorreu um erro ao se registrar.";
      });
  });
});
