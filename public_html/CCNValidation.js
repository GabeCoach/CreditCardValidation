/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function Validate()
{
    var doubleNum = true;
    var CCN = document.getElementById("CCN").value;
    var numArray = [];

    numArray.push(0);

    for (x = CCN.length-2 ; x >= 0; x--)
    {
        var num = parseInt(CCN.substr(x, 1));
        if (doubleNum == true)
        {
            var newnum = num * 2;
            //alert(newnum);
            if (newnum >= 10) {
                newnum = parseInt(1 + (newnum % 10));
            }
            //alert(newnum);
            numArray.push(parseInt(newnum));
            doubleNum = false;
        }
        else
        {
            numArray.push(num);
            doubleNum = true;
        }

    }

    numArray = numArray.reverse();
    var total = 0;
    for (y=0; y < numArray.length; y++)
    {
        var arrayNum = numArray[y];
        total = total + arrayNum;
    }

    var remainder = total % 10;
    if (remainder == 0)
    {
        document.getElementById("Valid").innerHTML = "Credit Card Number is valid."
    }
    else
    {
        document.getElementById("Valid").innerHTML = "Credit Card Number is not valid."
    }
    
}

function Clear()
{
    document.getElementById("CCN").value = "";
    document.getElementById("Valid").innerHTML = "";
}
