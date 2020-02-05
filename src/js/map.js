let isDescription = false;
let $mapConteneur = document.querySelector('.map__countries');
let previousSelection = document.querySelector(
  '.map__element.map__element--selected'
);
let countriesDescription = document.querySelectorAll('.map__element');
console.log(countriesDescription);
(function showCountryDescription() {
  let countries = document.querySelectorAll('.productor');

  for (let i = 0; i < countries.length; i++) {
    countries[i].addEventListener('mouseover', function() {
      if (!isDescription) {
        $mapConteneur.classList.add('is-visible');
        previousSelection.classList.remove('map__element--selected');
        countriesDescription[i].classList.add('map__element--selected');
        previousSelection = countriesDescription[i];
        setTimeout(() => {
          isDescription = true;
        }, 0.1);
      }
    });
  }
})();

(function closeCountryDescription() {
  document.querySelectorAll('.close').forEach(element => {
    element.addEventListener('mouseover', function() {
      if (isDescription) {
        previousSelection.classList.remove('map__element--selected');
        $mapConteneur.classList.remove('is-visible');
        isDescription = false;
      }
    });
  });
})();

window.addEventListener('resize', function() {
  if (window.innerWidth > 768) {
    countriesDescription.forEach(element => {
      element.classList.remove('map__element--selected');
    });
    return;
  }
});
