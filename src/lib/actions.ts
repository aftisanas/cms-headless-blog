import { fetchAPI } from "./api"

export const getPosts = async (first: Number = 10) => {
    const data = await fetchAPI(
        `query FetchPosts($first: Int = 10) {
            posts(first: $first) {
                nodes {
                    excerpt
                    slug
                    title
                    date
                    tags {
                        nodes {
                            name
                        }
                    }
                    author {
                        node{
                            name
                        }
                    }
                    featuredImage {
                        node {
                            sourceUrl
                        }
                    }
                }
            }
        }`,
        {
            variables: {
                first,
            },
        },
    );

    return data?.posts?.nodes;
}

export const getPostBySlug = async (slug: string) => {
    const data = await fetchAPI(
        `query GetPost($id: ID = "") {
            post(id: $id, idType: SLUG) {
                content
                featuredImage {
                    node {
                        sourceUrl
                    }
                }
                slug
                title
                date
                author {
                    node {
                        name
                    }
                }
                tags {
                    nodes {
                        name
                    }
                }
            }
        }`,
        {
            variables: {
                id: slug,
            },
        }
    );

    return data?.post;
}