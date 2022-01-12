
var n = prompt("Enter a number:");
n = parseInt(n);
var string = "";
for(i = 0; i < n ; i++)
{
    for(j=0 ; j< i+1 ; j++){
        string += "*";
    }
    string += "<br/>";
}
document.write(string);