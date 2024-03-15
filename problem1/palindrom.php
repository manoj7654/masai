<?php 
// $str="malayalam";
function isPalindrom($str){
$len=strlen($str);
$newStr="";
for($i=$len-1;$i>=0;$i--){
  $newStr.=$str[$i];
}
if($str==$newStr){
    echo "Palindrom";
}else{
    echo "Not Palindrom";
}
}

isPalindrom("malayalam");
?>