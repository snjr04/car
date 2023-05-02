let contactForm = document.querySelector('.contacts__form')



const registerUser = (newUser) => {
    fetch('http://localhost:3000/register', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser)
    }).then((response) => response.json())
        .then((response) => {
            localStorage.setItem('user', JSON.stringify(response.user))
        })
}

contactForm.addEventListener('submit', (event) => {
    event.preventDefault()
    let newUser = {
        name: event.target[1].value,
        surname: event.target[2].value,
        phone: event.target[3].value,
        email: event.target[4].value,
        password: event.target[5].value,
        favorites: [],
        cart : [],
        orders: []
    }

    contactForm(newUser)

})

