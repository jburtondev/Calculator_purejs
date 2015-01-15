/**
 * Implement a browser-based calculator.
 *
 * @author  Jamie Burton
 * @version 1.0
 * @studentID 4082422
 *
 */

var calculator = {

    num1: 0,

    num2: 0,

    //Result from runCalculation()
    result: 0,

    //Operator that user has clicked
    clicked_operator: [],

    //Variable holding 
    calculationString: "",

    //Sets 'input' to the calculator input/output div
    calculatorScreen: document.getElementById("input-container"),

    //Adds values to the calculatorScreen from user
    runAddToCalculation: function (clicked_btn) {
        "use strict";
        
        console.log(clicked_btn);

        //Adds the value from a button into calculationString
        this.calculationString += (clicked_btn);

        //Outputs the number to calculatorScreen
        this.calculatorScreen.innerHTML += clicked_btn;

        //Collects the operator and assigns it to clicked_operator
        switch (clicked_btn) {
        case "+":

            //Adds '+' to the div
            this.clicked_operator = clicked_btn;

            break;
        case "-":

            //Adds '-' to the div
            this.clicked_operator = clicked_btn;

            break;
        case "÷":

            //Adds '÷' to the div
            this.clicked_operator = clicked_btn;

            break;
        case "×":

            //Adds '×' to the div
            this.clicked_operator = clicked_btn;

            break;
        }
        

    },
    
    //Function which runs addition on the two numbers
    runOperator: function (num1, num2) {
        "use strict";

        //Parameter 'num1' set to the first number in addition
        this.num1 = this.calculationString[0];

        //Parameter 'num2' set to the second number in addition
        this.num2 = this.calculationString[1];

        //Checks if more than one operator has been pressed
        if (this.calculationString.length !== 2) {
    
            this.calculatorScreen.innerHTML = "Operation not allowed";
            
        } else if (this.clicked_operator === "+" || "-" || "×" || "÷") {
            //Runs operators.runAddition() 
            
            this.calculatorScreen.innerHTML = operators.runCalculation.call(this.runOperator);
    
        }

    },

    //Runs the calculation
    runCalculation: function (clicked_operator) {
        "use strict";
        
        //Regular expression for non-digit characters
        var nonDigit = /\D/g;
        
        this.clicked_operator = this.clicked_operator;

        //Checks if "+" is present in calculationString
        if (this.calculationString.search(nonDigit) !== -1) {
    
            this.calculationString = this.calculationString.split(this.clicked_operator);
            console.log(this.calculationString);
            

        }
        
        //Restricts multiple operations: e.g '1 + 2 + 3'
        if (this.calculationString[0].search(nonDigit) !== -1) {
            console.log("String has " + this.clicked_operator);
            
            return this.calculatorScreen.innerHTML = "Operation not allowed";
            
        }
        
        //Adds the split numbers together
        this.runOperator();

        

        }
    };

