// var vardas = prompt ('Iveskite varda:');
// var pavarde = prompt ('Iveskite pavarde:');
// function taisykla (vardasT, pavardeT) {   
//     var vardasTs = vardasT.toUpperCase().slice(0,1)+vardasT.toLowerCase().slice(1);
//     var pavardeTs = pavardeT.toUpperCase().slice(0,1)+pavardeT.toLowerCase().slice(1);
//     var istaisyta = vardasTs +' '+ pavardeTs;
//     return istaisyta;
// }
// taisykla (vardas, pavarde);



// var pinigai = prompt ('iveskite kiek turite pinigu');
// var kaina = prompt ('iveskite butelio kaina');
// if (kaina > pinigai){
//     alert ('neiperki lopas');
// } else {
// function skaiciuokle(saskaita, butelioKaina) {   
//   var buteliai = Math.floor(saskaita/butelioKaina);
//     console.log ('Jus nupirkote '+ Math.floor(saskaita/butelioKaina)+' buteliu');
//   return saskaita % butelioKaina; //likusieji pinigai
  
// }}
// var graza = skaiciuokle (pinigai, kaina);
// console.log ('liko '  + graza + ' euru grazos');





// var skc = Math.random();
// skc = Math.floor(skc*100)+1;
// if (skc >= 80){
//     console.log (skc + '% OHO');
// } if (skc > 50 && skc <= 80) {
//     console.log (skc + '% nekazka');
// } if (skc < 50) {
//     console.log (skc + '% nu labai blogai');
// }




// function bmiCalculator (weight, height) {   
//   var bmi = Math.round(weight/Math.pow(height, 2));
//     if (bmi<18.5){
//     return ('Your BMI is ' + bmi + ', so you are underweight.');    
//     }
//     if (bmi > 18.5 && bmi < 24.9){
//     return ('Your BMI is ' + bmi + ', so you have a normal weight.');    
//     }
//     if (bmi >24.9){
//     return ('Your BMI is ' + bmi + ', so you are overweight.');    
//     }




// var svecias = prompt ("iveskite savo varda");
// var guestList = ["Jonas", "Petras", "Antanas", "Maiklas"];
//     if (guestList.includes (svecias)) {
//        alert ("sveiki atvyke"); 
//     }   else  {
//         alert ("Gal geriau varyk is cia apsimeteli");
//     }





// function isLeap(year) {
//     if (year % 4 === 0){
//         if (year % 100 === 0){
//            if (year % 400 === 0){
//                return ('Leap year.')
//            } else {
//                return ('Not leap year.')
//            }
//         } else {
//             return ('Leap year.')
//         }
//     } else {
//         return ('Not leap year.');
//     }
// }
// isLeap (2001);




// for (var i = 1; i < 101; i++) {
//     if (i%3===0){
//         if (i%5===0){
//             if (i%3=0 && i%5===0){
//                 console.log (fizzbuzz);
//             } else {
//             console.log (i);
//             }
//             console.log (Buzz);
//             } else {    
//             console.log (i);
//             }
//        console.log (Fizz);{
//         else   
//        }
//      console.log (i);
//     }
// }




// for (var i = 1; i < 101; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log ('FizzBuzz');
//     }
//     else if (i % 3 === 0) {
//         console.log ('Fizz');
//     }
//     else if (i % 5 === 0) {
//         console.log ('buzz');
//     }
//     else {
//         console.log (i);
//     }          
// }




// var output = [];
// var count = 1;
// function fizzBuzz (){
//      if (count % 3 === 0 && count % 5 === 0) {
//         output.push ('FizzBuzz');
//     }
//     else if (count % 3 === 0) {
//         output.push ('Fizz');
//     }
//     else if (count % 5 === 0) {
//         output.push ('buzz');
//     }
//     else {
//         output.push (count);
//     }          
//     count ++;
//     console.log (output);
//     }

// var duhai = ["Martynas", "Augustinas", "Vagnoris", "Justinas"];
// var duhelis = prompt ('Ar tu esi DUHAS?\nIvesk savo vardą ir sužinosi!');
// function duhumas(duhelis){
//     if (duhelis = duhai.includes(duhelis)){
//         alert ("Taip tu esi duhas");
// } else {
//     alert ("Ne tu ne duhas");
// }
// }
// duhumas (duhelis);


// var names = ["suris", "suopis", "gaidis", "krapas", "kugelis"]
// function whosPaying(names) {
//     var numberOfPeople = names.length;
//     var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
//     var randomPerson = names[randomPersonPosition];
//     console.log (randomPerson + ' is going to buy lunch today!');
// }
// whosPaying(names);

// var output = [];
// var count = 1;
// function fizzBuzz (){
//     while (count <= 100){
//     if (count % 3 === 0 && count % 5 === 0) {
//         output.push ('FizzBuzz');
//     }
//     else if (count % 3 === 0) {
//         output.push ('Fizz');
//     }
//     else if (count % 5 === 0) {
//         output.push ('buzz');
//     }
//     else {
//         output.push (count);
//     }          
//     count ++;
//     }
//     console.log (output);
//     }




// var output = [];

// function fizzBuzz (){
//     for (var count=1; count < 101; count++){
//     if (count % 3 === 0 && count % 5 === 0) {
//         output.push ('FizzBuzz');
//     }
//     else if (count % 3 === 0) {
//         output.push ('Fizz');
//     }
//     else if (count % 5 === 0) {
//         output.push ('buzz');
//     }
//     else {
//         output.push (count);
//     }          
    
//     }
//     console.log (output);
//     }



var count = 1;
function bottles (){
    while (count <= 100){
    var count2 = 100-count;
    var count3 = 99-count;
        if (count2 >=1){
        console.log (count2 + " bottle of beer on the wall, " + count2 + " bottle of beer.");
        } else {
         console.log ("No more bottles of beer on the wall, no more bottles of beer.");        
        }
        if (count3 === 0){
        console.log ("Take one down and pass it around, no more bottles of beer on the wall.");
        } else if (count3 >= 0){
        console.log ("Take one down and pass it around, " + count3 + " bottles of beer.");    
        } else {
        console.log ("Go to the store and buy some more, 99 bottles of beer on the wall..");    
        }
    count ++;
    }
}
bottles (count)