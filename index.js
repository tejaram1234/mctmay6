const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '562ad9d29bmsh3f0fa0df3a060dep1caea4jsn7786ac180720',
		'X-RapidAPI-Host': 'pizzaallapala.p.rapidapi.com'
	}
};
fetch('https://pizzaallapala.p.rapidapi.com/productos',options)
.then(response => response.json())
.then(response => {
    const  pizzas = response.productos;
    pizzas.map(pizza =>{
        const image = pizza.linkImagen;
        const name = pizza.nombre;
        const price = pizza.precio;
        console.log(image,name,price);
        const pizzacard =` <div class="totalc"><div class="mimg"><img class="mmimg" src="${image}"></div><div class="name">${name}</div><div class="price">$${price}</div></div>`
        document.querySelector('.typesofpizza').innerHTML += pizzacard;
    })
})
.catch(err => console.error(err));
