const profileDataArgs = process.argv.slice(2, process.argv.length);
const [name, github] = profileDataArgs;
const fs = require("fs");
const generatePage = require('./src/page-template.js');

  //usable code block for homework

  fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;
    console.log('Porfolio complete! Check out index.html to see the output!')
  
  });

//console.log(profileDataArgs);

//const printProfileData = profileDataArr => {
   // for (let i=0; i < profileDataArr.length; i += 1){
      //  console.log(profileDataArr[i]);
  //  }  
   // console.log('=========');
   // profileDataArr.forEach(profileItem => console.log(profileItem)); 
//};

//printProfileData(profileDataArgs);

//const addNums = (numOne, numTwo) => numOne + numTwo;
//const sum = addNums(5,7);
//console.log(sum)