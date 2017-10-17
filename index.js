<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.1/jquery.min.js"></script>

<script>
$(document).ready(function() {
   
   $("#b1").submit(function(e){
e.preventDefault();
  var x= $("#fus2").val();
  var data=$("#userinput").val();
  console. log("user wants to encrypt by"+x+"and user input is" +data);
});


</script>
