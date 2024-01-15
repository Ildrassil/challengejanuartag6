const age = 30;
for (let i = 1; i < age; i++) {
    console.log(i);

}
if(age < 18){
    console.log("is a Minor");
}else {
    console.log("dirnk up");
}
let score = 0;
if(score){
    console.log("Score is avialable");
}else {
    console.log("Is not avialable");
}
if(score){
    console.log("Score is evaluted as truthy");
}else {
    console.log("is falsey")
}
const userName: string ="";
if(userName){
    console.log("Username is avialable");
}else {
    console.log("Username is evaluated as falsy");
}
const isAdmin: boolean = false;
if (isAdmin){
    console.log("isAdmin is evaluated as truthy.");
}if (!isAdmin) {console.log("isAdmin is false");}




