import React, { Fragment } from 'react';
import { Navbar, Container, Columns } from 'react-bulma-components';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaSearch, FaHome, FaHeart } from "react-icons/fa";


const NavbarWithBorder = styled(Navbar)`
  border-top-color: white !important;
  border-top-style: solid;
  border-top-width: 1px;
  border-margin-bottom-width:10px;
  
  
  
  
`
const ColumnsFullWidth = styled(Columns)`
width: 100%;
padding-top: 15px;
  
  
`

const NavbarFooter = () => {
    return (
        <Fragment>
            <NavbarWithBorder fixed='bottom' color='dark'>
                <Container className='container is-fluid'>
                    <ColumnsFullWidth className='is-mobile is-vcentered'>
                        <Columns.Column className='has-text-centered'>
                            <Link to='/discovery' className='has-text-white'>
                                <FaHome size='17px' />
                            </Link>
                        </Columns.Column>

                        <Columns.Column className='has-text-centered'>
                            <Link to='/search' className='has-text-white'>
                                <FaSearch size='17px' />
                            </Link>
                        </Columns.Column>

                        <Columns.Column className='has-text-centered'>
                            <Link to='/favorites' className='has-text-white'>
                                <FaHeart size='17px' />
                            </Link>
                        </Columns.Column>
                    </ColumnsFullWidth>
                </Container>
            </NavbarWithBorder>
        </Fragment>
    );
}

export default NavbarFooter;