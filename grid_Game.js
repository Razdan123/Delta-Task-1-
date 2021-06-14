var items = document.querySelectorAll('.item');

// for (var i = 0; i < items.length; i++) {
//     var colors = ['red', 'green', 'blue', 'orange', 'yellow', 'white'];
//     items[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
// }


var item1 = document.querySelectorAll('.item0');

// for (var i = 0; i < item1.length; i++) {
//     var colors = ['red', 'green', 'blue', 'orange', 'yellow', 'white'];
//     item1[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
// }



const startingMinutes = 0;
let time = startingMinutes * 60;
var seconds = 0;

const countdownEl = document.getElementById('timer');

setInterval(function updateCountdown() {
    const minutes = Math.floor(time / 60);
    seconds = time % 60;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time++;
}, 1000);

//------------------------------------------------
const solgrid = item1.length;

for (let k = 0; k < solgrid; k++) {

    var colors = ['red', 'green', 'blue', 'orange', 'yellow', 'white'];
    item1[k].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];


}



const maingrid = items.length;

for (let i = 0; i < items.length; i++) {
    var colors = ['red', 'green', 'blue', 'orange', 'yellow', 'white'];
    items[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

};

items[12].style.backgroundColor = "#416364";
//console.log(document.getElementById('item11').style.backgroundColor);


for (let i = 0; i < maingrid; i++) {
        //var empty = document.getElementById('item33');
        var empty = document.getElementById('item33');
        console.log(empty.style.backgroundColor);
        var moves = 0;

    items[i].addEventListener("click", swapping);

    function swapping() {

       // var empty = document.getElementById('item33');
        //console.log(empty.style.backgroundColor);


        if (i + 1 < items.length && items[i + 1] === empty) {
            console.log(items[i + 1]);
             items[i + 1].style.backgroundColor = items[i].style.backgroundColor;
             items[i].style.backgroundColor = "#416364";
             empty = items[i];
             moves++;
            //  console.log(moves);
            //  document.getElementsByClassName("move").textContent = `moves: ${moves}`;
        }
        console.log(moves);
        document.getElementById('inc').textContent = `move:${moves}`;
        if (i - 1 >= 0 && items[i - 1] === empty) {
            console.log(items[i - 1]);
            items[i - 1].style.backgroundColor = items[i].style.backgroundColor;
             items[i].style.backgroundColor = "#416364";
             empty = items[i];
             moves++;
        }
        console.log(moves);
        document.getElementById('inc').textContent = `move:${moves}`;
        if (i + 5 < items.length && items[i + 5] === empty) {
            console.log(items[i + 5]);
            items[i + 5].style.backgroundColor = items[i].style.backgroundColor;
            items[i].style.backgroundColor = "#416364";
            empty = items[i];
            moves++;
        }
        console.log(moves);
        document.getElementById('inc').textContent = `move:${moves}`;
        if (i - 5 >= 0 && items[i - 5] === empty) {
            console.log(items[i - 5]);
            items[i - 5].style.backgroundColor = items[i].style.backgroundColor;
            items[i].style.backgroundColor = "#416364";
            empty = items[i];
            moves++;
        }
        console.log(moves);
        document.getElementById('inc').textContent = `move:${moves}`;



    }
};



for (let i = 0; i < 25; i++) {

    if (items[7].style.backgroundColor === item1[1].style.backgroundColor &&
        items[8].style.backgroundColor === item1[2].style.backgroundColor &&
        items[9].style.backgroundColor === item1[3].style.backgroundColor &&
        items[12].style.backgroundColor === item1[4].style.backgroundColor &&
        items[13].style.backgroundColor === item1[5].style.backgroundColor &&
        items[14].style.backgroundColor === item1[6].style.backgroundColor &&
        items[17].style.backgroundColor === item1[7].style.backgroundColor &&
        items[18].style.backgroundColor === item1[8].style.backgroundColor &&
        items[19].style.backgroundColor === item1[9].style.backgroundColor) {

        function win() {
            document.getElementById('timer').textContent = "You WON!";
        }
    }
}

