export const setParam = (query, value) => {
    let currentURL = new URL(window.location.href)
    currentURL.searchParams.set(query, value)
    if(!value && value !== 0) currentURL.searchParams.delete(query)
    return currentURL.search
}