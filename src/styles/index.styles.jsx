import { styled } from '@material-ui/core/styles';
import { Link } from 'gatsby';
import { Paper } from '@material-ui/core';

const Title = styled('h1')({
    display: 'inline-block',
});

const BlogTitle = styled('h3')({
    marginBottom: 20,
    color: '#fff',
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

const ItemContainer = styled(Paper)(({ theme }) => {
    console.log(theme);
    return {
        ...theme.typography.body2,
        background: `linear-gradient(94deg, rgba(111,127,128,1) 0%, rgba(253,187,45,1) 100%)`,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    };
});

export { Title, BlogTitle, LineThrough, BlogLink, BlogBody, ItemContainer };
