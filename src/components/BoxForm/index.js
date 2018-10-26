import React, { Component } from 'react'
import styled from "styled-components";
// import './index.css'

const Box = styled.div`
    width: 800px;
    height: 340px;
    background: #1abc9d;
    margin: 0px auto;
    padding-top: 80px;

    @media (max-width: 700px) {
        background: palevioletred;
    }
`;
const Form = styled.div`
    width: 400px;
    height: 300px;
    background: #edeff1;
    margin: 0px auto;
    padding-top: 20px;
    border-radius: 10px;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
`
class BoxForm extends Component {
    render () {
        return (
            <div>
                <Box>
                    <Form>
                        {this.props.children}
                    </Form>
                </Box>
            </div>
        )
    }
}

export default BoxForm;