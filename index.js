script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.1/jquery.min.js"></script>

<script>
$(document).ready(function()
{
  $("#b1").bind('click',function()
  {
      
    var that=$(this);  data={};
 that.find('[name]').each(function(index,value)
 {
       var name=that.attr('name');
       var value=that.val();
       data[name]=value;
     console.log("jyoti");
  })
 
})
    
});


</script>
