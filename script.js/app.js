const form = document.getElementById("offer-form");
const list = document.getElementById("offer-list");
const bestPriceEl = document.getElementById("best-price");

let offers = getOffers();
render();

form.addEventListener("submit", e => {
  e.preventDefault();

  const offer = {
    product: product.value,
    store: store.value,
    price: Number(price.value)
  };

  offers.push(offer);
  saveOffers(offers);
  render();
  form.reset();
});

function render() {
  list.innerHTML = "";
  if (offers.length === 0) return;

  const best = findBestOffer(offers);

  offers.forEach(offer => {
    const li = document.createElement("li");
    li.textContent = `${offer.product} | ${offer.store} | ${formatPrice(offer.price)}`;
    
    if (offer === best) li.classList.add("best");

    list.appendChild(li);
  });

  bestPriceEl.textContent =
    `Menor preço: ${best.store} - ${formatPrice(best.price)}`;
}
