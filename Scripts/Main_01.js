function ShowHideIntakeDetails() {
    if (document.getElementById("ddl_Client").value == "Please Select") {
        alert("Please Select Client Type");
    }
    else {
        if (document.getElementById("ddl_Client").value == "1") {
            document.getElementById("hdn_ClientType").value = "1";
        }
        else {
            document.getElementById("hdn_ClientType").value = "0";
        }
        document.getElementById("hdn_saction").value = "setclienttype";
        document.forms[0].submit();
    }
}



function ShowOptionChilcare1(id, id1) {
    for (i = 0; i <= id; i++) {
        document.getElementById("ChildcareExpenseHide1_" + i).style.display = "block";
        document.getElementById("ChildcareExpenseHide1_" + i).style.display = "inline";
//        document.getElementById("addmorechildcare1_" + i).style.display = "none";
    }
//    document.getElementById("addmorechildcare1_" + id).style.display = "block";
    document.getElementById("hdn_ChildCareCount").value = id;
}

function ShowChildcareExpense1(id) {
    if (document.getElementById("rdo_ChildcareExpense_0").checked == true) {
        for (i = 0; i < id; i++) {
            document.getElementById("ChildcareExpenseHide1_" + i).style.display = "block";
            document.getElementById("ChildcareExpenseHide1_" + i).style.display = "inline";
        }
    }
    else {
        for (i = 0; i < id; i++) {
            document.getElementById("ChildcareExpenseHide1_" + i).style.display = "none";
        }
    }
}

function GetRentalDetails(id) {
    if (document.getElementById(id).options[document.getElementById(id).selectedIndex].value != "Please Select") {
        document.getElementById("hdn_Rentalid").value = document.getElementById(id).options[document.getElementById(id).selectedIndex].value;
        document.forms[0].submit();
    }
    else {
        window.location = "rentalincomeloss.aspx";
    }

}

//function ShowForeginIncomes(id) {

//       if (document.getElementById("rdo_ForeginIncomes_0").checked == true) {
//            for (i = 0; i <= id; i++) {
//                document.getElementById("ForeginIncomesHide_" + i).style.display = "block";
//                document.getElementById("ForeginIncomesHide_" + i).style.display = "inline";
//            }
//        }
//        else {
//            for (i = 0; i <= id; i++) {
//                document.getElementById("ForeginIncomesHide_" + i).style.display = "none";
//            }
//        }
//    }


//    function ShowMoveStates(id) {
//        if (document.getElementById("rdo_MoveStates_0").checked == true) {
//            for (i = 0; i <= id; i++) {
//                document.getElementById("MoveStatesHide1_" + i).style.display = "block";
//                document.getElementById("MoveStatesHide1_" + i).style.display = "inline";
//            }
//        }
//        else {
//            for (i = 0; i <= id; i++) {
//                document.getElementById("MoveStatesHide1_" + i).style.display = "none";
//            }
//        }
//    }


    function EmailSend(useremail) {
        var reqinfo = "";
        reqinfo = "<table border=\"0\" width=\"95%\"><tr><td align=\"center\" style=\"text-align:center;\">Enter your Email Address:&nbsp;<input type=\"text\" id=\"txt_email\" name=\"txt_email\" size=\"45\" value=\"" + useremail + "\"/></td></tr><tr><td>&nbsp;</td></tr><tr><td align=\"center\"><a href=\"#\" onclick=\"sendemail();\"><img src=\"/Images/forms/form_submit.gif\" alt=\"Email\" style=\"border:none;\" /></a></td></tr></table>";
        showlightbox(reqinfo);
    }

//    function EmailSend1(useremail) {
//        var reqinfo = "";
//          reqinfo = "<table border=\"0\" width=\"95%\"><tr><td align=\"center\" style=\"text-align:center;\">Enter your Email Address:&nbsp;<input type=\"text\" id=\"txt_email\" name=\"txt_email\" size=\"45\" value=\"" + useremail + "\"/></td></tr><tr><td>&nbsp;</td></tr><tr><td align=\"center\"><a href=\"#\" onclick=\"sendemail1();\"><img src=\"/Images/forms/form_submit.gif\" alt=\"Email\" style=\"border:none;\" /></a></td></tr></table>";
//         showlightbox(reqinfo);
//    }

//    function sendemail1() {
//               document.getElementById("hdn_saction").value = "sendemail1";
//        document.forms[0].submit();
//    }

    function sendemail() {
        document.getElementById("hdn_saction").value = "sendemail";
        document.forms[0].submit();
    }