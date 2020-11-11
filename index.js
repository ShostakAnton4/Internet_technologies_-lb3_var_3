function changeColor() {
    var colors = [0, 0, 0];
    var hour = new Date().getHours();

    if (hour <= 12) {
        var color = parseInt(255 / 12 * hour);
        
    } else {
        hour -= 12;
        var color = parseInt(255 - (255 / 12 * hour));
        document.getElementById("lb").style.color="#FFFFFF";
    }

    for (var i = 0; i < colors.length; i++) {
        colors[i] = color;
        
    }

    document.getElementById("lb").style.color = `rgb(${255 - colors[0]},${255 - colors[1]},${255 - colors[2]})`;
    document.body.style.backgroundColor = `rgb(${colors[0]},${colors[1]},${colors[2]})`;
}

setInterval(changeColor, 1000);

let images = new Array("image/img_1.jpg", "image/img_2.jpg", "image/img_3.jpg", "image/img_4.jpg");
var ImgNum = 0;
var ImgLength = images.length - 1;
var lock = false;
var run;

function chgImg(direction) {
    if (document.images) {
        ImgNum = ImgNum + direction;
        if (ImgNum > ImgLength) { ImgNum = 0;}
        if (ImgNum < 0) { ImgNum = ImgLength;}
        document.slide_show.src = images[ImgNum];
    }
}

function auto() {
    var inputVal = document.getElementById("myInput").value * 1000;
    if (lock == true) {
        lock = false;
        window.clearInterval(run);
        document.getElementById('btn').value = 'Start';
        document.getElementById("myInput").value = '';
    } else if (lock == false) {
        lock = true;
        document.getElementById('btn').value = 'Stop';
        run = setInterval("chgImg(1)", inputVal);
    }
}
