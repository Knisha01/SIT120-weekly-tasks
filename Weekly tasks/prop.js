var testingProps = new Vue({
    el: "#testingProps",
    data: {
    greeting: "Hello, how are you today",
    },
    components: {
    "greeting-container": {
    props: ["greeting"],
    data: function () {
    return { name: "Andrew" };
    },
    template: "<div> {{ greeting }}, {{ name }}</div>",
    },
    },
    });