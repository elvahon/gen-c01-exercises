const prompt = require("prompt-sync")({sigint: true});

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
    constructor(field) {
        this._field = field;
    }

    get field() {
        return this._field;
    }

    get fieldX() {
        return this._field[1].length;
    }

    get fieldY() {
        return this._field[0].length;
    }

    print() {
        let fieldStrings = [];
        for (let i = 0; i < this.field.length; i++) {
            fieldStrings += this.field[i].join('');
            fieldStrings += '\n';
        }
        return fieldStrings;

    }

    play() {
        let y = 0;
        let x = 0;
        let player = this.field[y][x];
        this.field[y][x] = pathCharacter;
        let status = "";

        console.log(this.print());

        while (status !== "win" && status !== "lose") {
            
            let directionInput = prompt('Direction? (W/A/S/D) :  ');

            console.log('...walking...walking...'+'\n');

            if (directionInput.toUpperCase() === "D") {

                if (x + 1 <= this.fieldX - 1) {
                    x += 1;
                } else {
                    console.log("GameOver! Walk too far away :(");
                    return false;
                }

                player = this.field[y][x];

                if (player === hole) {
                    status = "lose";
                    console.log("GameOver! Falling in a hole :(");
                } else if (player === hat) {
                    status = "win";
                    console.log("Win! Found the Hat! :)");
                } else {
                    this.field[y][x] = pathCharacter;
                    console.log(this.print());
                }

            } else if (directionInput.toUpperCase() === "A") {
                
                if (x - 1 >= 0) {
                    x -= 1;
                } else {
                    console.log("GameOver! Walk too far away :(");
                    return false;
                }

                player = this.field[y][x];

                if (player === hole) {
                    status = "lose";
                    console.log("GameOver! Falling in a hole :(");
                } else if (player === hat) {
                    status = "win";
                    console.log("Win! Found the Hat! :)");
                } else {
                    this.field[y][x] = pathCharacter;
                    console.log(this.print());
                }

            } else if (directionInput.toUpperCase() === "W") {
                
                if (y - 1 >= 0) {
                    y -= 1;
                } else {
                    console.log("GameOver! Walk too far away :(");
                    return false;
                }

                player = this.field[y][x];

                if (player === hole) {
                    status = "lose";
                    console.log("GameOver! Falling in a hole :(");
                } else if (player === hat) {
                    status = "win";
                    console.log("Win! Found the Hat! :)");
                } else {
                    this.field[y][x] = pathCharacter;
                    console.log(this.print());
                }

            } else if (directionInput.toUpperCase() === "S") {

                if (y + 1 < this.fieldY) {
                    y += 1;
                } else {
                    console.log("GameOver! Walk too far away :(");
                    return false;
                }

                player = this.field[y][x];

                if (player === hole) {
                    status = "lose";
                    console.log("GameOver! Falling in a hole :(");
                } else if (player === hat) {
                    status = "win";
                    console.log("Win! Found the Hat! :)");
                } else {
                    this.field[y][x] = pathCharacter;
                    console.log(this.print());
                }
            }
        }
        console.log("Bye.");
    }
}


const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
]);


myField.play();