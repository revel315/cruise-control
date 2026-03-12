document.addEventListener("DOMContentLoaded", function () {

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

    alert("Fuel log saved (test mode)")

  })

})