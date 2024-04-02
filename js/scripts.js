    

$(document).keyup(function(){
    
    var a1=$('#f1').text()
    var a2=$('#f2').text()
    var a3=$('#f3').text()
    var a4=$('#f4').text()

    if(a1=='e' &&a2=='e'&&a3=='a'&&a4=='i'){
      //alert('Enjoy the class!')
      //$('#games').hide();
      //$('#bodys').show();
      window.location.replace("content.html");
    }
  })