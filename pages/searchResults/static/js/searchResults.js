function showPhone(phoneNumber) {
    const phoneNumberDisplay = document.getElementById("phoneNumberDisplay");
    phoneNumberDisplay.innerHTML = "Phone number: " + phoneNumber;
}

function changeBusiness(future_index, total_count, cat) {
    if (future_index >= total_count)
        future_index = 0
    else if (future_index < 0){
        future_index = total_count - 1
    }

    window.location.href = `${window.location.pathname}?cat=${cat}&index=${future_index}`;
    }