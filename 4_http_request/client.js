
const clickCallback = () => {
    let inputValue = document.getElementById("inputName").value
    const httpReqeust = new XMLHttpRequest();
    httpReqeust.onreadystatechange = () => {
        if (httpReqeust.readyState == XMLHttpRequest.DONE) {
            if (httpReqeust.status === 200) {
                const result = httpReqeust.response;
                alert("got result: " + result);
            } else {
                alert('Request error');
            }
        }
    }
    let url = "server.php?q=";
    httpReqeust.open('GET', url + inputValue, true)
    httpReqeust.responseType = "json";
    httpReqeust.send()
    console.log('clicked')
}

window.onload = function () {
    document.getElementById('request').addEventListener('click', clickCallback)
    console.log('let\'s start ajax')
}
