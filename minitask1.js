// Ambil elemen form dan result
const form1 = document.getElementById("form1");
const result = document.getElementById("result");

// Tambahkan listener onsubmit pada form
form1.addEventListener("submit", function(event) {
  event.preventDefault(); // Berhentikan perilaku default submit form

  // Ambil nilai input dan buat form data
  const formData = new FormData(form1);

  // Ubah form data menjadi URL-encoded string
  const encodedData = new URLSearchParams(formData).toString();

  // Debugging: tampilkan di console
  console.log("URL-encoded String:", encodedData);

  // Ubah URL tanpa reload halaman
  const newUrl = window.location.origin + window.location.pathname + "?" + encodedData;
  window.history.pushState({}, "", newUrl);

  // Tampilkan hasil di halaman
  result.textContent = "Form Data (URL-encoded): " + encodedData;
});
