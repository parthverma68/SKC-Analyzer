
<% @page import java.security.* %>
<% @page import javax.crypto.*   %>
<% @page import java.util.Scanner %>

<% !
    Scanner sc=new Scanner(System.in);
    String s=sc.nextLine();
    byte[] plainText = s.getBytes("UTF8");
    
%>

<%
     //overal timer goes here
    //generate keys

       out.println( "\nStart generating DES key" );
    
        String ealgo=request.getParameter("ealgo");
    
        KeyGenerator keyGen = KeyGenerator.getInstance(ealgo);
    
    //get key peramerter here
    // int key =Integer.ParseInt(request.getPeramerter("key");
   
       keyGen.init(key);
       Key key = keyGen.generateKey();
       out.println( "Finish generating DES key" );
   
   //prepare stage
   
    Cipher cipher = Cipher.getInstance("DES/ECB/PKCS5Padding");
    out.println( "\n" + cipher.getProvider().getInfo() );
 
 
   // start encryption timer
            out.println( "\nStart encryption" );
            cipher.init(Cipher.ENCRYPT_MODE, key);
            byte[] cipherText = cipher.doFinal(plainText);
            out.println( "Finish encryption: " );
            out.println( new String(cipherText, "UTF8") );
 
   // START TIMER
            out.println( "\nStart decryption" );
            cipher.init(Cipher.DECRYPT_MODE, key);
            byte[] newPlainText = cipher.doFinal(cipherText);
            out.println( "Finish decryption: " );
    //END TIMER
          out.println( new String(newPlainText, "UTF8") );
     //overall timer ends her
    // calculate overall timer start-end;
    //calculate encryption  tiemr
    //calaculate Decryption timer
  %>
          
            <%= overalltimer     %>
            <%= encryption timer %>
            <%= decryption timer %>
    
    
