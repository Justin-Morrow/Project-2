const addDogHandler = async (event) => {
    event.preventDefault(); 
    console.log("I AM HERE!!!!!!")
    const dogName = document.querySelector('#name').value.trim(); 
    const description = document.querySelector('#description').value.trim(); 
    const breed = document.querySelector('#breed').value.trim();
    const age = document.querySelector('#age').value.trim();
    const gender = document.querySelector('#gender').value.trim();
    const cityState = document.querySelector('#cityState').value.trim();
    if(dogName && description && breed && age && gender && cityState) {
        console.log(dogName, description, breed, age, gender, cityState)
        const response = await fetch('/api/dogs', {
            method: 'POST',
            body: JSON.stringify({
                dog_name: dogName,
                description: description,
                breed: breed,
                age: age,
                gender: gender,
                location: cityState,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            console.log("RESPONSE OKAY!!!")
            document.location.replace('/profile');
        } else {
            // alert(response.statusText);
            alert("failed to create post");
        }
    }
};

document.querySelector("#add-dog-form").addEventListener('submit', addDogHandler);