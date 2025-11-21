const user = [{ 
    id: 1,
    Name: "Iqra",
    Score : 76,
},
{
    id: 2,
    Name: "Hafsa",
    Score : 79,
},
{
    id: 3,
    Name : "Darakhshan",
    Score :75
}
];
const fetchData = () => {
    return new Promise((Pass, reject) => {
         setTimeout(() => { 
            const data = user;
            if (data) {
                Pass(data);
            }else {
                reject ("user not found");
            }
         }, 2000)   
    })
}
console.log("Fetching Data");
fetchData()
  .then((data) => {
    console.log(data);
  })
 .catch((error) =>{
    console.log(error);
    
 })   
