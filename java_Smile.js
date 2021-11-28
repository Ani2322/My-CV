var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var radius = 14;
var eyeRadius = 2;
var eyeXOffset = 5;
var eyeYOffset = 4;

//draw yellow circle
context.beginPath();
context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
context.fillStyle = 'yellow';
context.fill();
context.lineWidth = 1;
context.strokeStyle = 'black';
context.stroke();
  
// draw black eyes
context.beginPath();
var eyeX = centerX - eyeXOffset;
var eyeY = centerY - eyeXOffset;
context.arc(eyeX, eyeY, eyeRadius, 0, 2 * Math.PI, false);
var eyeX = centerX + eyeXOffset;
context.arc(eyeX, eyeY, eyeRadius, 0, 2 * Math.PI, false);
context.fillStyle = 'black';
context.fill();

// deraw mouth
context.beginPath();
context.arc(centerX, centerY, 10, 0, Math.PI, false);
context.stroke();