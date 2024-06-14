function sendpersonalizedemails() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data  = sheet.getDataRange().getValues();
  for(var i=1;i<data.length;i++){
    var subject="Your personalised subject";
    var name=data[i][0];//assign first element of ith row to name
    var emailaddress=data[i][1];//assign second element of ith row to emailaddress
    var custommessage=data[i][2];//assign third element of ith row to custommessage
    var message=`Hello ${name},\n\n${custommessage}\n\nBest regards,.....`;
    MailApp.sendEmail(emailaddress,subject,message);//sending emails

  }
}
