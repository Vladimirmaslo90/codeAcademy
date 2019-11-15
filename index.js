class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }
    get Title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }
    set isCheckedOut(value) {
        if (value.typeof === 'boolean') {
            this._isCheckedOut = value;
        }
        throw new Error('Error! Please set value for IsCheckout to boolean value. Thanks.');
    }
    toggleCheckOutStatus() {
        if (this._isCheckedOut === true) {
            this._isCheckedOut = false;
        }
    }
    getAverageRating() {
        let ratingSum = this._ratings.reduce((accumulator, currentValue) =>
            accumulator + currentValue);
        return ratingSum / this._ratings.length;
    }
    addRating(value) {
        this._ratings.push(value);
    }
}

let coolBook = new Media('Jogling');
coolBook.addRating(9);
coolBook.addRating(2);
coolBook.addRating(5);

console.log(coolBook.getAverageRating())