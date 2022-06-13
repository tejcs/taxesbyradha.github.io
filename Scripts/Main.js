<!--
<!--// All masks
var lastrequestdate;
var nooftries;
function faxphonemask(f) {
f.style.background = "#fffbff";
var tel = '';
var curval = f.value
if (curval != "") {
curval = curval.replace(/-/g, "");
var val = curval.split('');

for (var i = 0; i < val.length; i++) {
if (i == 2) { val[i] = val[i] + '-' }
if (i == 5) { val[i] = val[i] + '-' }
tel = tel + val[i];
}
f.value = tel;
var ssnstr = f.value.replace(/-/g, "");
if (ssnstr.length != 10) {            
f.style.background = "#FFFFB3";
f.focus();
return false;
}
}
}


function phonemask(f) {

var tel = '';
var curval = f.value
if (curval != "") {
f.style.background = "#fffbff";
curval = curval.replace(/-/g, "");
var val = curval.split('');

for (var i = 0; i < val.length; i++) {
if (i == 2) { val[i] = val[i] + '-' }
if (i == 5) { val[i] = val[i] + '-' }
tel = tel + val[i];
}
f.value = tel;
var ssnstr = f.value.replace(/-/g, "");
if (ssnstr.length != 10) {
f.style.background = "#FFFFB3";
f.value =ssnstr;
}
        
}
}

function phonemaskwithoutvalidation(f) {

var tel = '';
var curval = f.value
if (curval != "") {
f.style.background = "#fffbff";
curval = curval.replace(/-/g, "");
var val = curval.split('');

for (var i = 0; i < val.length; i++) {
if (i == 2) { val[i] = val[i] + '-' }
if (i == 5) { val[i] = val[i] + '-' }
tel = tel + val[i];
}
f.value = tel;
var ssnstr = f.value.replace(/-/g, "");
if (ssnstr.length != 10) {
f.value =ssnstr;
}
}
}

function zipcodemask(id) {
var zipcode = document.getElementById(id).value;
var Zipcodelength = zipcode.length;
if((Zipcodelength < 5) || (Zipcodelength == "")) {
document.getElementById(id).style.background = "#FFFFB3";
}
else{
document.getElementById(id).style.background = "#fffbff";
}
}

function phonemaskreplace(f){
var ssnstr = f.value.replace(/-/g, "");
f.value =ssnstr;
if (f.createTextRange) {  
//IE  
var FieldRange = f.createTextRange();  
FieldRange.moveStart('character', f.value.length);  
FieldRange.collapse();  
FieldRange.select();  
}  
else {  
//Firefox and Opera  
f.focus();  
var length = f.value.length;  
f.setSelectionRange(length, length);  
}
}
function dateslash(id) {
var datestr = document.getElementById(id).value;
document.getElementById(id).value = datestr.replace(/[^a-zA-Z 0-9]+/g, "");
var tr = document.getElementById(id).createTextRange();
tr.select();
}

function datemask(id, flag) {
document.getElementById(id).style.background = "#fffbff";
var ch = document.getElementById(id).value;
var currentDt = new Date();
if (ch.toLowerCase() == 'y') { currentDt.setDate(currentDt.getDate() - 1); }

var mm = currentDt.getMonth() + 1;
mm = (mm < 10) ? '0' + mm : mm;
var dd = currentDt.getDate();
dd = (dd < 10) ? '0' + dd : dd;
var yyyy = currentDt.getFullYear();
var date = mm + '/' + dd + '/' + yyyy;
if (ch.toLowerCase() == 't' || ch.toLowerCase() == 'y') { document.getElementById(id).value = date; }

var ch = document.getElementById(id).value;
var ipos = "";
ipos = ch.search("/");

if (ipos == -1) {
if (ch.length == 8) {
ch = ch.substring(0, 2) + "/" + ch.substring(2, 4) + "/" + ch.substring(4);
}
}

document.getElementById(id).value = ch;

if (flag == 0) {

if (ch != "") {
if (ch.length != 10 || isdatevalid(ch) == false || isdatelimitvalid(ch) == false)
{ document.getElementById(id).style.background = "#FFFFB3"; }
}
} else {
if (ch.length != 10 || isdatevalid(ch) == false || ch == "")
{ document.getElementById(id).style.background = "#FFFFB3"; }

}

}

function ssnmask(f) {
f.style.background = "#fffbff";   
var tel = '';
var curval = f.value
if (curval == "") {
f.style.background = "#FFFFB3";
} else {
curval = curval.replace(/-/g, "");
var val = curval.split('');

for (var i = 0; i < val.length; i++) {
if (i == 2) { val[i] = val[i] + '-' }
if (i == 4) { val[i] = val[i] + '-' }
tel = tel + val[i];
}
f.value = tel;

var ssnstr = f.value.replace(/-/g, "");
if (ssnstr.length != 9) {
f.style.background = "#FFFFB3";

}
}
}

function ssnmaskwithoutvalidation(f) {
var tel = '';
var curval = f.value
if (curval == "") {
} else {
curval = curval.replace(/-/g, "");
var val = curval.split('');
for (var i = 0; i < val.length; i++) {
if (i == 2) { val[i] = val[i] + '-' }
if (i == 4) { val[i] = val[i] + '-' }
tel = tel + val[i];
}
f.value = tel;
var ssnstr = f.value.replace(/-/g, "");
if (ssnstr.length != 9) {
}
}
}

function numbersonly(e) {

var unicode = e.charCode ? e.charCode : e.keyCode
if (event.keyCode == 45){
return true;
}
if (event.keyCode == 46){
return true;
}
if (unicode != 8) { 
if ((unicode < 48 || unicode > 57) && (unicode < 96 || unicode > 105)) return false //disable key press
}
}

function numbersonly2(e) {

var unicode = e.charCode ? e.charCode : e.keyCode
if (event.keyCode == 45) {
return true;
}


   
if (unicode != 8) {
if (unicode < 48 || unicode > 57) return false //disable key press
}
}

function isdatevalid(dateStr) {
var datePat = /^(\d{1,2})(\/|-)(\d{1,2})\2(\d{4})$/;
var matchArray = dateStr.match(datePat); // is the format ok?
if (matchArray == null) { return false; }
month = matchArray[1];
day = matchArray[3];
year = matchArray[4];

if (month < 1 || month > 12) { return false; }
if (day < 1 || day > 31) { return false; }
if ((month == 4 || month == 6 || month == 9 || month == 11) && day == 31)

{ return false; }
today = new Date()
var date1 = new Date(dateStr);
var one_day = 1000 * 60 * 60 * 24
var diff = Math.ceil((date1 - today) / (one_day));
return true; // date is valid
}

function Isvalidphonenumbers(workphonecntrl, cellphonecntrl, homephonecntrl) {
if (document.getElementById(homephonecntrl).value == "" && document.getElementById(workphonecntrl).value == "" && document.getElementById(cellphonecntrl).value == "") {
document.getElementById(homephonecntrl).style.background = "#FFFFB3";
document.getElementById(workphonecntrl).style.background = "#FFFFB3";
document.getElementById(cellphonecntrl).style.background = "#FFFFB3";
return false;
} else { return true; }
}

function InitialCaps(id) {
var str = document.getElementById(id).value;
var str = str.substring(0, 1).toUpperCase() + str.substring(1);

//    if (str.indexOf(' ') > -1) {
//        var str = str.split(" ");
//        str = str[0] + " " + str[1].substring(0, 1).toUpperCase() + str[1].substring(1);
//    }
document.getElementById(id).value = str;
}



function roundNumber(num, dec) {
var result = Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
return result;
}

function changecolorPasswordConfirm(id) {
document.getElementById(id).style.background = "#fffbff";
var value = document.getElementById(id).value;
if (value == '') { document.getElementById(id).style.background = "#FFFFB3"; return;}
if (value != document.getElementById("txt_pwd").value) { document.getElementById(id).style.background = "#FFFFB3"; return; }
}

function changecolor(id) {    
document.getElementById(id).style.background = "#fffbff";
var value = document.getElementById(id).value;
if (value == '') { 
document.getElementById(id).style.background = "#FFFFB3"; 
document.getElementById(id).value = "";
}
}


function emptyfield(id) {
if (document.getElementById(id).value == '') {
document.getElementById(id).value = "";
}
}

function textvalidate(id) {
document.getElementById(id).style.background = "#fffbff";
var value = document.getElementById(id).value;
if (value == '') { document.getElementById(id).style.background = "#FFFFB3"; return false; }
else {return true;}
}


function dropdownvalidate(id) {
document.getElementById(id).style.background = "#fffbff";
var value = document.getElementById(id)[document.getElementById(id).selectedIndex].value;
if (value == "Select" || value == "0") {
document.getElementById(id).style.background = "#FFFFB3";
}
else if(value == "Select Currency") {
document.getElementById(id).style.background = "#FFFFB3";
}
}

var tout;
function showcustomquestion(id,sid){
document.getElementById(id).style.display="none";
document.getElementById(sid+"_tbl").style.display="block";        
document.getElementById(sid).value="";    
document.getElementById(sid).focus();    
clearTimeout(tout);
}

function showstdquestion(id,sid){
document.getElementById(id).style.display="block";
document.getElementById(sid+"_tbl").style.display="none";        
document.getElementById(sid).value="";   
document.getElementById(id).selectedIndex=0;
document.getElementById(id).focus();  
}

function dropdownquestionvalidate(id,sid) {
document.getElementById(id).style.background = "#fffbff";
var value = document.getElementById(id)[document.getElementById(id).selectedIndex].value;
if (value == "Please Select" || value == "-------------------------------------------------------------") {
document.getElementById(id).style.background = "#FFFFB3";
return;
}

if (value=="Make my own question"){
     
tout=setTimeout("showcustomquestion('"+id+"','"+sid+"')",1000);
} else
{
document.getElementById(id).style.display="block";
document.getElementById(sid+"_tbl").style.display="none";        
document.getElementById(sid).value=value;        
}
}

function dropdownDOBvalidate(id) {
document.getElementById(id).style.background = "#fffbff";
var value = document.getElementById(id)[document.getElementById(id).selectedIndex].value;
if (value == "MM" || value == "DD" ||value == "YYYY"|| value == "-999") {
document.getElementById(id).style.background = "#FFFFB3";

}
}
// End Masks

//ajax implementations
function AjaxRequest(xUrl, xId) {
   
var myRand = parseInt(Math.random() * 99999999);
xUrl = xUrl + "&decache=" + myRand;

var xmlhttp = false;
var resptxt = "";
try {
xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
} catch (e) {
try {
xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
} catch (E) {
xmlhttp = false;
}
}

if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
xmlhttp = new XMLHttpRequest();
}
//window.open(xUrl);
//return;
//xmlhttp.open("GET", xUrl, true);
// window.location=xmlhttp.responseText; }
xmlhttp.open("GET", xUrl, true);
xmlhttp.onreadystatechange = function () {

if (xmlhttp.readyState == 4) {
if (xId != "") {
    if (xmlhttp.responseText == 'timeout') { window.location.reload(); }
    else if (xId == 'redirect') { window.location = xmlhttp.responseText; }
    else if (xId == 'refresh') { window.location.reload(); }
    else if (xId=='emailvalidate'){displaylightbox(xmlhttp.responseText);}
    else if(xId=='signup'){signupprocess(xmlhttp.responseText);}
    else if(xId=='InsertActiveOrder'){DisplayActiveOrders(xmlhttp.responseText);}
    else if(xId=='export'){alert(xmlhttp.responseText);}
    else if (xId == 'none') { return; }
    else {
        document.getElementById(xId).innerHTML = xmlhttp.responseText;
    }
}
else { return xmlhttp.responseText; }
}
}
xmlhttp.send(null)
}
//End ajax implementations

function makerecurring(displayid,isrecurring) {
var url = "../ajax/makerecurring.aspx?displayid=" + displayid + "&isrecurring=" + isrecurring;
//window.open(url);
AjaxRequest(url, "refresh");
}

function isvalidemailid(f) {
var str = f.value;
    
if (str != "") {
var len = str.length;
f.style.background = "#fffbff";
var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
if (len != "") {
if (!(filter.test(str))) {
    f.style.background = "#FFFFB3"; return false;

} else return true;
}
} else  return false;
}

function isvalidemultiplemailid(Email) {
var str = Email;
if (str != "") {
var len = str.length;
var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
if (len != "") {
if (!(filter.test(str))) {
return false;
} else return true;
}
} else  return false;
}

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57) && (charCode < 96 || charCode > 105))
        return false;

    return true;
}

function showcustomlightbox(inhtml, sheight, swidth, sdiv) {
document.getElementById('light').style.display='block';
document.getElementById('fade').style.display='block';    
document.getElementById('light').innerHTML = inhtml;
}

function showlightbox(inhtml) {
document.getElementById('close').style.display='block';
document.getElementById('light').style.display='block';
document.getElementById('fade').style.display='block';    
document.getElementById('lightcontent').innerHTML = inhtml;
}

function closeNoReloadlightbox() {
document.getElementById('close').style.display='none';
document.getElementById('light').style.display = "none";
document.getElementById('fade').style.display = "none";
document.getElementById('lightcontent').innerHTML = "";
   
}

function closeReloadlightbox() {
    
document.getElementById('light1').style.display ="none";
document.getElementById('fade1').style.display = "none";
document.getElementById('lightcontent1').innerHTML = "";
window.location.reload();   
}

function showReloadlightbox(inhtml) {
document.getElementById('light1').style.display = 'block';
document.getElementById('fade1').style.display = 'block';
document.getElementById('lightcontent1').innerHTML = inhtml;
}

function fileuploadlightbox(rowcount) {
var k = 0;
   for (i = 0; i < rowcount; i++) {
  if (document.getElementById("chk_documenttype_" + i).checked == true) {
  k = k +1;
  }
  }
    if (k == 0) {
        alert("Select a document type to upload");
        }
        else {
//document.getElementById('close1').style.display='block';
document.getElementById('light1').style.display='block';
document.getElementById('fade1').style.display='block';
}
}

function closefileuploadlightbox() {
document.getElementById('close1').style.display='none';
document.getElementById('light1').style.display='none';
document.getElementById('fade1').style.display='none';
}

function saveuser() {
var reqinfo = "";
reqinfo = "The following fields have invalid entries \n";
document.getElementById("TxtUserName").value = document.getElementById("TxtEmail").value;

if ((document.getElementById("TxtPassword").value == "") || (document.getElementById("TxtPassword").value.length < 7)) {
reqinfo = reqinfo + "Password 7 Characters Minimum \n";
}

if (document.getElementById("TxtPassword").value != document.getElementById("TxtcnfPassword").value) {
reqinfo = reqinfo + "Password entered does not match the confirm password field. \n";
}

if (document.getElementById("TxtFirstName").value == "") {
reqinfo = reqinfo + "First Name \n";
}

if (document.getElementById("TxtLastName").value == "") {
reqinfo = reqinfo + "Last Name \n";
}

if ((document.getElementById("TxtEmail").value == "") || isvalidemailid(document.getElementById("TxtEmail")) == false) {
reqinfo = reqinfo + "E-mail \n";
}

if ((document.getElementById("TxtCellPhone").value == "" || isvalidphonenumber(document.getElementById("TxtCellPhone").value) == false) && (document.getElementById("TxtWorkPhone").value == "" || isvalidphonenumber(document.getElementById("TxtWorkPhone").value) == false) && (document.getElementById("TxtHomePhone").value == "" || (document.getElementById("TxtHomePhone").value) == false)) {
reqinfo = reqinfo + "Home Phone or Work Phone or Cell Phone is required \n";
}

if (document.getElementById("TxtSecurityQuestion1").value == "") {
reqinfo = reqinfo + "Security Question1 \n";
}

if (document.getElementById("TxtSecurityQuestion1").value != "") {

if (document.getElementById("TxtSecurityQuestion1").value.length < 25) {
reqinfo = reqinfo + "Security Question1 should be minimum 25 characters\n";
}

}

if (document.getElementById("TxtAnswer1").value == "") {
reqinfo = reqinfo + "Answer1 \n";
}

if (document.getElementById("TxtSecurityQuestion2").value == "") {
reqinfo = reqinfo + "Security Question2 \n";
}

if (document.getElementById("TxtSecurityQuestion2").value != "") {

if (document.getElementById("TxtSecurityQuestion2").value.length < 25) {
reqinfo = reqinfo + "Security Question2 should be minimum 25 characters\n";
}

}
 
if (reqinfo != "The following fields have invalid entries \n") {
alert(reqinfo);
}
else {
var HtmlStr;
HtmlStr = "<table border=\"0\" width=\"400px\" cellpadding=\"0\" cellspacing=\"0\">";
HtmlStr += "<tr><td>Saving your profile...<img src=\"/images/progressbar.gif\"/></td></tr><tr><td id=\"timelapse\">1 Second..</td></tr></table>";
showlightbox(HtmlStr);
    
}
}



function processingcaptcha(sresponse){

if(sresponse=='Failed'){
var HtmlStr;
HtmlStr = "<table border=\"0\" width=\"400px\" cellpadding=\"0\" cellspacing=\"0\">";
HtmlStr += "<tr height=\"100px\"><td>Security Code entered is wrong.Retry for sign up process</td></tr></table>";
showlightbox(HtmlStr);
}else{
emailcheckingprocess();
}
}

function emailcheckingprocess(){
var HtmlStr;
HtmlStr = "<table border=\"0\" width=\"400px\" cellpadding=\"0\" cellspacing=\"0\">";
HtmlStr += "<tr><td>Security code Validated..</td><td></td></tr>";
HtmlStr += "<tr><td>Checking your email address against records..<img src=\"/images/progressbar.gif\"/></td></tr><tr><td id=\"timelapse\">Pls wait..</td></tr></table>";
showlightbox(HtmlStr);
           
    MemberEmailCheck();

         
}

function clearvalue(fname) {
document.getElementById(fname).value = "";
}

function processsignupresponse(sresponse) {
if (sresponse == "Error.aspx") {
var HtmlStr;
HtmlStr = "<table border=\"0\" width=\"400px\" cellpadding=\"0\" cellspacing=\"0\">";
HtmlStr += "<tr><td style='color:red;'>Account creation - Failed.</td></tr><tr><td>There was a problem creating your account.</td></tr><tr><td id=\"timelapse\">To contact customer support click <a href='../support.aspx' style='color:blue; text-decoration:underline;'>here</a>. </td></tr></table>";
showlightbox(HtmlStr);
} else {
window.location = sresponse;
}
}

function processemailvalidate(sresponse) {
if (sresponse == "no") {
var url;
var sponsorid = document.getElementById("hdnsponsorid").value;
var referenceid = document.getElementById("hdnrefid").value;
var dateval=document.getElementById("txtdate").value;
var monthval=document.getElementById("txtmonth").value;
var year=document.getElementById("txtyear").value;
var dob=monthval+"/"+dateval+"/"+year;
var gender=document.getElementById("TxtGender").value;

//        alert(document.getElementById("hdnLatitude").value);
//        alert(document.getElementById("hdnLongitude").value);
        
url = "../Ajax/AddMember.aspx?FirstName=" + escape(document.getElementById("TxtFirstName").value) + "&MiddleName=" + escape(document.getElementById("TxtMiddleName").value);
url += "&Username=" + escape(document.getElementById("TxtEmail").value) + "&Password=" + escape(document.getElementById("TxtPassword").value);
url += "&LastName=" + escape(document.getElementById("TxtLastName").value) + "&Email=" + escape(document.getElementById("TxtEmail").value) + "&Cellphone=";
url += escape(document.getElementById("TxtCellPhone").value);
url += "&WorkPhone=" + escape(document.getElementById("TxtWorkPhone").value) + "&HomePhone=" + escape(document.getElementById("TxtHomePhone").value) + "&Address=";
url += escape(document.getElementById("TxtAddress").value);
url += "&Address1=" + escape(document.getElementById("TxtAddress1").value) + "&City=" + escape(document.getElementById("TxtCity").value) + "&zipcode=";
url += escape(document.getElementById("TxtZipCode").value);
url += "&SecurityQuestion1=" + escape(document.getElementById("TxtSecurityQuestion1").value) + "&Answer1=" + escape(document.getElementById("TxtAnswer1").value);
url += "&SecurityQuestion2=" + escape(document.getElementById("TxtSecurityQuestion2").value);
url += "&Answer2=" + escape(document.getElementById("TxtAnswer2").value) + "&State=" + escape(document.getElementById('ddlstate').options[document.getElementById('ddlstate').selectedIndex].text);
url += "&SponsorId=" + sponsorid + "&referenceid=" + referenceid + "&CompanyName=" + escape(document.getElementById("TxtCompanyName").value)+"&dob="+escape(dob)+"&gender="+escape(gender);
url += "&Latitude=" + escape(document.getElementById("hdnLatitude").value) + "&Longitude=" + escape(document.getElementById("hdnLongitude").value) ;
    
window.open(url);
lastrequestdate = new Date();
var HtmlStr;
HtmlStr = "<table border=\"0\" width=\"400px\" cellpadding=\"0\" cellspacing=\"0\">";
HtmlStr += "<tr><td>Email Address Check - Succeeded..<img src=\"/images/progressbar.gif\"/></td></tr><tr><td>Creating your Zuzlife Account..</td></tr><tr><td id=\"timelapse\">Pls wait..</td></tr></table>";
      
showlightbox(HtmlStr);
      
AjaxRequest(url, "processsignupresponse");
} else {
var HtmlStr;
HtmlStr = "<table border=\"0\" width=\"400px\" cellpadding=\"0\" cellspacing=\"0\">";
HtmlStr += "<tr><td style='color:red;'>Email Address Check - Failed.</td></tr><tr><td>This email address is being used by another member.</td></tr><tr><td id=\"timelapse\">Did you forget your password ? Click Here.</td></tr></table>";
showlightbox(HtmlStr);
}
}

function MemberEmailCheck() {
var url = "../Ajax/validateemail.aspx?email=" + escape(document.getElementById("TxtEmail").value);
AjaxRequest(url, "processemailvalidate");
}

function ValidateForgotPassword(id, status) {
if (status == 0) {
if (document.getElementById("TxtUserName").value == "") {
alert("Please Enter a valid Email");
} else {
if (isvalidemailid( document.getElementById("TxtUserName"))){
document.getElementById(id).value = "submituser";
document.forms[0].submit();
} else { alert("Please Enter a valid Email");}
}
}
if (status == 1) {
var reqinfo = "";
reqinfo = "The following fields have invalid entries \n\n";
if (document.getElementById("TxtUserName").value == "") {
reqinfo = reqinfo + "UserName \n";
}

if (document.getElementById("TxtAnswer1").value == "") {
reqinfo = reqinfo + "Answer1 \n";
}

if (document.getElementById("TxtAnswer2").value == "") {
reqinfo = reqinfo + "Answer2 \n";
}

if (reqinfo != "The following fields have invalid entries \n\n") {
alert(reqinfo);
}
else {
document.getElementById(id).value = "submitforgot";
document.forms[0].submit();
}

}
if (status == 2) {
if (document.getElementById("password").value == "" || document.getElementById("password").value.length < 7) {
alert("Password must have a minimum of 7 characters");
} else {
document.getElementById(id).value = "updateforgot";
document.forms[0].submit();

}
}
}

//function SubmitAddresses() {

//   

//    var reqinfo = "";
//    reqinfo = "The following fields have invalid entries \n";
//   
//    if (document.getElementById("TxtAddress").value == "") {
//        reqinfo = reqinfo + "Address \n";
//    }

////    if (document.getElementById("TxtAddress1").value == "") {
////        reqinfo = reqinfo + "Address1 \n";
////    }
//   
//   
//    if (document.getElementById("TxtCity").value == "") {
//        reqinfo = reqinfo + "City \n";
//    }
//    if (document.getElementById("TxtState").value == "Please Select") {
//        reqinfo = reqinfo + "State \n";
//    }
//    if (document.getElementById("TxtZipCode").value == "") {
//        reqinfo = reqinfo + "ZipCode\n";
//    }
//       
//    

//    if (reqinfo != "The following fields have invalid entries \n") {
//        alert(reqinfo);
//    }
//    else {
//      
//        document.getElementById("saction").value = "submitaddresses";
//        document.forms[0].submit();
//    }

//}

function Validatemail() {
if (document.getElementById("TxtEmail").value == "" || isvalidemailid(document.getElementById("TxtEmail")) == false) {
alert("Please Enter the Valid Email");

} else {
document.getElementById("saction").value = "resend";
document.forms[0].submit();
}
}

