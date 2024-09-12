
/*** 
 * Name: findLengthOfLongestSeq
 * Description: Function to find and return the length of the longest increasing subsequence
 * Input: array
 * Output: Length 
 * */

let tmpArr = [];
const findLengthOfLongestSeq = (inputs) => {
    if (inputs.length === 0) 
        return 0; //Result if Empty input passed

    if (inputs.length === 1)
        if (!inputs[0] && inputs[0] !== 0)
            return 0; //That single value is null.
        else
            return 1; // Single value so returning 1 as length

    for (let input of inputs) {
        if(!input && input != '')
            continue;

        var start = 0, end = tmpArr.length;
        
        const [startRaw, endRaw] = findActualStartEnd(start, end, input);
        
        if (startRaw === tmpArr.length) { // first initial value
            tmpArr.push(input);
        } else {
            tmpArr[startRaw] = input; // next index to assign next value is `start`
        }
    }

    let length = tmpArr.length;
    tmpArr = [];

    return length;
};

const findActualStartEnd = (start, end, input) => {
    do {
        let centerVal = Math.floor((start + end) / 2);
        if (tmpArr[centerVal] < input) {
            start = centerVal + 1;
        } else {
            end = centerVal;
        }
    } while (start < end);
    
    return [start, end];
};

// Test case 1
const testSuites = [
    [10, 9, 2, 5, 3, 7, 101, 18],
    [],
    [10, 9, 2, 5, 5, 3, 7, 101, 18],
    Array.from({length: 20}, (_, i) => 20 - i),
    Array.from({length: 5}, () => Math.floor(Math.random() * 50)),
    [0],
    [''],
    [""],
    [3,5,784,84738,3733,889948,3373783,6367373,30]
];

testSuites.map(function(val, key){
    if(val){
        let output = findLengthOfLongestSeq(val);
        console.log(`The Input for test suite ${key+1} is [${val.toString()}]`, `\nThe output is ${output}`, '\n\n');
    } else {
        console.log("Null input");
    }
});
