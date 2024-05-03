const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: "First tutorial Vue",
      age: 20,
    };
  },
  methods: {
    toggleShowBooks() {
     this.showBooks = !this.showBooks
     
    },
  },
});
app.mount("#app");