function SupportSubmit() {
var type = document.getElementById("TxtType").value;
var body = document.getElementById("TxtBody").value;
var subject = document.getElementById("TxtSubject").value;
var errorstr = "The following fields have incorrect values\n\n";
var count = 0;
if (type == "Please Select") {
errorstr = errorstr + "Type\n";count++;
}
if (subject == "") {
errorstr = errorstr + "Subject\n"; count++;
}

if (body == "") {
errorstr = errorstr + "Body\n"; count++;
}
if (count == 0) {
document.getElementById("saction").value = "supportsubmit";
document.forms[0].submit();
} else {
alert(errorstr);
}
}




function SearchMember() {
var searchvalue = document.getElementById("TxtSearchKey").value;

if (searchvalue != "") {

addparam("keyword", searchvalue);
} else {
addparam("keyword", '');
}
}

function addparam(fname, fval) {

var qs = window.location.search;

if (qs.indexOf(fname + "=") > -1) {

qs = removeqs(qs, fname, false);
qs = qs + "&" + fname + "=" + fval;

} else {
if (qs.indexOf("?") > -1) {
// alert(qs + "&" + fname + "=" + fval); 
qs = qs + "&" + fname + "=" + fval;
}
else { qs = qs + "?" + fname + "=" + fval; }
}
window.location.search = qs;
}

function removeqs(qs, fname, redirect) {
var ipos;
ipos = qs.search(fname + "=");
if (ipos > 0) {
qs = RemoveFilter(qs, fname + "=");
}

if (redirect) { window.location.search = qs; }
return qs;
}

function RemoveFilter(qs, ftype) {

var ipos; var epos; var rstr; var lstr;
ipos = qs.search(ftype);
if (ipos > 0) {
lstr = qs.substr(0, ipos - 1);

if (lstr.substr(0, 1) == '&') { lstr = lstr.substr(1, lstr.length); }
rstr = qs.substring(ipos);
//getting next param

ipos = rstr.search("&")

if (ipos > 0) { rstr = rstr.substring(ipos); }
else { rstr = ""; }
}
return lstr + rstr;
}

function changepage(pageno) {

//addqs("pn", pageno, true);

var fname = "pn";
var qs = window.location.search;
qs = removeqs(qs, "showlight", false);
qs = removeqs(qs, "pn", false);
if (fname == "t") {
qs = removeqs(qs, "at", false);
}
if (true) { window.location.search = qs + "&" + fname + "=" + pageno; }
   
}

function addqs(fname, fvalue, redirect) {
var qs = window.location.search;
qs = removeqs(qs, fname, false);
    
if (fname == "t") {
qs = removeqs(qs, "at", false);
}
if (redirect) { window.location.search = qs + "&" + fname + "=" + fvalue; }
return qs
}

function deleteaddress(rid) {

document.getElementById("hdnrecordid").value = rid;
document.getElementById("saction").value = "deleteaddress";
document.forms[0].submit();

}

function deletemember(rid) {   

document.getElementById("hdnrecordid").value = rid;
document.getElementById("saction").value = "deletemember";
document.forms[0].submit();

}

function ActiveDeactiveMember(rcount, flag) {

if (flag == 'activate') {
document.getElementById("hdn_act_deact").value = "activate";
} else {
document.getElementById("hdn_act_deact").value = "deactivate";
}

var xmlstart = "<Members>";
var xmlend = "</Members>";
var xml = "";
var count = 0;
for (var i = 0; i < rcount; i++) {

if (document.getElementById("chk_" + i).checked==true) {
count = 1;
xml = xml + "<Member>";
xml = xml + "<RecordId>" + document.getElementById("chk_"+i).value + "</RecordId>";
xml = xml + "</Member>";

}
}

xml = xmlstart + xml + xmlend;

if (count != 0) {
document.getElementById("hdnxml").value = xml;
document.getElementById("saction").value = "activate";
document.forms[0].submit();
} else {
alert("Please select atleast one item to deactivate");
}
}

function validateemil() {
document.getElementById("saction").value = "validateemail";
document.forms[0].submit();
}

function searchcommissionreport(mode) {

if (mode == 0) {

var rankval = document.getElementById("Rank").value;
if (rankval != "") {

addparam("rank", rankval);
} else {
addparam("rank", '');
}

}

if (mode == 1) {

var levelval = document.getElementById("UserLevel").value;
if (levelval != "") {

addparam("level", levelval);
} else {
addparam("level", '');
}

}

}

function showfilter() {

if (document.getElementById("filterpanel").style.display == "none") {

document.getElementById("filterpanel").style.display = "block";

} else {

document.getElementById("filterpanel").style.display = "none";
      

}

}

function GetContacts() {

var fname = document.getElementById("txtfirstname").value;
var lname = document.getElementById("txtlastname").value;
var email = document.getElementById("txtemail").value; 
var source = document.getElementById("txtsource").value; 
var fromdate = document.getElementById("txtfromdate").value;
var todate = document.getElementById("txttodate").value;
var errorstr = "The following fields have incorrect values\n\n";
var count = 0;

if (fname == "" && lname == "" && email == "" && source == "" && fromdate == "" && todate == "" ) {

alert("Enter atleast one field");

} else {

if (email != "") {
if (isvalidemailid(document.getElementById("txtemail")) == false) {
    errorstr = errorstr + "Email\n";count++;

}
}

if (fromdate != "" && isdatevalid(fromdate) == false) {
errorstr = errorstr + "From date\n"; count++;

}
if (todate != "" && isdatevalid(todate) == false) {
errorstr = errorstr + "To date\n"; count++;

}

if (count != 0) {

alert(errorstr);return false;

} else {

document.getElementById("hdnshowdiv").value = "getcontacts";
window.location = "ManageContacts.aspx?fname=" + fname + "&lname=" + lname+"&email="+email+"&source="+source+"&fromdate="+fromdate+"&todate="+todate;

}

}

}

function ConnectYahoo() {
document.getElementById("saction").value = "yahoo";
document.forms[0].submit();

}

function ManageImages(flag,rcount) {

var xml = "";
var count = 0;
var recordid;
for (var i = 0; i < rcount; i++) {

if (document.getElementById("chk" + i).checked == true) {
xml = xml + "<file>";
xml = xml + "<recordid>" + document.getElementById("chk" + i).value + "</recordid>";
xml = xml + "</file>";
count++;
recordid = document.getElementById("chk" + i).value;

}
}

xml = "<files>" + xml + "</files>";

if (flag == 0) {
if (count == 0) {
alert("Please select atleast one image to delete");
} else {
document.getElementById("hdnxml").value = xml;
document.getElementById("saction").value = "deletefile";
document.forms[0].submit();
}
}

if (flag == 1) {
if (count > 1) {

alert("Please select one image to set as default");return false;

} 
if(count==1) {
    document.getElementById("hdnrecordid").value = recordid;
document.getElementById("saction").value = "setdefault";
document.forms[0].submit();

}
}
}

function isvalidphonenumber(phoneno) {

if (phoneno.length == 10) {
return true;
}
else if (phoneno.length == 12) {

var splitstr = phoneno.split("-");
if (splitstr[0] != "") {
    if (splitstr[0].length != 3)
    { return false; }
}
if (splitstr[1] != "") {
    if (splitstr[1].length != 3)
    { return false; }
}
if (splitstr[2] != "") {
    if (splitstr[2].length != 4)
    { return false; }
}

}
else {
return false;
}

return true;
}

function displaychilds(userid,level) {

var qs=window.location.search;

if (level==1){
window.location="MyNetwork.aspx?uid="+userid;      
      
}else if(level==2){
if(qs!=""){
qs=removeqs(qs,"uid2",false);
qs=removeqs(qs,"uid3",false);
qs=removeqs(qs,"uid4",false);
qs=removeqs(qs,"uid5",false);
}
window.location="MyNetwork.aspx"+qs+"&uid2="+userid;
// addparam("uid2", userid);  
}else if(level==3){
if(qs!=""){
qs=removeqs(qs,"uid3",false);
qs=removeqs(qs,"uid4",false);
qs=removeqs(qs,"uid5",false);
}
window.location="MyNetwork.aspx"+qs+"&uid3="+userid;
// addparam("uid3", userid);  
}else if(level==4){
if(qs!=""){
qs=removeqs(qs,"uid4",false);
qs=removeqs(qs,"uid5",false);
}
window.location="MyNetwork.aspx"+qs+"&uid4="+userid;
//addparam("uid4", userid);  
}else if(level==5){ 
addparam("uid5", userid);
}
}

function showuserdetails(i,id) {

document.getElementById(id + i).style.display = "block";
       

}

function hideuserdetails(i, id) {

document.getElementById(id+i).style.display = "none";
}

function showdivrevenue(flag) {

if (flag == 0) {

document.getElementById("revenue").style.display = "block";
document.getElementById("downline").style.display = "none";
}
else {
document.getElementById("revenue").style.display = "none";
document.getElementById("downline").style.display = "block";
}
}

function setPreviewImageUrl(panel, iobj) {
        
var surl = iobj.src.toString();
document.getElementById(panel).src = surl;
}

function showhandsign(iobj) {
iobj.style.cursor = "hand";
}

function imagepageover(surl, imagedirection) {

var currentimage = parseInt(document.getElementById("currentimage").value);
var images = document.getElementById("imagelist").value.split(",");
if (imagedirection == 1) {
if (images.length >= currentimage + 1) {
    document.getElementById("thumb_1").src = surl + images[currentimage];
    document.getElementById("currentimage").value = currentimage + 1;
    currentimage = currentimage + 1;
}
if (images.length >= currentimage + 1) {
    document.getElementById("thumb_2").src = surl + images[currentimage];
    document.getElementById("currentimage").value = currentimage + 1;
    currentimage = currentimage + 1;
}
if (images.length >= currentimage + 1) {
    document.getElementById("thumb_3").src = surl + images[currentimage];
    document.getElementById("currentimage").value = currentimage + 1;
    currentimage = currentimage + 1;
}

} else {
currentimage = currentimage - 4;
if (currentimage >= 0) {
    document.getElementById("thumb_3").src = surl + images[currentimage];
    currentimage = currentimage - 1;
    document.getElementById("currentimage").value = currentimage + 4;
}
if (currentimage >= 0) {
    document.getElementById("thumb_2").src = surl + images[currentimage];
    currentimage = currentimage - 1;
    document.getElementById("currentimage").value = currentimage + 4;
}
if (currentimage >= 0) {
    document.getElementById("thumb_1").src = surl + images[currentimage];
    currentimage = currentimage - 1;
    document.getElementById("currentimage").value = currentimage + 4;
}

}
}

function AddToCart() {
var quantity = document.getElementById("TxtQuantity").value;
if (quantity == "") {
alert("Please Enter the Quantity");
return false;
}
else {
document.getElementById("saction").value = "addtocart";
document.forms[0].submit();
}
}

function UpadateCart(pcount) {
var xmlstart = "<members>";
var xmlend = "</members>";
var xml = "";
var count = 0;
for (var i = 0; i < pcount; i++) {
if (document.getElementById("TxtQuantity_" + i).value != "") {
xml = xml + "<member>";
xml = xml + "<recordid>" + document.getElementById("recordid_" + i).value + "</recordid>";
xml = xml + "<quantity>" + document.getElementById("TxtQuantity_" + i).value + "</quantity>";
xml = xml + "</member>";
count = 1;
}
       
}
xml = xmlstart + xml + xmlend;

if (count == 1) {
document.getElementById("hdnxml").value = xml;
document.getElementById("saction").value = "updatequantity";
document.forms[0].submit();
} else {
alert("Enter valid quantity");
return false;
}
   
}

function ClearCart() {
document.getElementById("saction").value = "clearcart";
document.forms[0].submit();
}


function CheckOut() {
document.getElementById("saction").value = "checkout";
document.forms[0].submit();
}


function showchilds(id1,id2) {

if (document.getElementById(id1).style.display == 'block') {
document.getElementById(id2).style.display = 'block';
document.getElementById(id1).style.display = 'none';
} else {           
document.getElementById(id1).style.display = 'block';
document.getElementById(id2).style.display = 'none';
}

}


function MakePayment() {
var cardtype = document.getElementById("ddlcardtype").value;
var cardno = document.getElementById("Txt_Cardno").value;
var seccode = document.getElementById("Txt_SecCode").value;
var expiremonth = document.getElementById("ddlexpiremonth").value;
var expireyear = document.getElementById("ddlexpireyear").value;
var billaddress = document.getElementById("Chk_BillAddress").checked == true;
var shipaddress = document.getElementById("Chk_ShipAddress").checked == true;
var errorstr = "The following fields have incorrect values\n\n";
var count = 0;
if (billaddress != true) {
errorstr = errorstr + "Billing Address\n"; count++;
}
if (shipaddress != true) {
errorstr = errorstr + "Shipping Address\n"; count++;
}
if (cardtype == "Please Select") {
errorstr = errorstr + "Card Type\n";count++;
}
if (cardno == "") {
errorstr = errorstr + "Card No Invalid\n"; count++;
}

if(cardno!='1111111111111111'){
        if (cardno!='' && cardtype!='Please Select'){
if (checkCreditCard(cardno, cardtype)==false) {
errorstr = errorstr + "Card Invalid\n"; count++;
}
}
}

if (seccode == "") {
errorstr = errorstr + "Security Code\n"; count++;
}
if ((expiremonth == "Please Select" && expireyear == "Please Select") || (expiremonth == "Please Select" && expireyear != "Please Select") || (expiremonth != "Please Select" && expireyear == "Please Select")) {
errorstr = errorstr + "Expiration Date\n"; count++;
}

if (count == 0) {
document.getElementById("saction").value = "makepayment";
document.forms[0].submit();
} else {
alert(errorstr);
return false;
}
}

function PaymentPage() {
document.getElementById("saction").value = "PaymentRequest";
document.forms[0].submit();
}

function CopyAddress(flag) {
if (flag == 0) {
if (document.getElementById("Chk_BillAddress").checked == true) {
document.getElementById("hdnbillingaddress").value = 1;
document.getElementById("Txt_BillAddress").value = document.getElementById("hdnaddress").value;
document.getElementById("Txt_BillAddress1").value = document.getElementById("hdnaddress1").value;
document.getElementById("Txt_BillCity").value = document.getElementById("hdncity").value;
document.getElementById("Txt_BillState").value = document.getElementById("hdnstate").value;
document.getElementById("Txt_BillZipCode").value = document.getElementById("hdnzipcode").value;
}
else {
document.getElementById("hdnbillingaddress").value = 0;
document.getElementById("Txt_BillAddress").value = "";
document.getElementById("Txt_BillAddress1").value = "";
document.getElementById("Txt_BillCity").value = "";
document.getElementById("Txt_BillState").value = "";
document.getElementById("Txt_BillZipCode").value = "";

}
}
else {
if (document.getElementById("Chk_ShipAddress").checked == true) {
document.getElementById("hdnshippingaddress").value = 1;
document.getElementById("Txt_ShipAddress").value = document.getElementById("hdnaddress").value;
document.getElementById("Txt_ShipAddress1").value = document.getElementById("hdnaddress1").value;
document.getElementById("Txt_ShipCity").value = document.getElementById("hdncity").value;
document.getElementById("Txt_ShipState").value = document.getElementById("hdnstate").value;
document.getElementById("Txt_ShipZipCode").value = document.getElementById("hdnzipcode").value;
}
else {
document.getElementById("hdnshippingaddress").value = 0;
document.getElementById("Txt_ShipAddress").value = "";
document.getElementById("Txt_ShipAddress1").value = "";
document.getElementById("Txt_ShipCity").value = "";
document.getElementById("Txt_ShipState").value = "";
document.getElementById("Txt_ShipZipCode").value = "";

}

}
}


function placeorder() {
document.getElementById("saction").value = "placeorder";
document.forms[0].submit()
}

var cTimeId;
function ShowPassword(pwd,spanel) {
document.getElementById(spanel).innerHTML = pwd;
document.getElementById(spanel + "link").style.display = "none";
cTimeId= setTimeout("HidePassword('"+spanel+"');", 5000);
}

function HidePassword(spanel) {
document.getElementById(spanel).innerHTML = "*******"
document.getElementById(spanel + 'link').style.display = "block";
clearTimeout(cTimeId);
}

function validatesecurityquestion(id) {

var question = document.getElementById(id).value;

if (question != "") {

if (question.length < 25) {

alert("Security Question should be minimum 25 characters ");
return false;

}
}

}

function assignquestion(id1, id2, val) {

document.getElementById(id1).style.display = 'none';
if (val == 'Make my own question') {       
document.getElementById(id2).value = "";        
} else {
document.getElementById(id2).value = val; 
}
}

function getY(sobj) {
var obj = document.getElementById(sobj);
var curleft = 0;
var curtop = obj.offsetHeight + 5;
var border;
if (obj.offsetParent) {
do {
    // XXX: If the element is position: relative we have to add borderWidth
    if (getStyle(obj, 'position') == 'relative') {
        if (border = getStyle(obj, 'border-top-width')) curtop += parseInt(border);
        if (border = getStyle(obj, 'border-left-width')) curleft += parseInt(border);
    }
    curleft += obj.offsetLeft;
    curtop += obj.offsetTop;
}
while (obj = obj.offsetParent)
}
else if (obj.x) {
curleft += obj.x;
curtop += obj.y;
}
return curleft;
}

function getX(sobj) {
var obj = document.getElementById(sobj);
var curleft = 0;
var curtop = obj.offsetHeight + 5;
var border;
if (obj.offsetParent) {
do {
    // XXX: If the element is position: relative we have to add borderWidth
    if (getStyle(obj, 'position') == 'relative') {
        if (border = getStyle(obj, 'border-top-width')) curtop += parseInt(border);
        if (border = getStyle(obj, 'border-left-width')) curleft += parseInt(border);
    }
    curleft += obj.offsetLeft;
    curtop += obj.offsetTop;
}
while (obj = obj.offsetParent)
}
else if (obj.x) {
curleft += obj.x;
curtop += obj.y;
}
return curtop;
}

function getStyle(obj, styleProp) {
if (obj.currentStyle)
return obj.currentStyle[styleProp];
else if (window.getComputedStyle)
return document.defaultView.getComputedStyle(obj, null).getPropertyValue(styleProp);
}
function showgender(id,pid){

var cpanel=document.getElementById(id);
var panel=document.getElementById("showgender");
panel.style.display = 'block';
      
}

function assigngender(gender)
{

document.getElementById("hdn_gender").value=gender;
            
}
function showquestions(id) {

if (4 > 2) {
       

if (id == 'TxtSecurityQuestion1') {
if (document.getElementById("hdnmakequestion1").value == 0) {
    document.getElementById("showquestions1").style.display = 'block';
}
} else {
if (document.getElementById("hdnmakequestion2").value == 0) {
document.getElementById("showquestions2").style.display = 'block';
}
}
} else {

if (id == 'TxtSecurityQuestion1') {

document.getElementById("showquestions1").style.display = 'none';

} else {

document.getElementById("showquestions2").style.display = 'none';

}
}

}

function closequestions(id) {

document.getElementById(id).style.display = 'none';

}


function showexistingfriends() {

showlightbox(document.getElementById("existingfriendslist").innerHTML);
//document.getElementById("existingfriendslist").style.display = 'none';

}


function changetemplate() {

var fval = document.getElementById("Template").value;
addparam("TemplateId", fval);


}


function sendmail() {
document.getElementById("saction").value = "sendmail";
document.forms[0].submit();
}
var prevcontactid="";
function showcontactdetails(contactid) {
if (document.getElementById(contactid).style.display == "none") {
if (prevcontactid != "") {
document.getElementById("img_" + prevcontactid).src = "../images/plus.png";
document.getElementById(prevcontactid).style.display = "none";
}
prevcontactid = contactid;
document.getElementById("img_" + prevcontactid).src = "../images/minus.png";
var url = "../ajax/getcontactdetails.aspx?contactid=" + contactid;
document.getElementById(contactid).style.display = "block";
AjaxRequest(url, contactid);
} else {
document.getElementById(contactid).style.display = "none";
document.getElementById("img_" + contactid).src = "../images/plus.png";
}
}

function showcontactemailframe(contactid, bounce, donotcontact, accountstatus) {
if (accountstatus == "Inactive") {
if (bounce != "0") { alert("This account is disabled.\n\n Emails to this account are bouncing back."); }
else if (donotcontact != "0") { alert("This account is disabled.\n\n User has unsuscribed from this list."); }
else { alert("This account is disabled.\n\n Pls. contact cutomer support."); }
} else {

var shtml = "<iframe src=\"../members/emailtemplate.aspx?contactid=" + contactid + "\" style=\"width:800px;height:400px;border:none;\"></iframe>";
showlightbox(shtml);
}
}

function RemoveFriend(rid) {

var url = "../ajax/deletefriend.aspx?recordid=" + rid;
  
AjaxRequest(url, 'redirect');

}


function deletefrienddetails() {
document.getElementById("saction").value = "delete";
document.forms[0].submit();
}


function dopost() {
      
unescape(document.getElementById("scxml").value);
}


function AddContacts() {
var firstname, lastname, email, fnameid, lnameid, emailid, errorstr, count=0, fcount = 0, rowcount=0 ;
errorstr = "The following fields have invalid entries\n";
var xml = '<friends>';
document.getElementById("hdnbatchid").value = document.getElementById("batchid").value;
for (var i = 1; i < 11; i++) {
fnameid = "txtfirstname_" + i;
lnameid = "txtlastname_" + i;
emailid = "txtemail_" + i;
firstname = document.getElementById(fnameid).value;
lastname = document.getElementById(lnameid).value;
email = document.getElementById(emailid).value;
           
            
          
if (firstname != '' || lastname !='' || email != '') {
    fcount++;
    document.getElementById(fnameid).style.background = "#fffbff";
    document.getElementById(lnameid).style.background = "#fffbff";
    document.getElementById(emailid).style.background = "#fffbff";

    if (firstname == '') {

        document.getElementById(fnameid).style.background = "#FFFFB3"; count++;
    if (errorstr.indexOf("First Name") == -1) {
            errorstr = errorstr + "First Name\n";
        }
    }

    if (lastname == '') {
            document.getElementById(lnameid).style.background = "#FFFFB3"; count++;
    if (errorstr.indexOf("Last Name") == -1) {
            errorstr = errorstr + "Last Name\n";
        }
    }
    if (email == '' || isvalidemailid(document.getElementById(emailid)) == false) {
        document.getElementById(emailid).style.background = "#FFFFB3"; count++;
        if (errorstr.indexOf("Email ID") == -1) {
            errorstr = errorstr + "Email ID\n";
        }
    }
        if (count == 0) {
        xml = xml + "<friend>";
        xml = xml + "<firstname>" + firstname + "</firstname>";
        xml = xml + "<lastname>" + lastname + "</lastname>";
        xml = xml + "<email>" + email + "</email>";
        xml = xml + "<batchid>" + document.getElementById("batchid").value + "</batchid>";
        xml = xml + "</friend>";
        rowcount++;
    }

}
}
            
if (count != 0) {
alert(errorstr);
}
xml = xml + "</friends>";
if (fcount != 0) {
if (fcount == rowcount) {
    document.getElementById("hdnxml").value = xml;
    document.getElementById("saction").value = "addcontacts";
    document.forms[0].submit();

}
} else {
alert("Please Enter User Details");
document.getElementById("txtfirstname_0", "").focus();
    return false;
         
}
}





function showmember(divid,id2,levelval) {

        

// document.getElementById(id2).src = "../images/minus.png";
//addparam("level", levelval);

if (document.getElementById(divid).style.display == 'none') {
    document.getElementById(divid).style.display = 'block';
    document.getElementById(id2).src = "../images/minus.png";
            
} else {
    document.getElementById(divid).style.display = 'none';
    document.getElementById(id2).src = "../images/plus.png";
           
}

}

function getyear() {


addparam("year", document.getElementById("TxtYear").value);
}


function getseccode(response) {

document.getElementById("securitycode").value = response;

}

function validateuser() {

var shtml = "<iframe src=\"../account/captchavalidation.aspx?CaptchaVal=" + document.getElementById("TxtSecCode").value + "\" style=\"width:500px;height:300px;border:none;\"></iframe>";
showlightbox(shtml);



}


//     function editpaymentdetails(flag) {

//         if (flag == 1) {
//             var shtml = "<iframe src=\"../members/EditShippingBillingAddresses.aspx?Type=billing" + "\" style=\"width:500px;height:300px;border:none;\"></iframe>";

//         } else if (flag == 2) {
//             var shtml = "<iframe src=\"../members/EditShippingBillingAddresses.aspx?Type=shipping" + "\" style=\"width:500px;height:300px;border:none;\"></iframe>";
//         }
//         else {
//             var shtml = "<iframe src=\"../members/EditShippingBillingAddresses.aspx?Type=payment&AddressType=xyz" + "\" style=\"width:500px;height:300px;border:none;\"></iframe>";
//         }

//         showReloadlightbox(shtml);


//             }



