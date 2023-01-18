class creature {
  constructor(name, level, attack, defence, hitPoints, priority, skills, image)
  this.name = name
  this.level = level
  this.attack = attack
  this.defence = defence
  this.hitPoints = hitPoints
  this.priority = priority
  this.skills = skills
  this.image = image
}

class location {
  constructor()
}

class encounterTable {
  constructor()
}

class trainer {
  constructor(creatures, reward, beforeDialogue, afterDialogue)
  this.creatures = creatures
  this.rewards = rewards
  this.beforeDialogue = beforeDialogue
  this.afterDialogue = afterDialogue
}
  
function setup() {
createCanvas(500, 500);
  background(255);
  framerate(20);
}

function draw() {

}