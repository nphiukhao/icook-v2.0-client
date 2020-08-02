const BrowseService = {
  getResult(query, offset) {
    console.log("FETCHING RESULTS API, oofset:", offset)
    return fetch(
      `https://api.spoonacular.com/recipes/search?query=${query}&number=12&offset=${offset}&apiKey=${process.env.REACT_APP_SPOON}`
    ).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
};

export default BrowseService;