import { styled } from '@material-ui/core/styles';
import { Link } from 'gatsby';
import { Paper } from '@material-ui/core';

const Title = styled('h1')({
    display: 'inline-block',
});

const BlogTitle = styled('h3')({
    marginBottom: 20,
    color: '#000',
});

const LineThrough = styled('span')({
    textDecoration: 'line-through',
});

const BlogLink = styled(Link)({
    textDecoration: 'none',
    color: 'inherit',
});

const BlogBody = styled('div')({
    marginBottom: 50,
});

const ItemContainer = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    background: 'rgba(0,0,0,.2)',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export { Title, BlogTitle, LineThrough, BlogLink, BlogBody, ItemContainer };
