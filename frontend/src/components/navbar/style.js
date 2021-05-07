import style from 'styled-components'



export const Nav = style.nav`
    height : 50px;
    line-height : 50px;
    background : #ff6396;
    padding : 0px 100px;
    display : flex;
    justify-content: space-between;
    align-item :center;
`


export const Brand = style.a`
    color : #fff;    
    &:hover{
        cursor:pointer;
        background : #ff4b86;
    }
`

export const Button = style.button`
    border : 1px solid #fff;
    padding : 0px 25px;
    border-radius : 40px;
    height : 40px;
    background : transparent;
    color : #fff;
    cursor : pointer;
    transition : all .2s ease-in-out;

    &:hover{
        background : #fff;
        color : #ff6396
    }

`

export const Left = style.div`
    width : 250px;
    display: flex;
    justify-content: space-around;
    align-items :center;
`