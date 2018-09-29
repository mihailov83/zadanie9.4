// scripts.js

var i;
var j;

function drawTree(tree) {
    for (i = 1; i <= tree; i++) {
        var star = '';
        for (j = 1; j <= i; j++) {
            star += '*';
        }
        console.log(star);
    }
}
drawTree(5);
