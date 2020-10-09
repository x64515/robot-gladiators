// // console.log(playerName)
let playerName = window.prompt("What is your robot's name?");
let playerHealth = 100;
let playerAttack =10;
let playerMoney = 10;

let enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
let enemyHealth = 50;
let enemyAttack =12;

let fight = enemyName=>{

window.alert("Welcome to robot Gladiator");
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
   if (promptFight === "fight" || promptFight === "FIGHT") {
  // remove enemy's health by subtracting the amount set in the playerAttack variable
   enemyHealth = enemyHealth - playerAttack;
   console.log(
     playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + "  health remaining."
   );

   // check enemy's health
  if (enemyHealth <= 0) {
     window.alert(enemyName + " has died!");
   } else {
     window.alert(enemyName + " still has " + enemyHealth + " health left.");
   }
 
  // remove player's health by subtracting the amount set in the enemyAttack variable
   playerHealth = playerHealth - enemyAttack;
   console.log(
     enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + "  health remaining."
  );

  // check player's health
   if (playerHealth <= 0) {
     window.alert(playerName + " has died!");
   } else {
     window.alert(playerName + " still has " + playerHealth + " health left.");
   }
  // if player choses to skip
   }
    else if (promptFight === "skip" || promptFight === "SKIP") {
     window.alert(playerName + " has chosen to skip the fight!");
   } 
    else {
     window.alert("You need to pick a valid option. Try again!");
}
 playerHealth = playerHealth-enemyAttack;
 console.log(`${enemyName} attacked ${playerName}. ${playerName} now has ${playerHealth} health  remaining`);

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
for( let i=0; i< enemyNames.length; i++){
  fight(enemyNames[i]);
}
enemyHealth = enemyHealth - playerAttack;
console.log(enemyHealth);

if (playerHealth > 0){
    console.log("your player is still alive");
}
 else{
    console.log("this will run instead");
}