function updatepayment() {
        var cardtype = document.getElementById("ddlcardtype").value;
        var cardno = document.getElementById("Txt_Cardno").value;
        var seccode = document.getElementById("Txt_SecCode").value;
        var expiremonth = document.getElementById("ddlexpiremonth").value;
        var expireyear = document.getElementById("ddlexpireyear").value;
               
        var errorstr = "The following fields have incorrect values\n\n";
        var count = 0;
                 
        if (cardtype == "Please Select") {
            errorstr = errorstr + "Card Type\n"; count++;
        }
        if (cardno == "") {
            errorstr = errorstr + "Card No\n"; count++;
        }

        if(cardno!='1111111111111111'){
        if (cardno!='' && cardtype!='Please Select'){
if (checkCreditCard(cardno, cardtype)==false) {
errorstr = errorstr + "Card No Invalid\n"; count++;
}
}
}



        if (seccode == "") {
            errorstr = errorstr + "Security Code\n"; count++;
        }
        if ((expiremonth == "Please Select" && expireyear == "Please Select") || (expiremonth == "Please Select" && expireyear != "Please Select") || (expiremonth != "Please Select" && expireyear == "Please Select")) {
            errorstr = errorstr + "Expiration Date\n"; count++;
        }
                

        if (count == 0) {
            document.getElementById("saction").value = "updatepayment";
            document.forms[0].submit();
        } else {
            alert(errorstr);
            return false;
        }
    }



    function refreshparentwindow() {

        window.top.parent.location.reload();

    }


    function Privacysettings(){

    var showmyemail=document.getElementById("TxtEmail").value;
    var showmyaddress=document.getElementById("TxtAddress").value;
    var showmyphoneno=document.getElementById("TxtPhoneno").value;

var errorstr="The following fields have invalid entries\n\n";
var count=0;

if(showmyemail=='Please Select'){
errorstr=errorstr+"Show My Email\n";
count++;
}

    if(showmyphoneno=='Please Select'){
errorstr=errorstr+"Show My Phone No\n";
count++;
}
if(showmyaddress=='Please Select'){
errorstr=errorstr+"Show My Address\n";
count++;
}

if(count!=0){

alert(errorstr);
return false;

}else{

document.getElementById("saction").value="savechanges";
document.forms[0].submit();

}

    }

var ccErrorNo = 0;
var ccErrors = new Array ()

ccErrors [0] = "Unknown card type";
ccErrors [1] = "No card number provided";
ccErrors [2] = "Credit card number is in invalid format";
ccErrors [3] = "Credit card number is invalid";
ccErrors [4] = "Credit card number has an inappropriate number of digits";

function checkCreditCard (cardnumber, cardname) {
     
// Array to hold the permitted card characteristics
var cards = new Array();

// Define the cards we support. You may add addtional card types as follows.
  
//  Name:         As in the selection box of the form - must be same as user's
//  Length:       List of possible valid lengths of the card number for the card
//  prefixes:     List of possible prefixes for the card
//  checkdigit:   Boolean to say whether there is a check digit
  
cards [0] = {name: "Visa", 
    length: "13,16", 
    prefixes: "4",
    checkdigit: true};
cards [1] = {name: "MasterCard", 
    length: "16", 
    prefixes: "51,52,53,54,55",
    checkdigit: true};
cards [2] = {name: "DinersClub", 
    length: "14,16", 
    prefixes: "305,36,38,54,55",
    checkdigit: true};
cards [3] = {name: "CarteBlanche", 
    length: "14", 
    prefixes: "300,301,302,303,304,305",
    checkdigit: true};
cards [4] = {name: "AmEx", 
    length: "15", 
    prefixes: "34,37",
    checkdigit: true};
cards [5] = {name: "Discover", 
    length: "16", 
    prefixes: "6011,622,64,65",
    checkdigit: true};
cards [6] = {name: "JCB", 
    length: "16", 
    prefixes: "35",
    checkdigit: true};
cards [7] = {name: "enRoute", 
    length: "15", 
    prefixes: "2014,2149",
    checkdigit: true};
cards [8] = {name: "Solo", 
    length: "16,18,19", 
    prefixes: "6334,6767",
    checkdigit: true};
cards [9] = {name: "Switch", 
    length: "16,18,19", 
    prefixes: "4903,4905,4911,4936,564182,633110,6333,6759",
    checkdigit: true};
cards [10] = {name: "Maestro", 
    length: "12,13,14,15,16,18,19", 
    prefixes: "5018,5020,5038,6304,6759,6761",
    checkdigit: true};
cards [11] = {name: "VisaElectron", 
    length: "16", 
    prefixes: "417500,4917,4913,4508,4844",
    checkdigit: true};
cards [12] = {name: "LaserCard", 
    length: "16,17,18,19", 
    prefixes: "6304,6706,6771,6709",
    checkdigit: true};
               
// Establish card type
var cardType = -1;
for (var i=0; i<cards.length; i++) {

// See if it is this card (ignoring the case of the string)
if (cardname.toLowerCase () == cards[i].name.toLowerCase()) {
cardType = i;
break;
}
}
  
// If card type not found, report an error
if (cardType == -1) {
ccErrorNo = 0;
return false; 
}
   
// Ensure that the user has provided a credit card number
if (cardnumber.length == 0)  {
ccErrorNo = 1;
return false; 
}
    
// Now remove any spaces from the credit card number
cardnumber = cardnumber.replace (/\s/g, "");
  
// Check that the number is numeric
var cardNo = cardnumber
var cardexp = /^[0-9]{13,19}$/;
if (!cardexp.exec(cardNo))  {
ccErrorNo = 2;
return false; 
}
       
// Now check the modulus 10 check digit - if required
if (cards[cardType].checkdigit) {
var checksum = 0;                                  // running checksum total
var mychar = "";                                   // next char to process
var j = 1;                                         // takes value of 1 or 2
  
// Process each digit one by one starting at the right
var calc;
for (i = cardNo.length - 1; i >= 0; i--) {
    
// Extract the next digit and multiply by 1 or 2 on alternative digits.
calc = Number(cardNo.charAt(i)) * j;
    
// If the result is in two digits add 1 to the checksum total
if (calc > 9) {
checksum = checksum + 1;
calc = calc - 10;
}
    
// Add the units element to the checksum total
checksum = checksum + calc;
    
// Switch the value of j
if (j ==1) {j = 2} else {j = 1};
} 
  
// All done - if checksum is divisible by 10, it is a valid modulus 10.
// If not, report an error.
if (checksum % 10 != 0)  {
ccErrorNo = 3;
return false; 
}
}  

// The following are the card-specific checks we undertake.
var LengthValid = false;
var PrefixValid = false; 
var undefined; 

// We use these for holding the valid lengths and prefixes of a card type
var prefix = new Array ();
var lengths = new Array ();
    
// Load an array with the valid prefixes for this card
prefix = cards[cardType].prefixes.split(",");
      
// Now see if any of them match what we have in the card number
for (i=0; i<prefix.length; i++) {
var exp = new RegExp ("^" + prefix[i]);
if (exp.test (cardNo)) PrefixValid = true;
}
      
// If it isn't a valid prefix there's no point at looking at the length
if (!PrefixValid) {
ccErrorNo = 3;
return false; 
}
    
// See if the length is valid for this card
lengths = cards[cardType].length.split(",");
for (j=0; j<lengths.length; j++) {
if (cardNo.length == lengths[j]) LengthValid = true;
}
  
// See if all is OK by seeing if the length was valid. We only check the length if all else was 
// hunky dory.
if (!LengthValid) {
ccErrorNo = 4;
return false; 
};   
  
// The credit card is in the required format.
return true;
}



function ShowError()
{
//     if (document.getElementById("TxtEmail").value == "") {
//            alert("Please Enter Your EmailId");
//        } else {
//            if (isvalidemailid( document.getElementById("TxtEmail"))){
//            document.getElementById("saction").value = "inserterror";
//            document.forms[0].submit();
//            } else { alert("Please Enter a valid Email");}
//        }

if(document.getElementById("TxtEmail").value != ""){
        
if(isvalidemailid(document.getElementById("TxtEmail"))=false){
alert("Please Enter a valid Email");
}
     
} else{
document.getElementById("saction").value = "inserterror";
document.forms[0].submit();
}

}


function cleartext(id){

document.getElementById(id).value="";

}



function ShowError(){

var email=document.getElementById("TxtEmail").value;

if(email!="" && isvalidemailid(document.getElementById("TxtEmail"))==false){
alert('Please enter valid email');
return false;
}

document.getElementById("saction").value = "inserterror";
document.forms[0].submit();

}


function refreshcaptcha(){
 
var myRand = parseInt(Math.random() * 99999999);
document.getElementById("img").innerHTML="<img id='img1'  src='../GenerateImage.aspx?mode=refresh&decache="+myRand+"'/>";
 
}

function RememberMyLogin(){

if(document.getElementById("rememberme").checked==true){

document.getElementById("hdnrememberme").value="1";
}else{

document.getElementById("hdnrememberme").value="0";

}

}


function ChangeAttributeImage(url)
{



if (url!="")

{document.getElementById("previewimage").src=url;}

}


function showproductview(){

if(document.getElementById("searchview").checked==true){

document.getElementById("showsearchview").style.display="block";
document.getElementById("showthumbnailview").style.display="none";
// addparam("type","searchview");
}else{
  
document.getElementById("showsearchview").style.display="none";
document.getElementById("showthumbnailview").style.display="block";
// addparam("type","thumbnailview");
}

}


function selectcatalog(){

if(document.getElementById("ddlcatelog").value=="Show All"){

addparam("categorydisplayid","");

}else{
addparam("categorydisplayid",document.getElementById("ddlcatelog").value);

 
}

}


function calculateCoordinates() {
var txtAddress1 = document.getElementById("TxtAddress");
var txtAddress2 = document.getElementById("TxtAddress1");
var txtTown = document.getElementById("TxtCity");
var txtPostcode = document.getElementById("ddlstate");
var txtCountry = document.getElementById("TxtZipCode");
var txtLatitude = document.getElementById("hdnLatitude");
var txtLongitude = document.getElementById("hdnLongitude");
var address = txtAddress1.value + ', ';
address += txtAddress2.value + ', ';
address += txtTown.value + ', ';
address += txtPostcode.value + ', ';
address += txtCountry.value;
var geocoder;
geocoder = new GClientGeocoder();
geocoder.getLatLng(address, function(latlng) {
if (!latlng) {
        txtLatitude.value = "-999";
        txtLongitude.value = "-999";
} else {
    txtLatitude.value = latlng.lat();
    //  alert(txtLatitude.value);
    txtLongitude.value = latlng.lng();

//alert(txtLongitude.value);
}
});

}

function submitform()
{
document.forms[0].submit();
}


//function forgotpassword() {

//var newlinechar = "<br/>";
//var reqinfo = "";
//reqinfo = "The following fields are required " + newlinechar + newlinechar;

//if ((document.getElementById("txt_email").value == "") || isvalidemailid(document.getElementById("txt_email")) == false) {
//reqinfo = reqinfo + "E-mail " + newlinechar;
//}

//if (reqinfo != "The following fields are required " + newlinechar + newlinechar) {
//showlightbox(reqinfo);
//}
//else {
//document.getElementById("hdn_saction").value = "validateemail";
//document.forms[0].submit();
//}
//}


function submitdetails(saction) {
var newlinechar = "<br/>";
var reqinfo = "";
reqinfo = "The following fields are required " + newlinechar + newlinechar;
if (document.getElementById("txt_resname").value == "") {
reqinfo = reqinfo + "Name " + newlinechar;
}
if (document.getElementById('ddl_type').options[document.getElementById('ddl_type').selectedIndex].value == 'Select') {
reqinfo = reqinfo + "Type " + newlinechar;
}
if ((document.getElementById("txt_taxrate").value == "" ) && ((document.getElementById("txt_taxrate").value > "0.00" || document.getElementById("txt_taxrate").value <= "100.00"))){
reqinfo = reqinfo + "Tax Rate " + newlinechar;
}
if (document.getElementById("txt_p_phone").value == "" || isvalidphonenumber(document.getElementById("txt_p_phone").value) == false) {
reqinfo = reqinfo + "Primary phone " + newlinechar;
}

if (document.getElementById("txt_addr").value == "") {
reqinfo = reqinfo + "Address 1 " + newlinechar;
}

if (document.getElementById("txt_city").value == "") {
reqinfo = reqinfo + "City " + newlinechar;
}

if (document.getElementById('ddl_state').options[document.getElementById('ddl_state').selectedIndex].value == 'Select') {
reqinfo = reqinfo + "State " + newlinechar;
}

if (document.getElementById("txt_zipcode").value == "") {
reqinfo = reqinfo + "Zipcode " + newlinechar;
}

if ((document.getElementById('fromtime_1').options[document.getElementById('fromtime_1').selectedIndex].value == 'Select') ||
(document.getElementById('fromformat_1').options[document.getElementById('fromformat_1').selectedIndex].value == 'Select') ||
(document.getElementById('totime_1').options[document.getElementById('totime_1').selectedIndex].value == 'Select') ||
(document.getElementById('toformat_1').options[document.getElementById('toformat_1').selectedIndex].value == 'Select')) {
reqinfo = reqinfo + "Monday" + newlinechar;
}
if ((document.getElementById('fromtime_2').options[document.getElementById('fromtime_2').selectedIndex].value == 'Select') ||
(document.getElementById('fromformat_2').options[document.getElementById('fromformat_2').selectedIndex].value == 'Select') ||
(document.getElementById('totime_2').options[document.getElementById('totime_2').selectedIndex].value == 'Select')||
(document.getElementById('toformat_2').options[document.getElementById('toformat_2').selectedIndex].value == 'Select')) {
reqinfo = reqinfo + "Tuesday" + newlinechar;
}

if ((document.getElementById('fromtime_3').options[document.getElementById('fromtime_3').selectedIndex].value == 'Select') ||
(document.getElementById('fromformat_3').options[document.getElementById('fromformat_3').selectedIndex].value == 'Select') ||
(document.getElementById('totime_3').options[document.getElementById('totime_3').selectedIndex].value == 'Select') ||
(document.getElementById('toformat_3').options[document.getElementById('toformat_3').selectedIndex].value == 'Select')) {
reqinfo = reqinfo + "Wednesday" + newlinechar;
}

if ((document.getElementById('fromtime_4').options[document.getElementById('fromtime_4').selectedIndex].value == 'Select') ||
(document.getElementById('fromformat_4').options[document.getElementById('fromformat_4').selectedIndex].value == 'Select') ||
(document.getElementById('totime_4').options[document.getElementById('totime_4').selectedIndex].value == 'Select') ||
(document.getElementById('toformat_4').options[document.getElementById('toformat_4').selectedIndex].value == 'Select')) {
reqinfo = reqinfo + "Thursday" + newlinechar;
}

if ((document.getElementById('fromtime_5').options[document.getElementById('fromtime_5').selectedIndex].value == 'Select') ||
(document.getElementById('fromformat_5').options[document.getElementById('fromformat_5').selectedIndex].value == 'Select') ||
(document.getElementById('totime_5').options[document.getElementById('totime_5').selectedIndex].value == 'Select') ||
(document.getElementById('toformat_5').options[document.getElementById('toformat_5').selectedIndex].value == 'Select')) {
reqinfo = reqinfo + "Friday" + newlinechar;
}

if ((document.getElementById('fromtime_6').options[document.getElementById('fromtime_6').selectedIndex].value == 'Select') ||
(document.getElementById('fromformat_6').options[document.getElementById('fromformat_6').selectedIndex].value == 'Select') ||
(document.getElementById('totime_6').options[document.getElementById('totime_6').selectedIndex].value == 'Select') ||
(document.getElementById('toformat_6').options[document.getElementById('toformat_6').selectedIndex].value == 'Select')) {
reqinfo = reqinfo + "Saturday" + newlinechar;
}

if ((document.getElementById('fromtime_7').options[document.getElementById('fromtime_7').selectedIndex].value == 'Select') ||
(document.getElementById('fromformat_7').options[document.getElementById('fromformat_7').selectedIndex].value == 'Select') ||
(document.getElementById('totime_7').options[document.getElementById('totime_7').selectedIndex].value == 'Select') ||
(document.getElementById('toformat_7').options[document.getElementById('toformat_7').selectedIndex].value == 'Select')) {
reqinfo = reqinfo + "Sunday" + newlinechar;
}

if (reqinfo != "The following fields are required " + newlinechar + newlinechar) {
showlightbox(reqinfo);
}
else {
restauranthours(saction);
}
}


function clearfield(id,defaultvalue){
if(document.getElementById(id).value==defaultvalue){
document.getElementById(id).value="";}
}


function createmenu(){

var newlinechar="<br/>";
var reqinfo = "";
reqinfo = "The following fields are required " + newlinechar + newlinechar;

if (document.getElementById('ddl_selectoption').options[document.getElementById('ddl_selectoption').selectedIndex].text == 'Select'){
reqinfo = reqinfo + "Select Category " + newlinechar;
}

if(document.getElementById("txt_name").value == ""){
reqinfo = reqinfo + "Name " + newlinechar;
}

if ((document.getElementById("txt_price1").value == "")||(document.getElementById("txt_price1").value == "0")||(document.getElementById("txt_price1").value == "0.00")){
reqinfo = reqinfo + "Price 1" + newlinechar;
}

var optvalue=document.getElementById("ddl_selectoption").options[document.getElementById("ddl_selectoption").selectedIndex].value;

if(document.getElementById("hdn_menuoption2_"+optvalue).value!=""){

if ((document.getElementById("txt_price2").value == "")||(document.getElementById("txt_price2").value == "0")||(document.getElementById("txt_price2").value == "0.00")){
reqinfo = reqinfo + "Price 2" + newlinechar;
}}
if(document.getElementById("hdn_menuoption3_"+optvalue).value!=""){

if ((document.getElementById("txt_price3").value == "")||(document.getElementById("txt_price3").value == "0")||(document.getElementById("txt_price3").value == "0.00")){
reqinfo = reqinfo + "Price 3" + newlinechar;
}}

//if (document.getElementById("txt_description").value == ""){
// reqinfo = reqinfo + "Description " + newlinechar;
//}

var file = document.getElementById("ctl00_ContentPlaceHolder1_ImageUpload").value;

if (file != "") {

file = file.toLowerCase();
var ext = file.split(".");
            
if (ext[1] == "gif" || ext[1] == "jpg" || ext[1] == "jpeg" || ext[1] == "png") {
    //alert("You have added an image file"); 
}  
    else{reqinfo = reqinfo + "Upload only image files" + newlinechar; }
}
//else {
//    reqinfo = reqinfo + "Please select a file to upload" + newlinechar;
//     }
if (reqinfo != "The following fields are required " + newlinechar + newlinechar){
showlightbox(reqinfo);
}
else {       
var inhtml = "";
inhtml = "<table width='100%' align='center'><tr><th align='center'>Creating...</th></tr></tr><tr><td align='center'><img src='images/progress_bar.gif' alt=''/></td></tr></table>";
document.getElementById("hdn_saction").value="setmenudetails";
showcreatinglightbox(inhtml);
var t=setTimeout('document.forms[0].submit();',3000);
}
}

function decimalvalue(id){
if(document.getElementById(id).value!=""){
var f=new Number (document.getElementById (id).value);
document.getElementById(id).value=f.toFixed(2);
}
}

 
function goto(url) {
window.location = url;
}

function saveuserdetails(saction) {
var newlinechar = "<br/>";
var reqinfo = "";
reqinfo = "The following fields are required " + newlinechar + newlinechar;

if (document.getElementById("txt_firstname").value == "") {
reqinfo = reqinfo + "First Name " + newlinechar;
}

if (document.getElementById("txt_lastname").value == "") {
reqinfo = reqinfo + "Last Name " + newlinechar;
}

if ((document.getElementById("txt_email").value == "") || isvalidemailid(document.getElementById("txt_email")) == false) {
reqinfo = reqinfo + "E-mail " + newlinechar;
}

if (document.getElementById("txt_pwd").value == "") {
reqinfo = reqinfo + "Password " + newlinechar;
}

if (document.getElementById("txt_pwd").value != document.getElementById("txt_re_pwd").value) {
reqinfo = reqinfo + "Passwords do not match " + newlinechar;
}

if (document.getElementById("txt_p_phone").value == "" || isvalidphonenumber(document.getElementById("txt_p_phone").value) == false) {
reqinfo = reqinfo + "Primary Phone " + newlinechar;
}

if (document.getElementById("txt_s_phone").value != "" && isvalidphonenumber(document.getElementById("txt_s_phone").value) == false) {
reqinfo = reqinfo + "Secondary Phone " + newlinechar;
}

if (document.getElementById("txt_addr1").value == "") {
reqinfo = reqinfo + "Address 1 " + newlinechar;
}

   
if (document.getElementById("txt_city").value == "") {
reqinfo = reqinfo + "City " + newlinechar;
}

if (document.getElementById('ddl_state').options[document.getElementById('ddl_state').selectedIndex].value == 'Please Select') {
reqinfo = reqinfo + "State " + newlinechar;
}

//if (document.getElementById("txt_zipcode").value == ""||(document.getElementById("txt_zipcode").value).length < 5) {
//reqinfo = reqinfo + "Zip Code " + newlinechar;
//}
if (document.getElementById("txt_zipcode").value == "") {
reqinfo = reqinfo + "Zipcode <br />";
}

var zipcode = document.getElementById("txt_zipcode").value;
if ((zipcode != "") && (zipcode.length < 5)) {
reqinfo = reqinfo + "Incorrect Zipcode  <br />";
}

if (reqinfo != "The following fields are required " + newlinechar + newlinechar) {
showlightbox(reqinfo);
}
else {

if(saction=="update"){
document.getElementById("hdn_saction").value = "update";
document.forms[0].submit();
}
else{
var inhtml = "";
inhtml = "<table width='100%' align='center'><tr><td align='center'><img src='images/loading_animated.gif' alt='Loading...'/></td></tr></table>";
openvalidationcustomlightbox(inhtml);
var t = setTimeout("signupuser()", 3000);
}
}
}

function signupprocess(restxt) {

var cnfstr = "";
var cnfstarttable = ""
var cnfendtable = "";
var cnffirstrowstr = "";
var cnfsecondrowstr = "";
var cnfblankrowstr = "";
var errstr = "";
    
if (restxt != "") {

cnfstarttable = "<table width='100%' cellpadding='0' cellspacing='0'>";
cnfendtable = "</table>";
cnfblankrowstr = "<tr><td colspan='2'>&nbsp;</td></tr>";

if(restxt!="Error"){
cnffirstrowstr = "<tr><td align='center' colspan='2' style='color:red;'>" + restxt + "</td></tr>";
//cnfsecondrowstr = "<tr><td align='center' colspan='2'><a href='personalinformation.aspx'><img src='images/forms/form_continue.gif' alt='Continue'/></a></td></tr>";
    cnfsecondrowstr = "<tr><td align='center' colspan='2'><a href='securelogin.aspx'><img src='images/forms/form_continue.gif' alt='Continue'/></a></td></tr>";
}
else if (restxt == "Error") {
cnffirstrowstr = "<tr><td align='center' colspan='2' style='color:red;'>Error Occurred when signing Up.</br>Please Sign Up once again.</td></tr>";
cnfsecondrowstr = "<tr><td align='center' colspan='2'><a href='signup.aspx'><img src='images/forms/form_close.png' alt='Close'/></a></td></tr>";
}
        
cnfstr = cnfstarttable + cnfblankrowstr + cnffirstrowstr + cnfblankrowstr + cnfsecondrowstr + cnfblankrowstr + cnfendtable;

openvalidationcustomlightbox(cnfstr);
}
else {

closevalidationcustomlightbox();

}
}

function validatelogincredentials() {

var reqinfo = "";
reqinfo = "The following fields are required <br/><br/>";
var count = 0;

if ((document.getElementById("txt_username").value == "") || isvalidemailid(document.getElementById("txt_username")) == false) {
reqinfo = reqinfo + "Email <br/>";
}

if (document.getElementById("txt_password").value == "") {
reqinfo = reqinfo + "Password <br/>";
}

if (document.getElementById("chk_login-check").checked == true) {
document.getElementById("hdn_rememberme").value = "1";
}

if (reqinfo != "The following fields are required <br/><br/>") {
showlightbox(reqinfo);
}

else {
document.getElementById("hdn_saction").value = "userlogin";
document.forms[0].submit();
}
}

