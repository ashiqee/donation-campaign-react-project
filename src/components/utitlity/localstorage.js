const getStoredDonation = () => {
  const storeDonations = localStorage.getItem("donations");
  if (storeDonations) {
    return JSON.parse(storeDonations);
  }
  return [];
};

const saveDonation = (id) => {
  const storeDonation = getStoredDonation();
  const exists = storeDonation.find((donId) => donId === id);
  if (!exists) {
    storeDonation.push(id);
    localStorage.setItem("donations", JSON.stringify(storeDonation));
  }
};

const getFoodDonation = () => {
  const foodDonations = localStorage.getItem("Food");
  if (foodDonations) {
    return JSON.parse(foodDonations);
  }
};
const saveFoodDonation = (Price) => {
  const foodDonations = getFoodDonation();
  if (true) {
    foodDonations.push(Price);
    localStorage.setItem("Food", JSON.stringify(foodDonations));
  }
};

export { getStoredDonation, saveDonation, saveFoodDonation };
