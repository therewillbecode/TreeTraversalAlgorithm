function conv(x){

    return Array.prototype.map.call(x, function(val, index){
        console.log('index:' + (x.length-index) + ' val : ' + (index *2));
        if (val == 1 && index == x.length -1){
            return (1);
        }
        if (val == 1 && index == x.length -2) {
            return (2);
        }
        if (val == 1){
            pos = x.length - (index + 1);
            console.log(pos);
            // return counter;
            //'' recursively  double prev val
            return ((Math.pow(pos, 2)));
        }
        else{
            return 0;
        }
    });
    // .reduce(function(a,b){return a + b})
}

console.log(conv("111111"));