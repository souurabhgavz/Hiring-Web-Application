

  var data = [
  {
    "requestId": 1,
    "projectName": "Project 1",
    "projectManager": "Manager 1",
    "resources":2,
    "status":"Closed",
    "poc":"HR1",
    "hiringStatus":"Completed",
    "hrComments":"Okay",
    "actions":"done"
  },
  {
    "requestId": 2,
    "projectName": "Project 2",
    "projectManager": "Manager 2",
    "resources":10,
    "status":"Open",
    "poc":"HR2",
    "hiringStatus":"Pending",
    "hrComments":"NA",
    "actions":"done"
  },
  {
    "requestId": 3,
    "projectName": "Project 3",
    "projectManager": "Manager 3",
    "resources":50,
    "status":"Open",
    "poc":"HR3",
    "hiringStatus":"Completed",
    "hrComments":"Okay",
    "actions":"done"
  }
];

  function editDetails(e){

    var $req = $(e.target);
    var reqId = $req.attr("id")
    var trnew="<tr><td colspan='10'>"+$(".details-module").html()+"</td></tr>";
    $(trnew).insertAfter($req.closest('tr'));

    //var reqObj = data.filter(o => o.requestId == reqId);
    //console.log({ details: reqObj });

    // Add a new row (details module) below the selected row in the table.

  };

function appendrow(){
  for(let i=0;i<data.length;i++)
  {
    var txt="<tr>";
    for(let j=0;j<Object.keys(data[i]).length-1;j++)
    {
      txt=txt+"<td>"+String(data[i][Object.keys(data[i])[j]])+"</td>";
    }
    txt=txt+'<td id="'+String(data[i]["requestId"])+'" class="edit-action"><i class="fa fa-bars" aria-hidden="true"></i></td>'
      txt=txt+"</tr>";
    $(".mytable tbody").append(txt);
  }
  $(document).on('click', '.edit-action', editDetails);

};



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
          <td>${rowData["projectName"]}</td>
          <td>${rowData["projectManager"]}</td>
          <td>${rowData["resources"]}</td>
          <td>${rowData["status"]}</td>
          <td>${rowData["poc"]}</td>
          <td>${rowData["hiringStatus"]}</td>
          <td>${rowData["hrComments"]}</td>
          <td id="${rowData["requestId"]}" class="edit-action"><i class="fa fa-bars" aria-hidden="true"></i></td>
        </tr>
      `);
    $(".edit-action").click(editDetails);
  }
}

  function showForm() {
    hideAll();
    $(".form-module").show();


  }

  function showDetails() {
    hideAll();
    $(".details-container").show();
}

  function loginSubmit(e){
    var username = $("#username").val();
    var password = $("#password").val();
    if(username == "admin-man" && password == "admin") {
      sessionStorage.setItem("isManager","true");
      sessionStorage.setItem("isLoggedIn", "true");
    }
    else if(username=="admin-hr" && password == "admin"){
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


  $("#newRequest").click(showForm);


