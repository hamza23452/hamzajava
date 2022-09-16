
//CHAPTER NO 31- TO 34 ////////////////////////////

//ASSIGNMENT START//////


// answer no 01 /////////////////////////


// var currentDate = new Date ();
// document.write(currentDate);



/// answer 02 ,03/////////
// var monthArr=[ 'jan' , 'feb', 'march', 'april','may','june','july','august', 'september','october','november','december']
// var currentDate= new Date();
// var month=currentDate.getMonth();
// document.write(monthArr[month] );


// var dayArr = ['mon','tue','wed','thurs','fri','sat','sun'];
// var currenDate= new Date();
// var day = currenDate.getDay()
// document.write(dayArr[day-1]);



// answer 04//////////////////////////////////////////////////

// var currentDate = new Date();
// currentDate.toString;
// var b = currentDate.toString();
// var c = b.slice(0,3);
// if (c == "Sat"){
//     document.write("It's Fun Day")
// }else if(c == "Sun"){
//     document.write("It's Fun Day")
// }else if(c == "Mon"){
//     document.write("not")
// }else if(c == "Tue"){
//     document.write()
// }else if(c == "Wed"){
//     document.write()
// }else if(c == "Thr"){
//     document.write()
// }else if(c == "Fri"){
//     document.write()
// }



//answer 05////////////////////////////////////////////////


// var currentDate = new Date();
// var days = currentDate.getDay()
// if(days<=15){
//     document.write("first fifteen days of a month")
// }
// else("last fifteen days of month")

  
//answer 06//////////


// var a =prompt("Enter your date")/// 
// specDate = new Date(01-01-1970);
// var todayDate=new Date();
// document.write(todayDate);
// document.write("</br>")
// var minutes=specDate-todayDate;
// document.write("Elapsed minutes:", minutes);
// document.write("</br>")
// document.write ("Elapsed milisec:",todayDate.getTime());
// document.write("</br>")


// answer 07///////////////




// var a = new Date();
// var b = a.toString();
// var c = b.slice(16,19);

// document.write(c)
// if (c === "12:"){
//     document.write("It's PM")
// }else if(c === "13:"){
//     document.write("It's PM")
// }else if(c === "14:"){
//     document.write("It's PM")
// }else if(c === "15:"){
//     document.write("It's PM")
// }else if(c === "16:"){
//     document.write("It's PM")
// }else if(c === "17:"){
//     document.write("It's PM")
// }else if(c === "18:"){
//     document.write("It's PM")
// }else if(c === "19:"){
//     document.write("It's PM")
// }else if(c === "20:"){
//     document.write("It's PM")
// }else if(c === "21:"){
//     document.write("It's PM")
// }else if(c === "22:"){
//     document.write("It's PM")
// }else if(c === "23:"){
//     document.write("It's PM")
// }else if(c === "24:"){
//     document.write("It's AM")
// }else if(c === "01:"){
//     document.write("It's AM")
// }else if(c === "02:"){
//     document.write("It's AM")
// }else if(c === "03:"){
//     document.write("It's AM")
// }else if(c === "04:"){
//     document.write("It's AM")
// }else if(c === "05:"){
//     document.write("It's AM")
// }else if(c === "06:"){
//     document.write("It's AM")
// }else if(c === "07:"){
//     document.write("It's AM")
// }else if(c === "08:"){
//     document.write("It's AM")
// }else if(c === "09:"){
//     document.write("It's AM")
// }else if(c === "10:"){
//     document.write("It's AM")
// }else if(c === "11:"){
//     document.write("It's AM")
// }

// answer 08///////////

//  var laterDate =new Date("12-31-2020")
// document.write(laterDate)



// var todayDate=new Date("09-14-2022");
// var days = todayDate.getFullYear()
// var specificDate= new Date("06-18-2015")
// var specificDays=specificDate.getFullYear()
// passsingDays=days-specificDays;
// document.write(passsingDays)

//answer 10///////////// PENDINg/////

// var currenDate=new Date("12-05-2015")
// document.write(currenDate)
// document.write("</br>")
// var specDate=new Date()
// var sec1=specDate.getSeconds()
// var sec=currenDate.getSeconds()
// var totalSec=specDate-currenDate;
// document.write(totalSec)

//answer 11///////
// var currenDate=new Date()
// document.write(currenDate)
// document.write("</br>")
// var hours=currenDate.getHours()
// document.write(hours)
// document.write("</br>")
// currenDate.setHours(14)
// document.write(currenDate)

