document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const emailInput = document.querySelector(".email");
    const passwordInputs = document.querySelectorAll(".password");
    const genderBtns = document.querySelectorAll("[name=gender]");
    const technologyBtns = document.querySelectorAll("[type=checkbox]");
    const btn = document.querySelector("button");

    const personData = {
        email: '',
        password: '',
        gender: '',
        technologies: []
    }

    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    const validateEmail = (value) => {
        return EMAIL_REGEXP.test(value);
    }

    const validatePassword = (value) => {
        return value.length > 8
    }

    emailInput.addEventListener("change", (e) => {
        if (validateEmail(e.target.value)) {
            personData.email = e.target.value;
            emailInput.style.border = '3px solid green';
        } else {
            emailInput.style.border = '3px solid red';
        }
    })

    passwordInputs.forEach(input => {
        input.addEventListener('blur', (e) => {
            if(validatePassword(e.target.value)) {
                e.target.style.border ='3px solid green';

                if (e.target.getAttribute("data-order") == 2) {
                    if (e.target.value === passwordInputs[0].value) {
                        personData.password = e.target.value;
                    } else {
                        alert("Пароли должны совпадать");
                        e.target.style.border ='3px solid red';
                    }
                }
            } else {
                alert("Длина пароля должна быть больше 8 символов !");
                e.target.style.border ='3px solid red';
            }
        })
    })

    genderBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            personData.gender = e.target.value; 
        })
    });

    technologyBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = personData.technologies.indexOf(e.target.value);
            if (index == -1) {
                personData.technologies.push(e.target.value);
            } else {
                personData.technologies.splice(index, 1);
            }
        })
    })

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (personData.email && personData.password && personData.gender && personData.technologies) {
            e.target.reset();
            console.log(personData);

            // Очистка данных
            for (key in personData) {
                personData[key] = '';
            }
            // Очистка стилей для input
            emailInput.style.border = '1px solid black';
            passwordInputs[0].style.border = '1px solid black';
            passwordInputs[1].style.border = '1px solid black';
        } else {
            alert("Заполните все поля!");
        }
    })
});