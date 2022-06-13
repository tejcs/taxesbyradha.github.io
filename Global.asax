<%@ Application Language="VB"%>
<%@ Import Namespace="System.Diagnostics" %>
<%@ Import Namespace="System.Data.SqlClient" %>
<%@ Import Namespace="System.Data" %>

<script runat="server">

    Sub Application_BeginRequest(ByVal sender As Object, ByVal e As EventArgs)
        ' Code that runs on application startup
        
        'Dim Cnxn As New SqlConnection
        'Dim Cmd As New SqlCommand
        'Dim Result As Boolean
        'Cnxn.ConnectionString = ConfigurationManager.ConnectionStrings("ConnectionString").ToString
        'Cmd.Connection = Cnxn
        'Cnxn.Open()
        'Cmd.CommandType = CommandType.StoredProcedure
        'Cmd.CommandText = "SetUrlMapping"
        'Cmd.Parameters.AddWithValue("@RequestUrl", Request.Url.AbsoluteUri)
        'Cmd.Parameters.AddWithValue("@BrowserName", Request.Browser.Browser)
        'Cmd.Parameters.AddWithValue("@IpAddress", Request.ServerVariables("REMOTE_ADDR"))
        'If Cmd.ExecuteNonQuery() < 0 Then
        '    Result = False
        'Else
        '    Result = True
        'End If
        'Cnxn.Close()
        
        If TaxesByRadha.TaxesByRadhaSession.Sutil Is Nothing Then
            TaxesByRadha.TaxesByRadhaSession.Sutil = New TaxesByRadha.TaxesByRadhaCommonFunction
        End If
        If TaxesByRadha.TaxesByRadhaSession.dal Is Nothing Then
            TaxesByRadha.TaxesByRadhaSession.dal = New TaxesByRadha.TaxesByRadhaDAL
            TaxesByRadha.TaxesByRadhaSession.dal.OpenConnection()
                       
        End If
        ' Code that runs on application shutdown      
        If Request.IsSecureConnection = False Then
            If (Request.RawUrl.ToString.Contains("/users") = True Or Request.RawUrl.ToString.Contains("/admin") = True Or Request.RawUrl.ToString.Contains("signup.aspx") = True Or Request.RawUrl.ToString.Contains("securelogin.aspx") = True Or Request.RawUrl.ToString.Contains("forgotpassword.aspx") = True) Then
                Response.Redirect(Request.Url.ToString().Replace("http://", "https://"))
            End If
        End If
    End Sub

    Sub Application_Start(ByVal sender As Object, ByVal e As EventArgs)
    
        ' Code that runs on application startup
        TaxesByRadha.TaxesByRadhaSession.Sutil = New TaxesByRadha.TaxesByRadhaCommonFunction
        TaxesByRadha.TaxesByRadhaSession.dal = New TaxesByRadha.TaxesByRadhaDAL
        TaxesByRadha.TaxesByRadhaSession.dal.OpenConnection()
        
    End Sub
    
    Sub Application_End(ByVal sender As Object, ByVal e As EventArgs)
    
        ' Code that runs on application shutdown
        TaxesByRadha.TaxesByRadhaSession.dal.CloseConnection()
        
    End Sub
        
    Sub Application_Error(ByVal sender As Object, ByVal e As EventArgs)
        
        Dim ctx As HttpContext = HttpContext.Current

        Dim ex As Exception = ctx.Server.GetLastError()
        
        Dim httpCode As Integer = DirectCast(ex, HttpException).GetHttpCode()

        'Dim ErrorId = Guid.NewGuid.ToString()
        Dim ErrorId As String = System.Guid.NewGuid().ToString()
        Dim ErrorReason As String = ""
        Dim ErrorLineNumber As String = ""
        ErrorReason = ex.Message.ToString
        ' ErrorReason = ex.InnerException.InnerException.Message.ToString()
     
        Dim frame = New StackTrace(ex, True).GetFrame(0)
        Dim lineNumber = frame.GetFileLineNumber()
        
        If ex.InnerException IsNot Nothing Then
            ErrorReason = lineNumber.ToString + " " + ErrorReason + " " + Convert.ToString(ex.InnerException.Message)
        End If
        
        If httpCode = "404" Then
            
            Response.Redirect("\Missingpages.aspx")
            
        Else
            
            Dim Cnxn As New SqlConnection
            Dim Cmd As New SqlCommand
            Dim Result As Boolean
    
            Cnxn.ConnectionString = ConfigurationManager.ConnectionStrings("ConnectionString").ToString
            Cmd.Connection = Cnxn
            Cnxn.Open()
            Cmd.CommandType = CommandType.StoredProcedure
            Cmd.CommandText = "TR_SetErrorLog"
            Cmd.Parameters.AddWithValue("@ReqUrl", Request.Url.AbsoluteUri)
            Cmd.Parameters.AddWithValue("@BrowserName", Request.Browser.Browser)
            Cmd.Parameters.AddWithValue("@IpAddress", Request.ServerVariables("REMOTE_ADDR"))
            Cmd.Parameters.AddWithValue("@ErrorReason", ErrorReason)
            Cmd.Parameters.AddWithValue("@ErrorId", ErrorId)
            
            If Cmd.ExecuteNonQuery() < 0 Then
                Result = False
            Else
                Result = True
            End If
        
            Cnxn.Close()
            
            Response.Redirect("\ErrorOnPage.aspx?ErrorId=" + ErrorId)
            
        End If
                     
        'Code that runs when an unhandled error occurs
        
    End Sub
    
    Sub Session_Start(ByVal sender As Object, ByVal e As EventArgs)
        ' Code that runs when a new session is started
    End Sub

    Sub Session_End(ByVal sender As Object, ByVal e As EventArgs)
        ' Code that runs when a session ends. 
        ' Note: The Session_End event is raised only when the sessionstate mode
        ' is set to InProc in the Web.config file. If session mode is set to StateServer 
        ' or SQLServer, the event is not raised.
    End Sub
    
    
    
       
</script>