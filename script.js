<script>

function login(){

document.getElementById("loginPage").style.display = "none";

document.getElementById("dashboard").style.display = "block";

}

function showPage(pageId){

document.getElementById("dashboardPage").style.display = "none";
document.getElementById("chatPage").style.display = "none";
document.getElementById("ticketsPage").style.display = "none";
document.getElementById("clientsPage").style.display = "none";
document.getElementById("performancePage").style.display = "none";

document.getElementById(pageId).style.display = "block";

}

</script>
