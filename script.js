const story = {
  start: {
    text: "What kind of car do you like?",
    choices: ["Convertible", "Family Car"],
    consequence: ["convertible", "family"],
    image: "https://media.istockphoto.com/id/1473399467/photo/salesman-showing-cars-to-a-couple-at-the-dealership.jpg?s=612x612&w=is&k=20&c=z-hMBXwUL6Q9wd_imor2OwzZ1pSqDsZaoQhDlVTsK6s="
  },
  convertible: {
    text: "Since you like a convertible, you might get sunburned. Do you always wear sunscreen?",
    choices: ["Yes", "No"],
    consequence: ["sunscreen", "sunburn"],
    image: "https://media.istockphoto.com/id/1452341827/vector/wear-sunscreen-sun-block-cosmetics-skin-care.jpg?s=1024x1024&w=is&k=20&c=ehwG7iHv7YBS3n2JfyF7mOjthaIW7s_91nWrdIggrEQ="
  },
  family: {
    text: "Do you have kids who are still in their car seats?",
    choices: ["Yes, I do", "No, my kids are bigger"],
    consequence: ["carseat", "noCarseat"],
    image: "https://media.istockphoto.com/id/1132234898/photo/teddy-in-the-child-seat-of-a-car.jpg?s=1024x1024&w=is&k=20&c=CNLzoXMqWcY8Kwg62_nOe6QA6yZi8VKSQMfPKhqBCwg="
  },
  // --- ENDINGS ---
  sunscreen: {
    text: "You would look great in a convertible. You should definitely buy a convertible!",
    choices: [],
    consequence: [],
    image: "https://media.istockphoto.com/id/108329737/photo/happy-senior-couple-going-for-a-drive.jpg?s=1024x1024&w=is&k=20&c=rwqZ_DXyj7kOCBiV3iDqb4aMnUw7bDne5ox75K9kCsY="
  },
  sunburn: {
    text: "Since you don't wear sunscreen, you will get sunburned in a convertible. You should seriously consider another model.",
    choices: [],
    consequence: [],
    image: "https://media.istockphoto.com/id/1186525906/photo/sunburned-boy.jpg?s=1024x1024&w=is&k=20&c=Z56pEOQmZwDXZoT2447-etu0i_iLqb3Y8xGRtLV8wuk="
  },
  carseat: {
    text: "You might want to consider a minivan. It will be easier to access the car seats",
    choices: [],
    consequence: [],
    image: "https://media.istockphoto.com/id/1141839994/vector/funny-family-driving-in-minivan-on-weekend-holiday-summer-landscape-vector-flat-style.jpg?s=1024x1024&w=is&k=20&c=ICiHuitOVLoYS5bHFtyoiA77EOtKe6dMTSfrRw1YzbI="
  },
  noCarseat: {
    text: "In this case, either a minivan or an SUV will work for your family needs! Have fun on your next road trip!",
    choices: [],
    consequence: [],
    image: "https://media.istockphoto.com/id/813700696/photo/grandparents-having-fun-on-road-trip-with-grandchildren.jpg?s=1024x1024&w=is&k=20&c=yPuwH1GUOt9kXS8qT4u99nrzo4D8gTZIcg2EUblbMv0="
  }
};

let setStage = "start";

function startAdventure() {
  setStage = "start";
  updatePage();
}

function updatePage() {
  const stage = story[setStage];
  document.getElementById("story").textContent = stage.text;
  document.getElementById("adventure-image").src = stage.image;

  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  if (stage.choices.length === 0) {
    const endBtn = document.createElement("button");
    endBtn.textContent = "Restart";
    endBtn.onclick = startAdventure;
    choicesDiv.appendChild(endBtn);
    return;
  }

  stage.choices.forEach((choice, index) => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.onclick = () => {
      setStage = stage.consequence[index];
      updatePage();
    };
    choicesDiv.appendChild(btn);
  });
}

document.getElementById("restart").addEventListener("click", startAdventure);
startAdventure();