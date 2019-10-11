// <div v-debounce="open"></div>
function debounce(fn, wait = 2000) {
    var timeout = null;
    return function() {
        if (timeout !== null) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(fn, wait);
    }
}

let option = {
    inserted: (el, binding) => {
        console.log(el, binding);
    },
    bind: function(el, binding) {
        el.addEventListener('click', debounce(binding.value, 2000));
    },
    unbind: function() {

    }
};
let plugin = {};
plugin.install = function(argVue) {
    argVue.directive('debounce', option);
};

// Vue.directive('debounce', option);

// require
// import
if (typeof exports === 'object') {
    module.exports = plugin;
} else if (window) {
    window.Vue.use(plugin);
}