const storageName = 'c';

const saveToStorage = city => {
  const newCities = JSON.parse(localStorage.getItem(storageName)) || [];
  newCities.push(city);
  localStorage.setItem(storageName, JSON.stringify(newCities));
};

const removeFromStorage = city => {
  const cities = JSON.parse(localStorage.getItem(storageName));
  const newCities = cities.filter(value => {
    return value.toUpperCase() !== city.toUpperCase();
  });
  localStorage.setItem(storageName, JSON.stringify(newCities));
};

const getFromStorage = () => {
  return JSON.parse(localStorage.getItem(storageName));
};

export { saveToStorage, removeFromStorage, getFromStorage };
