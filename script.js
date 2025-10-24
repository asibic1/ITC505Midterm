const adventure = {
  start: {
    text: "What kind of car do you like?",
    choices: ["Convertible", "Family Car", "Move Stuff","Not Sure"],
    consequence: ["convertible", "family", "moveStuff","notSure"],
    image: "https://media.istockphoto.com/id/1473399467/photo/salesman-showing-cars-to-a-couple-at-the-dealership.jpg?s=612x612&w=is&k=20&c=z-hMBXwUL6Q9wd_imor2OwzZ1pSqDsZaoQhDlVTsK6s="
  },
  convertible: {
    text: "Since you like a convertible, you might get sunburned. Do you always wear sunscreen?",
    choices: ["Yes, I do", "No, not really"],
    consequence: ["sunscreen", "sunburn"],
    image: "https://media.istockphoto.com/id/1452341827/vector/wear-sunscreen-sun-block-cosmetics-skin-care.jpg?s=1024x1024&w=is&k=20&c=ehwG7iHv7YBS3n2JfyF7mOjthaIW7s_91nWrdIggrEQ="
  },
  family: {
    text: "Do you have kids who are still in their car seats?",
    choices: ["Yes, I do", "No, my kids are bigger"],
    consequence: ["carseat", "noCarseat"],
    image: "https://media.istockphoto.com/id/1132234898/photo/teddy-in-the-child-seat-of-a-car.jpg?s=1024x1024&w=is&k=20&c=CNLzoXMqWcY8Kwg62_nOe6QA6yZi8VKSQMfPKhqBCwg="
  },
  moveStuff: {
    text: "What kind of stuff?",
    choices: ["My work tools", "Boats, Trailers"],
    consequence: ["tools", "hitch"],
    image: "https://media.istockphoto.com/id/1653514895/photo/offroad-pickup-truck-on-top-of-the-mountain.jpg?s=1024x1024&w=is&k=20&c=tyuHU69dWt3WM8L5k4SSpGJDsUswrTVXM4XVerpkw4M=" 
  },
  notSure: {
    text: "Is this a commuter or a joyride car?",
    choices: ["Commuter", "Joyride"],
    consequence: ["commuter", "joyride"],
    image: "https://media.istockphoto.com/id/518590341/photo/collection-of-3d-colourful-vehicles.jpg?s=1024x1024&w=is&k=20&c=RqZ_YeYM9X_8e8aZv96nQQ6IXnrr_Jzqn90RMwVvu_4="
  },

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
    text: "In that case, your best bet is an SUV! Have fun!",
    choices: [],
    consequence: [],
    image: "https://media.istockphoto.com/id/185070420/photo/family-going-on-road-trip.jpg?s=1024x1024&w=is&k=20&c=qsCOmBCaQu14hITHo0HF-32-H9qZduCbuTxiby_53O8="
  },
  tools: {
    text: "Seems like you need a truck with a toolbox",
    choices: [],
    consequence: [],
    image: "https://media.istockphoto.com/id/679914380/photo/husky-pup-in-back-of-pick-up-truck.jpg?s=1024x1024&w=is&k=20&c=omKiISGFskrE3DlGUtTc5RcHsRR5NXErze-eeLJLN1g="
  },
  hitch: {
    text: "Maybe you need a heavy duty truck?",
    choices: [],
    consequence: [],
    image: "https://media.istockphoto.com/id/155072817/photo/launching-at-boat-ramp.jpg?s=1024x1024&w=is&k=20&c=3pmsQptBgPngcdxEfPJzVptarLwkpZz1SMfIehQWTlE="
  },  
  commuter: {
      text: "A hybrid would be best for commuting. In the long run, it will save you money on gas",
      choices: [],
      consequences: [],
      image: "https://media.istockphoto.com/id/179087426/photo/electric-and-gasoline-car-concept.jpg?s=1024x1024&w=is&k=20&c=uylH-U1O9vwb1-ixaX1RPzSGVzB1PPi7_wGRMaoyzro="
  },
  joyride: {
    text: "That is an excellent choice! Consider a sports car!",
    choices: [],
    consequences: [],
    image: "https://media.istockphoto.com/id/165039802/vector/motoring-in-a-mini-convertible.jpg?s=1024x1024&w=is&k=20&c=JzsJEGg-xvxkGE4GFr10Wsfvb7XtrMF681MLyJT_Ec0="      
  }
};

let setStage = "start";

function startAdventure() {
  setStage = "start";
  updateGame();
}

function updateGame() {
  const stage = adventure[setStage];
  document.getElementById("adventure").textContent = stage.text;
  document.getElementById("adventure-image").src = stage.image;

  const choicesP = document.getElementById("choices");
  choicesP.innerHTML = "";

  if (stage.choices.length === 0) {
    const restartButton = document.createElement("button");
    restartButton.textContent = "Restart";
    restartButton.onclick = startAdventure;
    choicesP.appendChild(restartButton);
    return;
  }

  stage.choices.forEach((choice, index) => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.onclick = () => {
      setStage = stage.consequence[index];
      updateGame();
    };
    choicesP.appendChild(btn);
  });
}

document.getElementById("restart").addEventListener("click", startAdventure);
startAdventure();