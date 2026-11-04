let obj = {
    name: "your name",
    age:  "your age",
    job:  "Enter job"
}
console.log(obj);
// this is simple code of an  object the
// advance type of boject is function constructer
// here!

function Course(title,duration,fee) {
    this.title = title;
    this.duration = duration;
    this.fee = fee;   
}
let c1 = new Course("graphice design",6,30000);
let c2 = new Course("web devolopment",12,50000);
let c3 = new Course("python programing",24,70000);
console.log(c1);
console.log(c2);
console.log(c3);
