const { cleanData, processData, assignKeys, sortHouseholds}  = require('./exerciseCode');
const csv = "./data2.csv";

describe("cleanData",()=>{
    it("should return a cleaned up array of arrays. There should be no empy arrays and each array inside the array has a length of 4",()=>{
        const arr = [['"a"', '" b"', '"c,"', '"d"', '"e"', '"f"'],['']];
        expect(cleanData(arr)).toEqual([['a','b','f','c, d, e']])
    });
});

describe("processData",()=>{
    it("should take in a csv file and returns an Array", async ()=>{
        const result = await processData(csv);
        expect(Array.isArray(result)).toEqual(true);
    });
});

describe("assignKeys", ()=>{
    it("should return an array of objects",()=>{
       const result = assignKeys([['a','b','f','c,d,e']]);
       expect(result).toEqual([{firstName:'a', lastName:'b',age:'f',address:'c,d,e'}]);
    });
});

describe("sortHouseholds", ()=> {
    it("returns an array of object",()=>{
        const result = sortHouseholds([{firstName:'a', lastName:'b',age:'f',address:'c,d,e'}]);
        expect(result).toEqual([{address:'c,d,e', occupants: 1}]);
    });
});

