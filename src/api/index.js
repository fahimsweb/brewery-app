export const fetchData = async () => {
  try {
    const response = await fetch(
      "https://api.openbrewerydb.org/breweries?per_page=25"
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchFilteredData = async () => {
  try {
    const response = await fetch(
      "https://api.openbrewerydb.org/breweries?per_page=25?by_state=new_york"
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchById = async (id) => {
  try {
    const response = await fetch(
      "https://api.openbrewerydb.org/breweries" + id
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
