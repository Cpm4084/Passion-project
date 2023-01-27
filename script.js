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
  constructor(name = "", attack, defence, hitPoints, critical, priority, skills, image) {
  this.name = name
  this.attack = attack
  this.defence = defence
  this.hitPoints = hitPoints
  this.critical = critical
  this.priority = priority
  this.skills = []
  this.image = image
  }

  attack(otherCreature) {
    if (this.skills.includes('peirce') && otherCreature.skills.includes('shield')){
      otherCreature.hitPoint -= 10;
    }
    
  }
}

let creature1 = new creature("creature1", 100, 150, 200, 30, 100, ['sheild', 'heal'], null)
let creature2 = new creature("creature2", 150, 100, 100, 130, 20, ['peirce'], null)
let creature3 = new creature("creature3", 50, 50, 400, 60, 50, ['sheild', 'heal'], null)
let creature4 = new creature("creature4", 120, 120, 120, 120, 50 ['peirce', 'sheild', 'heal'], null)
let otherCreature1 = new creature("otherCreature1", 100, 150, 200, 30, 100, ['sheild', 'heal'], null)
let otherCreature2 = new creature("otherCreature2", 150, 100, 100, 130, 20, ['peirce'], null)
let otherCreature3 = new creature("otherCreature3", 50, 50, 400, 60, 50 ['sheild', 'heal'], null)
let otherCreature4 = new creature("otherCreature4", 120, 120, 120, 120, 50 ['peirce', 'sheild', 'heal'], null)

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
}

let creaturesDefined = false;
let screen = 0;

function draw() {
  background(200)
    switch (screen) {
      case 0:
        startingScreen()
      case 1:
        battleScreen()
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
    curCreature = creature1
    otherCreature = random([otherCreature1, otherCreature2, otherCreature3, otherCreature4])
		hideButtons();
  });
  creature2Button.mousePressed(() => {
    screen = 1
    curCreature = creature2
    otherCreature = random([otherCreature1, otherCreature2, otherCreature3, otherCreature4])
		hideButtons();
  });
  creature3Button.mousePressed(() => {
    screen = 1
    curCreature = creature3
    otherCreature = random([otherCreature1, otherCreature2, otherCreature3, otherCreature4])
		hideButtons();
  });
  creature4Button.mousePressed(() => {
    screen = 1
    curCreature = creature4
    otherCreature = random([otherCreature1, otherCreature2, otherCreature3, otherCreature4])
		hideButtons();
  });
}

function battleScreen() {
  text(curCreature, 100, 100)
  text(otherCreature, width - 100, 100)
}

function hideButtons() {
  creature1Button.hide;
  creature2Button.hide;
  creature3Button.hide;
  creature4Button.hide;
}