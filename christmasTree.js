function christmasTree(input){
    for(let i= 0; i  <= input; i++){
        let star= '';
        for( let k = i; k < input; k++){
            star += ' ';
        }
        for( let j = 0; j <= i; j++ ){
            if( i === 0 ){
                star += '*';
            }else{
                star += '0 ';
            }
        }
        console.log(star)
    }
}


christmasTree(10);