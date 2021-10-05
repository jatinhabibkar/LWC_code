// function Person(){
//     this.age = 0
//     setInterval(function group() {
//         this.age++
//         console.log(this.age);  
//     },100)

// }

// function Person2(){
//     that = this
//     that.age=0
//     setInterval(function group() {
//         that.age++
//         console.log(that.age);  
//     },100)

// }


// function Person(){
//     this.age=0
//     setInterval(function group() {
//         this.age++
//         console.log(this.age);  
//     }.bind(this),100)

// }


// ES6 way

function Person(){
    this.age =0 
    setInterval(()=>{
              this.age++
        console.log(this.age);    
    },100)
}

var p1 =new Person()

console.log(p1.age);