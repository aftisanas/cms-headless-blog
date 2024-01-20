export interface Posts {
    excerpt: string,
    slug: string,
    title: string,
    date: string,
    author: {
        node: {
            name: string,
        },
    },
    tags: {
        nodes: {
            name: string,
        },
    },
}

export interface singlePost {
    content: string,
    title: string,
    date: string,
    featuredImage: {
        node: {
            sourceUrl: string,
        },
    },
    author:{
        node: {
            name: string,
        },
    },
    tags:{
        nodes: [
            { name: string },
        ],
    },
}