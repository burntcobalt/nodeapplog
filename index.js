var clog = require('./nodeapplog');

clog.api.NcbiLog_InitST("firstapp");
clog.api.NcbiLog_AppStart(process.argv0);
clog.api.NcbiLog_AppRun("");
clog.api.NcbiLogShim_ReqStart(["startkey"],["startval"],1);
clog.api.NcbiLog_ReqRun("");

console.log(clog.api.NcbiLog_GetHostName(""));

clog.api.NcbiLogShim_Extra(["mykey","myval"],["myval","myval2"],2);
clog.api.NcbiLog_Critical("my critical error");
clog.api.NcbiLog_ReqStop(0,0,0);
clog.api.NcbiLog_AppStop(0);
clog.api.NcbiLog_Destroy("");
