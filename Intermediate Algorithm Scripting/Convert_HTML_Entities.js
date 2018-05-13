/* Mission:
 * Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
 *
 * Resources:
 * http://dev.w3.org/html5/html-author/charref
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
 */

 function convertHTML(str) {
   var html = "";
   for(i=0;i<str.length;i++){
     switch(str.charAt(i)){
       case "&":
         html += "&amp;";
         break;
       case "<":
         html += "&lt;";
         break;
       case ">":
         html += "&gt;";
         break;
       case "\"":
         html += "&quot;";
         break;
       case "\'":
         html += "&apos;";
         break;
       default:
         html += str.charAt(i);
     }
   }
   return html;
}

/* =============================================================================
 * Example Test Cases
 * =============================================================================
 */
convertHTML("Dolce & Gabbana");             //should return Dolce &amp; Gabbana
convertHTML("Hamburgers < Pizza < Tacos");  //should return Hamburgers &lt; Pizza &lt; Tacos
convertHTML("Sixty > twelve");              //should return Sixty &gt; twelve
convertHTML('Stuff in "quotation marks"');  //should return Stuff in &quot;quotation marks&quot;
convertHTML("Shindler's List");             //should return Shindler&apos;s List
convertHTML("<>");                          //should return &lt;&gt;
convertHTML("abc");                         //should return abc
