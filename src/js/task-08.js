const form = document.querySelector('.login-form')

form.addEventListener('submit', onSubmitBtn);

function onSubmitBtn(event) { 
    event.preventDefault();

    const mail = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    if (( mail && password) === '') {
     alert('Заполните все поля')
    }
    

    const formData = new FormData(event.currentTarget);
    formData.forEach((mail, password) => {
        console.log(mail)
        console.log(password)
    })
 event.currentTarget.reset();

}