function displaylightbox(response_txt) {
if (response_txt != "") {

var responsestr = "";
var dynamicstr = "";
var dynamicstarttable = "";
var dynamicendtable = "";
var dynamicfirstrowstr = "";
var dynamicsecondrowstr = "";
var dynamicblankrowstr = "";

responsestr = "Entered Email Id is already being used by some other user.</br>Please select anyone option from below.";
dynamicstarttable = "<table width='100%' cellpadding='0' cellspacing='0' >";
dynamicendtable = "</table>";
dynamicfirstrowstr = "<tr><td align='center' colspan='2' style='color:red;'>" + responsestr + "</td></tr>";
dynamicsecondrowstr = "<tr><td style='text-align:center;width:50%;'><a href='forgotpassword.aspx?txt_email=" + response_txt + "'><img src='../images/forms/ForgotPass.PNG' alt='Forgot Password'/></a></td><td style='text-align:center;width:50%;'><a href = 'javascript:void(0);' onclick = 'javascript:closecustomshowlightbox();'><img src='../images/forms/ChangeEmailID.png' alt='Change My Email Address'/></a></td></tr>";
dynamicblankrowstr = "<tr><td colspan='2'>&nbsp;</td></tr>";
dynamicstr = dynamicstarttable + dynamicfirstrowstr + dynamicblankrowstr + dynamicsecondrowstr + dynamicblankrowstr + dynamicendtable;

openvalidationcustomlightbox(dynamicstr);
}

else {

closevalidationcustomlightbox();
}
}

function closecustomshowlightbox() {

document.getElementById('txt_email').value = "";
document.getElementById('txt_email').focus();
closevalidationcustomlightbox();
}

function signupuser() {

var f_name = document.getElementById('txt_firstname').value;
var l_name = document.getElementById('txt_lastname').value;
var email = document.getElementById('txt_email').value;
var pwd = document.getElementById('txt_pwd').value;
var p_phone = document.getElementById('txt_p_phone').value;
var s_phone = document.getElementById('txt_s_phone').value;
var addr1 = document.getElementById('txt_addr1').value;
var addr2 = document.getElementById('txt_addr2').value;
var city = document.getElementById('txt_city').value;
var state = document.getElementById('ddl_state').value;
var zipcode = document.getElementById('txt_zipcode').value;
AjaxRequest("Ajax/AddUser.aspx?txt_firstname=" + f_name + "&txt_lastname=" + l_name + "&txt_email=" + email + "&txt_pwd=" + pwd + "&txt_p_phone=" + p_phone + "&txt_s_phone=" + s_phone + "&txt_addr1=" + addr1 + "&txt_addr2=" + addr2 + "&txt_city=" + city + "&ddl_state=" + state + "&txt_zipcode=" + zipcode + "&saction=setuserdetails", 'signup');
}

function closevalidationcustomlightbox() {
document.getElementById('close1').style.display = 'none';
document.getElementById('light1').style.display = "none";
document.getElementById('fade1').style.display = "none";
document.getElementById('lightcontent1').innerHTML = "";
}

function openvalidationcustomlightbox(inhtml) {
document.getElementById('close1').style.display = 'block';
document.getElementById('light1').style.display = 'block';
document.getElementById('fade1').style.display = 'block';
document.getElementById('lightcontent1').innerHTML = inhtml;
}

function validate_email(id) {

var email = document.getElementById(id).value;
if (email == "") {
changecolor('txt_email');
}
else {
var inhtml = "";
inhtml = "<table width='100%' align='center'><tr><td align='center'><img src='/images/loading_animated.gif' alt='Loading...'/></td></tr></table>";
openvalidationcustomlightbox(inhtml);
isvalidemailid(document.getElementById("txt_email"));
AjaxRequest('/Ajax/EmailValidation.aspx?x=1&txt_email=' + email, 'emailvalidate');
//var t=setTimeout( "AjaxRequest('/Ajax/EmailValidation.aspx?txt_email='" + email+", 'emailvalidate')",3000);
}
}

function alphabetsonly(e) {

return ((e.keyCode >= 65 && e.keyCode <= 90) || e.keyCode == 8 || e.keyCode == 9 || e.keyCode == 16 || e.keyCode == 20 || e.keyCode == 46 || (e.keyCode >= 37 && e.keyCode <= 40)|| e.keyCode == 32)
return false;
}

function dropdown_validate(id) {

document.getElementById(id).style.background = "#fffbff";
var value = document.getElementById(id).options[document.getElementById(id).selectedIndex].value;
// alert(value);
if ((value == "Please Select")||(value=="Select Currency") || value == "") {
document.getElementById(id).style.background = "#FFFFB3";
}
}


function dropdown_yearmonthvalidate(id) {

document.getElementById(id).style.background = "#fffbff";
var value = document.getElementById(id).options[document.getElementById(id).selectedIndex].value;
// alert(value);
if ((value == "Month")||(value=="Year")) {
document.getElementById(id).style.background = "#FFFFB3";
}
}

function forgotpassword() {

var newlinechar = "<br/>";
var reqinfo = "";
reqinfo = "The following fields are required " + newlinechar + newlinechar;

if ((document.getElementById("txt_email").value == "") || isvalidemailid(document.getElementById("txt_email")) == false) {
reqinfo = reqinfo + "E-mail " + newlinechar;
}

if (reqinfo != "The following fields are required " + newlinechar + newlinechar) {
showlightbox(reqinfo);
}
else {
document.getElementById("hdn_saction").value = "validateemail";
document.forms[0].submit();
}
}

function restauranthours(saction) {
var xmlfinalstr = "";
var xmlstart = "<RestaurantHours>";
var xmlend = "</RestaurantHours>";
var xml = "";

for (var i = 1; i <= 7; i++) {
    
xml += "<RestaurantHour>";
xml += "<DayOfTheWeek>" + document.getElementById("dayoftheweek_" + i).value + "</DayOfTheWeek>";
xml += "<OpenTime>" + document.getElementById("fromtime_" + i).value + "</OpenTime>";
xml += "<OpenTimeFormat>" + document.getElementById("fromformat_" + i).value + "</OpenTimeFormat>";
xml += "<CloseTime>" + document.getElementById("totime_" + i).value + "</CloseTime>";
xml += "<CloseTimeFormat>" + document.getElementById("toformat_" + i).value + "</CloseTimeFormat>";
xml += "</RestaurantHour>";

}
xmlfinalstr = xmlstart + xml + xmlend;
document.getElementById("hdn_xml").value = xmlfinalstr;
document.getElementById("hdn_saction").value = saction;
document.forms[0].submit();
}

function createcategories() {
var newlinechar = "<br/>";
var reqinfo = "";
reqinfo = "The following fields are required " + newlinechar + newlinechar;

if (document.getElementById("txt_catname").value == "") {
reqinfo = reqinfo + "Category Name " + newlinechar;
}

if (document.getElementById("txt_displayorder").value=="") {
reqinfo = reqinfo + "Display Order " + newlinechar;
}

if (reqinfo != "The following fields are required " + newlinechar + newlinechar) {
showlightbox(reqinfo);
}
       
else {
document.getElementById("hdn_saction").value = "createcategories";
document.forms[0].submit();
    }
}

function saveimage() {
var filename = document.getElementById('ctl00_ContentPlaceHolder1_ImageUpload').value;
if (filename != "") {
var extn = filename.split(".");
if (extn[1] == "gif" || extn[1] == "jpeg" || extn[1] == "png"||extn[1] == "jpg" ) {
    document.getElementById("hdn_saction").value = "uploadimage";
    document.forms[0].submit();
}
else {
    alert("You can add only an Image file");
}
}
else {
alert("Please select a Image file");
}
}

function deletecategories(recordid) {
var str = "";
var starttable = "";
var endtable = "";
var firstrowstr = "";
var secondrowstr = "";
var blankrowstr = "";
starttable = "<table width='100%' cellpadding='0' cellspacing='0' >";
endtable = "</table>";
firstrowstr = "<tr><td align='center' colspan='2' style='color:red;'>Are you sure you want to delete?</td></tr>";
secondrowstr = "<tr><td align='center' colspan='2'><a href='#' onclick='javascript:confirmdelete(" + recordid + ");'><img src='images/forms/btn_yes.PNG' alt='yes'/></a>&nbsp;<a href='TaxesByRadhacreatecategories.aspx'><img src='images/forms/btn_no.PNG' alt='no'/></a></td></tr>";
blankrowstr = "<tr><td colspan='2'>&nbsp;</td></tr>";
str = starttable + blankrowstr + firstrowstr + blankrowstr + secondrowstr + blankrowstr + endtable;
openvalidationcustomlightbox(str);
}


function confirmdelete(recordid) {
document.getElementById("hdn_delrecordid").value = recordid;
document.getElementById("hdn_saction").value = "deletecategories";
document.forms[0].submit();
}

function editcategories(recordid) {
document.getElementById("hdn_selrecordid").value = recordid;
document.getElementById("hdn_saction").value = "editcategories";
document.forms[0].submit();
}

function cursorposition(id) {

if(document.getElementById(id).value == ""){
document.getElementById(id).focus();
}
}

function updatecategories(recordid) {

var newlinechar = "<br/>";
var reqinfo = "";
reqinfo = "The following fields are required " + newlinechar + newlinechar;

if (document.getElementById("txt_catname").value == "") {
reqinfo = reqinfo + "Category Name " + newlinechar;
}

if (document.getElementById("txt_displayorder").value == "") {
reqinfo = reqinfo + "Display Order " + newlinechar;
}

if (reqinfo != "The following fields are required " + newlinechar + newlinechar) {
showlightbox(reqinfo);
}
else {

document.getElementById("hdn_selrecordid").value = recordid;
document.getElementById("hdn_saction").value = "updatecategories";
document.forms[0].submit();
}
}

   
function closeCategoryList() {
document.getElementById("light1").style.display ="none";
document.getElementById("fade1").style.display = "none";
document.getElementById("close1").style.display = "none";
}


function showCategoryList() {
document.getElementById("light1").style.display = "block";
document.getElementById("fade1").style.display = "block";
document.getElementById("close1").style.display = "block";
}

function showAddMenuForm(){
var optvalue=document.getElementById("ddl_selectoption").options[document.getElementById("ddl_selectoption").selectedIndex].value;
if (document.getElementById("ddl_selectoption").options[document.getElementById("ddl_selectoption").selectedIndex].text != "Select"){
document.getElementById("id-addmenuform").style.display="block";
document.getElementById("menuoption1").innerHTML=document.getElementById("hdn_menuoption1_"+optvalue).value;
document.getElementById("menuoption2").innerHTML=document.getElementById("hdn_menuoption2_"+optvalue).value;
document.getElementById("menuoption3").innerHTML=document.getElementById("hdn_menuoption3_"+optvalue).value;
}
if(document.getElementById("hdn_menuoption2_"+optvalue).value != ""){
document.getElementById("showtextbox2").style.display="block";
}
if(document.getElementById("hdn_menuoption2_"+optvalue).value == ""){
document.getElementById("showtextbox2").style.display="none";
}
if(document.getElementById("hdn_menuoption3_"+optvalue).value != ""){
document.getElementById("showtextbox3").style.display="block";
}
if(document.getElementById("hdn_menuoption3_"+optvalue).value == ""){
document.getElementById("showtextbox3").style.display="none";
}
}

function deletemenu(recordid) {
var confirmdelete = confirm("Are you sure you want to delete?");

if(confirmdelete){
document.getElementById("hdn_delrecordid").value = recordid;
document.getElementById("hdn_saction").value = "deletemenu";
document.forms[0].submit();
}
}

function confirmdeletemenu(recordid){

var confirmdelete = confirm("Are you sure you want to delete?");

if(confirmdelete){
window.location="TaxesByRadhacreatemenu.aspx?DelMenuRecordID="+recordid+"&redirect=yes";
}

}
    

function editmenu(recordid) {
document.getElementById("hdn_selrecordid").value = recordid;
document.getElementById("hdn_saction").value = "editmenu";
document.forms[0].submit();
}


function updatemenu(recordid){
//alert(recordid);
var newlinechar="<br/>";
var reqinfo = "";
reqinfo = "The following fields are required " + newlinechar + newlinechar;

if (document.getElementById('ddl_selectoption').options[document.getElementById('ddl_selectoption').selectedIndex].text == 'Select'){
reqinfo = reqinfo + "Choose a section " + newlinechar;
}

if(document.getElementById("txt_name").value == ""){
reqinfo = reqinfo + "Name " + newlinechar;
}

if ((document.getElementById("txt_price1").value == "")||(document.getElementById("txt_price1").value == "0")||(document.getElementById("txt_price1").value == "0.00")){
reqinfo = reqinfo + "Price 1" + newlinechar;
}

var optvalue=document.getElementById("ddl_selectoption").options[document.getElementById("ddl_selectoption").selectedIndex].value;

if(document.getElementById("hdn_menuoption2_"+optvalue).value!=""){

if ((document.getElementById("txt_price2").value == "")||(document.getElementById("txt_price2").value == "0")||(document.getElementById("txt_price2").value == "0.00")){
reqinfo = reqinfo + "Price 2" + newlinechar;
}}
if(document.getElementById("hdn_menuoption3_"+optvalue).value!=""){

if ((document.getElementById("txt_price3").value == "")||(document.getElementById("txt_price3").value == "0")||(document.getElementById("txt_price3").value == "0.00")){
reqinfo = reqinfo + "Price 3" + newlinechar;
}}

//if (document.getElementById("txt_description").value == ""){
//    reqinfo = reqinfo + "Description " + newlinechar;
//}

var file = document.getElementById("ctl00_ContentPlaceHolder1_ImageUpload").value;

if (file != "") {
file = file.toLowerCase();
var ext = file.split(".");
            
if (ext[1] == "gif" || ext[1] == "jpg" || ext[1] == "jpeg" || ext[1] == "png") {
    //alert("You have added an image file"); 
}  
    else{reqinfo = reqinfo + "Upload only image files" + newlinechar; }
} 
//        else {
//            reqinfo = reqinfo + "Please select a file to upload" + newlinechar;
//            }

if (reqinfo != "The following fields are required " + newlinechar + newlinechar){
showlightbox(reqinfo);
}
else {
document.getElementById("hdn_selrecordid").value = recordid;
document.getElementById("hdn_saction").value="updatemenu";
document.forms[0].submit();
}
}

function isNumericKey(evt) {
var charCode = (evt.which) ? evt.which : event.keyCode
if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
return false;

return true;
}

function showcategorymenu(count){

if(document.getElementById("showmenu_"+count).style.display=="none"){
document.getElementById("showmenu_"+count).style.display="block";
document.getElementById("showimage_"+count).src="images/minus.png";
}
else{
document.getElementById("showmenu_"+count).style.display="none";
document.getElementById("showimage_"+count).src="images/plus_small.jpg";
}
}

function changecolorselect(f){
alert("test");
f.fontcolor("green");
}


function showcreatinglightbox(inhtml) {
document.getElementById("light2").style.display = "block";
document.getElementById("fade2").style.display = "block";
document.getElementById("lightcontent2").innerHTML=inhtml;
    
}


function selectAll(rowcount){

if(document.getElementById("chk_allorders").checked==true){
for(var i=0;i<rowcount;i++){
document.getElementById("chk_orderno_"+i).checked=true;
}
}
else{
for(var i=0;i<rowcount;i++){
document.getElementById("chk_orderno_"+i).checked=false;
}
}

}

function updatestatus(orderno, status){
document.getElementById("hdn_orderno").value=orderno;
document.getElementById("hdn_status").value=status;
document.getElementById("saction").value="updatestatus";
document.forms[0].submit();
}

function filterstatus(){
var statusid=document.getElementById("ddl_showorders").options[document.getElementById("ddl_showorders").selectedIndex].value;
var qs = window.location.search;
//qs = removeqs(qs, "sort", false);
//if (true) { window.location.search = qs + "&sort=" + statusid; }
addqs("sort",statusid,true);
}

function changepagesize() {
var pagesize = document.getElementById("ddlpagesize").value;
var fname = "ps";
var qs = window.location.search;
qs = removeqs(qs, "showlight", false);
qs = removeqs(qs, "ps", false);
if (fname == "t") {
qs = removeqs(qs, "at", false);
}
if (true) { window.location.search = qs + "&" + fname + "=" + pagesize; }
}

function updateorderstatus(rowcount) {
var xmlfinalstr = "";
var xmlstart = "<UpdateActions>";
var xmlend = "</UpdateActions>";
var xml = "";
var k=0;
var statusid="";
var orderno="";
if(document.getElementById("ddl_orderactions").options[document.getElementById("ddl_orderactions").selectedIndex].value == "Select"){
dropdown_validate("ddl_orderactions");
}
else{
for(i=0;i<rowcount;i++){
 orderno = document.getElementById("chk_orderno_"+i).value;
if(document.getElementById("chk_orderno_"+i).checked == true){
if(document.getElementById("hdn_orderstatusid_"+orderno).value == "4" || document.getElementById("hdn_orderstatusid_"+orderno).value == "5" ){
alert("You cannot change the status of a Completed / Cancelled Order.\n Please deselect it.");
return false;
}
else if(document.getElementById("hdn_flag_"+i).value =="1"){
alert("You cannot change the status of a Future Order.\n Please deselect it.");
return false;
}
else{
xml += "<UpdateAction>";
xml += "<OrderNo>" + document.getElementById("chk_orderno_"+i).value + "</OrderNo>";
xml += "<StatusId>" + document.getElementById("ddl_orderactions").options[document.getElementById("ddl_orderactions").selectedIndex].value + "</StatusId>";
xml += "</UpdateAction>";
k = k + 1;
}
}
}
if(k==0){
alert("Please select atleast one order");
}
else {
//statusid = document.getElementById("hdn_orderstatusid_"+orderno).value;
//if( ( statusid == "4" ) || ( statusid == "5" ) ){
//alert("You cannot change the status of a Completed / Cancelled Order.\n Please deselect it.");
//}
//if( flag == "1" ){
//alert("You cannot change the status of a Future Order.\n Please deselect it.");
//}
//else{
xmlfinalstr = xmlstart + xml + xmlend;
document.getElementById("hdn_xml").value = xmlfinalstr;
document.getElementById("hdn_saction").value = "updateactions";
//alert(xmlfinalstr);
document.forms[0].submit();
//}
}        
}
}

function PreviousPage(pageno,pagesize){
var previouspage=0;
previouspage=pageno--;
if(pageno>0){
addqs("pn",pageno,true);
}
else{
return false;
}
}

function NextPage(pageno,pagesize,totalpages){
var nextpage=0;
nextpage=pageno++;
if(pageno<=totalpages){
addqs("pn",pageno,true);
}else{
return false;
}
}

function checkcategory(rowcount, url) {
if(rowcount == "0"){
var str = "";
var starttable = "";
var endtable = "";
var firstrowstr = "";
var secondrowstr = "";
var blankrowstr = "";
starttable = "<table width='100%' cellpadding='0' cellspacing='0' align='center' >";
endtable = "</table>";
firstrowstr = "<tr><td align='center' colspan='2' style='color:red;'>Your Menu is Empty</td></tr>";
secondrowstr = "<tr><td align='center' colspan='2'><a href='#' onclick='window.location.reload();'><img src='images/forms/btn_CreateNow.PNG' alt='CreateNow'/></a>&nbsp;&nbsp;&nbsp;<a href='myaccount.aspx'><img src='images/forms/btn_Later.PNG' alt='Later'/></a></td></tr>";
blankrowstr = "<tr><td colspan='2'>&nbsp;</td></tr>";
str = starttable + blankrowstr + firstrowstr + blankrowstr + secondrowstr + blankrowstr + endtable;
opencategorycustomlightbox(str);
}
else{
window.location = url;
}
}

function closecategorycustomlightbox() {
document.getElementById('close2').style.display = "none";
document.getElementById('light1').style.display = "none";
document.getElementById('fade1').style.display = "none";
document.getElementById('lightcontent1').innerHTML = "";
}

function opencategorycustomlightbox(inhtml) {
document.getElementById('close2').style.display = "block";
document.getElementById('light1').style.display = "block";
document.getElementById('fade1').style.display = "block";
document.getElementById('lightcontent1').innerHTML = inhtml;
}

function editliveorders(rowcount, flag){
var orderno;
var k=0;
for (i=0;i<rowcount;i++){
if(document.getElementById("chk_orderno_"+i).checked == true){
orderno=document.getElementById("chk_orderno_"+i).value;
k=k+1;
}
}
if(k==0){
alert("Please select one order for editing");
}
else if(k>1){
alert ("Select only one order at a time");
}
else {
window.location="TaxesByRadhaeditorder.aspx?orderno="+orderno+"&flag="+flag;
}
}


function deleteliveorders(rowcount){
var k=0;
for (i=0;i<rowcount;i++){
if(document.getElementById("chk_orderno_"+i).checked == true){
document.getElementById("hdn_delrecordid").value=document.getElementById("chk_orderno_"+i).value;
k=k+1;
}
}
if(k==0){
alert("Please select one order for delete");
}
else if(k>1){
alert ("Select only one order at a time");
}
else {
document.getElementById("hdn_saction").value = "deleteliveorder";
document.forms[0].submit();
}
}

function deletemultiplefutureorders(rowcount){
var xmlstartstr = "<Orders>";
var xmlendstr = "</Orders>";
var xmlstr = "";
var xmlfinalstr = "";
var k =0;
    for (i=0;i<rowcount;i++){
        if(document.getElementById("chk_orderno_"+i).checked == true){
        xmlstr += "<Order>";
        xmlstr += "<OrderNo>"+ document.getElementById("chk_orderno_"+i).value + "</OrderNo>";
        xmlstr += "</Order>";
        k = k+1;
        }
    }
    
     xmlfinalstr = xmlstartstr + xmlstr + xmlendstr;
 if(k==0){
  alert("Please select atleast one order to delete");
  }
  else{
 var confirmcancel=confirm("Are you sure you want to cancel order?");
if(confirmcancel){
document.getElementById("hdn_xml").value = xmlfinalstr;
document.getElementById("hdn_saction").value = "deleteliveorder";
document.forms[0].submit();
}
}
}

function getmenu(){
if(document.getElementById("txt_quantity").value != "Qty" || document.getElementById("txt_quantity").value != ""){
document.getElementById("hdn_quantity").value=document.getElementById("txt_quantity").value;
}
document.getElementById("hdn_menusectionrecid").value=document.getElementById("ddl_category").options[document.getElementById("ddl_category").selectedIndex].value;
document.getElementById("hdn_saction").value="getmenu";
document.forms[0].submit();
}

function addorders(){
var newlinechar = "<br/>";
var reqinfo = "";
reqinfo = "The following fields are required " + newlinechar + newlinechar;

if ((document.getElementById("txt_quantity").value == "") || (document.getElementById("txt_quantity").value=="0") || (document.getElementById("txt_quantity").value=="Qty")&&(isInteger(document.getElementById("txt_quantity").value)==false)) {
reqinfo = reqinfo + "Quantity " + newlinechar;
}
if (document.getElementById("ddl_category").options[document.getElementById("ddl_category").selectedIndex].text == "Select") {
reqinfo = reqinfo + "Category " + newlinechar;
}
if (document.getElementById("ddl_menu").options[document.getElementById("ddl_menu").selectedIndex].text == "Select") {
reqinfo = reqinfo + "Menu " + newlinechar;
}
if(document.getElementById("hdn_menuoption").value=="1"){
if (document.getElementById("ddl_menuoption").options[document.getElementById("ddl_menuoption").selectedIndex].text == "Select") {
reqinfo = reqinfo + "Menu option " + newlinechar;
}}
if (reqinfo != "The following fields are required " + newlinechar + newlinechar) {
showlightbox(reqinfo);
}
       
else {
document.getElementById("hdn_saction").value = "addorders";
document.forms[0].submit();
    }

}


function editorder(recordid) {
document.getElementById("hdn_selrecordid").value = recordid;
document.forms[0].submit();
}


function deleteorder(recordid) {
var confirmdelete = confirm("Are you sure you want to delete?");

if( confirmdelete){
document.getElementById("hdn_delrecordid").value = recordid;
document.getElementById("hdn_saction").value = "deleteorder";
document.forms[0].submit();
}
}
    


function updateorder(recordid) {
//      alert(recordid);
var newlinechar = "<br/>";
var reqinfo = "";
reqinfo = "The following fields are required " + newlinechar + newlinechar;

if (document.getElementById("txt_qty_"+recordid).value == "") {
reqinfo = reqinfo + "Quantity " + newlinechar;
}

if (reqinfo != "The following fields are required " + newlinechar + newlinechar) {
showlightbox(reqinfo);
}
else {

document.getElementById("hdn_updateselorder").value = recordid;
document.getElementById("hdn_saction").value = "updateorder";
document.forms[0].submit();
}
}

