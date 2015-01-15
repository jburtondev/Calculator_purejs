/**
 * Implement a browser-based calculator.
 *
 * @author  Jamie Burton
 * @version 1.0
 * @studentID 4082422
 *
 */

var operators = {

    // Adds two values together    
    runCalculation: function (num1, num2, operator) {
        "use strict";
        
        var result = 0;

        //Parameter 'num1' set to the first number in addition
        this.num1 = calculator.calculationString[0];

        //Parameter 'num2' set to the second number in addition
        this.num2 = calculator.calculationString[1];

        this.num1 = parseFloat(this.num1);
        this.num2 = parseFloat(this.num2);

        this.operator = calculator.clicked_operator;

        switch (this.operator) {
        case "+":
            result = this.num1 + this.num2;

            break;
        case "-":
            result = this.num1 - this.num2;

            break;
        case "×":
            result = this.num1 * this.num2;

            break;
        case "÷":
            result = this.num1 / this.num2;

            break;

            console.log(result);
        }
        return result;
    },

}