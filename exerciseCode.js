const fs = require("fs");
const readline = require("readline");

const csv = "./data2.csv";

async function dataConverter(input){
    //Path of functions
    //await receipt of data before continuing
    const data = await processData(input);
    const cleanedData = cleanData(data);
    const objArray = assignKeys(cleanedData);
    const householdArray = sortHouseholds(objArray);
    toConsole(householdArray, objArray);
}

function processData(input){
    const stream = fs.createReadStream(input);
    const reader = readline.createInterface({ input: stream });
    //Wrap in promise so data is recieved before continuing
    return new Promise(function(resolve){
        let data = [];

        reader.on("line", row => {
    // split a row string into an array, using regex to take into account differences in streeth address notation
    // then push into the data array
            data.push(row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));
        });
        reader.on("close", () => {
    // Once reached the end of csv file, pass to a function to further clean data     
            resolve(data);
        });
    });
};

   function cleanData(array){
        //Remove empty arrays
        const cleanArray = array.filter((item) => (item.length > 1));
        //erasing extraneous punctuation and trimming extra space at beginning and end
        //then combining the separated address values into one
        newArray =[];
        for(let i = 0; i < cleanArray.length; i++){
            const result = cleanArray[i].map(x => 
                x.replaceAll('"', '').replaceAll('.','').replaceAll(',','').trim());
            const addressArray = result.slice(2,5).join().replaceAll(',', ', ');
            const fullArray = result.concat(addressArray);
            fullArray.splice(2,3);
            newArray.push(fullArray);
        }
        return newArray;
    }
    function assignKeys(array){
        //Assign keys to data for easier sorting
        let keys = [
            "firstName", 
            "lastName", 
            "age", 
            "address"
            ];
        let arrayOfObjects = [];
        
        for(let i=0; i<array.length; i++){
            let obj = {};
            for(let j=0; j<array[i].length; j++){
                 obj[keys[j]] = array[i][j];  
              }
            arrayOfObjects.push(obj);
        }
        //Using .sort to arrange data in alphabetical order using lastName then firstName
        const sortedArray = arrayOfObjects.sort((a, b) => {
              const result = a.lastName.localeCompare(b.lastName);
              return result !== 0 ? result : a.firstName.localeCompare(b.firstName);
            }); 
       return sortedArray; 
    };

    function sortHouseholds(occupants){
        //Creating an array of households that contains address and number of occupants
        let households = [];
        occupants.forEach(item => {
            let resObj = households.find(resObj => 
                resObj['address'].toUpperCase() === item['address'].toUpperCase());
                resObj ? resObj.occupants++ : households.push({'address': item['address'], 'occupants': 1});
          });
 
        return households;
    };
    
    function toConsole(arr, arr2){
        const adults = arr2.filter((item) => (item.age >= 18))

        for (let i=0; i< arr.length; i++){
            console.log(`The household at ${arr[i]["address"]} has ${arr[i]["occupants"]} occupant(s).`);
            console.log("Adult occupant(s):");
            for (let j=0; j<adults.length; j++){
                if (`${arr[i]["address"].toUpperCase()}` === `${adults[j]["address"].toUpperCase()}`){
                console.log(adults[j]);
                };
            };
        };
    };


dataConverter(csv);



module.exports = {cleanData, processData, assignKeys, sortHouseholds};

