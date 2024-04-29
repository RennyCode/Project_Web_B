const myForm = document.querySelector('.my-form')
const firstNameInput = document.querySelector('#name')
const lastNameInput = document.querySelector('#last_name')
const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')
const addressInput = document.querySelector('#city')
const genderInput = document.querySelector('.gender')
const phoneInput = document.querySelector('#phone')
const msg = document.querySelector('.msg')

const onSubmit = (e) => {
   e.preventDefault()

    //isEmpty
    if (firstNameInput.value === '' || lastNameInput.value === '' || emailInput.value === '' || passwordInput.value === '' || addressInput.value === '' || genderInput.value === '' ||phoneInput.value === '' ){
      console.log('fields empty')
      msg.innerHTML ="Please fill out all fields";
    }

  //isString
   else if( !/^[a-zA-Z\s]*$/i.test(firstNameInput.value) || !/^[a-zA-Z\s]*$/i.test(lastNameInput.value) || !/^[a-zA-Z\s]*$/i.test(addressInput.value) ){
     console.log('not letters')
     console.log(firstNameInput.value)
     console.log(lastNameInput.value)
     console.log(addressInput.value)
     msg.innerHTML ="Only English letters are allowed";
   }

    //validemail
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)){
      console.log('not valid email')
      msg.innerHTML ="please enter a valid email";
    }

    //validPassword
    else if (passwordInput.value.length<8){
      console.log('not valid password')
      msg.innerHTML ="please enter a password with more than 7 characters";
    }

    //validPhone
    else if(!/^\d{10}$/.test(phoneInput.value)){
      console.log('not valid phone')
      msg.innerHTML ="please enter a valid phone number";
     }
    else {
        // //------to overcome the duplicate onsubmit issue---------
        // var formData = new FormData(e.target)
        // // prepare AJAX request
        // var request = new XMLHttpRequest()
        // // get the method and action from the form
        // var method = e.target.method || 'POST'
        // var action = e.target.action || '#'

        // // perform the AJAX request
        // request.open(method, action)
        // request.send(formData)
        // //-----------------------------------------------------
        // console.log('fields filled up')
        // alert("Well done! you are in:)")
        // const li = document.createElement('li')
        // li.innerHTML = `${firstNameInput.value}: ${lastNameInput.value} ${emailInput.value}: ${passwordInput.value} ${addressInput.value}: ${genderInput.value} ${phoneInput.value}`
        // firstNameInput.value = ''
        // lastNameInput.value = ''
        // emailInput.value = ''
        // passwordInput.value = ''
        // addressInput.value = ''
        // genderInput.value = ''
        // phoneInput.value = ''
        myForm.submit();
    }
}
 myForm.addEventListener('submit', onSubmit)
