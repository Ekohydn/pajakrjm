const formVerifikasi = document.getElementById('form-verifikasi');
const btnVerifikasi = document.getElementById('btn-verifikasi');
const hasilVerifikasi = document.getElementById('hasil-verifikasi');

btnVerifikasi.addEventListener('click', (e) => {
	e.preventDefault();
	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;

	// Verifikasi username dan password
	if (username === 'admin' && password === 'admin') {
		hasilVerifikasi.innerHTML = 'Login berhasil!';
        window.location.href = 'home.html';
	} else {
		hasilVerifikasi.innerHTML = 'Login gagal!';
	}
});