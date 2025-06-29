

    function uppg8(){
    // skapa en array med fem person obkjet
    // varje person objekt ska ha två properties, name och age
    // skapa en fuktion som tar in en array som argument
    // skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
    //  över 30 år som skrivs ut i konsolen
 const personer = [
    { name: "Patrick", age: 28 },
    { name: "Pontus", age: 35 },
    { name: "Pelle", age: 42 },
    { name: "Ingenius", age: 25 },
    { name: "Lovisa", age: 31 }
];

function PersonerOver30(array) {
    array.forEach(person => {
        if (person.age > 30) {
            console.log(person.name);
        }
    });  
}
PersonerOver30 (personer);

}
module.exports = { uppg8 };