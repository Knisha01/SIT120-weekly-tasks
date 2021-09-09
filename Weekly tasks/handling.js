var vueArray = new Vue ({
    el: "#vueArray",
    data: {
    itemList : [
    {name: "Oranges"},
    {name: "Apples"},
    {name: "Bananas"},
    ]
    },
    methods: {
    updateList: function() {
    this.itemList.push({name: this.$refs.updateList.value});
    }
    }
    })