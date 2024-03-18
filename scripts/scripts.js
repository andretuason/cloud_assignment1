let initialGreeting = true;
let rando = 0;
let uName = "";

function changeToRandomImage() {
	let next = 0;
	do{
		next = Math.floor(Math.random() * 4);
	} while (rando == next);
	rando = next;
    console.log("new value is " + rando);
    
    switch (rando) {
        case 0:
            imgDir = "img/welcome/hello-rand.jpg";
            break;
        case 1:
            imgDir = "img/welcome/stock-hello1.jpg";
            break;
        case 2:
            imgDir = "img/welcome/bienvenue.jpg";
            break;
        case 3:
            imgDir = "img/welcome/stock-hello2.jpg";
            break;
    }
    
  let photoElement = document.getElementById("welcomeImg");
  photoElement.src = imgDir;

}

function getVisitorName(){
    alert("Why, Hello there!");
    uName = prompt("Please enter your name");
    let nameElement = document.getElementById("name");
    nameElement.innerHTML = "<h1>Hello there " + uName + "!!</h1>";
}


function updateDateTime() {
    let now = new Date();
    let dateTimeElement = document.getElementById('date-time');
    let dateStr = now.toDateString();
    let timeStr = now.toLocaleTimeString();
    dateTimeElement.innerHTML = "Current date and time: " + dateStr + " " + timeStr;
  }

  // Update date and time every second
  setInterval(updateDateTime, 1000);

  // Initialize date and time
  updateDateTime();

function onInitialLoad(){
    if (initialGreeting){
        getVisitorName();
        changeToRandomImage();
        initialGreeting = false;
    }
}