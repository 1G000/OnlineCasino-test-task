import { casinoCards, filters } from './data.js';
const slicedCards = casinoCards.slice(0, 4);

const showAllFiltersBtn = document.getElementById('all-filters-btn');
const removeAllFiltersBtn = document.getElementById('clear-all-btn');
const licenseBtn = document.getElementById('license-btn');
const checkboxes = document.querySelectorAll('.checkbox');
const cardsList = document.querySelector('.casino-cards-list');
const showMoreBtn = document.getElementById('show-more-btn');

const showMoreBtnHandler = () => {
  const container = document.querySelector('.show-more-btn_container');
  cardsList.innerHTML = '';
  generateCards(casinoCards);
  container.innerHTML = '';
  const hideElementsBtn = document.createElement('button');
  hideElementsBtn.innerHTML = 'Zeig weniger';
  hideElementsBtn.classList.add('show-more-btn');
  hideElementsBtn.addEventListener('click', hideElements);
  container.append(hideElementsBtn);
  activateShowMoreBtn();
};

showMoreBtn.addEventListener('click', showMoreBtnHandler);

const hideElements = () => {
  const container = document.querySelector('.show-more-btn_container');
  cardsList.innerHTML = '';
  container.innerHTML = '';
  generateCards(slicedCards);
  const showMoreBtn = document.createElement('button');
  showMoreBtn.classList.add('show-more-btn');
  showMoreBtn.innerHTML = 'Zeig mehr';
  container.append(showMoreBtn);
  showMoreBtn.addEventListener('click', showMoreBtnHandler);
  activateShowMoreBtn();
};

const generateCards = (cards) => {
  cards.forEach((card, index) => {
    const cardItem = document.createElement('li');
    cardItem.classList.add('casino-card-item');
    cardItem.innerHTML = `
<div class="card-item-section_top">
                        <span class="first-column">${index + 1}</span>
                        <img class="second-column" src=${card.logoSrc} alt=${
      card.alt
    }></img>
                        <div class="third-column">
                            <div class="third-column_top">
                                <span class="small-text star-verification">Expert Bewertung</span><img
                                    src='./img/Verification.svg' alt="">
                            </div>
                            <div class="third-column_middle">
                                <img src="./img/star.svg">
                                <span class="rating-value">${card.rating}</span>
                            </div>
                            <span class="small-text third-column_bottom">${
                              card.thirdColumnBottom
                            }</span>
                        </div>
                        <div class="four-column">
                            <div class="four-column_left"><span class="four-column_left-top">${
                              card.fourColumnLeftTop
                            }</span><img
                                    src=${card.fourColumnImgSrc} alt=""></div>
                            <div class="four-column_right"><img src="./img/welcome-bonus.svg"><span>${
                              card.fourColumnRightText
                            }</span></div>
                        </div>
                        <div class="five-column"><button type="button" class="play-btn">JETZT SPIELEN</button></div>
                      </div>
                      <div class="show-more">
                        <span class="horizontal-line"></span>
                        <span class="small-text">Mehr Infos</span>
                        <span class="arrow-down"></span>
                      <span class="horizontal-line"></span>
                      </div>
                    <div class="card-item-section_bottom min">
                        <div class="bottom-section_first-column">
                            <span>Nützliche Informationen</span>
                            <div>
                              <span><img src="./img/V.svg" alt="">Bestes Online Casino German</span>
                              <span><img src="./img/V.svg" alt="">Einzahlungsbonus inkl. Free Spins</span>
                              <span><img src="./img/V.svg" alt="">Hauseigene Casino Spiele</span>
                            </div>
                        </div>
                        <div class="bottom-section_second-column">
                            <span>Zahlungsarten</span>
                            <div>
                              <div><img src="./img/logo1.svg" alt=""></div>
                              <div><img src="./img/logo2.svg" alt=""></div>
                              <div><img src="./img/logo3.svg" alt=""></div>
                              <div><img src="./img/logo4.svg" alt=""></div>
                              <div><img src="./img/logo5.svg" alt=""></div>
                              <div><img src="./img/logo6.svg" alt=""></div>
                            </div>
                        </div>
                        <div class="bottom-section_third-column">
                        <span>Krypto-Zahlungen</span>
                            <div>
                              <div><img src="./img/logo7.svg" alt=""></div>
                              <div><img src="./img/logo8.svg" alt=""></div>
                              <div><img src="./img/logo9.svg" alt=""></div>
                              <div><img src="./img/logo10.svg" alt=""></div>
                            </div>
                        </div>
                        <div class="bottom-section_four-column">
                          <div class="bottom-section_four-row">
                            <div class="bottom-section_four-col1">
                              <span class="regular">Auszahl.Dauer</span>
                              <span class="bold">Sofort</span>
                            </div>
                            <div class="bottom-section_four-col2">
                              <span class="regular">Jahr</span>
                              <span class="bold">2015</span>
                            </div>
                          </div>
                          <div class="bottom-section_four-row">
                            <div class="bottom-section_four-col1">
                              <span class="regular">Auszahl. Limit</span>
                              <span class="bold">20000€/Monat:</span>
                            </div>
                            <div class="bottom-section_four-col2">
                              <span class="regular">Lizenzart</span>
                              <span class="bold">MGA</span>
                            </div>
                          </div>
                    </div>
`;
    cardsList.append(cardItem);
  });
};

