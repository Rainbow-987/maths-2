// Create function addUser()
function addUser() {
  // Get value of user by id player1_name_input and player2_name_input
  user_name1 = document.getElementById("player1_name_input").value;
  user_name2 = document.getElementById("player2_name_input").value;

  // Store these values locally
  localStorage.setItem("user_1",user_name1)
  localStorage.setItem("user_2",user_name2);

  //Assign "game_page.html" to window.location
  window.location="game_page.html";
}

