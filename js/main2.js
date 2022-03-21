// add form
const addRemove =  document.querySelector('.add-remove');

//select button 
const btnAdd = document.querySelector('.btn-remove-main');

//click add delete button
btnAdd.addEventListener('click', () => {
    addRemove.classList.add('remove-show');
});

//user click outside the box

// window.addEventListener('click', () =>{
//     if(e.target === addRemove) {
//         addRemove.classList.remove('remove-show');
//     }
    
// });

