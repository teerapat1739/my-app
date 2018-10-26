import React, { Component } from 'react'

import Sidebar from '../../components/Sidebar'
import BoxForm from '../../components/BoxForm'
import InputPassword from "../../components/InputPassword";
import styled from "styled-components";

const Box = styled.div`
    width: 800px;
    height: 340px;
    background: #1abc9d;
    margin: 0px auto;
    padding-top: 20px;

    @media (max-width: 700px) {
        background: palevioletred;
    }
`;
const Form = styled.div`
    width: 370px;
    height: auto;
    background: #edeff1;
    margin: 0px auto;
    padding: 10px 10px 10px 20px;
    border-radius: 10px;
    text-align: left;
    font-size: 15px;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
`

const Submit = styled.input`
    display: block;
    background: #1abc9d;
    width: 314px;
    padding: 12px;
    cursor: pointer;
    color: #fff;
    border: 0px;
    margin: auto;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    font-size: 17px;
    transition: all 0.3s ease;

    &:hover {
        background: #09cca6
    }
`

class Security extends Component {
    render() {
        return (
        <Sidebar>
            <BoxForm>
                <div class="header-general">Current password</div>
                <InputPassword />
                <div class="header-general">New Password</div>
                <InputPassword />
                <InputPassword />
            </BoxForm>
            <Box>
                <Form>
                    <div class="describeDeletAccount">
                        <p>
                            Once the deletion process begins,
                            you won't be able to access your
                            account or retrieve any of the
                            settings you have changed
                        </p>
                    </div>

                   <Submit type="submit" value="Delete this Account" />
                </Form>
            </Box>
        </Sidebar>
        )
    }
}

export default Security;