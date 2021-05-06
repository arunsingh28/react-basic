import style from 'styled-components'



export const Container = style.div`
    display : flex;
    justify-content : center;
`

export const Form = style.form`
    padding : 50px 50px;
    width : 500px;
    display : flex;
    flex-direction: column;
    align-items: center;
    position : relative;
`


export const Input = style.input`
    height : 40px;
    background: #fff;
    width: 100%;
    margin-left : 10px;
    border : 1px solid #c1c1c1;
    border-radius : 4px;
    padding-left : 5px;
    margin-top : 20px;
`

export const Button = style.button`
    height : 40px;
    width : 100%;
    background: transparent;
    border-radius : 6px;
    border : 1px solid palevioletred;
    color : palevioletred;
    margin-left : 10px;
    margin-top : 20px;
    cursor : pointer;
    transition : all .1s ease-in-out;

    &:hover{
        color : #fff;
        background : palevioletred;
    }
`
