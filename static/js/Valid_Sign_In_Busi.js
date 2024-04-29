const myForm1 = document.querySelector('.my-form1')
const businessNameInput = document.querySelector('#BusinessName')
const businessEmailInput = document.querySelector('#BusinessEmail')
const businessPasswordInput = document.querySelector('#BusinessPassword')
const businessGenderInput = document.querySelector('.gender')
const businessAddressInput = document.querySelector('#BusinessAddress')
const BusinessPhoneInput = document.querySelector('#BusinessPhone')
const professionInput = document.querySelector('.Profession')
const seniorityInput = document.querySelector('.BusinessSeniority')
const msg1 = document.querySelector('.msg1')

const onSubmit = (e) => {
    e.preventDefault()

    //isEmpty
    if (businessNameInput.value === '' || businessEmailInput.value === '' || businessPasswordInput.value === '' || businessGenderInput.value === '' || businessAddressInput.value === '' || BusinessPhoneInput.value === '' ||professionInput.value === '' ||seniorityInput.value === '' ){
      console.log('fields empty')
        msg1.innerHTML ="Please fill out all fields";
    }

  //isString
   else if( !/^[a-zA-Z\s]*$/i.test(businessNameInput.value) || !/^[a-zA-Z\s]*$/i.test(businessAddressInput.value)){
     console.log('not letters')
     msg1.innerHTML ="Only English letters are allowed";
   }

    //validemail
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(businessEmailInput.value)){
      console.log('not valid email')
      msg1.innerHTML ="please enter a valid email";
    }

    //validPassword
    else if (businessPasswordInput.value.length<8){
      console.log('not valid password')
      msg1.innerHTML ="please enter a password with more than 7 characters";
    }

    //validPhone
    else if(!/^\d{10}$/.test(BusinessPhoneInput.value)){
      console.log('not valid phone')
      msg1.innerHTML ="please enter a valid phone number";
     }

    else {
        console.log('fields filled up!')
        alert("Well done, you are in:)")
        const li1 = document.createElement('li1')
        li1.innerHTML = `${businessNameInput.value}: ${businessEmailInput.value} ${businessPasswordInput.value}: ${businessGenderInput.value} ${businessAddressInput.value}: ${BusinessPhoneInput.value} ${professionInput.value} ${seniorityInput.value}:`
        businessNameInput.value = ''
        businessEmailInput.value = ''
        businessGenderInput.value = ''
        businessAddressInput.value = ''
        BusinessPhoneInput.value = ''
        professionInput.value = ''
        seniorityInput.value = ''
    }
}

myForm1.addEventListener('submit', onSubmit)