function updateliveorders(saction) {
//      alert(recordid);
var newlinechar = "<br/>";
var reqinfo = "";
reqinfo = "The following fields are required " + newlinechar + newlinechar;

if (document.getElementById("txt_name").value == "") {
reqinfo = reqinfo + "Name" + newlinechar;
}

if (document.getElementById("txt_phone").value == "") {
reqinfo = reqinfo + " Phone No" + newlinechar;
}

if (reqinfo != "The following fields are required " + newlinechar + newlinechar) {
showlightbox(reqinfo);
}
else {
if(saction=="updatemyorder"){
document.getElementById("hdn_saction").value = saction;
document.forms[0].submit();
}
else {
document.getElementById("hdn_saction").value = saction;
document.forms[0].submit();
}
}
}

function updateliveorderPickUpTime() {
var newlinechar = "<br/>";
var reqinfo = "";
reqinfo = "The following fields are required " + newlinechar + newlinechar;

if (document.getElementById("txt_name").value == "") {
reqinfo = reqinfo + "Name" + newlinechar;
}

if (document.getElementById("txt_phone").value == "") {
reqinfo = reqinfo + " Phone No" + newlinechar;
}

if (document.getElementById("txt_pickuptime").value == "") {
reqinfo = reqinfo + " Pick Up Date" + newlinechar;
}

if(document.getElementById("ddl_restauranttime").options[document.getElementById("ddl_restauranttime").selectedIndex].value=="Select"){
reqinfo = reqinfo + " Pick Up Time " + newlinechar;
}
//alert(document.getElementById("ddl_restauranttime").options[document.getElementById("ddl_restauranttime").selectedIndex].value);
if (reqinfo != "The following fields are required " + newlinechar + newlinechar) {
showlightbox(reqinfo);
}
else {

document.getElementById("hdn_saction").value = "updateliveorderPickUpTime";
document.forms[0].submit();
}
}


function isInteger(n) {
return (typeof n == 'number' && /^-?\d+$/.test(n+''));
}

function dotrim(str){
return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}

function checkquantity(){
var qtystr="";
qtystr = dotrim(document.getElementById("txt_quantity").value);

if ((qtystr != "") || (qtystr != "Qty")){
document.getElementById("txt_quantity").style.textalign = "right";
document.getElementById("txt_quantity").value ="";

if(isInteger(qtystr)){
document.getElementById("hdn_quantity").value = qtystr;
}

}
}

function Unpublish(){
var confirmbox = confirm("This will make the menu invisible for the user.\n Are you sure?");
if(confirmbox == true){
document.getElementById("hdn_flag").value="0";
document.getElementById("hdn_saction").value="publishorunpublish";
document.forms[0].submit();
}
}

function Publish(){
document.getElementById("hdn_flag").value="1";
document.getElementById("hdn_saction").value="publishorunpublish";
document.forms[0].submit();
}

function Gooffline(){
var status = document.getElementById("hdn_restaurantstatus").value;
if (status == "0"){
document.getElementById("hdn_flag").value="0";
}
else{
document.getElementById("hdn_flag").value="1";
}
document.getElementById("hdn_live").value="0";
document.getElementById("hdn_saction").value="onlineliveorder";
document.forms[0].submit();
}

function Goonline(){
var status = document.getElementById("hdn_restaurantstatus").value;
if (status == "0"){
var str = "";
var starttable = "";
var endtable = "";
var firstrowstr = "";
var secondrowstr = "";
var blankrowstr = "";
starttable = "<table width='100%' cellpadding='0' cellspacing='0' >";
endtable = "</table>";
firstrowstr = "<tr><td align='center' colspan='2' style='color:red;'>Your Menu is not published</td></tr>";
secondrowstr = "<tr><td align='center' colspan='2'><a href='#' onclick = 'javascript:publishliveorder();'><img src='images/forms/PublishNow.png' alt='PublishNow'/></a>&nbsp;<a href='#' onclick = 'javascript:cancelliveorder();'><img src='images/forms/btn_cancel.PNG' alt='Cancel'/></a></td></tr>";
blankrowstr = "<tr><td colspan='2'>&nbsp;</td></tr>";
str = starttable + blankrowstr + firstrowstr + blankrowstr + secondrowstr + blankrowstr + endtable;
showlightbox(str);
}
else{
document.getElementById("hdn_live").value="1";
document.getElementById("hdn_saction").value="onlineliveorder";
document.forms[0].submit();
}
}

function publishliveorder(){
closeNoReloadlightbox();
document.getElementById("hdn_live").value="1";
document.getElementById("hdn_flag").value="1";
document.getElementById("hdn_saction").value="onlineliveorder";
document.forms[0].submit();
}

function cancelliveorder(){
closeNoReloadlightbox();
document.getElementById("hdn_live").value="1";
document.getElementById("hdn_flag").value="0";
document.getElementById("hdn_saction").value="onlineliveorder";
document.forms[0].submit();

}

//function isliveorders(){
//if(document.getElementById("hdn_liveorders").value=="1"){
//alert("new orders");
//}
//}

 function PlaySound(soundfile) {
 if(document.getElementById("hdn_liveorders").value=="1"){
 document.getElementById("embedaudio").innerHTML="<embed src='"+soundfile+"' hidden='true' autostart='true' ></embed>";
 }
 }

 function popupordersummary(orderno,flag){
 window.open("TaxesByRadhavieworder.aspx?orderno="+orderno+"&flag="+flag,name,"height=550,width=800,scrollbars=yes");
 }

function GetActiveOrders(){
var url = "../ajax/getactiveorders.aspx?";
AjaxRequest(url, "InsertActiveOrder");
}

function insertactiveorders(recordid, Mode){
//if(rowcount > 0){
    //if(document.getElementById("chk_futureorder").checked == true){
    //var url = "../ajax/getactiveorders.aspx?saction=insert&Mode=" + Mode + "&MenuRecordId=" + recordid +"&isfutureorder=1";
    //}
//}else{
    var url = "../ajax/getactiveorders.aspx?saction=insert&Mode=" + Mode + "&MenuRecordId=" + recordid;
    //}
    AjaxRequest(url, "InsertActiveOrder");
   // window.location.reload();
}

//function deleteactiveorder(recordid){
//var url = "../ajax/getactiveorders.aspx?saction=insert&Mode=2&DelRecordId=" + recordid;
//AjaxRequest(url, "InsertActiveOrder");
//}

function updateactiveorder(recordid, option, i){
var qty="";
qty = dotrim(document.getElementById("txt_quantity_"+i).value);
var url = "../ajax/getactiveorders.aspx?saction=update&updrecordid=" + recordid + "&option=" + option+"&qty="+qty;
AjaxRequest(url, "InsertActiveOrder");
//alert(recordid);
}

function DisplayActiveOrders(sresponse){
document.getElementById("ajaxshow_activeorders").innerHTML=sresponse;
//window.location.reload();
}



//function orderprice(rowcount,MenuRecordId){

//    var xmlfinalstr = "";
//    var xmlstart = "<ItemPrices>";
//    var xmlend = "</ItemPrices>";
//    var xml = "";
//   
//    
//    for(i=0;i<rowcount;i++){
//       
//        if(document.getElementById("menuoption1_"+i).checked == true){
//        xml += "<ItemPrice>";
//        xml += "<MenuRecordId>" + document.getElementById("menuoption1_"+i).value + "</MenuRecordId>";
//        xml += "<MenuOption>" + MenuOption + "</MenuOption>";
//        xml += "<MenuPrice>" + MenuPrice + "</MenuPrice>";
//        xml += "</ItemPrice>";
//        k = k + 1;
//        }
//       }
//       xmlfinalstr = xmlstart + xml + xmlend;
//        document.getElementById("hdn_xml").value = xmlfinalstr;
//        alert(xmlfinalstr);
//        }
//        
        
     

//     function orderprice(recordid,menurecordid,menuoption){
//     alert(recordid);
//        alert(menurecordid);
//        alert(menuoption);
//        }




function insertmyorder(subtotal,taxamount,total){

var futuredate="";
var futuretime="";
var newlinechar = "<br/>";
var reqinfo = "";
reqinfo = "The following fields are required " + newlinechar + newlinechar;

if(document.getElementById("chk_futureorder").checked == true){
    if(document.getElementById("txt_futureorderdate").value == ""){
    reqinfo = reqinfo + "Future Date" + newlinechar;
    }
    else{
     futuredate = document.getElementById("txt_futureorderdate").value;
     }
    if(document.getElementById("ddlrestauranttime").options[document.getElementById("ddlrestauranttime").selectedIndex].text=="Select"){
    reqinfo= reqinfo + "Future Time" + newlinechar;
    }
    else{
    futuretime = document.getElementById("ddlrestauranttime").options[document.getElementById("ddlrestauranttime").selectedIndex].value;
    }
}

if(reqinfo != "The following fields are required " + newlinechar + newlinechar){
showlightbox(reqinfo);
}else{
var url = "../ajax/getactiveorders.aspx?saction=insertactiveorder&subtotal="+subtotal+"&taxamount="+taxamount+"&total="+total+"&futuredate="+futuredate+"&futuretime="+futuretime;
AjaxRequest(url, "redirect");
}
}

function deletemyorder(){
    var url = "../ajax/getactiveorders.aspx?saction=delete";
    AjaxRequest(url, "refresh");
}

function IsFutureOrder(){
var isfutureorder;
if(document.getElementById("chk_futureorder").checked == true){
isfutureorder = "1";
}else{
isfutureorder = "0";
}
AjaxRequest("../ajax/getactiveorders.aspx?isfutureorder="+isfutureorder,"InsertActiveOrder");
}

function editmyorders(rowcount,flag){
var orderno;
var k=0;
for (i=0;i<rowcount;i++){
if(document.getElementById("chk_orderno_"+i).checked == true){
orderno=document.getElementById("chk_orderno_"+i).value;
k=k+1;
}
}
if(k==0){
alert("Please select one order for editing");
}
else if(k>1){
alert ("Select only one order at a time");
}
else if(document.getElementById("hdn_orderstatusid_"+orderno).value=="2"){
alert("You may no longer make changes to/ cancel the order online.Please call the restaurant.");
}
else if((document.getElementById("hdn_orderstatusid_"+orderno).value=="3") ||(document.getElementById("hdn_orderstatusid_"+orderno).value=="5") ){
alert("You may no longer make changes to/ cancel the order online.");
}
else if(document.getElementById("hdn_orderstatusid_"+orderno).value=="4"){
alert("You may no longer make changes to the cancelled order. ");
}
else {
window.location="../TaxesByRadhaeditorder.aspx?orderno="+orderno+"&flag="+flag;
}

}

function cancelmyorders(rowcount){
var orderno;
var k=0;
for (i=0;i<rowcount;i++){
if(document.getElementById("chk_orderno_"+i).checked == true){
orderno=document.getElementById("chk_orderno_"+i).value;
k=k+1;
}
}
if(k==0){
alert("Please select one order to cancel");
}
else if(k>1){
alert ("You can select only one order at a time");
}
else if(k==1){
 if(document.getElementById("hdn_orderstatusid_"+orderno).value=="2"){
alert("You may no longer make changes to/ cancel the order online.Please call the restaurant.");
}
else if((document.getElementById("hdn_orderstatusid_"+orderno).value=="3") ||(document.getElementById("hdn_orderstatusid_"+orderno).value=="5") ){
alert("You may no longer make changes to/ cancel the order.");
}
else if(document.getElementById("hdn_orderstatusid_"+orderno).value=="4"){
alert("Your order has been cancelled already. Please verify. ");
}
else
{
var confirmcancel=confirm("Are you sure you want to cancel order?");
if(confirmcancel){
document.getElementById("hdn_cancelorderno").value=orderno;
document.getElementById("hdn_saction").value="cancelmyorder";
document.forms[0].submit();
}
}

}
}

function searchresult(){
var searchtxt;
searchtxt=document.getElementById("txt_search").value;
window.location="searchresults.aspx?search="+searchtxt;
}

function searchmyorders(rowcount,flag){
var orderno;
var k=0;
var statusid="";
    for (i=0;i<rowcount;i++){
            if(document.getElementById("chk_orderno_"+i).checked == true){
            orderno=document.getElementById("chk_orderno_"+i).value;
            k=k+1;
            }
        }
        if(k==0){
        alert("Please select one order");
        }
        if(k>1){
        alert ("You can select only one order at a time");
        }
        if(k==1){
        statusid = document.getElementById("hdn_orderstatusid_"+orderno).value;
            if( ( statusid == "4" ) || ( statusid == "5" ) ){
            alert("You cannot edit a Completed / Cancelled Order.\n Please deselect it.");
            }
            else if((statusid =="-999")){
            flag="1";
            window.location="../TaxesByRadhaeditorder.aspx?orderno="+orderno+"&flag="+flag;
            }
            else {
            window.location="../TaxesByRadhaeditorder.aspx?orderno="+orderno+"&flag="+flag;
            }
        }
    }


function Displaycatagery(j,rowcount){

    for(var i=0;i<rowcount;i++){

        if(j==i){
        document.getElementById("showmenu_"+i).style.display = "block";
        document.getElementById("bgcolor_"+i).style.color="Gray";
        document.getElementById("bgcolor_"+i).style.fontWeight="bold";
        }else{
        document.getElementById("showmenu_"+i).style.display = "none";
        document.getElementById("bgcolor_"+i).style.color="Blue";
        document.getElementById("bgcolor_"+i).style.fontWeight="normal";
        }

    }
  
}



function userlogincredentials() {
var reqinfo = "";
reqinfo = "The following fields are required <br/><br/>";

//if (document.getElementById("txt_restaurantcode").value == "")  {
//reqinfo = reqinfo + "Restaurant Code <br/>";
//}

if ((document.getElementById("txt_restaurantname").value == "") && (document.getElementById("txt_restaurantcode").value == "") ){
reqinfo = reqinfo + "Restaurant Name Or Restaurant Code<br/>";
}

if (reqinfo != "The following fields are required <br/><br/>") {
showlightbox(reqinfo);
}

else {
document.getElementById("hdn_saction").value = "getcode";
document.forms[0].submit();
}
}



function testplaceorder(){
document.getElementById("test_activeorders").innerHTML="<iframe style='width:400px; border:none; height:400px;' src='test_activeorders.aspx'></iframe>";
}

function setownerrestauranttime(){
var orderdate = document.getElementById("txt_pickuptime").value;
if (orderdate != "" && isdatevalid(orderdate) == true){
document.getElementById("hdn_saction").value="setrestauranttime";
document.forms[0].submit();
}
}



function isNumeric(evt)
{
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;

         return true;
}


function contactsubmit() {
var reqinfo = "";
reqinfo = "The following fields are required <br/><br/>";

if (document.getElementById("txt_name").value == "")  {
reqinfo = reqinfo + "Name <br/>";
}

if (document.getElementById("txt_restaurant").value == "")  {
reqinfo = reqinfo + "Restaurant Name <br/>";
}
if(document.getElementById("txt_email").value == ""){
reqinfo = reqinfo + "Email <br/>";
}

if (document.getElementById("txt_phone").value == "")  {
reqinfo = reqinfo + "Phone <br/>";
} 
if (document.getElementById("txt_message").value == "")  {
reqinfo = reqinfo + "Message <br/>";
} 

if (reqinfo != "The following fields are required <br/><br/>") {
showlightbox(reqinfo);
}

else {
 document.getElementById("hdn_saction").value = "sendmessage";
 document.forms[0].submit();
}
}

function Resetform() {
        window.location = "contactus.aspx";
    }
function approveordisapprovereview(flag,reviewrecordid){
//alert(flag);
document.getElementById("hdn_isapproved").value = flag;
document.getElementById("hdn_reviewrecordid").value=reviewrecordid;
document.getElementById("hdn_saction").value ="setisapproved";
document.forms[0].submit();
}

function filterreview(){
var ReviewStatus =document.getElementById("ddl_reviewstatus").options[document.getElementById("ddl_reviewstatus").selectedIndex].value;
addqs("ReviewStatus",ReviewStatus,true);
//document.forms[0].submit();
}

function canceleditorder(){
document.getElementById("hdn_saction").value = "canceleditorder";
document.forms[0].submit();
}

function savememberdetails(saction, MemberRecordID){

var reqinfo = "";
reqinfo = "The following fields are required <br /><br />";

if (document.getElementById("txt_firstname").value == "")  {
reqinfo = reqinfo + "First Name <br />";
}
if (document.getElementById("txt_lastname").value == "")  {
reqinfo = reqinfo + "Last Name <br />";
}
if ((document.getElementById("txt_email").value == "") || isvalidemailid(document.getElementById("txt_email")) == false) {
reqinfo = reqinfo + "Please enter a valid email <br />";
}

var ssn=document.getElementById("txt_ssn").value;
if ((ssn != "") && (ssn.length < 11)) {
reqinfo = reqinfo + "SSN <br/>";
}

if (document.getElementById("txt_birthdate").value == ""){
    reqinfo = reqinfo + "Birthdate <br/>";
}

if ((document.getElementById("txt_birthdate").value != "") && isdatevalidwithyear(document.getElementById("txt_birthdate").value)==false) {
    reqinfo = reqinfo + "Please enter a valid birthdate <br/>";
}

if ((document.getElementById("txt_primaryphone").value != "") && isvalidphonenumber(document.getElementById("txt_primaryphone").value) == false) {
reqinfo = reqinfo + "Phone <br />";
}
if(document.getElementById("ddl_maritalstatus").options[document.getElementById("ddl_maritalstatus").selectedIndex].value == "Please Select") {
reqinfo = reqinfo + "Marital Status <br />";
}
if(document.getElementById("ddl_relationship").options[document.getElementById("ddl_relationship").selectedIndex].value == "Please Select") {
reqinfo = reqinfo + "Relationship <br />";
}
if (reqinfo != "The following fields are required <br /><br />") {
showlightbox(reqinfo);
}
else {
if(saction=="update"){
 document.getElementById("hdn_recordid").value = MemberRecordID;
document.getElementById("hdn_saction").value = "UpdateMember";
document.forms[0].submit();
}
else{
 document.getElementById("hdn_saction").value = "SaveMember";
 document.forms[0].submit();
}
}
}

function DeleteMember(CustomerRecordID){
 document.getElementById("hdn_recordid").value = CustomerRecordID;
 document.getElementById("hdn_saction").value = "deletemember";
 document.forms[0].submit();
}

function EditMember(CustomerRecordID){

 document.getElementById("hdn_recordid").value = CustomerRecordID;
 document.getElementById("hdn_saction").value = "EditMember";
 document.forms[0].submit();
}

function EditOrDeleteAccountMember(saction, BankRecordID){
 document.getElementById("hdn_recordid").value = BankRecordID;
 document.getElementById("hdn_saction").value = saction;
 document.forms[0].submit();
}

function savebankaccountdetails(saction, BankRecordID){
var reqinfo = "";
reqinfo = "The following fields are required <br /><br />";

//if (document.getElementById("txtbankname").value == "")  {
//reqinfo = reqinfo + "Bank Name <br />";
//}
if (document.getElementById("txtaccountno").value == "" || validateaccountno("txtaccountno") == false )  {
reqinfo = reqinfo + "Account No <br />";
}
if (document.getElementById("txtroutingno").value == "" || validateroutingno("txtroutingno")== false) {
reqinfo = reqinfo + "Routing No <br />";
}
if (document.getElementById("ddl_accounttype").options[document.getElementById("ddl_accounttype").selectedIndex].value == "") {
reqinfo = reqinfo + "Type <br />";
} 
if (reqinfo != "The following fields are required <br /><br />") {
showlightbox(reqinfo);
}
else {

if(saction=="update"){
 document.getElementById("hdn_recordid").value = BankRecordID;
document.getElementById("hdn_saction").value = saction;
document.forms[0].submit();
}
else{
 document.getElementById("hdn_saction").value = saction;
 document.forms[0].submit();
}
}
}


function saverentaldetails(){
var reqinfo = "";
reqinfo = "The following fields are required <br /><br />";

if (document.getElementById("txtaddress1").value == "")  {
reqinfo = reqinfo + "Address1 <br />";
}
if (document.getElementById("txtcity").value == "")  {
reqinfo = reqinfo + "City <br />";
}
if (document.getElementById("txtstate").value == "") {
reqinfo = reqinfo + "State <br />";
}
if (document.getElementById("txtzipcode").value == "") {
reqinfo = reqinfo + "Zipcode <br />";
}

var zipcode = document.getElementById("txtzipcode").value;
if ((zipcode != "") && (zipcode.length < 5)) {
reqinfo = reqinfo + "Incorrect Zipcode  <br />";
}

//if (document.getElementById("txtzipcode").value == ""||(document.getElementById("txtzipcode").value).length < 5) {
//reqinfo = reqinfo + "Zipcode <br />";
//}

if (document.getElementById("txtpurchasedate").value == "" || isdatevalid(document.getElementById("txtpurchasedate").value) == false) {
reqinfo = reqinfo + "Date of purchase <br />";
}

if (document.getElementById("txtpurchaseprice").value == "") {
reqinfo = reqinfo + "Purchase Price <br />";
}

//if (document.getElementById("ddl_SplitIncome").options[document.getElementById("ddl_SplitIncome").selectedIndex].value == "Yes") {
//    document.getElementById("hdn_SplitIncome").value = "1"; 
//}
//else{
//    document.getElementById("hdn_SplitIncome").value = "0";
//}

if (document.getElementById("ddl_currency").options[document.getElementById("ddl_currency").selectedIndex].value == "Select Currency") {
reqinfo = reqinfo + "Currency <br />";
}

if (document.getElementById("ddl_ownbuliding").options[document.getElementById("ddl_ownbuliding").selectedIndex].value == "0") {
if (document.getElementById("txtallocabletoland").value == "") {
reqinfo = reqinfo + "Portion of purchase price allocable to land 1 <br />";
}

if (document.getElementById("txtallocabletoland1").value == "") {
reqinfo = reqinfo + "Portion of purchase price allocable to land 2 <br />";
}
}


if(document.getElementById("rdo_Confirmproperty1").checked == false && document.getElementById("rdo_Confirmproperty2").checked == false )
{
reqinfo = reqinfo + "Tax year for personal purposes for more than the creater of 14 days Yes or No <br />";
}

for(i=1; i<=2; i++){
    if(document.getElementById("rdo_Confirmproperty"+i).checked == true){
    document.getElementById("hdn_ConfirmProperty").value = document.getElementById("rdo_Confirmproperty"+i).value;
    }
}
if(document.getElementById("rdo_Confirmproperty1").checked == true){

if (document.getElementById("txtconfirmproperty").value == "" || isdatevalid(document.getElementById("txtconfirmproperty").value) == false) {
reqinfo = reqinfo + "Confirm date the property was available for rent in 2012 <br />";
  }
}

if (document.getElementById("txtownership").value == "0" || document.getElementById("txtownership").value == "" || document.getElementById("txtownership").value > 100) {
reqinfo = reqinfo + "Ownership percentage in the property <br />";
}

if (reqinfo != "The following fields are required <br /><br />") {
showlightbox(reqinfo);
}
else{
 document.getElementById("hdn_saction").value = "saverentaldetails";
 document.forms[0].submit();
}
}

function showownbuilding(){

var ownbuilding=document.getElementById("ddl_ownbuliding").value;

if(ownbuilding=="0"){
document.getElementById("portionpriceallocable1").style.display="block";
document.getElementById("portionpriceallocable1").style.display="table-row";
//document.getElementById("portionpriceallocable2").style.display="block";
//document.getElementById("portionpriceallocable1").style.display="inline";
//document.getElementById("portionpriceallocable2").style.display="inline";
}
else{
document.getElementById("portionpriceallocable1").style.display="none";
//document.getElementById("portionpriceallocable2").style.display="none";
}
}

