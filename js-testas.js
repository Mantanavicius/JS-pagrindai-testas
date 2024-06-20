/*
1. Sukurkite funkciją, kuri paverstų eurus į dolerius.
Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
doleriais.
*/
let eurAmount = Math.floor(Math.random() * 1000 + 1);
function convertToUSD(eur) {
  let exchangeRate = 1.07;
  return `${(eur * exchangeRate).toFixed(2)} USD`;
}
console.log(convertToUSD(eurAmount));
/*
2. Sukurkite funkciją, kuri paverstų dolerius į eurus.
Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
eurais.
*/
let usdAmount = Math.floor(Math.random() * 1000 + 1);
function convertToEUR(usd) {
  let exchangeRate = 1.07;
  return `${(usd / exchangeRate).toFixed(2)} EUR`;
}
console.log(convertToEUR(usdAmount));

/*
3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
mass index), kai yra žinomas žmogaus ūgis ir svoris. 
BMI formulė: žmogaus svoris (kg) padalintas iš ūgio metrais kvadratu. 
Pvz. svoris = 80kg, ūgis = 1.8 m. 
BMI = 80 / 1.8**2 = 24.69
Viršsvoris = BMI > 25
Normalu = 18.5 <= BMI < 25
Per mažas svoris = BMI < 18.5
*/
// BMI = 25 niekur nepriskirtas pagal sąlygą, todėl jį priskiriu prie viršsvorio.
function calcBMI(height, weight) {
  let bmi = (weight / height ** 2).toFixed(2);
  if (bmi >= 25) {
    return `Jūsų KMI - ${bmi}. Turite viršsvorio`;
  } else if (18.5 <= bmi < 25) {
    return `Jūsų KMI - ${bmi}. Svoris yra normalus`;
  } else {
    return `Jūsų KMI - ${bmi}. Svoris yra per mažas`;
  }
}
console.log(calcBMI(1.84, 84));
/*
4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais
pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
dienomis.
*/
function yearInDifferentUnits(years) {
  let days = years * 365;
  let hours = days * 24;
  let minutes = hours * 60;
  let seconds = minutes * 60;
  return `${years} metai(-ų) yra:
sekundėmis - ${seconds} 
minutėmis - ${minutes}
valandomis - ${hours}
dienomis - ${days}`;
}
console.log(yearInDifferentUnits(10));
/*
5. Parašykite programą, kuri konvertuos termometro
duomenis iš Farenheito į Celsijų, ir atvirkščiai.
*/
function fareinheitToCelcius(degrees) {
  return `${(((degrees - 32) * 5) / 9).toFixed(2)} °C`;
}
console.log(fareinheitToCelcius(100));
/*
6. Sukurkite kodą, kuris išspausdins į konsolę
1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
dešimties neturėtų būti brūkšniuko.
*/
function lineOfNumbers() {
  let nums = [];
  for (let i = 1; i <= 10; i++) {
    nums.push(i);
  }
  return nums.join("-");
}
console.log(lineOfNumbers());

/*
7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
*
**
***
****
*****
*/
function starStairs() {
  let line = "";
  for (let i = 1; i <= 5; i++) {
    line += "*";
    console.log(line);
  }
}
starStairs();
/*
8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.
*/
function daysTillChristmas() {
  let dabar = new Date();
  let kaledos = new Date(2024, 11, 25);
  let dayMs = 1000 * 60 * 60 * 24;
  console.log(
    `Iki Kalėdų liko: ${Math.ceil((kaledos - dabar) / dayMs)} dienos(-ų)`
  );
}
daysTillChristmas();
/*
9. Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas
*/
function singleLine(arr) {
  return `${arr.join(",")}\n${arr.join("+")}`;
}
console.log(singleLine(["Tomas", "Dainius", "Paulius", "Jonas"]));
/*
10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
*/
function passwordGenerator() {
  let password = [];
  let possibleChars = [
    "0123456789",
    "abcdefghijklmnopqrstuvwxyz",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "`~!@#$%^&*()_-+={}[]|:;'\",<.>/?",
  ];
  for (let i = 0; i < possibleChars.length; i++) {
    let charSet = possibleChars[i];
    password.push(charSet[Math.floor(Math.random() * charSet.length)]);
  }

  for (let i = password.length; i < 12; i++) {
    let randomCharSet =
      possibleChars[Math.floor(Math.random() * possibleChars.length)];
    password.push(
      randomCharSet[Math.floor(Math.random() * randomCharSet.length)]
    );
  }
  password = password.sort(() => Math.random() - 0.5);
  password = password.join("");
  console.log(password);
}
passwordGenerator();
