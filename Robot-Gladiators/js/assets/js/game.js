let playerName = window.prompt("What is your robot's name?");
console.log(playerName)
let playerHealth = 100;
let playerAttack =10;

let enemyName = "Roborto";
let enemyHealth = 50;
let enemyAttack =12;

function fight(){

window.alert("Welcome to robot Gladiator");

playerHealth = playerHealth-enemyAttack;
console.log(`${enemyName} attacked ${playerName}. ${playerName} now has ${playerHealth} health remaining`);

console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
  );
  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  } 
  else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }
  
  // check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
  } 
  else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }

  
}
fight();

enemyHealth = enemyHealth - playerAttack;
console.log(enemyHealth);

if (playerHealth > 0){
    console.log("your player is still alive");
}
else{
    console.log("this will run instead");
}
