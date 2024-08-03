/*1. დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (m,n) და დააბრუნებს რომელიც მეტია იმ რიცხვს , 
თუ რიცხვები ტოლია დააბრუნებს 0 -ს*/

function number (m, n){
    if (m>n)
        return m
    else if (m<n)
        return n
    else (m=n)
    return 0
} 
console.log(number(10,6)) 

/*2. დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს), დააბრუნეთ რიცხვების ჯამი*/
function sum(a, b){
 return a+b
}
console.log(sum(5,3)) 

/*3. დაწერეთ ფუნქცია რომელიც დააბეჭდავს თქვენ სახელს და გვარს ( ფუნქციას არ აქვს პარამეტრი)*/
let person={
    firstName: "Ana",
    lastName: "Aptsiauri",
    fullName : function (){
      console.log(this.firstName, this.lastName)
    }
}
person.fullName()

/*4. დაწერეთ ფუნქცია ორი პარამეტრით : firstname და lastname დააბრუნეთ სრული სახელი და დაბეჭდეთ 
( ფუნქცია აბრუნებს სრულ სახელს და ფუნქციის გარეთ ბეჭდავთ*/

/*5. Დაწერეთ ფუნქცია რომელსაც გადასცემთ ერთ რიცხვს (n) და ფუნქციამ უნდა დააბრუნოს 1 დან ამ რიცხვამდე  
(n-მდე) რიცხვების ნამრავლი ( ანუ თუ რიცხვი არის 3 ფუნქციამ უნდა დააბრუნოს 1*2*3 -ის მნიშვნელობა, დაგჭირდებათ
 ახალი ცვლადის გამოცხადება ფუნქციის შიგნით რომელსაც მიანიჭებთ ნამრავლის მნიშვნელობას. Პ.ს. გამოიყენეთ თქვენთვის სასურველი ციკლი*/
function number(n, m, ){
    let namravli=1;
    for (i=m; i<n; i++ )
        namravli=namravli*i
console.log(namravli)
}
number(5,1) 

/*Შემდეგი დავალებებისთვის გამოიყენეთ :ობიექტი student - რომელსაც აქვს შემდეგი properties: firstName, lastName, age, scores 
(scores არის შემდეგი რიცხვების მასივი: 4,7,5,3,2) და მეთოდი fullName რომელიც აბრუნებს სტუდენტის სრულ სახელს
( ობიექტი შეიცავს მეთოდს, ცალკე ფუნქციად არ უნდა დაწეროთ ) 

6. დაბეჭდეთ  სტუდენტის სრული სახელი (სახელი+გვარი-  გამოიყენეთ student ობიექტის მეთოდი)*/


let student = {
    firstName: "Gvanca",
    lastName: "Lepsaia",
    age: 20,
    scores: [4, 7, 5, 3, 2],
    fullName: function () {
        this.fisrtName = "Gvanca";
        return this.firstName + " " + this.lastName
    }
}; console.log(student.fullName())

//7. Დაწერეთ ფუნქცია რომელსაც გადასცემთ სტუდენტის ქულებს ( scores) და ფუნქცია დააბრუნებს  ქულების ჯამს
//8. დაბეჭდეთ სტუდენტის სახელი და ასაკი

console.log(student.firstName && student.age)