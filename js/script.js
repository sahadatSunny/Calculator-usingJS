class Cal{

    constructor(firstInput, operator, secondInput, displayResult){

        this.displayInputs = 0;
        this.firstInput = firstInput;
        this.operator = operator;
        this.secondInput = secondInput;
        this.displayResult = displayResult;
    }

        updatedisplay(input) {
            
            let digit = input;
            // let formValue = document.querySelector('#result');
            // let formValue2 = Number.parseFloat(formValue.value);
            // this.displayInputs = formValue2;
            let concatenate = this.displayInputs + digit;
            let mutation = Number.parseFloat(concatenate);
            this.displayInputs = mutation;
            
            
                        
                        // let updater = this.displayInputs + input;

                        // this.displayInputs = updater;

        }

        dotConcat(dot){
            let add = this.displayInputs + dot;
            this.displayInputs = add;
        }

        screenUpdate(){
            let update = document.querySelector('#result');
            update.value = this.displayInputs;
        
                // this.displayInputs = displayInputs === '0' ? digit : displayInputs + digit
        }

        screenCleaner(){
            this.displayInputs = 0;
        }
        
        operatorReceiver(operatorInput){
            let operator = operatorInput;
            this.operator = operator;
            
        }

        secondInputReciver(){
            this.firstInput = this.displayInputs;
        }

        watingScreen(){
            let show = document.querySelector('#input-1');
            show.value = this.firstInput;
        }

        displayOperator(){
            let sltdOperator = document.querySelector('#sltdOperator');
            sltdOperator.value = this.operator;
        }

        displayInput2(){
            let input2 = document.querySelector('#input-2');
            input2.value = this.secondInput;
        }


        calculate(operator){
            this.secondInput = this.displayInputs;

                    if (this.operator === '+') {
                        this.displayInputs = this.firstInput + this.secondInput;
                    } 
                    if (this.operator === '-') {
                        this.displayInputs = this.firstInput - this.secondInput;
                    }
                    if (this.operator === '*') {
                        this.displayInputs = this.firstInput * this.secondInput;
                    }
                    if (this.operator === '/') {
                        this.displayInputs = this.firstInput / this.secondInput;
                    }
                    if (this.operator == "%"){
                        this.displayInputs = this.firstInput % this.secondInput;
                    }
                    
        }

        allClear(){
            this.displayInputs = 0;
            this.firstInput = null;
            this.operator = null;
            this.secondInput = null;
            this.displayResult = null;
        
        }

            


}



let calculator = new Cal();


console.log(calculator)




let keypad = document.querySelector('#inputs');
        // console.log(keypad);


    function targetKey (event){
            let {target} = event;
        if(!target.matches('button')){
            return;
        }
        
        if(target.classList.contains('operators')){
            calculator.operatorReceiver(target.value);
            calculator.secondInputReciver();
            calculator.screenCleaner();
            calculator.screenUpdate();
            calculator.watingScreen();
            calculator.displayOperator();
            return;
            
        }

        if(target.classList.contains('equals')){
            calculator.calculate();
            calculator.screenUpdate();
            calculator.displayInput2();
            return;
        }

        if(target.classList.contains('AC')){
            
            calculator.allClear();
            calculator.screenUpdate();
            calculator.displayInput2();
            calculator.watingScreen();
            calculator.displayOperator();
           
        }
        

        // defult recive set to button with out clases (means digits and point)
       if(target.classList.contains('numbers')){
        calculator.updatedisplay(target.value);
        calculator.screenUpdate();
        }

        if(target.classList.contains('dot')){
            calculator.dotConcat(target.value);
            calculator.screenUpdate();
            

        }


        
    }

    keypad.addEventListener("click", targetKey);




    //Event for dark theme

    let darkBtn = document.getElementById("dark-btn");

       function btnPass(){
           
            let findlink = document.getElementById('link-id')
            findlink.href = "css/style-dark.css";
        
        };
            
     darkBtn.addEventListener("click", btnPass);


     //Event for light theme

     let lightBtn = document.getElementById("light-btn");

        function lBtnPass(){
            let findlink = document.getElementById('link-id');
            findlink.href = "css/style-light.css";
            
        };

     lightBtn.addEventListener("click", lBtnPass);
