class NPC {
  constructor(name = "", dialogue, NPCreward, x, y) {
  this.name = name
  this.dialogue = dialogue
  this.NPCreward = NPCreward
  this.x = x
  this.y = y
  }
}

let sheildStrength = 0;

class creature {
  constructor(name = "", attack, defence, hitPoints, critical, skills = [], image) {
  this.name = name
  this.attack = attack
  this.defence = defence
  this.hitPoints = hitPoints
  this.critical = critical
  this.skills = skills
  this.image = image
  }
  
  attack() {
  if (curCreature == creature1 && otherCreature == otherCreature1) {
    if (otherCreature1.skills.includes(sheild) && !creature1.skills.includes(peirce)) {
      sheildStrength = 20;
    } else {
      sheildStrength = 0;
    }
    
    otherCreature1.hitPoints -= (creature1.attack / (otherCreature1.defense / 100) - sheildStrength)
    
  if (otherCreature1.skills.includes(heal)) {
    otherCreature1.hitPoints += 10
   
    if (creature1.skills.includes(sheild) && !otherCreature1.skills.includes(peirce)) {
      sheildStrength = 20;
    } else {
      sheildStrength = 0;
    }
    
    creature1.hitPoints -= (otherCreature1.attack / (creature1.defense / 100) - sheildStrength)
    
  if (creature1.skills.includes(heal)) {
    creature1.hitPoints += 10
  }
  }
  }
}
}

class encounterTable {
  constructor(creatures, chance) {
  this.creatures = creatures
  this.chance = chance
  }
}

class trainer {
  constructor(creatures, reward, beforeDialogue, afterDialogue) {
  this.creatures = creatures
  this.rewards = rewards
  this.beforeDialogue = beforeDialogue
  this.afterDialogue = afterDialogue
  }
}

let creature1;
let creature2;
let creature3;
let creature4;
let otherCreature1;
let otherCreature2;
let otherCreature3;
let otherCreature4;

function setup() {
createCanvas(500, 500);
  background(255);
  frameRate(20);
  creature1 = new creature("creature1", 100, 150, 200, 100, ['sheild', 'heal'], null)
  creature2 = new creature("creature2", 150, 100, 100, 20, ['peirce'], null)
  creature3 = new creature("creature3", 50, 75, 400, 50, ['sheild', 'heal'], null)
  creature4 = new creature("creature4", 120, 120, 120, 50 ['peirce', 'sheild', 'heal'], null)
  otherCreature1 = new creature("otherCreature1", 100, 150, 200, 100, ['sheild', 'heal'], null)
  otherCreature2 = new creature("otherCreature2", 150, 100, 100, 20, ['peirce'], null)
  otherCreature3 = new creature("otherCreature3", 75, 50, 400, 50 ['sheild', 'heal'], null)
  otherCreature4 = new creature("otherCreature4", 120, 120, 120, 50 ['peirce', 'sheild', 'heal'], null)
}

let creaturesDefined = false;
let screen = 0;

function draw() {
  background(200)
    switch (screen) {
      case 0:
        startingScreen();
        break;
      case 1:
        battleScreen();
        break;
    }
}

let creature1Button;
let creature2Button;
let creature3Button;
let creature4Button;

function sendOutCreature() {
  textAlign(CENTER);
  for(let i = 0; i < 4; i++) {
    switch (i) {
      case 0:
        creature1Button = createButton('creature 1');
        creature1Button.position(width / 2 - 15, height / 2 - 30)
        break;
      case 1:
        creature2Button = createButton('creature 2');
        creature2Button.position(width / 2 - 15, height / 2 - 10)
        break;
      case 2:
        creature3Button = createButton('creature 3');
        creature3Button.position(width / 2 - 15, height / 2 + 10)
        break;
      case 3:
        creature4Button = createButton('creature 4');
        creature4Button.position(width / 2 - 15, height / 2 + 30)
        break;
    }
    print("hi")
    creaturesDefined = true;
  }
}

let curCreature;
let otherCreature;

function startingScreen() {
  textSize(20)
  textAlign(CENTER)
  text("Choose your creature", width / 2, height / 2 - 70)
  if (creaturesDefined == false) {
    sendOutCreature()
    }
  creature1Button.mousePressed(() => {
    screen = 1
    curCreature = creature1;
    otherCreature = otherCreature1 //random([otherCreature1, otherCreature2, otherCreature3, otherCreature4])
		hideButtons();
  });
  creature2Button.mousePressed(() => {
    screen = 1
    curCreature = creature2;
    otherCreatureName = random([otherCreature1, otherCreature2, otherCreature3, otherCreature4])
		hideButtons();
  });
  creature3Button.mousePressed(() => {
    screen = 1
    curCreature = creature3;
    otherCreatureName = random([otherCreature1, otherCreature2, otherCreature3, otherCreature4])
		hideButtons();
  });
  creature4Button.mousePressed(() => {
    screen = 1
    curCreature = creature4;
    otherCreatureName = random([otherCreature1, otherCreature2, otherCreature3, otherCreature4])
		hideButtons();
  });
}

let attackButton;
let switchButton;
let statsButton;

function battleScreen() {
  if (curCreature == creature1) {
    textSize(15)
   text("creature1 hitpoints = " + creature1.hitPoints, 100, 200)
    textSize(20)
    text("creature1", 100, 100);
  }
  if (curCreature == creature2) {
    textSize(15)
   text("creature2 hitpoints = " + creature2.hitPoints, 100, 200)
  
    textSize(20)
   text("creature2", 100, 100);
  }
  if (curCreature == creature3) {
    textSize(15)
   text("creature3 hitpoints = " + creature3.hitPoints, 100, 200) 
    textSize(20)
    text("creature3", 100, 100);
  }
  if (curCreature == creature4) {
    textSize(15);
   text("creature4 hitpoints = " + creature4.hitPoints, 100, 200) 
    textSize(20)
    text("creature4", 100, 100);
  }
  if (otherCreature == otherCreature1) {
    textSize(15)
   text("otherCreature1 hitpoints = " + otherCreature1.hitPoints, width - 100, 200) 
    textSize(20)
    text("otherCreature1", width - 100, 100);
  }
  if (otherCreature == otherCreature2) {
    textSize(15)
   text("otherCreature2 hitpoints = " + otherCreature2.hitPoints, width - 100, 200) 
      textSize(20)
    text("otherCreature2", width - 100, 100);
  }
  if (otherCreature == otherCreature3) {
    textSize(15)
   text("otherCreature3 hitpoints = " + otherCreature3.hitPoints, width - 100, 200) 
      textSize(20)
    text("otherCreature3", width - 100, 100);
  }
  if (otherCreature == otherCreature4) {
    textSize(15)
   text("otherCreature4 hitpoints = " + otherCreature4.hitPoints, width - 100, 200); 
      textSize(20)
    text("otherCreature4", width - 100, 100);
  }
  
  attackButton = createButton('Attack');
  attackButton.position(width * 0.25, 400);
  switchButton = createButton('Switch');
  switchButton.position(width * 0.50, 400);
  statsButton = createButton('Your Creature Stats');
  statsButton.position(width * 0.70, 400);
  
  attackButton.mousePressed(() => {
    creature.attack();
  });
}

function hideButtons() {
  creature1Button.hide();
  creature2Button.hide();
  creature3Button.hide();
  creature4Button.hide();
}