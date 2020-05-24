const BrowseService = {
  getResult(query, offset) {
    console.log("FETCHING RESULTS API")
    return fetch(
      `https://api.spoonacular.com/recipes/search?query=${query}&number=12&offset=${offset}&apiKey=90983f8a705146c39a2acfcb0c8b7f28`
    ).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
};

export default BrowseService;