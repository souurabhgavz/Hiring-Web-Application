$(function(){

  var data = [
  {
    "requestId": 1,
    "projectname": "Proj-1",
    "projectmanager": "Man-1",
    "resources":2,
    "status":"open",
    "poc":"HR-1",
    "hiring-status":"completed",
    "hr-omments":"ok",
    "actions":"done"
  },
  {
    "requestId": 2,
    "projectname": "Proj-2",
    "projectmanager": "Man-2",
    "resources":10,
    "status":"open",
    "poc":"HR-2",
    "hiring-status":"completed",
    "hr-omments":"ok",
    "actions":"done"
  },
  {
    "requestId": 3,
    "projectname": "Proj-3",
    "projectmanager": "Man-3",
    "resources":50,
    "status":"open",
    "poc":"HR-3",
    "hiring-status":"completed",
    "hr-omments":"ok",
    "actions":"done"
  }
];

  function editDetails(e){
    var $req = $(e.target);
    var reqId = $req.attr("id");
    console.log("request id: " +  reqId);

    var reqObj = data.filter(o => o.requestId == reqId);
    console.log({ details: reqObj });

    // Add a new row (details module) below the selected row in the table.

  }

  function hideAll() {
    $(".module").hide();
  }

  function showLogin() {
    hideAll();
    $(".login-module").show();
  }

  function showTable(){
  
  hideAll();

  $(".table-module").show();
  for(let i=0;i<data.length;i++)
  {
    var rowData = data[i];
    $("table tbody").append(`
        <tr class="tablerow">
          <td>${rowData["requestId"]}</td>
          <td>${rowData["projectname"]}</td>
          <td>${rowData["projectmanager"]}</td>
          <td>${rowData["resources"]}</td>
          <td>${rowData["status"]}</td>
          <td>${rowData["poc"]}</td>
          <td>${rowData["hiring-status"]}</td>
          <td>${rowData["hr-comments"]}</td>
          <td id="${rowData["requestId"]}" class="edit-action"><input type="button" value="Edit"></td>
        </tr>
      `);
    $(".edit-action").click(editDetails);
  }
}

  function showForm() {
    hideAll();
    $(".form-module").show();
    $(".addProject").click(showForm());


  }

  function showDetails() {

  }

  function loginSubmit(e){
    var username = $("#username").val();
    if(username == "admin-man") {
      sessionStorage.setItem("isManager","true");
      sessionStorage.setItem("isLoggedIn", "true");
    }
    else if(username=="admin-hr"){
      sessionStorage.setItem("isHR","true");
      sessionStorage.setItem("isLoggedIn", "true");
    }
    
  }

  function isLoggedIn() {
    return sessionStorage.getItem("isLoggedIn") == "true";
  }

  $("#loginForm").click(loginSubmit);

  if ( isLoggedIn() ) {
    showTable();
  } else {
    showLogin();
  }



});