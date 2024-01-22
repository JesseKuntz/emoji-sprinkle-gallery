const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    window.EmojiSprinkle.sprinkleEmojis({
      emoji: button.innerText,
      count: 300,
      fade: 0.75,
    });
  });
});
