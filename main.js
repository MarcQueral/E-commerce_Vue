const app = Vue.createApp({
    data() {
        return {
            product: 'Pilotes',
            image: './assets/images/pilota_basquet.jpg',
            inStock: true,
            details: ['50% roba', '30% goma','20% aire'],
            variants: [
                {id: 2234, color: 'Taronja'},
                {id: 2235, color: 'Negre'},
            ]
        }
    }
})