function RendalIncomeLoss(saction) {
var reqinfo = "";
var RentsReceived,Advertising,AutoTravel,CleaningMaintenance,Commissions,Insurance,LegalProfessionals,ManagementFees,MortgageInterest,OtherInterest,Repairs,
Supplies,Taxes,Utilities,improvements,Gardener,TotalExpenses,NetRental,PassiveActivity,AllowableRentalIncome;

var RentsReceivedDoller,AdvertisingDoller,AutoTravelDoller,CleaningMaintenanceDoller,CommissionsDoller,InsuranceDoller,LegalProfessionalsDoller,ManagementFeesDoller,MortgageInterestDoller,OtherInterestDoller,
    RepairsDoller,SuppliesDoller,TaxesDoller,UtilitiesDoller,improvementsDoller,GardenerDoller,TotalExpensesDoller,NetRentalDoller,AllowableRentalIncomeDoller,PassiveActivityDoller;
reqinfo = "The following fields are required <br /><br />";


if (document.getElementById("ddl_selectrental").options[document.getElementById("ddl_selectrental").selectedIndex].value == "Please Select") {
reqinfo = reqinfo + "Rental <br />";
}
else {
document.getElementById("hdn_Rentalid").value = document.getElementById("ddl_selectrental").options[document.getElementById("ddl_selectrental").selectedIndex].value ;
}

if (document.getElementById("ddl_currency").options[document.getElementById("ddl_currency").selectedIndex].value == "Select Currency") {
reqinfo = reqinfo + "Currency <br />";
}

else{
document.getElementById("hdn_Currency").value = document.getElementById("ddl_currency").value;
}

if((document.getElementById("ddl_currency").value == "INR") && ((document.getElementById("ExchangeRate").value == "") || (document.getElementById("ExchangeRate").value == "0"))) {
reqinfo = reqinfo + "Exchange Rate <br />";
}

if (document.getElementById("RentsReceived").value == "")  {
reqinfo = reqinfo + "Rents Received <br />";
}
else{
RentsReceived=document.getElementById("RentsReceived").value;
RentsReceivedDoller=document.getElementById("RentsReceivedDoller").innerHTML;
}

if (document.getElementById("Advertising").value == "")  {
reqinfo = reqinfo + "Advertising <br />";
}
else{
Advertising=document.getElementById("Advertising").value;
AdvertisingDoller=document.getElementById("AdvertisingDoller").innerHTML;
}

if (document.getElementById("AutoTravel").value == "") {
reqinfo = reqinfo + "Auto & Travel <br />";
}
else{
AutoTravel=document.getElementById("AutoTravel").value;
AutoTravelDoller=document.getElementById("AutoTravelDoller").innerHTML;
}

if (document.getElementById("CleaningMaintenance").value == "") {
reqinfo = reqinfo + "Cleaning & Maintenance <br />";
}
else{
CleaningMaintenance=document.getElementById("CleaningMaintenance").value;
CleaningMaintenanceDoller=document.getElementById("CleaningMaintenanceDoller").innerHTML;
}

if (document.getElementById("Commissions").value == "")  {
reqinfo = reqinfo + "Commissions <br />";
}
else{
Commissions=document.getElementById("Commissions").value;
CommissionsDoller=document.getElementById("CommissionsDoller").innerHTML;
}

if (document.getElementById("Insurance").value == "")  {
reqinfo = reqinfo + "Insurance <br />";
}
else{
Insurance=document.getElementById("Insurance").value;
InsuranceDoller=document.getElementById("InsuranceDoller").innerHTML;
}
if (document.getElementById("LegalProfessionals").value == "")  {
reqinfo = reqinfo + "Legal & Professionals <br />";
}
else{
LegalProfessionals=document.getElementById("LegalProfessionals").value;
LegalProfessionalsDoller=document.getElementById("LegalProfessionalsDoller").innerHTML;
}

if (document.getElementById("ManagementFees").value == "")  {
reqinfo = reqinfo + "Management Fees <br />";
}
else{
ManagementFees=document.getElementById("ManagementFees").value;
ManagementFeesDoller=document.getElementById("ManagementFeesDoller").innerHTML;
}
if (document.getElementById("MortgageInterest").value == "")  {
reqinfo = reqinfo + "Mortgage Interest <br />";
}
else{
MortgageInterest=document.getElementById("MortgageInterest").value;
MortgageInterestDoller=document.getElementById("MortgageInterestDoller").innerHTML;
}

if (document.getElementById("OtherInterest").value == "")  {
reqinfo = reqinfo + "Other Interest <br />";
}
else{
OtherInterest=document.getElementById("OtherInterest").value;
OtherInterestDoller=document.getElementById("OtherInterestDoller").innerHTML;
}

if (document.getElementById("Repairs").value == "")  {
reqinfo = reqinfo + "Repairs <br />";
}
else{
Repairs=document.getElementById("Repairs").value;
RepairsDoller=document.getElementById("RepairsDoller").innerHTML;
}

if (document.getElementById("Supplies").value == "")  {
reqinfo = reqinfo + "Supplies <br />";
}
else{
Supplies=document.getElementById("Supplies").value;
SuppliesDoller=document.getElementById("SuppliesDoller").innerHTML;
}

if (document.getElementById("Taxes").value == "")  {
reqinfo = reqinfo + "Taxes <br />";
}
else{
Taxes=document.getElementById("Taxes").value;
TaxesDoller=document.getElementById("TaxesDoller").innerHTML;
}

if (document.getElementById("Utilities").value == "")  {
reqinfo = reqinfo + "Utilities <br />";
}
else{
Utilities=document.getElementById("Utilities").value;
UtilitiesDoller=document.getElementById("UtilitiesDoller").innerHTML;
}

if (document.getElementById("improvements").value == "")  {
reqinfo = reqinfo + "Others Expenses(Improvements) <br />";
}
else{
improvements=document.getElementById("improvements").value;
improvementsDoller=document.getElementById("improvementsDoller").innerHTML;
}

if (document.getElementById("Gardener").value == "")  {
reqinfo = reqinfo + "Gardener <br />";
}
else{
Gardener=document.getElementById("Gardener").value;
GardenerDoller=document.getElementById("GardenerDoller").innerHTML;
}

if (reqinfo != "The following fields are required <br /><br />") {
showlightbox(reqinfo);
}
else{   
//if(saction=="submits"){
Depreciation=document.getElementById("Depreciation").value;
PassiveActivity=document.getElementById("PassiveActivity").value;
TotalExpenses=parseInt(Advertising)+parseInt(AutoTravel)+parseInt(CleaningMaintenance)+parseInt(Commissions)+parseInt(Insurance)+parseInt(LegalProfessionals)+parseInt(ManagementFees)
                +parseInt(MortgageInterest)+parseInt(OtherInterest)+parseInt(Repairs)+parseInt(Supplies)+parseInt(Taxes)+parseInt(Utilities)+parseInt(Depreciation)+parseInt(improvements)+parseInt(Gardener);
NetRental=parseInt(RentsReceived)-parseInt(TotalExpenses);
document.getElementById("TotalExpenses").value=TotalExpenses;
document.getElementById("RentalIncomeLoss").value=NetRental;
AllowableRentalIncome=parseInt(NetRental)+parseInt(PassiveActivity);
document.getElementById("AllowableRentalIncome").value=AllowableRentalIncome;
DepreciationDollerVal=document.getElementById("DepreciationDoller").innerHTML;
PassiveActivityDoller=document.getElementById("PassiveActivityDoller").innerHTML;
TotalExpensesDoller=parseFloat(AdvertisingDoller)+parseFloat(AutoTravelDoller)+parseFloat(CleaningMaintenanceDoller)+parseFloat(CommissionsDoller)+parseFloat(InsuranceDoller)
                    +parseFloat(LegalProfessionalsDoller)+parseFloat(ManagementFeesDoller)+parseFloat(MortgageInterestDoller)+parseFloat(OtherInterestDoller)+parseFloat(RepairsDoller)+parseFloat(SuppliesDoller)
                    +parseFloat(TaxesDoller)+parseFloat(UtilitiesDoller)+parseFloat(DepreciationDollerVal)+parseFloat(improvementsDoller)+parseFloat(GardenerDoller);
NetRentalDoller=parseFloat(RentsReceivedDoller)-parseFloat(TotalExpensesDoller);
AllowableRentalIncomeDoller=parseFloat(NetRentalDoller)+parseFloat(PassiveActivityDoller);
document.getElementById("TotalExpensesDoller").innerHTML=TotalExpensesDoller.toFixed(2);
document.getElementById("RentalIncomeLossDoller").innerHTML=NetRentalDoller.toFixed(2);
document.getElementById("AllowableRentalIncomeDoller").innerHTML=AllowableRentalIncomeDoller.toFixed(2);
//document.getElementById("submit").style.display="none";
//document.getElementById("save").style.display="block";
//document.getElementById("save").style.display="inline";

//}
//else{
 document.getElementById("hdn_saction").value = saction;
 document.forms[0].submit();
//}
}
}

function ConvertCurrency(INRVal, DollerVal) {
if(document.getElementById("ddl_currency").value == "Select Currency")
{
   alert("Please select currency");
   
}
else if((document.getElementById("ddl_currency").value == "INR") && (document.getElementById("ExchangeRate").value == "")){

   alert("Please Enter Exchange Rate");
}
else{
      
    if (document.getElementById(INRVal).value == ""){
      document.getElementById(DollerVal).innerHTML = "";
    }
    else
    {
        if(document.getElementById("ddl_currency").value == "INR"){
        var DollerRate = document.getElementById("ExchangeRate").value;
        var INR = document.getElementById(INRVal).value;
        var Doller = (INR / DollerRate).toFixed(2);
        document.getElementById(DollerVal).innerHTML = Doller;
        }
        else{
        document.getElementById(DollerVal).innerHTML = document.getElementById(INRVal).value;
        }
    }
}
}


function DeleteRentalDetails(Recordid){
document.getElementById("hdn_recordid").value = Recordid;
//alert(document.getElementById("hdn_recordid").value);
document.getElementById("hdn_saction").value = "deleterental";
document.forms[0].submit();
}

function ResetCurrency(){
document.getElementById("RentsReceived").value = "0.00";
document.getElementById("RentsReceivedDoller").innerHTML = "";
document.getElementById("Advertising").value = "0.00";
document.getElementById("AdvertisingDoller").innerHTML = "";
document.getElementById("AutoTravel").value = "0.00";
document.getElementById("AutoTravelDoller").innerHTML = "";
document.getElementById("CleaningMaintenance").value = "0.00";
document.getElementById("CleaningMaintenanceDoller").innerHTML = "";
document.getElementById("Commissions").value = "0.00";
document.getElementById("CommissionsDoller").innerHTML = "";
document.getElementById("Insurance").value = "0.00";
document.getElementById("InsuranceDoller").innerHTML = "";
document.getElementById("LegalProfessionals").value = "0.00";
document.getElementById("LegalProfessionalsDoller").innerHTML = "";
document.getElementById("ManagementFees").value = "0.00";
document.getElementById("ManagementFeesDoller").innerHTML = "";
document.getElementById("MortgageInterest").value = "0.00";
document.getElementById("MortgageInterestDoller").innerHTML = "";
document.getElementById("OtherInterest").value = "0.00";
document.getElementById("OtherInterestDoller").innerHTML = "";
document.getElementById("Repairs").value = "0.00";
document.getElementById("RepairsDoller").innerHTML = "";
document.getElementById("Supplies").value = "0.00";
document.getElementById("SuppliesDoller").innerHTML = "";
document.getElementById("Taxes").value = "0.00";
document.getElementById("TaxesDoller").innerHTML = "";
document.getElementById("Utilities").value = "0.00";
document.getElementById("UtilitiesDoller").innerHTML = "";
document.getElementById("improvements").value = "0.00";
document.getElementById("improvementsDoller").innerHTML = "";
document.getElementById("Gardener").value = "0.00";
document.getElementById("GardenerDoller").innerHTML = "";
document.getElementById("Depreciation").value = "0.00";
document.getElementById("DepreciationDoller").innerHTML = "";
}

function businessclient(){
var reqinfo = "";
var Businessuse,Businessassets;
reqinfo = "The following fields are required <br /><br />";

var xmlfinalstr = "";

if (document.getElementById("txt_businessname").value == "")  {
reqinfo = reqinfo + "Name of Business <br />";
}

if (document.getElementById("txt_businessEIN").value == "")  {
reqinfo = reqinfo + "Business EIN <br />";
}

if (document.getElementById("txt_businesstype").value == "")  {
reqinfo = reqinfo + "Type of business <br />";
}

if (document.getElementById("txt_businessform").value == "")  {
reqinfo = reqinfo + "Form 1009C/bussiness recelots <br />";
}

if (document.getElementById("txt_businessexpenses").value == "")  {
reqinfo = reqinfo + "Details of business Expenses <br />";
}

if (document.getElementById("txt_make").value == "")  {
reqinfo = reqinfo + "Make <br />";
}
if (document.getElementById("txt_model").value == "")  {
reqinfo = reqinfo + "Model <br />";
}
if(document.getElementById("use_yes").checked == false && document.getElementById("use_no").checked == false ){
reqinfo = reqinfo + "Is it exclusive Business use <br />";
}
else{
if(document.getElementById("use_yes").checked == true){
document.getElementById("hdn_Businessuse").value="1";
}
else{
document.getElementById("hdn_Businessuse").value="0";
}
}

if (document.getElementById("txt_totalmilescar").value == "")  {
reqinfo = reqinfo + "Total Miles of the car  <br />";
}

if (document.getElementById("txt_businessmilescar").value == "")  {
reqinfo = reqinfo + "Business miles for the car <br />";
}

if (document.getElementById("txt_taxpaid1").value == "")  {
reqinfo = reqinfo + "Advance TaxPaid1 <br />";
}

if (document.getElementById("txt_taxpaid2").value == "")  {
reqinfo = reqinfo + "Advance TaxPaid2 <br />";
}

if (document.getElementById("txt_taxpaid3").value == "")  {
reqinfo = reqinfo + "Advance TaxPaid3 <br />";
}

if (document.getElementById("txt_taxpaid4").value == "")  {
reqinfo = reqinfo + "Advance TaxPaid4 <br />";
}

if(document.getElementById("assets_yes").checked == false && document.getElementById("assets_no").checked == false ){
reqinfo = reqinfo + "Any Business assets <br />";
}

if(document.getElementById("assets_yes").checked == true){
document.getElementById("hdn_Businessassets").value="1";
}
else{
document.getElementById("hdn_Businessassets").value="0";
}

    if(document.getElementById("assets_yes").checked == true)
    {
       
        if(document.getElementById("txt_name_0").value =="")
        {
        reqinfo = reqinfo + "Assets Name <br />";
        }

        if(document.getElementById("txt_purchasedate_0").value =="" || isdatevalid(document.getElementById("txt_purchasedate_0").value) == false){
        reqinfo = reqinfo + "Assets Purchasedate <br />";
        }

        if(document.getElementById("txt_value_0").value ==""){
        reqinfo = reqinfo + "Assets Value <br />";
        }
        
        var z=0;
        var xmlstart= "<Assets>";
        var xmlend="</Assets>";
        var xml="";
        var assetcount="0";
        assetcount = document.getElementById("hdn_assetcount").value;
        for(var i=0;i<=assetcount;i++){
        xml +="<Asset>";
        xml +="<Name>" + document.getElementById("txt_name_"+i).value +"</Name>";
        if(document.getElementById("txt_purchasedate_"+i).value !=""){
        xml +="<DateofPurchase>" + document.getElementById("txt_purchasedate_"+i).value +"</DateofPurchase>";
        }else{
        xml +="<DateofPurchase>01/01/1900</DateofPurchase>";
        }
        if(document.getElementById("txt_value_"+i).value !=""){
        xml +="<Value>" + document.getElementById("txt_value_"+i).value +"</Value>";
        }else{
        xml +="<Value>0.00</Value>";
        }
        xml +="</Asset>";
        z=z+1;
        }
        
        if(z>0){
        xmlfinalstr = xmlstart + xml + xmlend;
        }

        }
if (reqinfo != "The following fields are required <br /><br />") {
showlightbox(reqinfo);
}
else{
document.getElementById("hdn_assetxml").value = xmlfinalstr;
document.getElementById("hdn_saction").value = "savebusinessclientdetails";
document.forms[0].submit();
//alert(xmlfinalstr);
}

}



function showassets(id){

if(document.getElementById("assets_yes").checked == true){
for(i=0;i<=id;i++){
document.getElementById("showassets_"+ i).style.display="block";
document.getElementById("showassets_"+ i).style.display="table-row";
}
}
else{
for(i=0;i<=id;i++){
document.getElementById("showassets_"+ i).style.display="none";
document.getElementById("addassets_"+i).style.display="block";
}
}
}

function Addassets(id,id1){

document.getElementById("showassets_"+id).style.display="block";
document.getElementById("showassets_"+id).style.display="table-row";
//document.getElementById("Removeassets_"+id1).style.display="block";
//document.getElementById("Removeassets_"+id1).style.display="inline";
document.getElementById("addassets_"+id1).style.display="none";
document.getElementById("hdn_assetcount").value=id;
if(id1=="9"){
        document.getElementById("addassets_10").style.display = "none";
    }
}

//function Removeassets(id,id1){

//document.getElementById("showassets_"+id1).style.display="none";
//document.getElementById("Removeassets_"+id1).style.display="none";
//document.getElementById("hdn_assetcount").value=id;
//}

function newclient() {
var newclient = document.getElementById("ddl_client").value;
if (newclient =="1"){
document.getElementById("newclientconformno").style.display="none";
}
else{
document.getElementById("newclientconformno").style.display="block";
}
}

