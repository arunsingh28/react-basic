import React from 'react'
import { Container, Box, Input, Button } from './form/style'
import { useSelector, useDispatch } from 'react-redux'
import { decNumber, incNumber } from '../Redux/actions/index'

const UpDown = () => {
    const myState = useSelector((state)=> state.changeTheNumber)
    const dispatch = useDispatch()

    return (
        <Container>
            <Box>
                <p style={{marginTop:'70px'}}>Redux counter</p>
                <Button
                onClick={()=> dispatch(incNumber(5))}
                >+</Button>
                <Input value={myState} />
                <Button
                onClick={()=> dispatch(decNumber())}
                >-</Button>
            </Box>
        </Container>
    )
}

export default UpDown
