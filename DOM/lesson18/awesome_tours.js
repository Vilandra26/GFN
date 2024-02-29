document.addEventListener('DOMContentLoaded', function() {
    const pois = document.querySelectorAll('#pois img');
    const infoSection = document.getElementById('info');

    pois.forEach(poi => {
        poi.addEventListener('mouseenter', function() {
            const countryCode = poi.getAttribute('data-country-code');
            const flagImagePath = `img/${countryCode}.png`;
            const title = poi.getAttribute('alt');
            const description = poi.getAttribute('data-description');
            const flagName = poi.getAttribute('data-flag-name');

            infoSection.innerHTML = `<h1><img src="${flagImagePath}" alt="${flagName}" /> ${title}</h1>
                <p>${description}</p>
                
            `;
        });
    });
});