function getSalary(val) {
            var num = parseInt(val);
            if (isNaN(num)) {
                // alert('Bạn Phải Nhập Số');
            }
            
            else {
                var x = (2 * num) / (Math.log2(num));
                $('#kq').html(x.toFixed(1))
            }
        }

var imgs = $('.slide').children('img');
console.log(imgs);
var count = 0;
imgs.eq(count).show();

setInterval(function(){
    imgs.eq(count).fadeOut(1000);
    count +=1;
    imgs.eq(count).fadeIn(1000);
    if (count == imgs.length){
        count = -1;
        imgs.eq(0).fadeIn(1000);
    }
},3000);