new Vue({
  el: '#app',
  data: {
    products: [
      { id: 1, name: 'Iphone 15 ProMax', price: 2020000, image: '/images/iphone15.jpg' },
      { id: 2, name: 'Iphone 12', price: 440000, image: '/images/iphone12.jpg' },
      { id: 3, name: 'Iphone XS Max', price: 495000, image: '/images/iphonex.jpg' },
      { id: 4, name: 'Iphone 13', price: 770999, image: '/images/iphone13.jpg' },
      { id: 5, name: 'IPhone 11 Pro Max', price: 765000, image: '/images/iphone11.jpg' },
      { id: 6, name: 'Iphone XR', price: 760000, image: '/images/iphoneXR.jpg' },
      { id: 7, name: 'Iphone 14 Pro Max', price: 1500000, image: '/images/iphone14.jpg' },
      { id: 8, name: 'Iphone 12 Pro Max', price: 920000, image: '/images/iphone12Pro.jpg' }
    ],
    cart: []
  },
  methods: {
    addToCart(product) {
      this.cart.push(product);
    },
    clearCart() {
      this.cart = []; // Clear the cart
    }
  },
  computed: {
    total() {
      return this.cart.reduce((sum, item) => sum + item.price, 0);
    }
  },
  filters: {
    currency(value) {
      return `₦${value.toLocaleString()}`; 
    }
  }
});
