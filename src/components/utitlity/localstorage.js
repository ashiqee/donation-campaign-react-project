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

export { getStoredDonation, saveDonation };
