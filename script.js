function draw() {
  var canvas = document.getElementById('Header');

  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
  }
}

function draw() {
  var canvas = document.getElementById('Abaut');

  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
  }
}

function draw() {
  var canvas = document.getElementById('Education');

  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
  }
}

function draw() {
  var canvas = document.getElementById('Languages');

  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
  }
}

function draw() {
  var canvas = document.getElementById('Skills');

  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
  }
}

function draw() {
  var canvas = document.getElementById('Contacts');

  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
  }
}

window.onload = function() {
  //Header
  var c = document.getElementById("Header");
  var ctx = c.getContext("2d");
  var img = document.getElementById("photo");
  ctx.drawImage(img, 0, 0);
  ctx.font = "bold 42px Arial";
  ctx.textAlign = "center";
  ctx.fillStyle = "white";
  ctx.fillText("Моето CV", 600, 150);

  ctx.font = "bold 28px Ariel";
  ctx.fillSyle = "white";
  var title = "Йоана Иванова Коева";
  ctx.fillText(title, 1050, 310);

  ctx.font = "bold 28px Ariel";
  ctx.fillSyle = "white";
  var design = "Web designer and Photograph";
  ctx.fillText(design, 1050, 350);

  //About
  var canvas = document.getElementById("About");
  var ctx = canvas.getContext("2d");
  var img = document.getElementById("about");
  ctx.drawImage(img, 10, 10);

  ctx.font = "bold 30px Ariel";
  var title = "Лична информация";
  ctx.fillText(title, 500, 30);

  ctx.font = "normal 20px Ariel";
  var name = "Име: Йоана";
  var surname = "Презиме: Иванова";
  var lastname ="Фамилия: Коева";
  var city = "Град: Габрово";
  
  ctx.fillText(name, 300, 100);
  ctx.fillText(surname, 300, 140);
  ctx.fillText(lastname, 300, 180);
  ctx.fillText(city, 300, 220);

  //Education
  var canvas = document.getElementById("Education");
  var ctx = canvas.getContext("2d");
  var img = document.getElementById("edu");
  ctx.drawImage(img, 10, 10);
  
  ctx.font = "bold 30px Ariel";
  var title = "Образование";
  ctx.fillText(title, 550, 30);

  ctx.font = "normal 20px Ariel";
  var university = "Технически университет Габрово";
  var katedra ="Катедра: КСТ, 2ри курс";
  var specialization = "Специалност: Софтуерно и компютърно инжинерство";
  
  ctx.font = "20px Arial"; 
  ctx.fillText(university, 300, 100);
  ctx.fillText(katedra, 300, 140);
  ctx.fillText(specialization, 300, 180);

//Languages
  var canvas = document.getElementById("Languages");
  var ctx = canvas.getContext("2d");
  var img = document.getElementById("lang");
  ctx.drawImage(img, 10, 10);
  
  ctx.font = "bold 30px Ariel";
  var title = "Езици";
  ctx.fillText(title, 550, 30);

  ctx.font = "normal 20px Ariel";
  var language = "Език: Английски";
  var speak ="Говорене: Добре";
  var understand = "Разбиране: Добре";
  var write = "Писане: Добре";
  
  ctx.font = "20px Arial"; 
  ctx.fillText(language, 300, 100);
  ctx.fillText(speak, 300, 140);
  ctx.fillText(understand, 300, 180);
  ctx.fillText(write, 300, 220);

  //Skills
  var canvas = document.getElementById("Skills");
  var ctx = canvas.getContext("2d");
  var img = document.getElementById("skills");
  ctx.drawImage(img, 10, 10);

  ctx.font = "bold 30px Ariel";
  var title = "Компютърни умения";
  ctx.fillText(title, 550, 30);

  ctx.font = "normal 20px Ariel";
  var data = "Бази данни";
  var program ="Програмиране на С";
  var programing = "Програмиране на С++";
  var web = "HTML, CSS, Java Script";
  
  ctx.font = "20px Arial"; 
  ctx.fillText(data, 300, 100);
  ctx.fillText(program, 300, 140);
  ctx.fillText(programing, 300, 180);
  ctx.fillText(web, 300, 220);
  
  //Contacts
  var canvas = document.getElementById("Contact");
  var ctx = canvas.getContext("2d");
  var img = document.getElementById("contact");
  ctx.drawImage(img, 10, 10);

  ctx.font = "bold 30px Ariel";
  var title = "За контакти";
  ctx.fillText(title, 550, 30);

  ctx.font = "normal 20px Ariel";
  var еmail = "ioanakoewa@abv.bg"; 
  ctx.fillText(еmail, 300, 100);
}
