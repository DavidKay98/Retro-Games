alert("Welcome to retro games!");

window.onload = (event) => {
  imageAvatar.style.backgroundImage = "url('Avatar/Question Mark.png')";
  imageWeapon.style.backgroundImage = "url('Avatar/Question Mark.png')";
  imageElement.style.backgroundImage = "url('Avatar/Question Mark.png')";
  imageBuild.style.backgroundImage = "url('Avatar/Question Mark.png')";
};

//Avatar constants, events and functions
let avatar = document.querySelector('#avatar');
let imageAvatar = document.querySelector('#image-avatar');
imageAvatar.style.backgroundRepeat = "no-repeat";
avatar.addEventListener('change', avatars);

function avatars(){
  let choice = avatar.value;

  if(choice === 'chara'){
    imageAvatar.style.backgroundImage = "url('Avatar/Chara.png')";
    
  }
  else if(choice === 'flappy-bird'){
    imageAvatar.style.backgroundImage = "url('Avatar/Flappy Bird.png')";
  }
  else if(choice === 'mario'){
    imageAvatar.style.backgroundImage = "url('Avatar/Mario.png')";
  }
  else if(choice === 'nyan-cat'){
    imageAvatar.style.backgroundImage = "url('Avatar/Nyan Cat.png')";
  }
  else {
    imageAvatar.style.backgroundImage = "url('Avatar/Question Mark.png')";
  }
  
  console.log(`Avatar: ${avatar.value}`)
  funcLocal("AvatarImage", avatar.value);

  //console.log(localStorage.getItem("AvatarImage"));
  avatar.value = "";
  event.preventDefault();

  //localStorage: Stores avatar name to local storage upon saving
form.addEventListener("submit", avatars);

//localStorage: Retrieve avatar name from local storage to 'player name' field
document.querySelector("#avatar").value = localStorage.getItem("AvatarImage");
}

//Weapon constants, events and functions
let weapon = document.querySelector('#weapon');
let imageWeapon = document.querySelector('#image-weapon');
imageWeapon.style.backgroundRepeat = "no-repeat";
weapon.addEventListener('change', weapons);

function weapons(){
  let choice = weapon.value;

  if(choice === 'sword'){
    imageWeapon.style.backgroundImage = "url('Weapon/Sword.png')";
  }
  else if(choice === 'axe'){
      imageWeapon.style.backgroundImage = "url('Weapon/Axe.png')";
  }
  else if(choice === 'hammer'){
      imageWeapon.style.backgroundImage = "url('Weapon/Hammer.png')";
  }
  else if(choice === 'bow'){
      imageWeapon.style.backgroundImage = "url('Weapon/Bow + Arrow.png')";
  }
  else {
    imageWeapon.style.backgroundImage = "url('Avatar/Question Mark.png')";
  }
  
  console.log(`Weapon: ${weapon.value}`)
  funcLocal("WeaponImage", weapon.value);

  //console.log(localStorage.getItem("WeaponImage"));
  weapon.value = "";
  event.preventDefault();

  //localStorage: Stores weapon name to local storage upon saving
form.addEventListener("submit", weapons);

//localStorage: Retrieve weapon name from local storage to 'weapon name' field
document.querySelector("#weapon").value = localStorage.getItem("WeaponImage");
}

//Element constants, events and functions
let element = document.querySelector('#element');
let imageElement = document.querySelector('#image-element');
imageElement.style.backgroundRepeat = "no-repeat";
element.addEventListener('change', elements);

function elements(){
  let choice = element.value;

  if(choice === 'fire'){
    imageElement.style.backgroundImage = "url('Element/Fire.png')";
  }
  else if(choice === 'water'){
    imageElement.style.backgroundImage = "url('Element/Water.png')";
  }
  else if(choice === 'earth'){
    imageElement.style.backgroundImage = "url('Element/Earth.png')";
  }
  else if(choice === 'wind'){
    imageElement.style.backgroundImage = "url('Element/Wind.png')";
  }
  else {
    imageElement.style.backgroundImage = "url('Avatar/Question Mark.png')";
  }

  console.log(`Element: ${element.value}`)
  funcLocal("ElementImage", element.value);

  //console.log(localStorage.getItem("ElementImage"));
  element.value = "";
  event.preventDefault();

  //localStorage: Stores element name to local storage upon saving
form.addEventListener("submit", elements);

//localStorage: Retrieve element name from local storage to 'element name' field
document.querySelector("#element").value = localStorage.getItem("ElementImage");


}

//Build constants, events and functions
let build = document.querySelector('#build');
let imageBuild = document.querySelector('#image-build');
imageBuild.style.backgroundRepeat = "no-repeat";
build.addEventListener('change', builds);

function builds(){
  let choice = build.value;

  if(choice === 'warrior'){
    imageBuild.style.backgroundImage = "url('Build/Warrior.png')";
  }
  else if(choice === 'mage'){
    imageBuild.style.backgroundImage = "url('Build/Mage.png')";
  }
  else if(choice === 'healer'){
    imageBuild.style.backgroundImage = "url('Build/Healer.png')";
  }
  else if(choice === 'thief'){
    imageBuild.style.backgroundImage = "url('Build/Thief.png')";
  }
  else {
    imageBuild.style.backgroundImage = "url('Avatar/Question Mark.png')";
  }

  console.log(`Build: ${build.value}`)
  funcLocal("BuildImage", build.value);

  //console.log(localStorage.getItem("buildImage"));
  build.value = "";
  event.preventDefault();

  //localStorage: Stores build name to local storage upon saving
form.addEventListener("submit", builds);

//localStorage: Retrieve build name from local storage to 'build name' field
document.querySelector("#build").value = localStorage.getItem("BuildImage");
}

// Console log build name with submit button
const form = document.querySelector("#form");
const log = document.querySelector("#log")

form.addEventListener("submit", logSubmit);

function logSubmit(event){
  log.textContent = `Character selection saved! Good for you ${playerName.value}`;
  event.preventDefault();
}

// Console log the player name
const playerName = document.querySelector("#name");
playerName.addEventListener("keyup", (event) => {console.log(event.key);});

//Focused event listener for name
playerName.addEventListener("focus", () => {console.log("Focused");});

//Blurred event listener for name
playerName.addEventListener("blur", () => {console.log("Blurred");});

// localStorage: reusable save to local storage function
funcLocal = (x, y) => localStorage.setItem(x, y);

//Player name local storage
//Function part 1: localStorage: Store player name to local storage
let saveName = (e) => {
  console.log(`Event: ${e.type}`);
  console.log("Player Name: ", playerName.value);
  funcLocal("LocalText", playerName.value);

//Function part 2: localStorage: Retrieve player name from local storage
console.log(localStorage.getItem("LocalText"));
playerName.value = "";
e.preventDefault();
}
//localStorage: Stores player name to local storage upon saving
form.addEventListener("submit", saveName);

//localStorage: Retrieve player name from local storage to 'player name' field
document.querySelector("#name").value = localStorage.getItem("LocalText");