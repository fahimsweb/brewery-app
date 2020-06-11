import {
  RECEIVE_API_DATA,
  REQUEST_SORT_DATA,
  REQUEST_FILTER_DATA,
} from "../actions";

const initialState = {
  appliedFilters: [],
};

function sortAsc(arr, field) {
  return arr.sort(function (a, b) {
    if (a[field] > b[field]) return 1;

    if (b[field] > a[field]) return -1;

    return 0;
  });
}

function sortDesc(arr, field) {
  return arr.sort(function (a, b) {
    if (a[field] > b[field]) return -1;

    if (b[field] > a[field]) return 1;

    return 0;
  });
}

function addFilterIfNotExists(filter, appliedFilters) {
  let index = appliedFilters.indexOf(filter);
  if (index === -1) appliedFilters.push(filter);

  return appliedFilters;
}

function removeFilter(filter, appliedFilters) {
  let index = appliedFilters.indexOf(filter);
  appliedFilters.splice(index, 1);
  return appliedFilters;
}

export default (state = {}, { type, payload }) => {
  switch (type) {
    case RECEIVE_API_DATA:
      return payload;
    case REQUEST_SORT_DATA:
      const sortByAlphabetState = Object.assign({}, state);
      let sortedAlphabetArr =
        payload.direction === "asc"
          ? sortAsc(state.filteredProducts, "name")
          : sortDesc(state.filteredProducts, "name");

      sortByAlphabetState.filteredProducts = sortedAlphabetArr;
      sortByAlphabetState.appliedFilters = addFilterIfNotExists(
        REQUEST_SORT_DATA,
        sortByAlphabetState.appliedFilters
      );
      sortByAlphabetState.appliedFilters = removeFilter(
        REQUEST_SORT_DATA,
        sortByAlphabetState.appliedFilters
      );

      return sortByAlphabetState;
    default:
      return state;
  }
};
