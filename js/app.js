document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("fuelForm");
  const dateInput = document.getElementById("date");
  const gallonsInput = document.getElementById("gallons");
  const priceInput = document.getElementById("price");
  const costPreview = document.getElementById("costPreview");
  const mpgPreview = document.getElementById("mpgPreview");
  const successMessage = document.getElementById("successMessage");

  if (typeof supabase === "undefined") {
  alert("Supabase is NOT connected");
} else {
  alert("Supabase is connected");
}

  async function testSupabaseConnection() {
  const { data, error } = await supabase
    .from("cars")
    .select("*")
    .limit(1);

  if (error) {
    alert("Supabase read failed: " + error.message);
  } else {
    alert("Supabase read worked");
    console.log(data);
  }
}

testSupabaseConnection();

  if (!form || !dateInput || !gallonsInput || !priceInput || !costPreview || !mpgPreview || !successMessage) {
    alert("One or more HTML elements are missing. Check your element IDs.");
    return;
  }

  function setTodayDate() {
    const today = new Date().toISOString().split("T")[0];
    dateInput.value = today;
  }

  function updatePreviews() {
    const gallons = parseFloat(gallonsInput.value);
    const price = parseFloat(priceInput.value);

    if (!isNaN(gallons) && !isNaN(price)) {
      const totalCost = gallons * price;
      costPreview.textContent = `Total Cost: $${totalCost.toFixed(2)}`;
    } else {
      costPreview.textContent = "Total Cost: --";
    }

    mpgPreview.textContent = "MPG: calculated after save";
  }

  setTodayDate();

  gallonsInput.addEventListener("input", updatePreviews);
  priceInput.addEventListener("input", updatePreviews);

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const entry = {
      car: document.getElementById("car").value,
      date: dateInput.value,
      mileage: document.getElementById("mileage").value,
      gallons: gallonsInput.value,
      price: priceInput.value,
      carMPG: document.getElementById("carMPG").value
    };

    console.log(entry);

    successMessage.style.display = "block";

    setTimeout(function () {
      successMessage.style.display = "none";
    }, 2500);

    form.reset();
    setTodayDate();

    costPreview.textContent = "Total Cost: --";
    mpgPreview.textContent = "MPG: --";
  });
});