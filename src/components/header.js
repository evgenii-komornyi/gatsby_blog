import PropTypes from 'prop-types';
import React from 'react';

import {
    HeaderContainer,
    LinkContainer,
    DivContainer,
} from '../styles/header.styles';

const Header = ({ siteTitle }) => (
    <HeaderContainer>
        <DivContainer>
            <h1 style={{ margin: 0 }}>
                <LinkContainer to="/">{siteTitle}</LinkContainer>
            </h1>
        </DivContainer>
    </HeaderContainer>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