generateCards(slicedCards);

const activateShowMoreBtn = () => {
  const showMores = document.querySelectorAll('.show-more');
  showMores.forEach((showMore) =>
    showMore.addEventListener('click', (e) => {
      const card = e.target.parentElement;
      const cardBottomSection = card.querySelector('.card-item-section_bottom');
      cardBottomSection.classList.toggle('min');
      showMore.classList.toggle('pressed');
    }),
  );
};
activateShowMoreBtn();

checkboxes.forEach((label) => {
  const affiliateDisclosure = document.querySelector(
    '.affiliate-disclosure_container',
  );
  label.addEventListener('click', () => {
    let selectedCheckboxes = document.querySelectorAll(
      'input[type=checkbox]:checked',
    );
    if (!selectedCheckboxes.length) {
      affiliateDisclosure.classList.add('hidden');
    } else affiliateDisclosure.classList.remove('hidden');
  });
});

document.addEventListener('click', (e) => {
  const dropdown = document.querySelector('.dropdown');
  const licenseBtn = document.getElementById('license-btn');
  if (!dropdown.contains(e.target) && e.target !== licenseBtn) {
    if (licenseBtn.classList.contains('active')) {
      licenseBtn.classList.toggle('active');
    }
    dropdown.classList.add('hidden');
  }
});

const hideRmvAllFitersBtn = () => {
  const activeFilters = document.querySelectorAll('.active-filter-item');
  if (activeFilters.length === 0) {
    removeAllFiltersBtn.classList.remove('clear-all-btn_visible');
    removeAllFiltersBtn.classList.add('clear-all-btn_hidden');
  }
};

const removeFilter = (e) => {
  const filter = e.target.parentElement;
  filter.classList.add('active-filter-item_hidden');
  filter.classList.remove('active-filter-item');
  hideRmvAllFitersBtn();
};

const generateAllFilters = () => {
  const filtersList = document.querySelector('.active-filters-items');
  filters.forEach((filter) => {
    const filterItem = document.createElement('li');
    filterItem.classList.add('active-filter-item_hidden');
    filterItem.classList.add('filter');
    const filterTextContent = document.createElement('span');
    filterTextContent.classList.add('active-filter_textcontent');
    filterTextContent.innerHTML = filter;
    const cross = document.createElement('div');
    cross.classList.add('active-filter-item_cross');
    cross.title = 'Filter entfernen';
    cross.addEventListener('click', removeFilter);
    filterItem.append(filterTextContent, cross);
    filtersList.append(filterItem);
  });
};

generateAllFilters();

showAllFiltersBtn.addEventListener('click', () => {
  removeAllFiltersBtn.classList.remove('clear-all-btn_hidden');
  removeAllFiltersBtn.classList.add('clear-all-btn_visible');
  const filtersItems = document.querySelectorAll('.filter');
  filtersItems.forEach((filter) => {
    filter.classList.remove('active-filter-item_hidden');
    filter.classList.add('active-filter-item');
  });
});

removeAllFiltersBtn.addEventListener('click', () => {
  const filtersItems = document.querySelectorAll('.filter');
  filtersItems.forEach((filter) => {
    filter.classList.add('active-filter-item_hidden');
    filter.classList.remove('active-filter-item');
  });
  hideRmvAllFitersBtn();
});

licenseBtn.addEventListener('click', () => {
  const dropdown = document.querySelector('.dropdown');
  dropdown.classList.toggle('hidden');
  licenseBtn.classList.toggle('active');
});
