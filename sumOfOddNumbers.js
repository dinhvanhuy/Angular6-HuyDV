function sumOfOddNumbers(a, b){
    let tong =0;
    for(let i=a+1; i< b;i++) {
        if(i%2==1) {
            tong+=i;
            tong = tong%10000007;

        }
    }
    return tong;
}