//answer 12/////////////////
// var currenDate=new Date()
// document.write(currenDate)
// document.write("</br>")
// var year=currenDate.getFullYear()
// document.write(year)
// document.write("</br>")
// currenDate.setFullYear(100)
// document.write(currenDate)

//answer 13///////

// var age = prompt("Enter Age");

// var birthYear = year - age;
// document.write("Your Birhtday year is : "+birthYear);


// var date = new Date;
// var year = date.getFullYear();

// var birthYear = prompt("Enter Birth year");

// var age = year - birthYear;
// document.write(age)

//answer 14////////////



// var username = prompt("Enter Name");


// get current month
// var date = new Date;
// var month = date.getMonth();
// var monthArr = ['jan','feb','march','april','may','june','july',
//     'aug','september','oct','nov','dec',    
//  ]
//  var currentMonth = monthArr[month]

// var units = 410;
// var charges = 16;
// var latePayment = 350;

// var netAmount = units * charges;
// var grossAmount = netAmount + latePayment;

// document.write("Customer : " + username + "<br>"+
//                 "Month : " +  currentMonth + "<br>"+
//                 "Number of units : "+units+'<br>'+
//                 'Charges Per Unit : '+charges+ '<br>'+
//                 'Net Amount Payable (within due date): '+netAmount+'<br>'+
//                 'late Amount Payment charges : '+latePayment+'<br>'+
//                 'gross Amount payable : '+grossAmount+'<br>' )



/////CHAPTER NO 35 TO 38///////////////


///answer 01///////////
// function currenDate(){
// var currenDate=new Date()
// document.write(currenDate)

// }
// currenDate()

//answer 02/////

// function fullName(){
//     var firstName=prompt("ENter your first name")
//     var lasttName=prompt("ENter your last name")
//     var name=firstName+lasttName;
//     document.write(name)


// }
// fullName()


//answer 03///////
// function Add(){
//     var a=+prompt("Enter first num")
//     var b=+prompt("Enter second num")
//     var sum=a+b;
   
//     document.write(sum)
//     return sum;
    
    
// }
// Add()


//answer 04///////////

// function calculator(){
   
// var num1=+prompt("Enter first num")
// var num2=+prompt("Enter second num") 
// var add=num1+num2;
// var sub=num1-num2;
// var multiply=num1*num2;
// var div=num1/num2;
// document.write("addition of number is : "+add);
// document.write("</br>")
// document.write("subtraction of number is : "+sub);
// document.write("</br>")
// document.write("multiply of number is : "+multiply);
// document.write("</br>")
// document.write("divide of number is : "+div);
// document.write("</br>")

// }
// calculator()

//answer 05///////////

// function square(){

//     var num1=+prompt("Enter first num")
//     var num2=+prompt("Enter second num") 
//     var square=num1*num2;
//     document.write("square of number is : "+square)


// }
// square()

//answer 06///
//FACTORIAL QUESTIONSS PENDING//




//answer 07//

// function counting(){
//     var a=+prompt("enter num1")
//     var b=+prompt("enter num2")   
//     for (var i = a; i <=b; i++) {
//        console.log(i);
        
//     }
// }
// counting()

//answer 08////

// function calculateHypotenuse(){

// var num1=+prompt("enter first number")
// var num2=+prompt("enter second number")

// function calculateSquare(){
// var base=num1*num1;
// document.write(base)
// document.write("<br>")
// var perp=num2*num2;
// document.write(perp)
// document.write("<br>")
// hypo=base+perp;
// document.write(hypo)
// document.write("<br>")

// }
// calculateSquare()
// }
// calculateHypotenuse()

// 09////
//    function areaOfTriangle(){
//     var width=+prompt("Enter width")
// var height=+prompt("Enter height")
// area=width*height;
// document.write(area)
//    }
//    areaOfTriangle()


// function areaOfTriangle(){
//     var width=5;
// var height=8;
// var area=width*height;
// document.write(area)


// }
// areaOfTriangle()

//answer 10//////

// function palindromeMeth(wordByuser){
    
// var splitString = wordByuser.split("")
// console.log(splitString)
// var reverseSplit = splitString.reverse("")
// console.log(reverseSplit);
// var joinString = reverseSplit.join("");
// console.log(joinString)
// if(wordByuser == joinString){
//     console.log("Yes this is palindrome");
// }else{
//     console.log("It is not")
// }
// }
// var word = prompt("Enter word");

