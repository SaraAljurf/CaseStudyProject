document.addEventListener("DOMContentLoaded", () => {
    fetchData();                       // here to call fetchData() when HTML document has been parsed
});

var transactions;  //var for the returned tranactions
var transactionsSize;  //var for the number of the returned transactions

function fetchData(){
     fetch('./data.json').then(res=>res.json()).then(  
                                            /* i assumed that the data.json file has the customer's transactions  that has been filled by the API for specific customer based on the Account number for example*/
    data=>{                                              
      transactions=data;
      transactionsSize=transactions.length;
    }
);
}


function getCumulativeBalance(){   //this method is to get cumulative balance by looping through the transactions
    var cumulativeBalance=0;
    for(var i=0;i<transactionsSize;i++){
        cumulativeBalance=cumulativeBalance+transactions[i].amount;
       
  
  }
  document.getElementById('result').innerHTML=cumulativeBalance; //putting the calculated value in the result  div 
  
}

 function getMonthlyBalance(){   //this method is to get monthly balance by looping through the transactions
    const currentDate = new Date();
   
  var monthlyBalance=0;
  for(var i=0;i<transactionsSize;i++){
    
    var dataa=transactions[i].transDate.split("-");
    if(dataa[1]==currentDate.getMonth()+1 && dataa[2]==currentDate.getFullYear())  //this condition checks if the month of the transaction is same as the current month AND checks the year of the transaction to be sure that happened in the current year
      monthlyBalance=monthlyBalance+transactions[i].amount;
  
  }
  document.getElementById('result').innerHTML=monthlyBalance;  //putting the calculated value in the result  div 
  
}