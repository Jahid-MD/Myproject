const calc =()=>
{
    a=document.getElementById('first').value;
    a=a.split("")
    var b="";
        for(var i=0;i<a.length;i++)
        {
            if(a[i].match("^([0-9])$"))
            {
                b=b+a[i];
            }else //if(a.match(/\W/))
                {
                b=b+" "+a[i]+" "
                }
        }
    b=b.split(" ");
    b
    var c=Number(b[0]);
    for(i=1;i<b.length;i++)
    {
        switch (b[i])
        {
            case "+":{  i=i+1;
                        c=c+Number(b[i]);
                        break;
                    }
            case "-":{  i=i+1
                        c=c-Number(b[i]);
                        break;
                    }
            case "/":{  i=i+1
                        c=c/Number(b[i]);
                        break;
                    }
            case "*":{  
                        i=i+1
                        c=c*Number(b[i]);;
                        break;
            }
        }
    }
    document.getElementById("display").innerText=c;
}