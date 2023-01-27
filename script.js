class NPC {
  constructor(name = "", dialogue, NPCreward, x, y) {
  this.name = name
  this.dialogue = dialogue
  this.NPCreward = NPCreward
  this.x = x
  this.y = y
  }
}

class creature {
  constructor(name = "", attack, defence, hitPoints, priority, skills, image) {
  this.name = name
  this.attack = attack
  this.defence = defence
  this.hitPoints = hitPoints
  this.priority = priority
  this.skills = skills
  this.image = image
  }

  attack(otherCreature) {
    if (this.skills.includes('hammer') && !otherCreature.skills.includes('shield')){
      otherCreature.hitPoint -= 10;
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
  
function setup() {
createCanvas(500, 500);
  background(255);
  frameRate(20);
  new creature("creature1", 100, 150, 200, 30, [sheild, heal], null)
  new creature("creature2", 150, 100, 100, 130, [peirce], null)
  new creature("creature3", 50, 50, 400, 60, [sheild, heal], null)
  new creature("creature4", 120, 120, 120, 120, [peirce, sheild, heal], null)
}

let creaturesDefined = false;
let screen = 0;

function draw() {
  background(200)
    switch (screen) {
      case 0:
        startingScreen()
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

function startingScreen() {
  textSize(20)
  textAlign(CENTER)
  text("Choose your creature", width / 2, height / 2 - 70)
  if (creaturesDefined == false) {
    sendOutCreature()
    }
  creature1Button.mousePressed(() => {
    screen = 1
    curCreature = creature1
		hideButtons();
  });
}