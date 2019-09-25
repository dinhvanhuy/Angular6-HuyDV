function generousMan(n, m){
    check = false;
    let candy = 0;
    while(true) {
        check = !check;

        if(check) {
            candy++;
            n -= candy;
          
        }else {
            candy++;
            m -= candy;
        }

        if(n < 0) {
            return 'Van';
        }
        if(m < 0) {
            return 'Viet';
        }
    }
}
