// const editDogHandler = async (event) => {
//     event.preventDefault();

//     const dogName = document.querySelector('#name').value.trim(); 
//     const description = document.querySelector('#description').value.trim(); 
//     const breed = document.querySelector('#breed').value.trim();
//     const age = document.querySelector('#age').value.trim();
//     const gender = document.querySelector('#gender').value.trim();
//     const cityState = document.querySelector('#cityState').value.trim();
    
//     if (dogName && description && breed && age && gender && cityState) {
//         const response = await fetch(`/api/dogs/${id}`, {
//           method: 'PUT',
//           body: JSON.stringify({ dogName, description, breed, age, gender, cityState }),
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });
    
//         if (response.ok) {
//           document.location.replace(`/post/${id}`);
//         } else {
//           alert('Failed to edit post');
//         }
//       }
// }

// document.querySelector("#edit-dog-form").addEventListener('submit', editDogHandler);