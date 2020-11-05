var ModuloMenu = (function(){
    let baseDeDatos = [
        {
            id: 1,
            nombre: 'Bocadillo de nocilla ',
            precio: 1.50,
            imagen: 'https://i.blogs.es/14f8ba/sandwich-smore/840_560.jpg'
        },
        {
            id: 2,
            nombre: 'Bocadillo de fuet ',
            precio: 1.70,
            imagen: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/c3/1d/88/bocadillo-de-fuet-ecologico.jpg'
        },
        {
            id: 3,
            nombre: 'Bocadillo vegetal ',
            precio: 2.20,
            imagen: 'https://recetasveganas.net/wp-content/uploads/2019/02/bocadillo-vegano-vegetariano-sin-carne-vegetal-receta.jpg'
        },
        {
            id: 4,
            nombre: 'Bocadillo de bacon y queso ',
            precio: 10.20,
            imagen: 'https://d36fw6y2wq3bat.cloudfront.net/assets/images/cache/recipes/bocadillo-de-bacon-y-queso-con-huevo-frito/900/bocadillo-de-bacon-y-queso-con-huevo-frito.jpg'
        },
        {
            id: 5,
            nombre: 'Coca Cola Zero ',
            precio: 1.50,
            imagen: 'https://thumbs.dreamstime.com/b/lata-de-coca-cola-con-fondo-negro-amsterdam-zero-puede-ml-sin-az%C3%BAcar-producida-por-la-compa%C3%B1%C3%ADa-aislada-en-es-popular-refresco-167901708.jpg'
        },
        {
            id: 6,
            nombre: 'Coca Cola ',
            precio: 1.50,
            imagen: 'https://p4.wallpaperbetter.com/wallpaper/580/770/476/drops-macro-coca-cola-cola-wallpaper-preview.jpg'
        },
        {
            id: 7,
            nombre: 'Fanta fruit twist ',
            precio: 1.50,
            imagen: 'https://thumbs.dreamstime.com/b/la-poder-de-fanta-aisl%C3%B3-en-un-fondo-negro-102790875.jpg'
        },
        {
            id: 8,
            nombre: 'Café ',
            precio: 1.20,
            imagen: 'https://image.freepik.com/vector-gratis/taza-amarilla-realista-lleno-cafe-express-clasico-negro-fondo-negro_98292-4275.jpg'
        },    
        {
            id: 9,
            nombre: 'Tortilla de patatas ',
            precio: 4,
            imagen: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/7BADAF34-E312-4192-A99D-3A03D7C8AACB/Derivates/81E0120B-1F9C-46EE-8E6D-693F1B92F0AF.jpg'
        },
        {
            id: 10,
            nombre: 'Paella ',
            precio: 7.50,
            imagen: 'https://img.vixdata.io/pd/jpg-large/es/sites/default/files/imj/elgranchef/R/Receta-de-paella-1.jpg'
        },
        {
            id: 11,
            nombre: 'Salmón a la plancha ',
            precio: 4.50,
            imagen: 'https://www.comedera.com/wp-content/uploads/2016/10/receta-salmon-a-la-plancha.jpg'
        },
        {
            id: 12,
            nombre: 'Macarrones ',
            precio: 3.50,
            imagen: 'https://www.5cook.es/wp-content/uploads/2016/04/Macarrones-a-la-bolo%C3%B1esa.jpg'
        },    
        {
            id: 13,
            nombre: 'Tarta de queso ',
            precio: 3,
            imagen: 'https://cdn1.cocina-familiar.com/recetas/thumb/tarta-de-queso-la-mas-facil-del-mundo.JPG'
        },
        {
            id: 14,
            nombre: 'Frutas ',
            precio: 1,
            imagen: 'https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2011/09/ensaldas-con-frutas.jpg'
        },
        {
            id: 15,
            nombre: 'Flan ',
            precio: 2,
            imagen: 'https://www.annarecetasfaciles.com/files/flan-de-huevo-3aa.jpg'
        },
        {
            id: 16,
            nombre: 'Tarta de chocolate ',
            precio: 3.50,
            imagen: 'https://disfrutandodelacocina.com/wp-content/uploads/2012/03/pastel-trufa-nata-trufa-d1.jpg'
        }
    ]
    function getBaseDeDatos(){
        return baseDeDatos;
    }
    return{
        getBaseDeDatos: getBaseDeDatos    };
})();