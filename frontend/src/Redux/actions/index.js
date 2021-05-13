
// action is for creating action or opration
// like what will the action or oprarion 
// right now in this file there are two actions

// all logic will not define here 



// if code is of multiple line then write like this
// if data send from redux to another componets
export const incNumber = (num) => {
    return {
        type: "INCREMENT",
        payload: num
    }
}


// if code is of one line then write like this
export const decNumber = () => {
    return {
        type: "DECREMENT"
    }
}


// for storing user data

export const userAdd = (user) => {
    return {
        type : "ADD",
        payload : user
    }
}