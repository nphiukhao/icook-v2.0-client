const BrowseService = {
  getResult(query, offset, diet) {
    console.log("FETCHING RESULTS API, perams:", query, offset, diet)
    return fetch(
      `https://api.spoonacular.com/recipes/search?query=${query}&diet=${diet}&number=12&offset=${offset}&apiKey=${process.env.REACT_APP_SPOON}`
    ).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
};

export default BrowseService;