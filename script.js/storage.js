function getOffers() {
  return JSON.parse(localStorage.getItem("offers")) || [];
}

function saveOffers(offers) {
  localStorage.setItem("offers", JSON.stringify(offers));
}
