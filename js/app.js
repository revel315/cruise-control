document.addEventListener("DOMContentLoaded", function () {

  // Set default date to today
  const today = new Date().toISOString().split('T')[0];
  document.getElementById("date").value = today;

  document.getElementById("fuelForm").addEventListener("submit", function(e){

    e.preventDefault();

    const entry = {
        car: document.getElementById("car").value,
        date: document.getElementById("date").value,
        mileage: document.getElementById("mileage").value,
        gallons: document.getElementById("gallons").value,
        price: document.getElementById("price").value,
        carMPG: document.getElementById("carMPG").value
    }

    console.log(entry)

    alert("Fuel log saved (test mode)!")

  })

})