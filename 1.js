let isIsograme = 'Dermatologlyphics';

function isIsograme(str){
    const letters ={};
    if (str == str.toUpperCase()) return true;
    for ( let i = 0; i< str.length; i++){
        if (i> 0 && str[i] == str[i]. toUpperCase()) return false;
        if(srt[i] in letters) return false;
        else letters[str[i]] = 1;
 }
   return true;
}
isIsograme();
