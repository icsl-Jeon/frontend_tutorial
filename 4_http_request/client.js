
const clickCallback = () => {
    let inputValue = document.getElementById("inputName").value

    const httpReqeust = new XMLHttpRequest();
    httpReqeust.onreadystatechange = () => {
        if (httpReqeust.readyState == XMLHttpRequest.DONE) {
            if (httpReqeust.status === 200) {
                alert(httpReqeust.response)
                // const result = JSON.parse(httpReqeust.responseText);
                // alert("got result: " + result.data);
            } else {
                alert('Request error');
            }
        }
    }
    let url = "server.php";
    httpReqeust.open('GET', url);
    httpReqeust.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    httpReqeust.send();
    console.log('clicked')
}

window.onload = function () {
    document.getElementById('request').addEventListener('click', clickCallback)
    console.log('let\'s start ajax')
}
