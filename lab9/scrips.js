document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector('form');
    const email = document.querySelector('.email');
    const tel = document.querySelector('.tel');
    const radionBtns = document.querySelectorAll('.radio');
    const select = document.querySelector('select');
    const textArea = document.querySelector('textarea');

    const formValue = {
        email: '',
        tel: '',
        review: '',
        city: '',
        description: ''
    }

    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    const TEL_REGEXP = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

    const validateEmail = (value) => {
        return EMAIL_REGEXP.test(value);
    }

    const validateTel = (value) => {
        return TEL_REGEXP.test(value);
    }

    email.addEventListener('input', (e) => {
        email.value = e.target.value;
        if (validateEmail(e.target.value)) {
            formValue.email = e.target.value;
            email.style.border = '3px solid green';
        } else {
            email.style.border = '3px solid red';
        }
    });

    tel.addEventListener('input', (e) => {
        tel.value = e.target.value;
        if (validateTel(e.target.value)) {
            formValue.tel = e.target.value;
            tel.style.border = '3px solid green';
        } else {
            tel.style.border = '3px solid red';
        }
    });
    
    radionBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (e.target.tagName === 'INPUT') {
                formValue.review = e.target.value;
            }
        });
    });

    select.addEventListener('change', (e) => {
        formValue.city = e.target.value;
    });

    textArea.addEventListener('input', (e) => {
        formValue.description = e.target.value;
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (formValue.city && formValue.email && formValue.tel && formValue.review) {
            e.target.reset();
            console.log(formValue);

            // Очистка данных
            for (key in formValue) {
                formValue[key] = '';
            }
            // Очистка стилей для input
            tel.style.border = '1px solid black';
            email.style.border = '1px solid black';
        } else {
            alert("Заполните форму !");
        }
    });

});