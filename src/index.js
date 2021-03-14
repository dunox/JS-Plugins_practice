const fruits = [
    {
        id: 1,
        title: "Яблоки",
        price: 20,
        img: 'https://lifeglobe.net/x/entry/6259/1a-0.jpg' 
    },
    {
        id: 2,
        title: "Апельсины",
        price: 30,
        img: 'https://grandkulinar.ru/uploads/posts/2014-07/1404571972_apelsiny.jpg' 
    },
    {
        id: 3,
        title: "Манго",
        price: 50,
        img: 'https://befreshcorp.net/wp-content/uploads/2017/07/product-packshot-mango.jpg' 
    },
]
/*
 1. Показать цену в модалке
 2. Динамически на основе массива вывести карточки +
 3. Модалка для удаления с 2-мя кнопками
 ------
 4. При нажатии на удалить - удаляем карточку 
*/
const fruitCard = (fruits.map( fruit => 
    `
    <div class="col">
        <div class="card">
            <img class="card-img-top" src="${fruit.img}" style="max-height: 200px; width: auto;">
            <div class="card-body">
                <h5 class="card-title">${fruit.title}</h5>
                <a href="#" class="btn btn-primary" data-price >Посмотреть цену</a>
                <a href="#" class="btn btn-danger" data-delete >Удалить</a>
            </div>
        </div>
    </div>
    `
));

function render() {
    document.getElementById('fruits').innerHTML = fruitCard.join('');
}

render();

const modal = $.modal({
    title: 'Andriy Modal',
    closable: true,
    content: `
        <h3>Modal is working</h3>
        <p>Lorem ipsum dolor sit.</p>
    `,
    width: '400px',
    footerButtons: [
        { text: 'Ok', type: 'primary', handler() {
            console.log('Primary btn clicked');
            modal.close();
        }},
        { text: 'Cancel', type: 'danger', handler() {
            console.log('Danger btn clicked');
            modal.close();
        }}
    ]
});
