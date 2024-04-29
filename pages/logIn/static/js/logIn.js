const myForm3 = document.querySelector('.my-form3')
const username_Input = document.querySelector('#user_name')
const password_Input = document.querySelector('#Password')
const msg3 = document.querySelector('.msg3')

const onSubmit = (e) => {
    e.preventDefault()

    //isEmpty
    if (username_Input.value === '' || password_Input.value === ''){
      console.log('fields empty')
        msg3.innerHTML ="Please fill out all fields";
    }

    //validemail
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username_Input.value)){
      console.log('not valid email')
      msg3.innerHTML ="please enter a valid email";
    }

    //validPassword
    else if (password_Input.value.length<8){
      console.log('not valid password')
      msg3.innerHTML ="please enter a password with more than 7 characters";
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

        // console.log('O.K')
        // alert("You are in!")
        // const list = document.createElement('list')
        myForm3.submit();
    }
}
myForm3.addEventListener('submit', onSubmit)





// ###########################

// here the basic validation of the users inputs happen
//  after it passes them it will check vs. the DB


// const onSubmit = (e) => {
//     e.preventDefault()

//     //isEmpty
//     if (email_Input.value === '' || password_Input.value === ''){
//       console.log('fields empty')
//         msg3.innerHTML ="Please fill out all fields";
//     }

//     //validemail
//     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email_Input.value)){
//       console.log('not valid email')
//       msg3.innerHTML ="please enter a valid email";
//     }

//     //validPassword
//     else if (password_Input.value.length<8){
//       console.log('not valid password')
//       msg3.innerHTML ="please enter a password with more than 7 characters";
//     }
//     else {
//         // console.log('O.K')
//         // alert("You are in!")
//         const list = document.createElement('list')
//         ///////////
//         myForm3.submit();
//     }
// }
// myForm3.addEventListener('submit', onSubmit)
