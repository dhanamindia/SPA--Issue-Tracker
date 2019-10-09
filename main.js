document.getElementById('issueInputForm').addEventListener('submit',saveIssue);

function saveIssue(e)
{
    alert('entered into save issue');
    var issueDesc = document.getElementById('issueDescInput').value;
    var issueSeverity = document.getElementById('issueSeverityInput').value;
    var issueAssignedTo = document.getElementById('issueAssignedToInput').value;
    var issueId = 1;
    var issueStatus = 'Open';

    alert(issueDesc);
    var issue = {
        id: issueId,
        description: issueDesc,
        severity: issueSeverity,
        assignedto: issueAssignedTo,
        status: issueStatus
    }

      
 if(localStorage.getItem('issues') == null)
 {
     var issues=[];
     issues.push(issue);
     localStorage.setItem('issues',JSON.stringify(issues));
     
 }   else
 {
    var issues=JSON.parse(localStorage.getItem(issues));
     issues.push(issue);
     localStorage.setItem('issues',JSON.stringify(issues));
     
 }

 document.getElementById('issueInputForm').reset();

 fetchIssues();
 
 e.preventDefault();

}

function setStatusClosed(id)
{
    var issues = JSON.parse(localStorage.getItem('issues'));

    for(var i=0; i<issues.length; i++)
    {
        if(issues[i].id == id)
        {issues[i].status = 'Closed'}
    }
    localStorage.setItem('issues',JSON.stringify(issues));
    fetchIssues();
}

function deleteIssue(id)
{
    var issues = JSON.parse(localStorage.getItem('issues'));

    for(var i=0; i<issues.length; i++)
    {
        if(issues[i].id == id)
        {issues.splice(i,1);}
    }
    localStorage.setItem('issues',JSON.stringify(issues));
    fetchIssues();
}

function fetchIssues()
{
    var issues= json.parse(localStorage.getItem('issues'));
    var issuesList = document.getElementById('issueList');

    issuesList.innerHTML = '';

    for (var i =0; i<issues.length; i++)
    {
        var id = issues[i].id;
        var desc = issues[i].description;
        var severity = issues[i].severity;
        var assignedTo = issues[i].assignedTo;
        var status = issues[i].status;
        
   

        issuesList.innerHTML += '<div class="well">' +
                            '<h6> Issue ID:' + id + '</h6>' +
                            '<p><span class="label label-info">' + status + '</span></p>' +
                            '<h3>' + desc + '</h3>' +
                            '<p><span class="glyphicon-time"></span>' + severity + '</p>' +
                            '<p><span class="glyphicon-user"></span>' + assignedTo + '</p>' +
                            '<a href="#" class="btn btn-warning" onclick="setStatusClosed(\'' + id + '\')"> Close </a>' +
                            '<a href="#" class="btn btn-danger" onclick="deletIssue(\'' + id + '\')"> Delete </a>' +
                            '</div>';
    }

}

/*
function saveIssue(e)
{
   alert('entered into save issue');
    var issueDesc = document.getElementById('issueDescInput').value;
    var issueSeverity = document.getElementById('issueSeverityInput').value;
    var issueAssignedTo = document.getElementById('issueAssignedToInput').value;
    var issueId = 1;
    var issueStatus = 'Open';

 alert(issueDesc);
 alert(issueSeverity);
 alert(issueAssignedTo);
 
 //document.getElementById('issueInputForm').reset();

 var issuesList = document.getElementById('issueList');
 

 alert(issueslist);

 //issuesList.innerHTML = '';

 issuesList.innerHTML = '<div class="well">' +
 '<h6> Issue ID:' + issueId + '</h6>' +
 '<p><span class="label label-info">' + issueStatus + '</span></p>' +
 '<h3>' + issueDesc + '</h3>' +
 '<p><span class="glyphicon-time"></span>' + issueSeverity + '</p>' +
 '<p><span class="glyphicon-user"></span>' + assignedTo + '</p>' +
 '<a href="#" class="btn btn-warning" onclick="setStatusClosed(\'' + issueId + '\')"> Close </a>' +
 '<a href="#" class="btn btn-danger" onclick="deletIssue(\'' + issueId + '\')"> Delete </a>' +
 '</div>';
 
 //e.preventDefault();

}
*/



