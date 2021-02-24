var src = "1";

var oneSizeW = 70;
var oneSizeH = 70;
var oneSizeX = 35;
var oneSizeY = 35;
var oneX = 0;
var oneY = 0;

window.functions = {


    paint: function(base) {
        var c = document.getElementById("myCanvas");
        var rect;

        c.addEventListener("click", canvasClick);

        function canvasClick(event) {
            rect = c.getBoundingClientRect();
            oneX = event.clientX - rect.left - oneSizeX;
            oneY = event.clientY - rect.top - oneSizeY;

            eye1.src = "../img/" + src + ".png";
        }

        var ctx = c.getContext("2d");
        ctx.fillRect(0, 0, c.width, c.height);

        var bgimg = new Image();
        bgimg.onload = function() {
            rect = c.getBoundingClientRect();

            c.width = bgimg.width;
            c.height = bgimg.height;
            ctx.drawImage(bgimg, 0, 0, bgimg.width, bgimg.height);

        }

        var eye1 = new Image();
        eye1.onload = function() {
            ctx.drawImage(eye1, oneX, oneY, oneSizeW, oneSizeH);
        }
        bgimg.src = base;
    },

    download: function() {
        var link = document.createElement('a');
        link.download = 'lasereyes.png';
        link.href = document.getElementById('myCanvas').toDataURL()
        link.click();
    },
    setSrc: function (i) {
        var it = JSON.parse(i);
        src = it.Src;
        oneSizeW = it.Width;
        oneSizeH = it.Height;
        oneSizeX = it.X;
        oneSizeY = it.Y;
    }
}