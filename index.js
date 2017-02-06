var clog = require('./nodeapplog');

clog.NcbiLog_InitST("firstapp");
// NcbiLog_AppStart([""]);
clog.NcbiLog_AppRun("");
// clog.NcbiLog_ReqStart("");
clog.NcbiLog_ReqRun("");

console.log(clog.NcbiLog_GetHostName(""));

// myparam = new SNcbiLog_Param;  ArrayType

clog.NcbiLog_Critical("critical error");
clog.NcbiLog_ReqStop(0,0,0);
clog.NcbiLog_AppStop(0);
clog.NcbiLog_Destroy("");
