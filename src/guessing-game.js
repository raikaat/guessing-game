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
    if (this.arr[0] === undefined) {
    this.length = max-min;
    for (var i = 0; i <this.max+this.min; i++) {
    this.arr[i]=min+i;
    }
	}
	this.middle = Math.floor((this.min+this.max)/2);
    }

    guess() {
    return this.arr[this.middle];
    }

    greater() {
    return this.setRange(this.middle+1, this.max);  
    }

    lower() {
    return this.setRange(this.min, this.middle-1);
    }
}

module.exports = GuessingGame;
