// scripts.js

function drawTree(tree) {
    for (var i = 1; i <= tree; i++) {
        var star = '';
        for (var j = 1; j <= i; j++) {
            star += '*';
        }
        console.log(star);
    }
}
drawTree(5);
