import React, { Component } from 'react'
import styled from "styled-components";
// import './index.css'

const Box = styled.div`
    width: 800px;
    height: 100%;
    background: #1abc9d;
    margin: 0px auto;
    padding-top: 80px;

    @media (max-width: 700px) {
        width: 100%;
    }
`;
const Form = styled.div`
    width: 500px;
    height: auto;
    background: #edeff1;
    margin: 0px auto;
    padding-top: 20px;
    border-radius: 10px;
    text-align: center;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;

    @media (max-width: 768px) {
        width: 100%;
    }
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