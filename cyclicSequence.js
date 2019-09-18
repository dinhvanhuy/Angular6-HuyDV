function cyclicSequence(sequence){
    let check = false;
    for(let i =0; i< sequence.length-1;i++) {
        if(sequence[i]< sequence[i+1]) {
            check = true;
        }else if(sequence[i]>sequence[i+1] && sequence[i+1] < sequence[i+2]) {
            check = true;
        }else {

        return false;
        }
    }

    return true;
}
