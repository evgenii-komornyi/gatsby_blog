import React from 'react';
import { graphql } from 'gatsby';

import {
    Title,
    LineThrough,
    BlogBody,
    BlogTitle,
    BlogLink,
    ItemContainer,
} from '../styles/index.styles';

import Layout from '../components/layout';
import { Badge, Box, Button, Grid } from '@material-ui/core';
import { MenuBook } from '@material-ui/icons';

export default ({ data }) => {
    return (
        <Layout>
            <div>
                <img
                    src="https://scontent.frix2-1.fna.fbcdn.net/v/t1.6435-9/p180x540/173548223_2041017502734505_4003704447261959053_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=0FYx3gJcv24AX88xHbf&_nc_ht=scontent.frix2-1.fna&oh=0dbcf917c2a1c9fbdb6c411d0c92d7f3&oe=61530B13"
                    alt=""
                />
                <Badge
                    badgeContent={`${data.allMarkdownRemark.totalCount} notes`}
                    color="warning"
                >
                    <Button
                        variant="outlined"
                        color="warning"
                        endIcon={<MenuBook fontSize="large" />}
                    >
                        <LineThrough>Little</LineThrough>/Big Demolishers
                    </Button>
                </Badge>
                <Box sx={{ width: '100%' }}>
                    <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    >
                        {data.allMarkdownRemark.edges.map(({ node }) => (
                            <Grid item xs={6} key={node.id}>
                                <ItemContainer>
                                    <BlogBody>
                                        <BlogTitle>
                                            {node.frontmatter.title}{' '}
                                        </BlogTitle>
                                        <p>
                                            {node.frontmatter.description ||
                                                node.excerpt}
                                        </p>
                                        <p>{node.frontmatter.date}</p>

                                        <Button
                                            variant="contained"
                                            color="warning"
                                        >
                                            <BlogLink to={node.fields.slug}>
                                                Read note
                                            </BlogLink>
                                        </Button>
                                    </BlogBody>
                                </ItemContainer>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "DD MMMM, YYYY")
                        description
                    }
                    fields {
                        slug
                    }
                    excerpt(truncate: true)
                }
            }
        }
    }
`;
