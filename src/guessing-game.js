class GuessingGame {
    constructor() {
        this.min = null;
        this.max = null;
        this.arr = [];
        this.length = null;
        this.middle = null;
    
    }
	
    setRange(min, max) {
	this.min = min;
	this.max = max;
    this.length = max-min;
    for (var i = 0; i <=this.length; i++) {
    this.arr[i]=min+i;
    }
	this.middle = Math.floor(this.arr.length/2);
    }

    guess() {
    return this.arr[this.middle];
    }

    greater() {
	this.min=this.middle+1;
    return this.middle = Math.floor((this.middle+1+this.max)/2);  
    }

    lower() {
	this.max = this.middle-1;
    return this.middle = Math.floor((this.min+this.middle-1)/2);
    }
}

module.exports = GuessingGame;
