function counter(){
    var count = 0;
     return function incrementcounter(){
        count++;
    console.log(count);
    }
}
var counter1 = counter()
counter1();
counter1();

var counter2 = counter()
counter2();counter2();counter2();counter2();counter2(); 