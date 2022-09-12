function fetchCountries(name) {
  const BASE_URL = 'https://restcountries.com/v3.1/name';
  const FILTERS = '?fields=name,capital,flags,languages,population';

  return fetch(`${BASE_URL}/${name}${FILTERS}`)
    .then(response => response.json())
    .catch(error => {console.log(error);
});
}

export { fetchCountries };