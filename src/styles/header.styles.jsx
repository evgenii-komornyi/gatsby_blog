import { styled } from '@material-ui/styles';
import { Link } from 'gatsby';

const HeaderContainer = styled('header')({
    background: `linear-gradient(94deg, rgba(111,127,128,1) 0%, rgba(253,187,45,1) 100%)`,
    marginBottom: `1.45rem`,
});

const DivContainer = styled('div')({
    margin: `0 auto`,
    maxWidth: 960,
    padding: `1.45rem 1.0875rem`,
});

const LinkContainer = styled(Link)({
    color: `white`,
    textDecoration: `none`,
});

export { HeaderContainer, LinkContainer, DivContainer };
