var sortAlphabets = function(text) {
    return text.split('').sort().join('');
};

var abc = "dgegegvdrgw";

abc = sortAlphabets(abc);
console.log(abc);