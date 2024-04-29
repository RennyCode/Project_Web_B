const myForm4 = document.querySelector('.my-form4')
const FirstNameInput = document.querySelector('#First-Name')
const LastNameInput = document.querySelector('#Last-Name')
const EmailInput = document.querySelector('#Email')
const PhoneInput = document.querySelector('#Phone')
const ReportInput = document.querySelector('#report')
const msg4 = document.querySelector('.msg4')


const onSubmit = (e) => {
    e.preventDefault()

    //isEmpty
    if (FirstNameInput.value === '' || LastNameInput.value === '' || EmailInput.value === '' || PhoneInput.value === '' || ReportInput === '') {
        console.log('fields empty')
        msg4.innerHTML = "Please fill out all fields";
    }

    //isString
    else if (!/^[a-zA-Z\s]*$/i.test(FirstNameInput.value) || !/^[a-zA-Z\s]*$/i.test(LastNameInput.value)) {
        console.log('not letters')
        msg4.innerHTML = "Only English letters are allowed";
    }

    //validemail
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(EmailInput.value)) {
        console.log('not valid email')
        msg4.innerHTML = "please enter a valid email";

    }

    //validPhone
    else if (!/^\d{10}$/.test(PhoneInput.value)) {
        console.log('not valid phone')
        msg4.innerHTML = "please enter a valid phone number";
    }
    // check report length
    else if (ReportInput.value.length > 200) {
        console.log('report too long');
        msg4.innerHTML = "Report should not exceed 200 characters";
    }

    else {
        console.log('OK')
        alert("Your response has been sent")
        const lis = document.createElement('list')
        lis.innerHTML = `${FirstNameInput.value}: ${LastNameInput.value} ${EmailInput.value}: ${phoneInput.value}${ReportInput.value}`
        FirstNameInput.value = ''
        LastNameInput.value = ''
        EmailInput.value = ''
        PhoneInput.value = ''
        ReportInput.value = ''

        setTimeout(() => {
            window.location.reload();
        }, 100);
    }
}

myForm4.addEventListener('submit', onSubmit)
