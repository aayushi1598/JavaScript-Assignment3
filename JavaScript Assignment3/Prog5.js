const person = {
    firstName : "Aayushi",
    lastName : "Solty",
    greeting : function(){
        alert('Hi! I\m ' + this.firstName + this.middleName + this.lastName + '.');
    }
};

document.write(person.firstName + " ");
person.middleName = "Ayu";
document.write(person.middleName + "  ");
document.write(person.lastName);
console.log(person.greeting());