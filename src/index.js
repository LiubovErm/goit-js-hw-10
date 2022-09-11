import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;
const formEl = document.querySelector('#search-box');
const countryContainer = document.querySelector('.country-info');
const countryList = document.querySelector('.country-list');

formEl.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));



function onSearch(event) {
    event.preventDefault();

    const formValue = event.target.value.trim();
    
    if (!formValue.length) {
    return;
  }

    fetchCountries(name)
        .then(renderCountry)
        .catch(onFetchError)
      
}


function onFetchError(error) {
     Notiflix.Notify.failure('Oops, there is no country with that name');
}

function renderCountry() {
    
}