// palindromeMeth(word)











//answer 11////

// function titleCase(str) {
    //     str = str.toLowerCase().split(' ');
    //     for (var i = 0; i < str.length; i++) {
    //       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    //     }
    //     return str.join(' ');
    //   }
    //   document.write(titleCase("quick brown fox"));

//answer 12////////

// function short(){
//     var name="WEB DEVELOPMENT"
//     var changeNmae=name.replace("WEB DEVELOPMENT" ,"TUTORIAL")
//     document.write(changeNmae)
// }
// short()

//answer 13/////////

// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// document.write(char_count('w3resource.com', 'o'));

//answer 14/////
//pending//



//Changing case  chapter//////////////
   
//answer 01////

// var word=prompt("Enter word");
// var capital=word.toUpperCase();
// document.write(capital)

//answer 02////

// function titleCase(str) {
//     str = str.toLowerCase().split(' ');
//     for (var i = 0; i < str.length; i++) {
//       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//     }
//     return str.join(' ');
//   }
//   document.write(titleCase("jawan pakistan center"));

 //Strings: measuring length and extracting parts////

// answer 01///////

// var mobile=prompt("Favrt mobile phone")

// var lenght=mobile.length;
// document.write(lenght)

//answer 02//

// var name1=prompt("Enter name")

// var last1=name1.slice(-1);
// document.write(last1)


//Strings: finding segments////

//answer 01////

// var word="pakistani"
// var findIndex=word.indexOf("n")
// document.write(findIndex)

//answer 03//

// const count_substr = (str, searchValue) => {
//     let count = 0,
//       i = 0;
//     while (true) {
//       const r = str.indexOf(searchValue, i);
//       if (r !== -1) [count, i] = [count + 1, r + 1];
//       else return count;
//     }
//   }; 
//   console.log(count_substr("The quick brown fox jumps over the lazy dog", 'the'));
//   console.log(count_substr("The quick brown fox jumps over the lazy dog", 'fox'));

//Strings: finding a character at a location//

// var word="pakistani"
// var findIndex=word.charAt("3")
// document.write(findIndex)



// Strings: replacing characters///////

//answer 01///
// var string="hyderabad"
// var replace=string.replace("hyder","Islam")
// document.write(replace)

//answer 02//
// var string="hyderabad and sami and hamza mustafa and"
// var replace=string.replace(/and/g,"&")
// document.write(replace)

//Rounding numbers//

// var num=Math.round(3.45214)
// document.write(num)
// document.write("<br>")
// var floor=Math.floor(3.45214)
// document.write(floor)
// document.write("<br>")
// var ceil=Math.ceil(3.45214)
// document.write(ceil)

//answer 02//////////


// var num=Math.round(-2.678)
// document.write(num)
// document.write("<br>")
// var floor=Math.floor(-2.678)
// document.write(floor)
// document.write("<br>")
// var ceil=Math.ceil(-2.678)
// document.write(ceil)

//Controlling the length of decimals
//answer 01


// var percentage= 30 / 45 * 100;
// var fix=percentage.toFixed(2)
// document.write(fix)


//Converting strings to numbers, numbers to strings
//answer 02//


// const num = 35.36;
// const without = num.toString().replace(".", "")
// document.write(without)


//answer 01//


// var string= "472"
// var change=typeof(472)
// console.log(change)

//Generating random numbers/////////

//answer no 01//

//  var dice = Math.floor(Math.random()*6+1);
//     console.log(dice)

//answer no 02//

  // var toss = Math.floor(Math.random()*2+1);
    // if(toss == 2){
    //     console.log("Heads");
    // }else{
    //     console.log("Tails");
    // 

    //answer no 3//

    // var scretNumber=+prompt("enter an number");

    //  if(scretNumber == 5){
    //     console.log("congratulate");
    // }else{
    //     console.log("try again");

    // }

//Converting strings to integers and decimals///


// var inp_A = parseInt(prompt("Enter your weight here: "));
//     document.write("Your weight is ",Math.round(inp_A));
//     document.write("</br>");
//     document.write("Your weight is ",Math.round(inp_A), "kgs");
//     document.write("</br>");
//     document.write("Your weight is ",inp_A.toFixed(1), "kgs");
//     document.write("</br>");
//     document.write("Your weight is ",inp_A.toFixed(1), "kilograms");























