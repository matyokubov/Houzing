const { REACT_APP_BASE_URL } = process.env

export const useRequest = (setState) => {
    const request = async ({me, url, method="GET", body, token, headers}) => {
        if (token) headers.Authorization = `Bearer ${localStorage.getItem(token)}`;
        const options = {
            method,
            headers: {...headers, "Content-Type": "application/json"},
            body
        };
        return fetch(
            `${
                me ? "https://houzing-app.herokuapp.com/api" : REACT_APP_BASE_URL
            }${url}`,
            options
        ).then(res => res.json())
        .catch(err => {
            setState({err, ok: "unknownError"})
        });
    };
    return request
}

export default useRequest;