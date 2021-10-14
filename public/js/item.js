// //const productsCell = document.querySelector('.products'); 

const itemEl = document.forms.item;
itemEl.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const { data } = await axios.post('/item', formData);
    console.log('front:', data);

    // if(data.status === 'dublicate_email'){
    //     registrEl.innerHTML = `<h3>Email is already declarated</h3>`
    // } else if(data.status === 'ok'){
    //     widow.location.href = '/'
    // };

});

// const checkUserInSession = async () => {
//     const { data } = await axios.get('/authorisation/profile');
//     console.log(data);
//     if(data.status === 'unauthorisate'){
//         registrEl.classList.remove('hidden');  
//         authEl.classList.add('.hidden');
//     } else if (data.status === 'ok'){
        
//         console.log(data)
//     }
// }
// checkUserInSession();



// // get All products from db with created card
// const getGoods = async () => {
//     const { data } = await axios.post('/product');
//     //console.log('front', data);
//     return data;
// };
// getGoods();

// // showing all products on the page
// // const renderGoods = async () => {
// //     const goods = await getGoods();
// //     productsCell.insertAdjacentHTML('beforeend', goods);
// // };
// // renderGoods();

