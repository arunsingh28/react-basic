import * as yup from "yup"

export const registerSchema = yup.object().shape({


    username : yup.string().required(),
    password : yup.string().min(4).max(15).required(),


   
    /* for email
     email : yup.string().email().required() */

})
