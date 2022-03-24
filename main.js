import "./style.css";

const word = "audio";

//create currentRow with the value of 0
let currentRow = 0;

//create a flex column layout with tailwind classes
const layout = document.createElement("div");
layout.classList.add(
  "flex",
  "flex-col",
  "h-screen",
  "w-full",
  "items-center",
  "justify-center"
);

//add to layout 7 flex rows whith 5 gray squares divs usins tailwind classes
for (let i = 0; i < 7; i++) {
  const row = document.createElement("div");
  row.classList.add(
    "flex",
    "flex-row",
    "w-full",
    "items-center",
    "justify-center"
  );
  for (let j = 0; j < 5; j++) {
    const square = document.createElement("div");
    square.classList.add(
      "flex",
      "bg-gray-200",
      "h-20",
      "w-20",
      "rounded-lg",
      "m-2"
    );
    //add tailwind classes to the square for centering the text
    square.classList.add(
      "text-center",
      "text-gray-800",
      "font-bold",
      "text-xl",
      "items-center",
      "justify-center"
    );

    //add tailwind classes to the square for transform the text to uppercase
    square.classList.add("uppercase", "tracking-wider");
    row.appendChild(square);
  }
  layout.appendChild(row);
}

//create an input element thats reuire only 5 alphabet characters
const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("maxlength", "5");
input.classList.add("bg-gray-200", "rounded-lg", "m-2", "p-2");

//add the input to the layout
layout.appendChild(input);

//on press enter, check if the input is valid and if it is, put each letter in each square of the first row
input.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    const value = input.value;
    if (value.length === 5) {
      const squares = layout.children[currentRow].children;
      for (let i = 0; i < 5; i++) {
        squares[i].innerText = value[i];
        //if the letter is not in the word, add the class bg-red-200
        if (!word.includes(value[i])) {
          squares[i].classList.add("bg-red-200");
        }
        //if the letter is in the word but not in the i position, add the class bg-yellow-200
        if (word.includes(value[i]) && word.indexOf(value[i]) !== i) {
          squares[i].classList.add("bg-yellow-200");
        }
        //if the letter is in the word and in the i position, add the class bg-green-200
        if (word.includes(value[i]) && word.indexOf(value[i]) === i) {
          squares[i].classList.add("bg-green-200");
        }
      }
      //if input value is equal to word, generate a floating congratulation message
      if (value === word) {
        const message = document.createElement("div");
        message.classList.add(
          "bg-green-200",
          "rounded-lg",
          "p-2",
          "text-center",
          "text-white",
          "font-bold",
          "text-xl",
          "uppercase",
          "tracking-wider"
        );
        message.innerText = "Congratulations!";
        //add the tailwind classes to the message for put the div in the center of the screen
        message.classList.add(
          "flex",
          "flex-col",
          "h-screen",
          "w-full",
          "items-center",
          "justify-center"
        );
        //set the mesage absolute
        message.style.position = "absolute";

        //add play again button to message
        const playAgain = document.createElement("button");
        playAgain.classList.add(
          "bg-green-400",
          "rounded-lg",
          "p-2",
          "text-center",
          "text-white",
          "font-bold",
          "text-xl",
          "uppercase",
          "tracking-wider"
        );
        playAgain.innerText = "Play Again";
        playAgain.addEventListener("click", () => {
          location.reload();
        });
        //add hover effect to the play again button
        playAgain.classList.add("hover:bg-green-500");

        message.appendChild(playAgain);

        layout.appendChild(message);
      }

      //icrease the current row by 1 if the current row is less than 6
      if (currentRow < 6) {
        currentRow++;
      } else {
        //generate a you lose message like the congratulation message
        const message = document.createElement("div");
        message.classList.add(
          "bg-red-200",
          "rounded-lg",
          "p-2",
          "text-center",
          "text-white",
          "font-bold",
          "text-xl",
          "uppercase",
          "tracking-wider"
        );
        message.innerText = "You Lose!";
        message.classList.add(
          "flex",
          "flex-col",
          "h-screen",
          "w-full",
          "items-center",
          "justify-center"
        );
        message.style.position = "absolute";
        //add play again button to message
        const playAgain = document.createElement("button");
        playAgain.classList.add(
          "bg-red-400",
          "rounded-lg",
          "p-2",
          "text-center",
          "text-white",
          "font-bold",
          "text-xl",
          "uppercase",
          "tracking-wider"
        );
        playAgain.innerText = "Play Again";
        playAgain.addEventListener("click", () => {
          location.reload();
        });
        playAgain.classList.add("hover:bg-red-500");
        message.appendChild(playAgain);
        layout.appendChild(message);
      }
      //clear the input
      input.value = "";
    }
  }
});

//add layout to the body
document.body.appendChild(layout);

//focus the input
input.focus();

//add a reset button
const reset = document.createElement("button");
reset.classList.add("bg-gray-200", "rounded-lg", "m-2", "p-2");
reset.innerText = "Reset";
reset.addEventListener("click", () => {
  location.reload();
});

//add hover effect to the reset button
reset.classList.add("hover:bg-gray-300");

layout.appendChild(reset);
