function compute()
{ //function computes the data user enters into inputs. parseInt used below to derrive a correct calculation instead of a concactination. 
    var principal = parseInt(document.getElementById("principal").value);
    //if statement used to generate alert in case of an entry <=0 in Amount.
    if(principal <= 0) {

        alert("Enter a positive number");
        document.getElementById("principal").focus(); //focus included to put focus back on Amount input.
        //else used below to avoid extraneous calculation and result output when 0 was entered.
    } else {
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);
        document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>";
    }
}
function updateRate() //displays calculated result from input.
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        