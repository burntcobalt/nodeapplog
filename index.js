var libclog = require('./nodeapplog');

libclog.NcbiLog_InitST("firstapp");
console.log(libclog.NcbiLog_GetHostName(""));
libclog.NcbiLog_Critical("critical error");
libclog.NcbiLog_Destroy("");
