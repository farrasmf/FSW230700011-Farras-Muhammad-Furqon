document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.getElementById("loginButton");
  const registrationButton = document.getElementById("registrationButton");
  const backAssetDetailButton = document.getElementById("backAssetDetailButton");
  const backEditAssetButton = document.getElementById("backEditAssetButton");

  if (loginButton) {
    loginButton.addEventListener("click", function () {
      window.location.href = "/login";
    });
  }

  if (registrationButton) {
    registrationButton.addEventListener("click", function () {
      window.location.href = "/registration";
    });
  }

  if (backAssetDetailButton) {
    backAssetDetailButton.addEventListener("click", function () {
      window.location.href = "/database";
    });
  }

  if (backEditAssetButton) {
    backEditAssetButton.addEventListener("click", function () {
      window.location.href = "/database";
    });
  }
});



$("#registration-form").submit(function (event) {
  event.preventDefault();

  const full_name = $("#inputFullName").val();
  const user_name = $("#inputUserName").val();
  const password = $("#inputPassword").val();
  const role = $("#inputRole").val();

  // Kirim data registrasi ke server menggunakan AJAX atau fetch
  $.ajax({
    url: "/api/v1/admins/registration", // Ganti dengan rute API registrasi Anda
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify({ full_name, user_name, password, role }),
    success: function (response) {
      // Tampilkan pesan sukses atau redirect ke halaman login
      alert("Registrasi berhasil! Silakan masuk.");
      window.location.href = "/";
    },
    error: function (error) {
      console.error("Terjadi kesalahan: " + JSON.stringify(error));
      alert("Gagal mendaftar. Silakan coba lagi.");
    },
  });
}
);

// Function Add Asset
$("#addAsset-form").submit(function (event) {
  event.preventDefault(); // Menghentikan pengiriman formulir secara default

  // Mengambil data dari formulir
  const admin_id = $("#inputAdmin").val();
  const name = $("#inputName").val();
  const type = $("#inputType").val();
  const address = $("#inputAddress").val();
  const description = $("#inputDescription").val();
  const photos = $("#inputPhotos").val();
  const lat = $("#inputLat").val();
  const is_active = $("#inputStatus").val();
  const long = $("#inputLong").val();

  // Mengirim data ke API menggunakan AJAX
  $.ajax({
    url: "/api/v1/assets", // Ganti dengan URL API sesuai dengan struktur Anda
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify({ admin_id, name, type, address, description, photos, lat, is_active, long }),
    success: function (response) {
      // Tindakan setelah berhasil
      alert("Asset berhasil ditambah.");
      // Redirect ke halaman lain atau lakukan sesuatu yang sesuai kebutuhan Anda
      window.location.href = "/database";
    },
    error: function (error) {
      // Tindakan jika terjadi kesalahan
      console.error("Terjadi kesalahan: " + JSON.stringify(error));
      alert("Gagal menyimpan Asset.");
    },
  });
});

// Function delete asset
function deleteAsset(id) {
  $.ajax({
    url: "/api/v1/assets/" + id, // Ganti dengan URL API sesuai dengan struktur Anda
    type: "DELETE",
    success: function (response) {
      // Tindakan setelah berhasil
      alert("Asset berhasil dihapus.");
      // Redirect ke halaman lain atau lakukan sesuatu yang sesuai kebutuhan Anda
      window.location.href = "/database";
    },
    error: function (error) {
      // Tindakan jika terjadi kesalahan
      console.error("Terjadi kesalahan: " + JSON.stringify(error));
      alert("Gagal menghapus buku.");
    },
  });
}

// Function for button view asset
function viewAsset(id) {
  window.location.href = "/assetDetail/" + id;
}

// Function for button edit asset
function editAssetPage(id) {
  window.location.href = "/editAsset/" + id;
}

// Function Edit Asset
$("#editAsset-form").submit(function (event) {
  event.preventDefault(); // Menghentikan pengiriman formulir secara default

  // Mengambil data dari formulir
  const url = window.location.href;
  const id = url.substring(url.lastIndexOf("/") + 1);
  console.log(id);
  const admin_id = $("#editAdmin").val();
  const name = $("#editName").val();
  const type = $("#editType").val();
  const address = $("#editAddress").val();
  const description = $("#editDescription").val();
  const photos = $("#editPhotos").val();
  const lat = $("#editLat").val();
  const is_active = $("#editStatus").val();
  const long = $("#editLong").val();

  // Mengirim data ke API menggunakan AJAX
  $.ajax({
    url: "/api/v1/assets/" + id, // Ganti dengan URL API sesuai dengan struktur Anda
    type: "PUT",
    contentType: "application/json",
    data: JSON.stringify({ id, admin_id, name, type, address, description, photos, lat, is_active, long }),
    success: function (response) {
      // Tindakan setelah berhasil
      alert("Asset berhasil diedit.");
      // Redirect ke halaman lain atau lakukan sesuatu yang sesuai kebutuhan Anda
      window.location.href = "/database";
    },
    error: function (error) {
      // Tindakan jika terjadi kesalahan
      console.error("Terjadi kesalahan: " + JSON.stringify(error));
      alert("Gagal mengedit Asset.");
    },
  });
});
