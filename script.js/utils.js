function formatPrice(value) {
  return `R$ ${value.toFixed(2)}`;
}

function findBestOffer(offers) {
  return offers.reduce((best, current) =>
    current.price < best.price ? current : best
  );
}
