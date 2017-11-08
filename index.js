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
<script type="text/javascript">
  window.onload = function ()
   {
    var chart = new CanvasJS.Chart("chartContainer",
    {
      title:{
        text: "ANALYSYS OF ACCOUT DATA"    
      },
      animationEnabled: true,
      axisY: {
        title: "NUMBER OF ACCOUNT"
      },
      legend: {
        verticalAlign: "bottom",
        horizontalAlign: "center"
      },
      theme: "theme3",
      data: [
      {        
        type: "pie",  
        showInLegend:true, 
        legendMarkerColor: "gray",
        legendText: ">",
                dataPoints: [      
                {y:<?php echo $ot;?> , label: "OTHER"},
                {y:<?php echo $xbk;?> ,  label: "BANKING" },
                {y:<?php echo $xs;?> , label: "SHOPPING" },
                {y:<?php echo $xb;?> ,  label: "BOOKING" },
                ]
       }   
      ]
    });
    chart.render();
  }
   
</script>
 
<div id="chartContainer" height="600" width="600">
</div>
   </script>
