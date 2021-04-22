// dom variables
let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");
// add events
getComputerChoice = () => {
  const choices = ["rock", "paper", "scissor"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

game = (userChoice) => {
  const compChoice = getComputerChoice();
  //     console.log("Comp choice :  "+compChoice)
  //     console.log("User choice :  " + userChoice);
  switch (userChoice + compChoice) {
    case "rockscissor":
    case "paperrock":
    case "scissorpaper":
      win(userChoice, compChoice); // console.log("user won")
      break;
    case "rockpaper":
    case "paperscissor":
    case "scissorrock":
      lose(userChoice, compChoice); // console.log("user lose")
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorscissor":
      draw(userChoice, compChoice); // console.log("draw")
      break;
  }
};
win = (userChoice, compChoice) => {
  const smallUSerWord = "user".fontsize(2).sub();
  const smallCompWord = "comp".fontsize(2).sub();
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  result_div.innerHTML =
    userChoice +
    smallUSerWord +
    " beats " +
    compChoice +
    smallCompWord +
    ".You win! 👏";
  userChoice_div.classList.add("green-glow");
  setTimeout(() => userChoice_div.classList.remove("green-glow"), 300);
};
lose = (userChoice, compChoice) => {
  const userChoice_div = document.getElementById(userChoice);
  const smallUSerWord = "user".fontsize(2).sub();
  const smallCompWord = "comp".fontsize(2).sub();
  compScore++;
  compScore_span.innerHTML = compScore;
  result_div.innerHTML =
    compChoice +
    smallCompWord +
    " beats " +
    userChoice +
    smallUSerWord +
    ".You loss! 😥";
  userChoice_div.classList.add("red-glow");
  setTimeout(() => userChoice_div.classList.remove("red-glow"), 300);
};
draw = (userChoice, compChoice) => {
  const smallUSerWord = "user".fontsize(2).sub();
  const smallCompWord = "comp".fontsize(2).sub();
  const userChoice_div = document.getElementById(userChoice);
  result_div.innerHTML =
    userChoice +
    smallUSerWord +
    " equals to " +
    compChoice +
    smallCompWord +
    ".So its a draw!🤷‍♂️";
  userChoice_div.classList.add("yellow-glow");
  setTimeout(() => userChoice_div.classList.remove("yellow-glow"), 300);
};

main = () => {
  rock_div.addEventListener("click", function () {
    // console.log("hey you clicked rock")
    game("rock");
  });
  paper_div.addEventListener("click", function () {
    // console.log("hey you clicked paper")
    game("paper");
  });
  scissor_div.addEventListener("click", function () {
    // console.log("hey you clicked scissor");
    game("scissor");
  });
};

main();
