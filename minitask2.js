
// Ambil elemen form, button, dan output
const form2 = document.getElementById("form2");
const submitBtn = document.getElementById("submitBtn");
const output = document.getElementById("output");

// Tambahkan onclick listener pada button
submitBtn.addEventListener("click", function(event) {
  event.preventDefault(); // Berhentikan perilaku default form

  // Ambil nilai input dalam bentuk object JSON
  const jsonData = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value
  };

  // Ubah object JSON menjadi URL-encoded string
  const encodedJSON = new URLSearchParams(jsonData).toString();

  // Debugging: tampilkan di console
  console.log("URL-encoded String:", encodedJSON);

  // Ubah URL tanpa reload halaman
  const newUrl = window.location.origin + window.location.pathname + "?" + encodedJSON;
  window.history.pushState({}, "", newUrl);

  // Tampilkan hasil di halaman
  output.textContent = "JSON Data (URL-encoded): " + encodedJSON;

  // Debugging: tampilkan di console
  console.log("URL-encoded JSON:", encodedJSON);
});