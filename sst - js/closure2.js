//alret on click of each btn using closure

var add_the_handler = function (nodes) {
  var i;
    for (i = 0; i < nodes.length; i++) {
        nodes[i].addEventListener('click', function () {
        alert(i);
        });
    }
}