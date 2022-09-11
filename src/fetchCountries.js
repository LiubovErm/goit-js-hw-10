
const BASE_URL = 'https://restcountries.com/v2/name';

function fetchCountries(name) {
  return fetch(
    `${BASE_URL}/${name}?fields=name,flags,languages,capital,population`
  ).then(response => {
    return response.json();
  });
}

export { fetchCountries };