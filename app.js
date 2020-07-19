function clock(){

    var hours = document.getElementById('hour');
    var minutes = document.getElementById('minutes');
    var seconds = document.getElementById('seconds');



    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();
// innerHTMLはhtml要素の中身を変更できるものである
// したの文では先ほど宣言した３つの変数のhtmlを新しいhtml(h,m,s)に書き換えている
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
}

var interval = setInterval(clock,1000);