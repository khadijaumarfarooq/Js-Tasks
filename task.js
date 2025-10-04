// Java Script Task 
const A1 = "chocolates"
const A2 = "crips"
const A3 = "soda";
// using fat arrow function
const buyItem = (itemCode , money) =>{
    if (itemCode === "A1"){
        console.log(`You are buying ${A1} with RS.${money}`);
    }
    else if (itemCode === "A2") {
        console.log(`You  are buying ${A2} with RS.${money}`);
    }
    else if (itemCode === "A3"){
        console.log(`You are buying ${A3} with RS.${money}`);
    }
    else {
        console.log("Invalid code! please choose A1 ,A2 or A3");
    }    
};
// Testing
buyItem("A1",50);
buyItem("A2",40);
buyItem("A3",70);
buyItem("B1",20);
