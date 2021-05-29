fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => countryDetails(data));

const countryDetails = countries => {
    const countriesDiv = document.getElementById('countrydetails');
    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];
        const countryDiv= document.createElement('div');
        countryDiv.className = "country";
        const countryInfo = 
        `<h3 class="country-name">${country.name}</h3>
        <p class="capital-name">${country.capital}</p>
        <button onclick="displayCountryDetails('${country.name}')">Details</button>
        `
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    }
}

const displayCountryDetails = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => renderCountryInfo(data[0]));
}

const renderCountryInfo = country => {
    const countrydiv = document.getElementById('countrydetail');
    countrydiv.innerHTML = `
    <h3 class="country-name">${country.name}</h3>
    <p class="capital-name">Population: ${country.population}</p>
    <img src = "${country.flag}">
    `
}