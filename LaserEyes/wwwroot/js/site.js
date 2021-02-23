window.functions = {
    paint: function (base) {

        console.log(base);

        var c = document.getElementById("myCanvas");

        c.addEventListener("click", canvasClick);
        var rect = c.getBoundingClientRect();

        function canvasClick(event) {
            console.log("click: " + event)
            oneX = event.clientX - rect.left - (oneSize / 2);
            oneY = event.clientY - rect.top - (oneSize / 2);

            eye1.src = "../img/1.png";
        }

        var oneSize = 70;
        var twoSize = 100;
        var oneX = 0;
        var oneY = 0;
        var twoX = 0;
        var twoY = 0;

        var ctx = c.getContext("2d");
        ctx.fillStyle = "blue";
        ctx.fillRect(0, 0, c.width, c.height);

        var bgimg = new Image();
        bgimg.onload = function () {
            console.log("bg loaded")
            ctx.drawImage(bgimg, 0, 0, c.width, c.height);
        }

        var eye1 = new Image();
        eye1.onload = function() {
            ctx.drawImage(eye1, oneX, oneY, oneSize, oneSize);
        }
        bgimg.src = base;
    }
}