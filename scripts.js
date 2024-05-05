const filters = ['Slots', 'A1', 'MGA'];
const showAllFiltersBtn = document.querySelector('#all-filters-btn');
const removeAllFiltersBtn = document.querySelector('#clear-all-btn');

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
