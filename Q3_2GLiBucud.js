let acctString = localStorage.getItem("accounts")
if (!acctString) { accountList = {} } 
else accountList = JSON.parse(acctString) 

const form = document.getElementById("dForm"); 


form.addEventListener("submit", function(e) { 
    e.preventDefault(); 

    if (confirm("Sure You Want To Save Your Work?")) {   
        const data = new FormData(form);

        const obj = Object.fromEntries(data.entries()); 
        accountList[obj.uname] = {};
        for (let key in obj) { 
            if (key != "uname") { 
                accountList[obj.uname][key] = obj[key];
            }
        }
        
        console.log(accountList) 
        acctString = JSON.stringify(accountList) 
        localStorage.setItem("accounts", acctString) 
        form.submit();
    }
  });
form.addEventListener("reset", function(e) { 
  if (!confirm("Sure you want to clear your data?")) {
    e.preventDefault(); 
  }
});


function changeColor(ele) {
  console.log(ele);
  ele.style.backgroundColor = "blue";
} 
function resetColor(ele) {
  console.log(ele);
  ele.style.backgroundColor = "white";
} 