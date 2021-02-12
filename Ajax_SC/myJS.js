(function load() {
    var myRequest = new XMLHttpRequest;
    myRequest.onreadystatechange = function () {
        if (this.readystate == 4 && this.status == 200) {
            showimages(this.responseText);
        }
    }
    myRequest.open("GET", "ourData.json", true);
    myRequest.send();

    function showimages(jsonString) {
        var arrItems = [];
        arrItems = JSON.parse(jsonString) // arr=[{image:""},{},{},{}]
        var div = document.getElementById("container");
        for (i = 0; i <= arrItems.length - 1; i++) {
            var img = document.createElement('img'); //<img src=""/>
            img.src = arrItems[i].Image;
            div.appendChild(img).innerHTML;
        }

    }

}());






