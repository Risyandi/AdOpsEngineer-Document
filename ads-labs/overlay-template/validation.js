// Berikut adalah sebuah initial untuk teks,
// yang akan muncul jika beberapa kriteria terpenuhi.
validation.init({
    messageValueMissing: 'Field tidak boleh kosong',
    messageValueMismatchEmail: 'Email anda tidak valid',
    messageTooShort: 'Teks yang anda masukan {length} terlalu pendek, minimal jumlah karakter {minLength}',
    disableSubmit: true,
    onSubmit: function(form, fields) {
        toggleSubmit(form);
    }
});

// Berikut adalah sebuah fungsi ketika melakukan sebuah submit
function toggleSubmit(form) {
    var error = document.querySelectorAll('input.error, select.error, text.error');
    if (error.length > 0) {
        return false;
    } else {
        form.submit();
    }
};

