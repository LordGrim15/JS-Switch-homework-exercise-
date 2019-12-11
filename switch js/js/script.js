let Rat = "Rat";
let Ox = "Ox";
let Tiger = "Tiger";
let Rabbit = "Rabbit";
let Dragon = "Dragon";
let Snake = "Snake";
let Horse = "Horse";
let Goat = "Goat";
let Monkey = "Monkey";
let Rooster = "Rooster";
let Dog = "Dog";
let Pig = "Pig";
let input = prompt("Please input your birth year: ");
let birthYear = parseInt(input);
let result = (birthYear - 4) % 12;

switch (result) {
  case 0:
    Rat = alert(`Your Chinese zodiac is: ${Rat}`);
    break;
  case 1:
    Ox = alert(`Your Chinese zodiac is: ${Ox}`);
    break;
  case 2:
    Tiger = alert(`Your Chinese zodiac is: ${Tiger}`);
    break;
  case 3:
    Rabbit = alert(`Your Chinese zodiac is: ${Rabbit}`);
    break;
  case 4:
    Dragon = alert(`Your Chinese zodiac is: ${Dragon}`);
    break;
  case 5:
    Snake = alert(`Your Chinese zodiac is: ${Snake}`);
    break;
  case 6:
    Horse = alert(`Your Chinese zodiac is: ${Horse}`);
    break;
  case 7:
    Goat = alert(`Your Chinese zodiac is: ${Goat}`);
    break;
  case 8:
    Monkey = alert(`Your Chinese zodiac is: ${Monkey}`);
    break;
  case 9:
    Rooster = alert(`Your Chinese zodiac is: ${Rooster}`);
    break;
  case 10:
    Dog = alert(`Your Chinese zodiac is: ${Dog}`);
    break;
  case 11:
    Pig = alert(`Your Chinese zodiac is: ${Pig}`);
    break;
  default:
    break;
}
