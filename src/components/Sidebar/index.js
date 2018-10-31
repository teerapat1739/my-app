import React, { Component } from 'react'
import './index.css'
import styled from "styled-components";
import { NavLink } from 'react-router-dom'


const HeaderNavbar = styled.div`
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: 100%;
    box-shadow: none;
    background-color: #FC466B;
    position: fixed;
    height: 60px!important;

`

const Content = styled.div`
    display: block;
    height: 100%;
    margin-top: 60px;
    text-align: center;

    @media (max-width: 700px) {
        margin-top: 0px;
    }
`


class SelectLanguage extends Component {
    render() {
        return (
            <div>
                <HeaderNavbar>
                    <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu" />
                    <label for="openSidebarMenu" class="sidebarIconToggle">
                        <div class="spinner diagonal part-1"></div>
                        <div class="spinner horizontal"></div>
                        <div class="spinner diagonal part-2"></div>
                    </label>
                    <div id="sidebarMenu">
                        <ul class="sidebarMenuInner">
                            <NavLink to='/'><li>General</li></NavLink>
                            <NavLink to='/security'><li>Security</li></NavLink>
                        </ul>
                    </div>
                    <Content>
                        <div>{this.props.children}</div>
                    </Content>
                </HeaderNavbar>
            </div>
        )
    }
}

export default SelectLanguage;