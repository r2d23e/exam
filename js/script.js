
let discount = prompt('Какая скидка?')

let totalSale = 0

let total = 0

let max = {}

let min = {}

let average = 0

let arr = [

    {

        name: 'Milk',

        price: 3.25,
        isfresh: true

    },

    {

        name: 'Coffee',

        price: 1.5,
        isfresh: true

    },

    {

        name: 'Ice Cream',

        price: 7.85,
        isfresh: false

    },

    {

        name: 'Tomatos',

        price: 4.14,
        isfresh: true

    },

    {

        name: 'Onion',

        price: 2.25,
        isfresh: false
    }

]

let arr_sale = []

// 1. Сохранить самый дорогой товар в переменную`max и самый дешевый в min`*

// 2. отфильтровать масив на свежие и не свежие продукты

// 3. Сохранить общую цену без скидок в переменную`total`*

// 4. Сохранить общую цену со скидкой в переменную`totalSale`*

// 5. Сохранить элементы из массива arr с обновленной ценой (цена со скидкой) в переменную arr_sale*

// 6. Сохранить в переменной`average` среднюю цену всех продуктов без скидок*

// * Писать весь код в функции setup()*

// ТРИ ОЦЕНКИ. ЧИСТОТА КОДА, ЛОГИКА РАБОТЫ, УНИКАЛЬНОСТЬ КОДА*

let fresh = []
let unfresh = []
let salus=0

const setup = (shop) => {

    for (let item of shop) {

        // 2. отфильтровать масив на свежие и не свежие продукты
        fresh = arr.filter(item => item.isfresh == true)
        unfresh = arr.filter(item => item.isfresh != true)

        // 3. Сохранить общую цену без скидок в переменную`total`*
        total += item.price

        // 4. Сохранить общую цену со скидкой в переменную`totalSale`*
        salus = total / 100 * discount
totalSale=total-salus
        // 6. Сохранить в переменной`average` среднюю цену всех продуктов без скидок*
        average = total / arr.length


        // 1. Сохранить самый дорогой товар в переменную`max и самый дешевый в min`*





        // 5. Сохранить элементы из массива arr с обновленной ценой (цена со скидкой) в переменную arr_sale*
        arr_sale = (item.price * discount/ 100 )


    }
}




setup(arr)
console.log(arr);
console.log(fresh);
console.log(unfresh);
console.log(total);
console.log(totalSale);
console.log(average);
console.log();
console.log(arr_sale);