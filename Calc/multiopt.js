a="12-26+12"
a=a.split("")
var b="";
for(var i=0;i<a.length;i++)
{
    if(a[i].match("^([0-9])$"))
    {
        b=b+a[i];
    }else{
        b=b+" "
    }
}
b=b.split(" ");
var c=0;
for(i=0;i<b.length;i++){
    c=c+Number(b[i]);
}
console.log(c)