function ValidateExistingClient() {
    var reqinfo = "";
    reqinfo = "The following fields are required <br /><br />";

    if (document.getElementById("rdo_owncar_0").checked == false && document.getElementById("rdo_owncar_1").checked == false) {
       reqinfo = reqinfo + "New Car <br />";
    }
    else{
        for(i=0;i<=1;i++){
        if(document.getElementById("rdo_owncar_"+i).checked == true){
        document.getElementById("hdn_IsNewCar").value = document.getElementById("rdo_owncar_"+i).value;}
        }
    }

    if (document.getElementById("rdo_ownHouseinUSA_0").checked == false && document.getElementById("rdo_ownHouseinUSA_1").checked == false) {
       reqinfo = reqinfo + "Own House in USA <br />";
    }
    else{       
        for(i=0;i<=1;i++){
        if(document.getElementById("rdo_ownHouseinUSA_"+i).checked == true){
        document.getElementById("hdn_IsNewHouseInUSA").value = document.getElementById("rdo_ownHouseinUSA_"+i).value;}
        }
    }

     if (document.getElementById("rdo_ownHouseinUSA_0").checked == true && document.getElementById("rdo_ownHouseinUSAcurrentyear_0").checked == false && document.getElementById("rdo_ownHouseinUSAcurrentyear_1").checked == false) {
       reqinfo = reqinfo + "Did you buy the house in current tax year<br />";
    }
    else{       
        for(i=0;i<=1;i++){
        if(document.getElementById("rdo_ownHouseinUSAcurrentyear_"+i).checked == true){
        document.getElementById("hdn_IsHouseInUSACurrentYear").value = document.getElementById("rdo_ownHouseinUSAcurrentyear_"+i).value;}
        }
    }

    if (document.getElementById("rdo_ownHouseInIndia_0").checked == false && document.getElementById("rdo_ownHouseInIndia_1").checked == false) {
       reqinfo = reqinfo + "New House in India <br />";
    }
    else{
        for(i=0;i<=1;i++){
        if(document.getElementById("rdo_ownHouseInIndia_"+i).checked == true){
        document.getElementById("hdn_IsNewHouseInIndia").value = document.getElementById("rdo_ownHouseInIndia_"+i).value;}
        }
    }

   if (document.getElementById("rdo_RentHouseInIndia_0").checked == false && document.getElementById("rdo_RentHouseInIndia_1").checked == false) {
       reqinfo = reqinfo + "Rent a House in India <br />";
    }
    else{
        for(i=0;i<=1;i++){
        if(document.getElementById("rdo_RentHouseInIndia_"+i).checked == true){
        document.getElementById("hdn_IsRentoutInIndia").value = document.getElementById("rdo_RentHouseInIndia_"+i).value;}
        }
    }

    if (document.getElementById("rdo_rentHouseInUSA_0").checked == false && document.getElementById("rdo_rentHouseInUSA_1").checked == false) {
       reqinfo = reqinfo + "Rent a House in India <br />";
    }
    else{
        for(i=0;i<=1;i++){
        if(document.getElementById("rdo_rentHouseInUSA_"+i).checked == true){
        document.getElementById("hdn_IsRentoutInUSA").value = document.getElementById("rdo_rentHouseInUSA_"+i).value;}
        }
    }

    if (document.getElementById("rdo_MaritalStatus_0").checked == false && document.getElementById("rdo_MaritalStatus_1").checked == false) {
       reqinfo = reqinfo + "Marital Status<br />";
    }
    else{
        for(i=0;i<=1;i++){
        if(document.getElementById("rdo_MaritalStatus_"+i).checked == true){
        document.getElementById("hdn_IsMaritalStatusChange").value = document.getElementById("rdo_MaritalStatus_"+i).value;}
        }
    }

      
    if (document.getElementById("rdo_Kidsbornoption_0").checked == false && document.getElementById("rdo_Kidsbornoption_1").checked == false) {
       reqinfo = reqinfo + "Kid Born/Adoption <br />";
    }
    else{
        for(i=0;i<=1;i++){
        if(document.getElementById("rdo_Kidsbornoption_"+i).checked == true){
        document.getElementById("hdn_IskidsBornOrAdoption").value = document.getElementById("rdo_Kidsbornoption_"+i).value;}
        }
    }
     
    if (document.getElementById("rdo_spousework_0").checked == false && document.getElementById("rdo_spousework_1").checked == false) {
       reqinfo = reqinfo + "Spouse Working Status <br />";
    }
    else{
        for(i=0;i<=1;i++){
        if(document.getElementById("rdo_spousework_"+i).checked == true){
        document.getElementById("hdn_IsSpouseWorking").value = document.getElementById("rdo_spousework_"+i).value;}
        }
    }
    if (document.getElementById("rdo_ChildcareExpense_0").checked == false && document.getElementById("rdo_ChildcareExpense_1").checked == false) {
       reqinfo = reqinfo + "ChildCare Expense <br />";
    }
    else{
        for(i=0;i<=1;i++){
        if(document.getElementById("rdo_ChildcareExpense_"+i).checked == true){
        document.getElementById("hdn_IsChildcareExpense").value = document.getElementById("rdo_ChildcareExpense_"+i).value;}
        }
    }
    if (document.getElementById("rdo_EducationExpenses_0").checked == false && document.getElementById("rdo_EducationExpenses_1").checked == false) {
       reqinfo = reqinfo + "Education Expense <br />";
    }
   else{
        for(i=0;i<=1;i++){
        if(document.getElementById("rdo_EducationExpenses_"+i).checked == true){
        document.getElementById("hdn_IsEducationExpensesOrLoans").value = document.getElementById("rdo_EducationExpenses_"+i).value;}
        }
    }
    if (document.getElementById("rdo_MoveStates_0").checked == false && document.getElementById("rdo_MoveStates_1").checked == false) {
       reqinfo = reqinfo + "States <br />";
    }
    else{
        for(i=0;i<=1;i++){
        if(document.getElementById("rdo_MoveStates_"+i).checked == true){
        document.getElementById("hdn_IsMoveBetweenStates").value = document.getElementById("rdo_MoveStates_"+i).value;}
        }
    }

       if (document.getElementById("rdo_MovingExpenses_0").checked == false && document.getElementById("rdo_MovingExpenses_1").checked == false) {
       reqinfo = reqinfo + "Moving Expenses <br />";
    }
    else{
        for(i=0;i<=1;i++){
        if(document.getElementById("rdo_MovingExpenses_"+i).checked == true){
        document.getElementById("hdn_IsMovingExpenses").value = document.getElementById("rdo_MovingExpenses_"+i).value;}
        }
    }
    if (document.getElementById("rdo_TraditionalIRA_0").checked == false && document.getElementById("rdo_TraditionalIRA_1").checked == false) {
       reqinfo = reqinfo + "Traditiona IRA <br />";
    }
        else{
        for(i=0;i<=1;i++){
        if(document.getElementById("rdo_TraditionalIRA_"+i).checked == true){
        document.getElementById("hdn_IsContributeTraditionalIRA").value = document.getElementById("rdo_TraditionalIRA_"+i).value;}
        }
    }
       if (document.getElementById("rdo_ContributeHSA_0").checked == false && document.getElementById("rdo_ContributeHSA_1").checked == false) {
       reqinfo = reqinfo + "Contribution to HSA <br />";
    }
    else{
        for(i=0;i<=1;i++){
        if(document.getElementById("rdo_ContributeHSA_"+i).checked == true){
        document.getElementById("hdn_IsContributeHSA").value = document.getElementById("rdo_ContributeHSA_"+i).value;}
        }
    }
       if (document.getElementById("rdo_NonQualifiedExpense_0").checked == false && document.getElementById("rdo_NonQualifiedExpense_1").checked == false) {
       reqinfo = reqinfo + "NonQualified HSA Expense <br />";
    }
    else{
        for(i=0;i<=1;i++){
        if(document.getElementById("rdo_NonQualifiedExpense_"+i).checked == true){
        document.getElementById("hdn_IsHSANonQualifiedExpense").value = document.getElementById("rdo_NonQualifiedExpense_"+i).value;}
        }
    }

    if (document.getElementById("rdo_OutsideUSAExpenses_0").checked == false && document.getElementById("rdo_OutsideUSAExpenses_1").checked == false) {
       reqinfo = reqinfo + "Outside Expense <br />";
    }
        else{
        for(i=0;i<=1;i++){
        if(document.getElementById("rdo_OutsideUSAExpenses_"+i).checked == true){
        document.getElementById("hdn_IsOutsideUSA").value = document.getElementById("rdo_OutsideUSAExpenses_"+i).value;}
        }
    }
    if (document.getElementById("rdo_Foreignfinancialassets_0").checked == false && document.getElementById("rdo_Foreignfinancialassets_1").checked == false) {
       reqinfo = reqinfo + "Foreign Financial Assets <br />";
    }
    else{
        for(i=0;i<=1;i++){
        if(document.getElementById("rdo_Foreignfinancialassets_"+i).checked == true){
        document.getElementById("hdn_IsForeignFinancialAssets").value = document.getElementById("rdo_Foreignfinancialassets_"+i).value;}
        }
    }
    if (document.getElementById("rdo_ForeginIncomes_0").checked == false && document.getElementById("rdo_ForeginIncomes_1").checked == false) {
       reqinfo = reqinfo + "Foregein Income <br />";
    }
   else{
        for(i=0;i<=1;i++){
        if(document.getElementById("rdo_ForeginIncomes_"+i).checked == true){
        document.getElementById("hdn_IsForeginIncomes").value = document.getElementById("rdo_ForeginIncomes_"+i).value;}
        }
    }
           if (document.getElementById("rdo_Transactions_0").checked == false && document.getElementById("rdo_Transactions_1").checked == false) {
       reqinfo = reqinfo + "Transactions <br />";
    }
       else{
        for(i=0;i<=1;i++){
        if(document.getElementById("rdo_Transactions_"+i).checked == true){
        document.getElementById("hdn_IsTransaction").value = document.getElementById("rdo_Transactions_"+i).value;}
        }
    }
           if (document.getElementById("rdo_MiscEtc_0").checked == false && document.getElementById("rdo_MiscEtc_1").checked == false) {
       reqinfo = reqinfo + "R, B, C, MiscEtc <br />";
    }
    else{
        for(i=0;i<=1;i++){
        if(document.getElementById("rdo_MiscEtc_"+i).checked == true){
        document.getElementById("hdn_IsMiscEtc").value = document.getElementById("rdo_MiscEtc_"+i).value;}
        }
    }
    if (document.getElementById("rdo_ChangeAddress_0").checked == true && document.getElementById("txt_addresschange").value == "" ) {
       reqinfo = reqinfo + "Address Change <br />";
    }
    else{
        for(i=0;i<=1;i++){
        if(document.getElementById("rdo_ChangeAddress_"+i).checked == true){
        document.getElementById("hdn_IsAddressChange").value = document.getElementById("rdo_ChangeAddress_"+i).value;}
        }
    }
           if (document.getElementById("rdo_spousebusiness_0").checked == false && document.getElementById("rdo_spousebusiness_1").checked == false) {
       reqinfo = reqinfo + "Spouse Business <br />";
    }
    else{
        for(i=0;i<=1;i++){
        if(document.getElementById("rdo_spousebusiness_"+i).checked == true){
        document.getElementById("hdn_IsAnyBusiness").value = document.getElementById("rdo_spousebusiness_"+i).value;}
        }
    }
    if (document.getElementById("rdo_KindIncomeListed_0").checked == true && document.getElementById("txt_incomelisted").value == "" ) {
       reqinfo = reqinfo + "Other Kind Of Income <br />";
    }
    else{
        for(i=0;i<=1;i++){
        if(document.getElementById("rdo_KindIncomeListed_"+i).checked == true){
        document.getElementById("hdn_IsAnyOtherKindOfIncomeNotListed").value = document.getElementById("rdo_KindIncomeListed_"+i).value;
        }
        }
    }
    if (document.getElementById("rdo_ownHouseInIndia_0").checked == true) {
        if(document.getElementById("txtinterestpaid").value == "") {
            reqinfo = reqinfo + "Interest Paid <br />";
        }
        if(document.getElementById("Propertytaxpaid").value == "") {
            reqinfo = reqinfo + "Property Tax Paid <br />";
        }
    }

    if (document.getElementById("rdo_MaritalStatus_0").checked == true) {
        var ITIN = "0";
        for (i = 0; i <= 1; i++) {
            if (document.getElementById("rdo_NeedITIN_"+i).checked == true) {
                document.getElementById("hdn_IsMaritalITIN").value = document.getElementById("rdo_NeedITIN1_" + i).value;
                ITIN = "1";
            }
        }
    }

    if (ITIN == "0") {
        reqinfo = reqinfo + "ITIN <br />";
    }

    if (document.getElementById("rdo_Kidsbornoption_0").checked == true) {
        var KIDSITIN = "0";
        for (i = 0; i <= 1; i++) {
            if (document.getElementById("rdo_NeedITIN1_" + i).checked == true) {
            document.getElementById("hdn_IskidsBornITIN").value = document.getElementById("rdo_NeedITIN1_" + i).value;
            KIDSITIN = "1";
            }
        }
    }

    if (KIDSITIN == "0") {
        reqinfo = reqinfo + "KITS ITIN <br />";
    }

    if (document.getElementById("rdo_ChildcareExpense_0").checked == true) {
        if(document.getElementById("txt_ChildcareName_0").value == ""){
                reqinfo = reqinfo + "Child Care Name <br />";
        }
        if (document.getElementById("txt_Address_0").value == "") {
        reqinfo = reqinfo + "Child Care Address <br />";
        }
        if (document.getElementById("txt_AmountPaid_0").value == "") {
            reqinfo = reqinfo + "Amount <br />";
        }
        if (document.getElementById("txt_ChildName_0").value == "") {
            reqinfo = reqinfo + "Child Name <br />";
        }
    }

    if (document.getElementById("rdo_MoveStates_0").checked == true) {
    if (document.getElementById("txt_From_0").value == "") {
        reqinfo = reqinfo + "From Address <br />";
    }
    if (document.getElementById("txt_To_0").value == "") {
        reqinfo = reqinfo + "To Address <br />";
    }
    }

    if (document.getElementById("rdo_NonQualifiedExpense_0").checked == true) {
    if (document.getElementById("txt_AmountExpense").value == "") {
        reqinfo = reqinfo + "Amount Expense <br />";
    }
    }

    if (document.getElementById("rdo_ForeginIncomes_0").checked == true) {
    if (document.getElementById("txt_Details_0").value == "") {
        reqinfo = reqinfo + "Details <br />";
    }
    if (document.getElementById("txt_Payer_0").value == "") {
        reqinfo = reqinfo + "Payer <br />";
    }
    if (document.getElementById("txt_Amount_0").value == "") {
        reqinfo = reqinfo + "Amount <br />";
    }
    }

    if (document.getElementById("rdo_Transactions_0").checked == true) {
    if (document.getElementById("txt_Transaction").value == "") {
        reqinfo = reqinfo + "Transaction <br />";

    }
    }

    for(i=0; i<=1; i++){
        if(document.getElementById("rdo_Transactions_"+i).checked == true){
        document.getElementById("hdn_IsTransaction").value = document.getElementById("rdo_Transactions_"+i).value;
        }
    }
    
    if (document.getElementById("rdo_ChangeAddress_0").checked == true) {
        if (document.getElementById("txt_addresschange").value == "") {
        reqinfo = reqinfo + "Address Details <br />";
    }
    }

    if (document.getElementById("rdo_KindIncomeListed_0").checked == true) {
    if (document.getElementById("txt_Transaction").value == "") {
        reqinfo = reqinfo + "Income Details <br />";
    }
    }   


     if (document.getElementById("rdo_OutsideUSAExpenses_0").checked == true) {
        var FBAR_Status = "0";
        for (i = 0; i <= 1; i++) {
            //if (document.getElementById("rdo_NeedFBARStatus_"+i).checked == true) {
             //   document.getElementById("hdn_IsNeedFBARStatus").value = document.getElementById("rdo_NeedFBARStatus_" + i).value;
                FBAR_Status = "1";
            //}
        }
    }

    if (FBAR_Status == "0") {
        reqinfo = reqinfo + "FBAR Status <br />";
    }

    if (document.getElementById("rdo_OutsideUSAExpenses_0").checked == true) {
        var Married_Status = "0";
        for (i = 0; i <= 1; i++) {
            //if (document.getElementById("rdo_FBARMarriesStatus_"+i).checked == true) {
              //  document.getElementById("hdn_IsFBARMarriesStatus").value = document.getElementById("rdo_FBARMarriesStatus_" + i).value;
                Married_Status = "1";
            //}
        }
    }

    if (Married_Status == "0") {
        reqinfo = reqinfo + "Married Status <br />";
    }



    if (document.getElementById("rdo_ChildcareExpense_0").checked == true) {
            var x = 0;
            var xmlstart = "<ChildCares>";
            var xmlend = "</ChildCares>";
            var xml = "";
            var assetcount = "0";
            assetcount = document.getElementById("hdn_ChildCareCount").value;
            for (var i = 0; i <= assetcount; i++) {
                xml += "<ChildCare>";
                xml += "<childCareName>" + document.getElementById("txt_ChildcareName_" + i).value + "</childCareName>";
                xml += "<ChildCareAddress>" + document.getElementById("txt_Address_" + i).value + "</ChildCareAddress>";
                 if (document.getElementById("txt_AmountPaid_" + i).value != "") {
                    xml += "<TINAmount>" + document.getElementById("txt_AmountPaid_" + i).value + "</TINAmount>";
                } else {
                    xml += "<TINAmount>0.00</TINAmount>";
                }
                xml += "<ChildsName>" + document.getElementById("txt_ChildName_" + i).value + "</ChildsName>";
                xml += "</ChildCare>";
                x = x + 1;
            }

            if (x > 0) {
                xmlfinalstr = xmlstart + xml + xmlend;
            }
            document.getElementById("hdn_ChildCarexml").value = xmlfinalstr;
    }

        if (document.getElementById("rdo_MoveStates_0").checked == true) {
            var z = 0;
            var Residencyxmlstart = "<ResidencyPeriods>";
            var Residencyxmlend = "</ResidencyPeriods>";
            var Residencyxml = "";
            var ResidencyCount = "0";
            ResidencyCount = document.getElementById("hdn_ResidencyCount").value;
            for (var i = 0; i <= ResidencyCount; i++) {
                Residencyxml += "<ResidencyPeriod>";
                Residencyxml += "<State>" + document.getElementById("ddl_WhichState").value + "</State>";
                Residencyxml += "<FromAddress>" + document.getElementById("txt_From_" + i).value + "</FromAddress>";
                Residencyxml += "<ToAddress>" + document.getElementById("txt_To_" + i).value + "</ToAddress>";
                Residencyxml += "</ResidencyPeriod>";
                z = z + 1;
            }

            if (z > 0) {
                xmlfinalstr = Residencyxmlstart + Residencyxml + Residencyxmlend;
            }
            document.getElementById("hdn_Residencyxml").value = xmlfinalstr;
    }

    if (document.getElementById("rdo_ForeginIncomes_0").checked == true) {
            var y = 0;
            var ChidCarexmlstart = "<ChildCareDetails>";
            var ChidCarexmlend = "</ChildCareDetails>";
            var ChidCarexml = "";
            var ChildCareDetailsCount = "0";
            ChildCareDetailsCount = document.getElementById("hdn_ChildCareDetailsCount").value;
            for (var i = 0; i <= ChildCareDetailsCount; i++) {
                ChidCarexml += "<ChildCareDetail>";
                ChidCarexml += "<Details>" + escape(document.getElementById("txt_Details_" + i).value) + "</Details>";
                ChidCarexml += "<Payer>" + escape (document.getElementById("txt_Payer_" + i).value) + "</Payer>";
                if (document.getElementById("txt_Amount_" + i).value != "") {
                    ChidCarexml += "<Amount>" + escape(document.getElementById("txt_Amount_" + i).value) + "</Amount>";   
                } else {
                    xml += "<Amount>0.00</Amount>";
                }
                ChidCarexml += "</ChildCareDetail>";
                y = y + 1;
            }

            if (y > 0) {
                xmlfinalstr = ChidCarexmlstart + ChidCarexml + ChidCarexmlend;
            }

            document.getElementById("hdn_ChildCareDetailsxml").value = xmlfinalstr;
    }


        if (document.getElementById("rdo_HealthCoverage_0").checked == false && document.getElementById("rdo_HealthCoverage_1").checked == false) {
       reqinfo = reqinfo + "Health coverage for the full year <br />";
    }
    else{
        for(i=0;i<=1;i++){
        if(document.getElementById("rdo_HealthCoverage_"+i).checked == true){
        document.getElementById("hdn_IsHealthCoverage_family").value = document.getElementById("rdo_HealthCoverage_"+i).value;}
        }
    }

    if (reqinfo != "The following fields are required <br /><br />") {
        showlightbox(reqinfo);
    }
    else {
        document.getElementById("hdn_saction").value = "SaveExistingClient";
        document.forms[0].submit();
        
    }
}


function showtransaction() {
    if (document.getElementById("rdo_Transactions_0").checked == true) {
        document.getElementById("ApproximateTransaction").style.display = "block";
        document.getElementById("ApproximateTransaction").style.display = "table-row";
    }
    else {
        document.getElementById("ApproximateTransaction").style.display = "none";
    }
}


// Test.js Start

function ShowHouseDetails() {
    if (document.getElementById("rdo_ownHouseInIndia_0").checked == true) {
        document.getElementById("HouseTaxDetails").style.display = "block";
        document.getElementById("HouseTaxDetails").style.display = "table-row";
    }
    else {
        document.getElementById("HouseTaxDetails").style.display = "none";
    }
}

function ShowHouseinCurrentYear() {
    if (document.getElementById("rdo_ownHouseinUSA_0").checked == true) {
        document.getElementById("HouseInUSACurrentYearHide").style.display = "block";
        document.getElementById("HouseInUSACurrentYearHide").style.display = "table-row";
    }
    else {
        document.getElementById("HouseInUSACurrentYearHide").style.display = "none";
    }
}

function ShowMaritalStatus(){
    if (document.getElementById("rdo_MaritalStatus_0").checked == true) {
        document.getElementById("MaritalstatusHide").style.display = "block";
         document.getElementById("MaritalstatusHide").style.display = "table-row";
    }
    else {
        document.getElementById("MaritalstatusHide").style.display = "none";
    }
}

function ShowKidsbornOptions() {
    if (document.getElementById("rdo_Kidsbornoption_0").checked == true) {
        document.getElementById("KidsbornOptionsHide").style.display = "block";
        document.getElementById("KidsbornOptionsHide").style.display = "table-row";
    }
    else {
        document.getElementById("KidsbornOptionsHide").style.display = "none";
    }
}

function ShowChildcareExpense(id) {

    if (document.getElementById("rdo_ChildcareExpense_0").checked == true) {   
        for(i=0;i<=id;i++) {      
        document.getElementById("ChildcareExpenseHide_" + i).style.display = "block";
        document.getElementById("ChildcareExpenseHide_" + i).style.display = "table-row";
        }
    }
    else {   
        for(i=0;i<=id;i++) {         
        document.getElementById("ChildcareExpenseHide_" + i).style.display = "none";
        document.getElementById("addmorechildcare_" + i).style.display = "block";
        }
    }
}

function ShowOptionChilcare(id, id1) {
 document.getElementById("hdn_ChildCareCount").value = id;
    document.getElementById("ChildcareExpenseHide_" + id).style.display = "block";
   document.getElementById("ChildcareExpenseHide_" + id).style.display = "table-row";
   // document.getElementById("ChildcareExpenseHide_" + id).style.display = "inline";
    document.getElementById("addmorechildcare_" + id1).style.display = "none";

    if(id1=="9"){
        document.getElementById("addmorechildcare_10").style.display = "none";
    }
}

    function ShowMoveStates(id) {
   
        if (document.getElementById("rdo_MoveStates_0").checked == true) {
            for(i=0;i<=id;i++) {
           
                document.getElementById("MoveStatesHide1_" + i).style.display = "block";
                document.getElementById("MoveStatesHide1_" + i).style.display = "table-row";
            }
        }
        else {
            for(i=0;i<=id;i++) {
                document.getElementById("MoveStatesHide1_" + i).style.display = "none";
                document.getElementById("periodrecidency_" + i).style.display = "block";
                //document.getElementById("periodrecidency_" + i).style.display = "table-column";
            }
       
    }
    }

    function ShowOptionResidency(id, id1) {
            document.getElementById("MoveStatesHide1_" + id).style.display = "block";
            document.getElementById("MoveStatesHide1_" + id).style.display = "table-row";
           // document.getElementById("MoveStatesHide1_" + id).style.display = "inline";
            document.getElementById("periodrecidency_" + id1).style.display = "none";
            document.getElementById("hdn_ResidencyCount").value= id;
            if(id1=="9"){
                document.getElementById("periodrecidency_10").style.display = "none";
            }
        }
    

    function ShowNonQualifiedExpense(){
        if (document.getElementById("rdo_NonQualifiedExpense_0").checked == true) {
            document.getElementById("NonQualifiedExpenseHide").style.display = "block";
            document.getElementById("NonQualifiedExpenseHide").style.display = "table-row";
        }
        else {
            document.getElementById("NonQualifiedExpenseHide").style.display = "none";
            }
    }

    function ShowForeginIncomes(id) {   
    
        if (document.getElementById("rdo_ForeginIncomes_0").checked == true) {
        for(i=0;i<=id;i++){       
                document.getElementById("ForeginIncomesHide_" + i).style.display = "block";
                document.getElementById("ForeginIncomesHide_" + i).style.display = "table-row";
            }
        }
        else {
            for(i=0;i<=id;i++){  
                 
                document.getElementById("ForeginIncomesHide_" + i).style.display = "none";
                document.getElementById("ShowOptionForeginIncomeHide_" + i).style.display = "block";
            }
        }
    }


    function ShowOptionForeginIncome(id, id1) {
        document.getElementById("hdn_ChildCareDetailsCount").value = id;
        document.getElementById("ForeginIncomesHide_" + id).style.display = "block";
        document.getElementById("ForeginIncomesHide_" + id).style.display = "table-row";
        document.getElementById("ShowOptionForeginIncomeHide_" + id1).style.display = "none";
        
    if(id1=="9"){
        document.getElementById("ShowOptionForeginIncomeHide_10").style.display = "none";
    }
}

    function ShowChangeAddress() {
        if (document.getElementById("rdo_ChangeAddress_0").checked == true) {
            document.getElementById("ChangeAddressHide").style.display = "block";
            document.getElementById("ChangeAddressHide").style.display = "table-row";
        }
        else {
            document.getElementById("ChangeAddressHide").style.display = "none";
        }
    }

    function ShowKindIncomeListed() {
        if (document.getElementById("rdo_KindIncomeListed_0").checked == true) {
            document.getElementById("KindIncomeListedHide").style.display = "block";
            document.getElementById("KindIncomeListedHide").style.display = "table-row";
        }
        else {
            document.getElementById("KindIncomeListedHide").style.display = "none";
        }
    }


    function saveexistingclients() {


        if (document.getElementById("ddl_Client").options[document.getElementById("ddl_Client").selectedIndex].text == "Yes") {

            if (document.getElementById("rdo_owncar").checked == true) {
            document.getElementById("hdn_IsNewCar").value="1";
            }else{
            document.getElementById("hdn_IsNewCar").value="0";
            }

            if (document.getElementById("rdo_ownHouseinUSA").checked == true) {
            document.getElementById("hdn_IsNewHouseInUSA").value="1";
            }else{
            document.getElementById("hdn_IsNewHouseInUSA").value="0";
            }

            if (document.getElementById("rdo_ownHouseInIndia").checked == true) {
            document.getElementById("hdn_IsNewHouseInIndia").value="1";
            }else{
            document.getElementById("hdn_IsNewHouseInIndia").value="0";
            }

            if (document.getElementById("rdo_RentHouseInIndia").checked == true) {
            document.getElementById("hdn_IsRentoutInIndia").value="1";
            }else{
            document.getElementById("hdn_IsRentoutInIndia").value="0";
            }

            if (document.getElementById("rdo_rentHouseInUSA").checked == true) {
            document.getElementById("hdn_IsRentoutInUSA").value="1";
            }else{
            document.getElementById("hdn_IsRentoutInUSA").value="0";
            }

            if (document.getElementById("rdo_MaritalStatus").checked == true) {
            document.getElementById("hdn_IsMaritalStatusChange").value="1";
            }else{
            document.getElementById("hdn_IsMaritalStatusChange").value="0";
            }

            if (document.getElementById("rdo_Kidsbornoption").checked == true) {
            document.getElementById("hdn_IskidsBornOrAdoption").value="1";
            }else{
            document.getElementById("hdn_IskidsBornOrAdoption").value="0";
            }

            if (document.getElementById("rdo_spousework").checked == true) {
            document.getElementById("hdn_IsSpouseWorking").value="1";
            }else{
            document.getElementById("hdn_IsSpouseWorking").value="0";
            }

            if (document.getElementById("rdo_ChildcareExpense_0").checked == true) {
            document.getElementById("hdn_IsChildcareExpense").value="1";
            }else{
            document.getElementById("hdn_IsChildcareExpense").value="0";
            }

            if (document.getElementById("rdo_EducationExpenses").checked == true) {
            document.getElementById("hdn_IsEducationExpensesOrLoans").value="1";
            }else{
            document.getElementById("hdn_IsEducationExpensesOrLoans").value="0";
            }

            if (document.getElementById("rdo_MoveStates_0").checked == true) {
            document.getElementById("hdn_IsMoveBetweenStates").value="1";
            }else{
            document.getElementById("hdn_IsMoveBetweenStates").value="0";
            }

            if (document.getElementById("rdo_MovingExpenses").checked == true) {
            document.getElementById("hdn_IsMovingExpenses").value="1";
            }else{
            document.getElementById("hdn_IsMovingExpenses").value="0";
            }

            if (document.getElementById("rdo_TraditionalIRA").checked == true) {
            document.getElementById("hdn_IsContributeTraditionalIRA").value="1";
            }else{
            document.getElementById("hdn_IsContributeTraditionalIRA").value="0";
            }

            if (document.getElementById("rdo_ContributeHSA").checked == true) {
            document.getElementById("hdn_IsContributeHSA").value="1";
            }else{
            document.getElementById("hdn_IsContributeHSA").value="0";
            }

            if (document.getElementById("rdo_NonQualifiedExpense").checked == true) {
            document.getElementById("hdn_IsHSANonQualifiedExpense").value="1";
            }else{
            document.getElementById("hdn_IsHSANonQualifiedExpense").value="0";
            }

            if (document.getElementById("rdo_OutsideUSAExpenses").checked == true) {
            document.getElementById("hdn_IsOutsideUSA").value="1";
            }else{
            document.getElementById("hdn_IsOutsideUSA").value="0";
            }

            if (document.getElementById("rdo_Foreignfinancialassets").checked == true) {
            document.getElementById("hdn_IsForeignFinancialAssets").value="1";
            }else{
            document.getElementById("hdn_IsForeignFinancialAssets").value="0";
            }

            if (document.getElementById("rdo_ForeginIncomes_0").checked == true) {
            document.getElementById("hdn_IsForeginIncomes").value="1";
            }else{
            document.getElementById("hdn_IsForeginIncomes").value="0";
            }

        if (document.getElementById("rdo_MiscEtc").checked == true) {
            document.getElementById("hdn_IsMiscEtc").value="1";
            }else{
            document.getElementById("hdn_IsMiscEtc").value="0";
            }

        if (document.getElementById("rdo_ChangeAddress").checked == true) {
            document.getElementById("hdn_IsAddressChange").value="1";
            }else{
            document.getElementById("hdn_IsAddressChange").value="0";
            }

        if (document.getElementById("rdo_KindIncomeListed").checked == true) {
            document.getElementById("hdn_IsAnyOtherKindOfIncomeNotListed").value="1";
            }else{
            document.getElementById("hdn_IsAnyOtherKindOfIncomeNotListed").value="0";
            }

        if (document.getElementById("rdo_spousebusiness").checked == true) {
            document.getElementById("hdn_IsAnyBusiness").value="1";
            }else{
            document.getElementById("hdn_IsAnyBusiness").value="0";
            }

//        if (document.getElementById("rdo_NeedFBARStatus").checked == true) {
//            document.getElementById("hdn_IsNeedFBARStatus").value="1";
//            }else{
//            document.getElementById("hdn_IsNeedFBARStatus").value="0";
//            }

//        if (document.getElementById("rdo_FBARMarriesStatus").checked == true) {
//            document.getElementById("hdn_IsFBARMarriesStatus").value="1";
//            }else{
//            document.getElementById("hdn_IsFBARMarriesStatus").value="0";
//            }

        }
    
    }


    function ShowYearProperty() {
        if (document.getElementById("rdo_YearValid_1").checked == true) {
            document.getElementById("TaxProperties").style.display = "none";
            document.getElementById("UsaProperties").style.display = "block";
            document.getElementById("UsaProperties").style.display = "table-row";
        }
        else {
            document.getElementById("TaxProperties").style.display = "block";
            document.getElementById("TaxProperties").style.display = "table-row";
            document.getElementById("UsaProperties").style.display = "none";
        }
    }


    function SubmitNewClient() {
        alert("Enter");
    }



    function newclientdetails(CurrentYear, PreviousYear, PrePreviousYear) {
       var reqinfo = "";
       reqinfo = "The following fields are required <br /><br />";
           if (document.getElementById("rdo_YearValid_1").checked == true) {

                if (document.getElementById("txt_MoveDate").value == "" || isdatevalid(document.getElementById("txt_MoveDate").value) == false) {
                   reqinfo = reqinfo + "Date of move to USA <br />";
                }
                if (document.getElementById("txt_2012StayinUS").value == "") {
                   reqinfo = reqinfo + "How many days did you stay in the US in " +CurrentYear + "<br />";
                }
               if (document.getElementById("txt_2011StayinUS").value == "") {
                   reqinfo = reqinfo + "How many days did you stay in the US in "+PreviousYear+" <br />";
               }
               if (document.getElementById("txt_2010StayinUS").value == "") {
                   reqinfo = reqinfo + "How many days did you stay in the US in "+PrePreviousYear+" <br />";
               }
               document.getElementById("hdn_year").value = "1";
               
           }

           var ForJVisa_calculate,Stayin2012US,Stayin2011US1,Stayin2011US,Stayin2010US,Stayin2010US1;
           Stayin2012US = document.getElementById("txt_2012StayinUS").value;
           Stayin2011US = document.getElementById("txt_2011StayinUS").value;
           Stayin2010US = document.getElementById("txt_2010StayinUS").value;
           Stayin2011US1 = Stayin2011US / 3 ;
           Stayin2010US1 = Stayin2010US / 6 ;
         ForJVisa_calculate = parseInt(Stayin2012US) + parseInt(Stayin2011US1) + parseInt(Stayin2010US1);
     document.getElementById("hdn_ForJVisa").Value = ForJVisa_calculate.toFixed(2);

  if (reqinfo != "The following fields are required <br /><br />") {
      showlightbox(reqinfo);
  }
  else {
      document.getElementById("hdn_saction").value = "savenewclient";
      document.forms[0].submit();
     
  }

}


