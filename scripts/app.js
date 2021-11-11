var myapp = new Vue({
    el: '#app',
    data: {
        counter: 0,
        clicks: 0,
    },
    methods: {
        checkZero (number) {
            if (number > 0) {
                return number;
            } else {
                return 0;
            }
        },
        modifyNumber(op, am) {
            let operation = op;
            let amount = am;
            let clickNumber = this.counter;
            if (operation === "add") {
                clickNumber = clickNumber + amount;
            } else {
                clickNumber = clickNumber - amount;
            }
            this.counter = this.checkZero(clickNumber);
            this.clicks ++;
        },
    },
    computed: {
        exponential() {
            return this.counter * this.counter;
        }
    }
})