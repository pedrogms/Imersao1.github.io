document.querySelector('.button').addEventListener('click', function(event){
    var real = document.querySelector('#real').value;
    document.querySelector('#dollar').textContent = '$' +Number(real * 6).toFixed(2);
    event.preventDefault();
});