function Calculate() {

    document.getElementById("hdn_saction").value = "Calculate";
    document.forms[0].submit();
}


function confirmationbox(saction) {
    var Displaymessage = confirm("If you made changes to this section, \nPls. save changes before continuing to the next section.\n\nContinue to the next section ?");
    if (Displaymessage == true) {

        window.location = saction;
    }

}

// test.js End


//Main3.js Start

//function uploaddocument1(rowcount) {
//    var reqinfo = "";
//    var k = 0;
//    reqinfo = "The following fields are required <br/><br/>";
//    var fileupload = document.getElementById("ctl00_ContentPlaceHolder1_DocumentUpload").value;
//    var xmlstartstr = "";
//    var xmlendstr = "";
//    var xmlfinalstr = "";
//    var xml = "";
//    xmlstartstr = "<Documents>";
//    xmlendstr = "</Documents>";

//    for (i = 0; i < rowcount; i++) {
//        if (document.getElementById("chk_documenttype_" + i).checked == true) {
//            xml += "<Document>";
//            xml += "<CheckListRecordID>" + document.getElementById("chk_documenttype_" + i).value + "</CheckListRecordID>";
//            //xml += "<FileName>" + fileupload + "</FileName>";
//            xml+="</Document>"
//            k = k + 1;
//        }
//    }
//    xmlfinalstr = xmlstartstr + xml + xmlendstr;
//    if (fileupload == "") {
//        reqinfo = reqinfo + "Document Upload <br/>";
//    }
//        if (k == 0) {
//            reqinfo = reqinfo + "Select document type to upload<br/>";
//        }
//        if (reqinfo != "The following fields are required <br/><br/>") {
//            showlightbox(reqinfo);
//        }
//        else {
//            document.getElementById("hdn_saction").value = "uploaddocument";
//            document.getElementById("hdn_xml").value = xmlfinalstr;
//            document.forms[0].submit();
//            //alert(xmlfinalstr);
//        }
//    }

    function deletedocument(docrecordid) {
        var confirmdelete = confirm("Are you sure you want to delete the document?");
        if (confirmdelete) {
            document.getElementById("hdn_delrecordid").value = docrecordid;
            document.getElementById("hdn_saction").value = "deletedocument";
            document.forms[0].submit();
        }
    }

    function emailchklist() {
        var Count = 0;
        var s = document.getElementById("txt_email").value ;
        s= s.split(",");
        for (var k = 0; k < s.length; k++) {
        if(isvalidemultiplemailid(s[k]) == false){
        Count ++;
        }
        }
        if(Count == 0) {
        document.getElementById("txt_email").background = "#fffbff";
        document.getElementById("hdn_saction").value = "emailchecklist";
        document.forms[0].submit();
        }
        else {
        alert("Enter Valid Email");
        }
    }

    function generatechecklist() {
    var confimation = confirm("You will not be able to make changes once you submit this button.\n Are you sure want to proceed?");
       
    if(confimation){
        document.getElementById("hdn_saction").value = "generatechecklist";
        document.forms[0].submit();
    }
    }

    function printchecklist() {
        window.open("../Users/PrintCheckList.aspx", name, "height=450,width=500,scrollbar=yes");
    }

    function userconfirmation() {
        var confimation = confirm("You will not be able to make changes once you submit this button.\n Are you sure want to proceed?");
        
    if(confimation){
        document.getElementById("hdn_saction").value = "imdone";
        document.forms[0].submit();
    }
    }

    function downloaddocument(docrecordid){
   document.getElementById("hdn_docrecordid").value=docrecordid;
    document.getElementById("hdn_saction").value="downloaddocument";
    document.forms[0].submit();
    
    }

//Main3.js End 


//Main4.js start

//function newclientdetails() {
//    var reqinfo = "";
//    reqinfo = "The following fields are required <br /><br />";
//    if (document.getElementById("ddl_client").options[document.getElementById("ddl_client").selectedIndex].value == "0") {
//        if (document.getElementById("rdo_YearValid_1").checked == true) {
//            if (document.getElementById("txt_date").value == "") {
//                reqinfo = reqinfo + "Moving Date <br />";
//            }
//            if (document.getElementById("txt_salary").value == "") {
//                reqinfo = reqinfo + "Salary Details <br />";
//            }
//            if (document.getElementById("txt_income").value == "") {
//                reqinfo = reqinfo + "Other Income <br />";
//            }
//        }
//    }
//    if (document.getElementById("rdo_YearValid_2").checked == true) {
//        if (document.getElementById("txt_tax").value == "") {
//            reqinfo = reqinfo + "Tax <br />";
//        }
//    }
//    if (reqinfo != "The following fields are required <br /><br />") {
//        showlightbox(reqinfo);
//    }
//    else {
//        document.getElementById("hdn_saction").value = "savenewclient";
//        document.forms[0].submit();
//    }

//}


function emailreport() {
    var reqinfo = "";
    reqinfo = "The following fields are required <br /><br />";
    if ((document.getElementById("txt_mail1").value == "") || isvalidemailid(document.getElementById("txt_mail1")) == false) {
        reqinfo = reqinfo + "Email1 <br />";
    }

    if ((document.getElementById("txt_mail2").value == "") || isvalidemailid(document.getElementById("txt_mail2")) == false) {
        reqinfo = reqinfo + "Email2 <br />";
    }
//    if ((document.getElementById("txt_mail3").value == "") || isvalidemailid(document.getElementById("txt_mail3")) == false) {
//        reqinfo = reqinfo + "Email3 <br />";
//    }

    if (reqinfo != "The following fields are required <br /><br />") {
        showlightbox(reqinfo);
    }
    else {
        document.getElementById("hdn_saction").value = "sendemailreport";
        document.forms[0].submit;
    }

}


function confirmnext(url) {
    var confirmnext = confirm("If you made changes to this section, \nplease save before continuing.\n\n Do you want to go to the next section ?");
    if (confirmnext) {
        window.location = url;
    }
}
   


//main4.js End




function validateMultiple_Email(field) { 

var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
if (!(filter.test(field))) {
    return false;

} else return true;

} 

 
function validateMultipleEmails(f) { 
  
 var email = f.value;
    var result =email.split(","); 

    for(var i = 0;i < result.length;i++) 

    if(!validateMultiple_Email(result[i]))  

           f.style.background = "#FFFFB3";  return false;                

    return true; 

} 

function isdatevalidwithyear(dateStr) {
var CurrentDate = new Date();
var CurrentYear = CurrentDate.getFullYear(); 
var datePat = /^(\d{1,2})(\/|-)(\d{1,2})\2(\d{4})$/;
var matchArray = dateStr.match(datePat); // is the format ok?
if (matchArray == null) { return false; }
month = matchArray[1];
day = matchArray[3];
year = matchArray[4];

if (month < 1 || month > 12) { return false; }
if (day < 1 || day > 31) { return false; }
if(year < 1920 ||year > CurrentYear) { return false;}
if ((month == 4 || month == 6 || month == 9 || month == 11) && day == 31)

{ return false; }
today = new Date()
var date1 = new Date(dateStr);
var one_day = 1000 * 60 * 60 * 24
var diff = Math.ceil((date1 - today) / (one_day));
return true; // date is valid
}

//Changed the code to make bank account digits to 4 9-jan-2016 2:04 A.M IST
function validateaccountno(id){
var accno="";
accno=document.getElementById(id).value;
if(accno.length < 4){
document.getElementById(id).style.background="#FFFFB3";
//alert("Please enter your 10 digit Account number");
return false;
}
return true;
}


function validateroutingno(id){
var routingno="";
routingno=document.getElementById(id).value;
if(routingno.length < 9){
document.getElementById(id).style.background="#FFFFB3";
//alert("Please enter your 9 digit Routing number");
return false;
}
return true;
}


function ShowEndoftheTaxYear(){

if (document.getElementById("rdo_TaxesYearYes").checked == true) {
            document.getElementById("EndoftheTaxYear").style.display = "block";
            document.getElementById("EndoftheTaxYear").style.display = "inline";
        }
        else {
                    document.getElementById("EndoftheTaxYear").style.display = "none";
                       }

}

function ShowVisatype(){

if (document.getElementById("rdo_visatypeyes").checked == true) {
            document.getElementById("ShowVisatype").style.display = "block";
            document.getElementById("ShowVisatype").style.display = "table-row";
        }
        else {
            document.getElementById("ShowVisatype").style.display = "none";
            }

}

function ShowTaxesinUS(){

if (document.getElementById("rdordotaxinUSYes").checked == true) {
            document.getElementById("ShowTaxesinUS").style.display = "block";
            document.getElementById("ShowTaxesinUS").style.display = "table-row";
        }
        else {
            document.getElementById("ShowTaxesinUS").style.display = "none";
            
            }

}



function residencystatus(){

 var reqinfo = ""; 
 reqinfo = "The following fields are required <br /><br />";


  if (document.getElementById("visastatusperyear").value =="") {
  reqinfo = reqinfo + " Visa status at the end of the tax year <br />";
  }


 

    if (document.getElementById("rdo_visatypeyes").checked == false && document.getElementById("rdo_visatypeNo").checked == false) {
  reqinfo = reqinfo + " Changed your visa Type <br />";
  }

  if(document.getElementById("rdo_visatypeyes").checked == true){
  if (document.getElementById("txt_naturedate").value == "")  {
        reqinfo = reqinfo + "Date and nature of change  <br />";
    }

  }


  if(document.getElementById("rdo_visatypeyes").checked == true){
  document.getElementById("hdn_visatypeyes").value="1";
  }
  else{
   document.getElementById("hdn_visatypeyes").value="0";
  }

      if (document.getElementById("rdo_USCitizenyes").checked == false && document.getElementById("rdo_USCitizenNo").checked == false) {
  reqinfo = reqinfo + " Were you ever a US Citizen <br />";
  }

    if(document.getElementById("rdo_USCitizenyes").checked == true){
  document.getElementById("hdn_USCitizenyes").value="1";
  }
  else{
   document.getElementById("hdn_USCitizenyes").value="0";
  }

  
        if (document.getElementById("rdoresidentyes").checked == false && document.getElementById("rdoresidentno").checked == false) {
  reqinfo = reqinfo + "  resident of Mexico/Canada <br />";
  }

  if(document.getElementById("rdoresidentyes").checked == true){
  document.getElementById("hdn_residentyes").value="1";
  }
  else{
   document.getElementById("hdn_residentyes").value="0";
  }

            if (document.getElementById("rdo_marriedResidentyes").checked == false && document.getElementById("rdo_marriedResidentno").checked == false) {
  reqinfo = reqinfo + " Married resident of South Korea <br />";
  }

          if(document.getElementById("rdo_marriedResidentyes").checked == true){
  document.getElementById("hdn_marriedResidentyes").value="1";
  }
  else{
   document.getElementById("hdn_marriedResidentyes").value="0";
  }

        if (document.getElementById("rdordoGreencardholderYes").checked == false && document.getElementById("rdordoGreencardholderNo").checked == false) {
  reqinfo = reqinfo + " Were you ever a green card holder in US <br />";
  }



      if (document.getElementById("rdordotaxinUSYes").checked == false && document.getElementById("rdordotaxinUSNo").checked == false) {
  reqinfo = reqinfo + " Did you ever file tax in US before <br />";
  }

  if(document.getElementById("rdordotaxinUSYes").checked == true){
  document.getElementById("hdn_taxinUSYes").value="1";
  }
  else{
   document.getElementById("hdn_taxinUSYes").value="0";

  }

    if(document.getElementById("rdordotaxinUSYes").checked == true){
  if (document.getElementById("txt_ShowTaxesinUS").value == "")  {
        reqinfo = reqinfo + "Latest year and name of tax form that you filed <br />";
    }

  }

            if(document.getElementById("rdordoGreencardholderYes").checked == true){
  document.getElementById("hdn_GreencardholderYes").value="1";
  }
  else{
   document.getElementById("hdn_GreencardholderYes").value="0";

  }

  if (document.getElementById("ForeignAddress").value == "")  {
        reqinfo = reqinfo + "Enter Foreign Address  <br />";
    }
    else{
   document.getElementById("hdn_ForeignAddress").value=document.getElementById("ForeignAddress").value;
    }
   

    
      if (document.getElementById("txt_Citizenship").value == "")  {
        reqinfo = reqinfo + "Country of citizenship in tax year  <br />";
    }
    
          if (document.getElementById("txt_LeftUSTaxYear").value == "")  {
        reqinfo = reqinfo + "List all the dates you entered and left US during tax year  <br />";
    }


if (reqinfo !="The following fields are required <br /><br />") {
        showlightbox(reqinfo);
    }
    else {

    document.getElementById("hdn_saction").value="saveResidencystatus";

        document.forms[0].submit();
    }

}

 function printExpotList() {
      // window.open("../Users/Export.aspx", name, "height=450,width=500,scrollbar=yes");
      window.print();
    }


function insertcontact() {
var reqinfo = "";
reqinfo = "The following fields are required <br/><br/>";

if (document.getElementById("fname").value == "")  {
reqinfo = reqinfo + "Name <br/>";
}

if(document.getElementById("email").value == "" || isvalidemailid(document.getElementById("email")) == false){
reqinfo = reqinfo + "Email <br/>";
}

if (document.getElementById("subj").value == "")  {
reqinfo = reqinfo + "Subject <br/>";
} 
if (document.getElementById("msg").value == "")  {
reqinfo = reqinfo + "Question <br/>";
} 
if (reqinfo != "The following fields are required <br/><br/>") {
showlightbox(reqinfo);
return false;
}
else{
document.getElementById("hdn_saction").value = "sendmessage";
 return true;
}
}

function validatefeedback() {
var reqinfo = "";
reqinfo = "The following fields are required <br/><br/>";

if (document.getElementById("ferrordesc").value == "")  {
reqinfo = reqinfo + "ErrorDescription";
}
if (reqinfo != "The following fields are required <br/><br/>") {
showlightbox(reqinfo);
}

else {
 document.getElementById("saction").value = "insertfeedback";
 document.forms[0].submit();
}
}

function senduploadeddocumentmail() {
document.getElementById("showstatusmsg").style.display = 'block';
document.getElementById("showstatusmsg").style.display = '';
document.getElementById("btnsendupdoc").style.display = 'none';

document.getElementById("hdn_saction").value = "senddocumentsmail";
document.forms[0].submit();
}

function showusererror(){
document.getElementById("infonotsubmitted").style.display="block";
}

function downloaddocument1(docrecordid, Download) {
       if (Download =="0") {
        document.getElementById("hdn_docrecordid").value = docrecordid;
        document.getElementById("hdn_download").value = "downloaddocument";
        document.forms[0].submit();
    }
    else {
    var confirmdelete = confirm("Are you sure you want to delete the document?");
          if (confirmdelete) {
                document.getElementById("hdn_docrecordid").value = docrecordid;
                document.getElementById("hdn_download").value = "DeleteDocument";
                document.forms[0].submit();
        }
    }
  //  document.forms[0].submit();
}

function InsertDocument() {
if(document.getElementById("ctl00_ContentPlaceHolder1_DocumentUpload").value==""){
alert("Please Browse the File");
}
else{
      document.getElementById("hdn_saction").value = "UploadDocument";

    document.forms[0].submit();
   }
}

function uploaddocument1(rowcount) {
    var reqinfo = "";
    var k = 0;
    reqinfo = "The following fields are required <br/><br/>";
    var fileupload = document.getElementById("ctl00_ContentPlaceHolder1_DocumentUpload").value;
    var xmlstartstr = "";
    var xmlendstr = "";
    var xmlfinalstr = "";
    var xml = "";
    xmlstartstr = "<Documents>";
    xmlendstr = "</Documents>";

    for (i = 0; i < rowcount; i++) {
        if (document.getElementById("chk_documenttype_" + i).checked == true) {
            xml += "<Document>";
            xml += "<CheckListRecordID>" + document.getElementById("chk_documenttype_" + i).value + "</CheckListRecordID>";
            //xml += "<FileName>" + fileupload + "</FileName>";
            xml+="</Document>"
            k = k + 1;
        }
    }
    xmlfinalstr = xmlstartstr + xml + xmlendstr;
    if (fileupload == "") {
        reqinfo = reqinfo + "Please select a file to upload <br/>";
    }
        if (k == 0) {
            reqinfo = reqinfo + "Select document type to upload<br/>";
        }
        if (reqinfo != "The following fields are required <br/><br/>") {
            showlightbox(reqinfo);
        }
        else {
            document.getElementById("hdn_saction").value = "UploadDocument";
            document.getElementById("hdn_xml").value = xmlfinalstr;
            document.forms[0].submit();
            //alert(xmlfinalstr);
        }
    }


function DeleteUserInformationDetails(CustomerRecordId){
       var confirmdelete = confirm("This will remove all data entered by the user..Proceed ?");
          if (confirmdelete) {
                document.getElementById("hdn_UserDelRecordid").value = CustomerRecordId;
                document.getElementById("hdn_saction").value = "DeleteUserAllDisplay";
                document.forms[0].submit();
          }
}


function changepagesize() {
    var pagesize = document.getElementById("ddlpagesize").value;
    var fname = "ps";
    var qs = window.location.search;
    qs = removeqs(qs, "showlight", false);
    qs = removeqs(qs, "ps", false);
    if (fname == "t") {
        qs = removeqs(qs, "at", false);
    }
    if (true) { window.location.search = qs + "&" + fname + "=" + pagesize; }
}

function Searchfilter(){
    var reqinfo = "";
       reqinfo = "The following fields are required \n\n\n";

 
       if(document.getElementById("txt_serchvalue").value==""){
           reqinfo=reqinfo+"Please Enter keyword to search \n\n";
       }
       if(document.getElementById("ddl_SearchColumn").value=="Select"){

           dropdownvalidate("ddl_SearchColumn")
           reqinfo=reqinfo+"Please select search type \n\n";
       }
       if (reqinfo != "The following fields are required \n\n\n") {
           alert(reqinfo);
       }
       else {

           document.forms[0].submit();

       }

}


function updateratecharge(rowcount) {

    var xmlstartstr = "";
    var xmlendstr = "";
    var xmlfinalstr = "";
    var xml = "";

    xmlstartstr = "<RateCharges>";
    xmlendstr = "</RateCharges>";

    for (i = 0; i < rowcount; i++) {

    if(document.getElementById("txt_cost_" + i).value == ""){
    alert("Please enter valid amount");
    return false;
    }else{
            xml += "<RateCharge>";
            xml += "<Cost>" + document.getElementById("txt_cost_" + i).value + "</Cost>";
            xml += "<RateRecordId>" + document.getElementById("hdn_rateid_" + i).value + "</RateRecordId>";
            xml += "</RateCharge>";
            }
    }
    xmlfinalstr = xmlstartstr + xml + xmlendstr;
    xmlfinalstr = xmlfinalstr.replace(/\$/g,"");
    document.getElementById("hdn_saction").value = "updateratecharge";
    document.getElementById("hdn_costxml").value = xmlfinalstr;
    document.forms[0].submit();

}


function DeleteUserAccount(CustomerRecordID){
    var confirmdelete = confirm("This will delete the user account.\nAre you sure , you want to proceed?");
    if(confirmdelete){
        var confirmdel = confirm("Are you sure , you want to delete the user account?");
        if(confirmdel){
            document.getElementById("hdn_UserDelRecordid").value=CustomerRecordID;
            document.getElementById("hdn_saction").value = "deleteuseraccount";
            document.forms[0].submit();
         }
    }
}


function uploaddocument() {
var rowcount = document.getElementById("hdn_count").value;
    var k = 0;
    var fileupload = document.getElementById("ctl00_ContentPlaceHolder1_DocumentUpload").value;
    var xmlstartstr = "";
    var xmlendstr = "";
    var xmlfinalstr = "";
    var xml = "";
    xmlstartstr = "<Documents>";
    xmlendstr = "</Documents>";

    for (i = 0; i < rowcount; i++) {
        if (document.getElementById("chk_documenttype_" + i).checked == true) {
            xml += "<Document>";
            xml += "<CheckListRecordID>" + document.getElementById("chk_documenttype_" + i).value + "</CheckListRecordID>";
            xml+="</Document>"
            k = k + 1;
        }
    }
    xmlfinalstr = xmlstartstr + xml + xmlendstr;
    if (fileupload == "") {
       alert("Please select a file to upload");
         return false;
    }
        else {

        document.getElementById("contract_lights").style.display="block";
        document.getElementById("fade").style.display="block";
        document.getElementById("hdn_xml").value = xmlfinalstr;
        return false;

        }
    }

    function agreed()
    {
            document.getElementById("hdn_saction").value = "uploaddocument";
             ProgressBar(); 
             return true;
    }

    function disagreedcloselightbox(){
        document.getElementById("contract_lights").style.display="none";
        document.getElementById("fade").style.display="none";
        document.getElementById('light1').style.display='none';
document.getElementById('fade1').style.display='none';
    }

    function ShowOutsideUSAMarriedFBARStatus(){
        if (document.getElementById("rdo_OutsideUSAExpenses_0").checked == true) {
            document.getElementById("TR_OutsideUSA").style.display = "block";
            document.getElementById("TR_OutsideUSA").style.display = "table-row";
        }
        else {
            document.getElementById("TR_OutsideUSA").style.display = "none";
            }
    }
    function AddtionalCostFBARStatus(){
        if (document.getElementById("rdo_additionalcost_0").checked == true) {
            document.getElementById("TR_AdditionalCost").style.display = "block";
            document.getElementById("TR_AdditionalCost").style.display = "table-row";
        }
        else {
            document.getElementById("TR_AdditionalCost").style.display = "none";
        }
    }
//added a function to check date is within 2 years or not. 9-jan-2016 - 2:04 A.M
    function CheckDateWithin2Years(dtvalue)
    {
        var start = new Date(dtvalue );
        var end = new Date();
        var diff = new Date(end - start);
        var days = diff / 1000 / 60 / 60 / 24;

        //alert("End:" + end + "Diff:" + diff + "Days:" + days);

        return days;

    }


function setforgotpassword(){
//alert();
var newlinechar = "<br/>";
var reqinfo = "";
reqinfo = "The following fields are required " + newlinechar + newlinechar;

if (document.getElementById("txt_pwd").value == "") {
reqinfo = reqinfo + "Password " + newlinechar;
}

if (document.getElementById("txt_pwd").value != document.getElementById("txt_re_pwd").value) {
reqinfo = reqinfo + "Passwords do not match " + newlinechar;
}

if (reqinfo != "The following fields are required " + newlinechar + newlinechar) {
showlightbox(reqinfo);
//alert(reqinfo);
}
else {
document.getElementById("hdn_saction").value = "ResetPassword";
document.forms[0].submit();
}

}

