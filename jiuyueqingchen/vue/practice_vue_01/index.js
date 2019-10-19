var app = new Vue({
    el: '#app',
    data: {
        list: [{
                id: 1,
                name: 'iphone 7',
                price: 6188,
                count: 1
            },
            {
                id: 2,
                name: 'ipad pro',
                price: 5888,
                count: 1
            },
            {
                id: 3,
                name: 'MacBook Pro',
                price: 21488,
                count: 1
            }
        ],
        checked: [],
        checkeds: true
    },
    created: function() {
        this.selectAll();
    },
    computed: {
        totalPrice() {
            var total = 0;
            if (this.checked.length != this.list.length) {
                this.checkeds = false;

            } else {
                this.checkeds = true;
            }
            if (this.checkeds) {
                for (let i = 0; i < this.list.length; i++) {
                    var item = this.list[i];
                    total += item.price * item.count;
                }
            } else {
                for (let i = 0; i < this.list.length; i++) {
                    if (this.checked.indexOf(this.list[i].id) === -1) {
                        continue;
                    }
                    var item = this.list[i];
                    total += item.price * item.count;
                }
            }

            return total.toString().replace(/\B(?=(\d{3})+$)/g, ',');
        }
    },
    methods: {
        selectAll() {
            this.checked.length = 0;
            for (let i = 0; i < this.list.length; i++) {
                this.checked.push(this.list[i].id);
            }
        },
        handleReduce(index) {
            if (this.list[index].count === 1) {
                return;
            }
            this.list[index].count--;
        },
        handleAdd(index) {
            this.list[index].count++;
        },
        handleRemove(index) {
            const removeCommodity = this.list.splice(index, 1);
            console.log(removeCommodity[0].id);

            this.checked.forEach((item, index, arr) => {
                if (item === removeCommodity[0].id) {
                    arr.splice(index, 1);
                }
            });

        },
        selectAllClick() {
            this.checkeds = !this.checkeds;
            if (!this.checkeds) {
                this.checked = [];
            } else {
                this.selectAll();
            }
        }
    }
});