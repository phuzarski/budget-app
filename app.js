//BUDGET CONTROLLER
var budgetController = (function() {

    //code
})();

// UI CONTROLLER

var UIController = (function () {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue : '.add__value',
        inputBtn: '.add__btn'
    };

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        getDOMStrings: function() {
            return DOMstrings
        }
    };
})();


// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {


    var setupEventListeners = function () {
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {

            if(event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };


    var DOM = UICtrl.getDOMStrings();

    var ctrlAddItem = function() {

        var input = UICtrl.getInput();
        console.log(input);
    };

    return {
        init: function() {
            setupEventListeners();
        }
    };

})(budgetController, UIController);

controller.init();