const MyNameApp = {
    data() {
        return {
            name: "Adriano Araújo Costa",
            age: 35,
            input_name: ""
        }
    },
    methods: {
        submitForm(e) {
            e.preventDefault();
            console.log(this.input_name);

            this.name = this.input_name;
        }
    }
}

Vue.createApp(MyNameApp).mount("#app");