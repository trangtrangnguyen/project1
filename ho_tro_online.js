// JavaScript Document
$(document).ready(function() {
    $('.an-hien').on({
		'click':function(){
			var src=($(this).attr('src')==='Image/add.jpg')
			?'Image/an.jpg'
			:'Image/add.jpg';
			//cũng giống như if else nếu src mà bằng add.png thì sẽ lấy hình an.png ngược lại thì lấy add.png
			//alert(src);
			if(src=='Image/an.jpg'){
				$(this).attr('src',src);
				$("div.content").css("display","block").show();//dùng để show ra form
				//$("div.content").show("slow");//dùng để show ra form
			}
			else{
				$(this).attr('src',src);
				$("div.content").css("display","none");// dùng để ẩn form
				//$("div.content").hide(1000);// dùng để ẩn form
			}
		}
		});
});