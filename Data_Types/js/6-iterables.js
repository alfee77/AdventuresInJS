function example1(){
    let range = {
        from: 1,
        to: 1000
    };

    range[Symbol.iterator] = function(){
        return{
            current: this.from,
            last: this.to,

            next(){
                if(this.current <= this.last){
                    return { 
                        done: false, 
                        value: this.current++,
                    };
                } else {
                    return {
                        done: true,
                    };
                }
            }
        };
    };
    //We want the for…of to work:
    //for(let num of range)...num=1,2,3,4,5

    for(let num of range){
        console.log(num);
        //alert(`hello`);
    }
}

function example2(){
    let range = {
        from: 1,
        to: 1000,

        [Symbol.iterator](){
            this.current = this.from;
            return this;
        },
    
        next(){
            if(this.current <= this.to){
                return { 
                    done: false, 
                    value: this.current++,
                };
            } else {
                return {
                    done: true,
                };
            }
        }
    };

    //We want the for…of to work:</span>
    //for(let num of range)...num=1,2,3,4,5</span>

    for(let num of range){
        console.log(num);
    }
}