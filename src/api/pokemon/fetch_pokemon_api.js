const host = process.env.REACT_APP_POKE_API_HOST;
const version = process.env.REACT_APP_POKE_API_VERSION;

const getURL = (resource = null) =>
    new URL(
        `https://${host}/api/v${version}/${resource || ''}`
    );

export const list = async (params = { offset: 0, limit: 10 }) => {
    try {
        const resource = getURL('pokemon');
        resource.search = new URLSearchParams(params).toString();

        const results = await fetch(resource);
        const asJson = await results.json();

        return asJson;
    } catch (error) {
        return null;
    }
};

export const detail = async (resource) => {
    try {
        const results = await fetch(resource);
        const asJson = await results.json();

        return asJson;
    } catch (error) {
        return null;
    }
};
