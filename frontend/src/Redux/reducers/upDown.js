// action or logic
const intialState = 0
const changeTheNumber = (state = intialState,action) =>{
    switch(action.type){

        case "INCREMENT" : return state + action.payload

        // payload will be same 
        // action will containe the parms value

        // for decrement another way wrinting 
        case "DECREMENT" : {
            return (
                state - 1
            )
        }
        default : return state
    }
}


// another way to export function...

export default changeTheNumber;
