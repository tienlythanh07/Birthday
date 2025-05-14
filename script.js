const openEnvelope = () => {
  console.log("Open envelope required");
  const openButton = document.querySelector("#open");
  const closeButton = document.querySelector("#close");

  const flapOneElement = document.querySelector(".flap.one");
  const flapTwoElement = document.querySelector(".flap.two");
  const letterElement = document.querySelector(".letter");

  letterElement.classList.remove("letter-close");
  openButton.style.display = "none";
  letterElement.style.animationPlayState = "running";
  setTimeout(() => {
    flapOneElement.classList.add("flap-one-open");
    flapTwoElement.classList.add("flap-two-open");
    letterElement.classList.add("letter-open");
  }, 100);

  setTimeout(() => {
    letterElement.style.animationPlayState = "paused";
    closeButton.style.opacity = 1;
    closeButton.style.pointerEvents = "auto";
  }, 3500);
};

const closeEnvelope = () => {
  console.log("Close envelope required");

  const openButton = document.querySelector("#open");
  const closeButton = document.querySelector("#close");

  const flapOneElement = document.querySelector(".flap.one");
  const flapTwoElement = document.querySelector(".flap.two");
  const letterElement = document.querySelector(".letter");

  letterElement.classList.add("letter-close");
  closeButton.style.opacity = 0;
  closeButton.style.pointerEvents = "none";
  letterElement.style.animationPlayState = "running";
  setTimeout(() => {
    flapOneElement.classList.remove("flap-one-open");
    flapTwoElement.classList.remove("flap-two-open");
    letterElement.classList.remove("letter-open");
    setTimeout(() => {
      openButton.style.display = "block";
      letterElement.style.animationPlayState = "paused";
    }, 1500);
  }, 3000);
};
