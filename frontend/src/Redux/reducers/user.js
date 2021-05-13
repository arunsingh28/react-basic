let intialState = '';

const userData = (state = intialState, action) => {
    switch (action.type) {
        case "ADD": {
            return (
                state = action.payload
            )
        }
        default : return state
    }
}

export default userData