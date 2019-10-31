/*----- constants -----*/
const statesObj = {
    AL: {
        name: 'Alabama',
        id: '1',
        bStates: [ 'Florida', 'Georgia', 'Mississippi', 'Tennessee' ],
        imgFile: '',
    },
    AZ: {  
        name: 'Arizona',
        id: '2',
        bStates: [ 'California', 'Colorado', 'Nevada', 'New Mexico', 'Utah' ],
        imgFile: '',
    },
    AR: {
        name: 'Arkansas',
        id: '3',
        bStates: [ 'California', 'Colorado', 'Nevada', 'New Mexico', 'Utah' ],
        imgFile: '',
    },
    CA: {
        name: 'California',
        id: '4',
        bStates: [ 'Arizona', 'Nevada', 'Oregon' ],
        imgFile: '',
    },
    CO: {
        name: 'Colorado',
        id: '5',
        bStates: [ 'Arizona', 'Nevada', 'Oregon' ],
        imgFile: '',
    },
    CT: {
        name: 'Connecticut',
        id: '6',
        bStates: [ 'New York', 'Rhode Island', 'Massachusetts' ],
        imgFile: '',
    },
    DE: {
        name: 'Delaware',
        id: '7',
        bStates: [ 'New Jersey', 'Pennsylvannia', 'Maryland' ],
        imgFile: '',
    },
    FL: {
        name: 'Florida',
        id: '8',
        bStates: [ 'Georgia', 'Alabama'],
        imgFile: '',
    },
    GA: {
        name: 'Georgia',
        id: '9',
        bStates: [ 'North Carolina', 'South Carolina', 'Tennessee', 'Alabama', 'Florida'],
        imgFile: '',
    },
    ID: {
        name: 'Idaho',
        id: '10',
        bStates: [ 'Utah', 'Washington', 'Wyoming', 'Montana', 'Nevada', 'Oregon'],
        imgFile: '',
    },
}; 



/*----- app's state (variables) -----*/
let currentState, statesArr, currentScore, numFailures;





/*----- cached element references -----*/






/*----- event listeners -----*/






/*----- functions -----*/

function init() {
    statesArr = Object.keys(statesObj);
    randomizeStates();
    currentState = statesArr[0];
    currentScore = 0;
    numFailures = 0;
}

function render() {
    //Render statesCard

    //Render Score

    //Render Failures Board

    //Render States Board
    
}

function randomizeStates() {
    statesArr.sort(() => Math.random() - 0.5);
}