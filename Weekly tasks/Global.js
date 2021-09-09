//Global
//Global Registration of Component
Vue.component("example-component-test1", {
    template: "<h2>Test Global Component - Is this working?</h2>",
    });
    //Global
    var globalComponent = new Vue({
    el: "#globalComponent",
    data: {
    message: "GlobalComponentTest",
    },
    });
    //Local
    var localComponent = new Vue({
    el: "#localComponent",
    components: {
    "example-component-test2": {
    template: "<h2>Test Local Component - Is this working too?</h2>",
    },
    },
    });