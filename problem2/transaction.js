
// Input: A 2D List/Array of transactions with each transaction record having a transaction ID (integer), credit card 
// ID (integer, transaction amount (double), city (string), and time in minutes (integer). You can assume all 
// transactions happen on the same day
        //ID,credit,amout,city,minutes
let arr=[ [1, 1000, 500.00, "Vadodara", 0], [2, 1000, 500.00, "Mumbai", 5], [3, 1001, 500.00, "Mumbai", 10], [4, 
1001, 10000.00, "Mumbai", 10]];

for(let i=0;i<arr.length-1;i++){
//        if(arr[i][2]>=10000){
        console.log(arr[i][2])
//        }
}
