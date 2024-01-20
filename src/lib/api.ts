const API_URL = <string>process.env.WORDPRESS_API_URL;

export const fetchAPI = async (query: string, { variables }: Record<string, any> = {}) => {
    const res = await fetch(API_URL || 'https://wpheadless.anas-aftis.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    });

    const json = await res.json();

    if (json.errors) {
        console.error(json.errors);
        console.log("🚀 ~ fetchAPI ~ json.errors:", json.errors)
        throw new Error('Failed to fetch API');
    }

    return json.data;
}

