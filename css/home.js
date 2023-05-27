var arr = [
    '/img/slider2.jpg',
    '/img/cafe-sua-da.jpg',
    '/img/img4.jpg',
    '/img/background.jpg',
    '/img/banner.jpg',
    '/img/img1.jpg'
];
var i = 0;

function slideshows1() {
    i++;
    if (i == arr.length) {
        i = 0;
    }
    so1();
    document.getElementById('slideshow').src = arr[i];

}

function slideshows2() {
    if (i == 0) {
        i = arr.length;
    }
    i = i - 1;
    so1();
    document.getElementById('slideshow').src = arr[i];

}

function so1() {
    document.getElementById('so').innerHTML = "Ảnh: " + (i + 1) + "/ 6";
}
