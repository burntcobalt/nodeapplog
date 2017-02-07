var ref = require('ref');
var ffi = require('ffi');
//var Struct = require('ref-struct');
var ArrayType = require('ref-array');

// no enum support in ffi -- use int instead where 0 is the first value in enum

// typedef enum {
//     eNcbiLog_Default,         /**< Try /log/<*>/<appname>.log; fallback
//      to STDERR */
//         eNcbiLog_Stdlog,          /**< Try /log/<*>/<appname>.log;  fallback
//      to ./<appname>.log, then to STDERR */
//         eNcbiLog_Cwd,             /**< Try ./<appname>.log, fallback to STDERR */
//         eNcbiLog_Stdout,          /**< To standard output stream */
//         eNcbiLog_Stderr,          /**< To standard error stream  */
//         eNcbiLog_Disable          /**< Don't write it anywhere   */
// } ENcbiLog_Destination;

/** Severity level for the posted diagnostics
 */
// typedef enum {
//     eNcbiLog_Trace = 0,       /**< Trace message          */
//         eNcbiLog_Info,            /**< Informational message  */
//         eNcbiLog_Warning,         /**< Warning message        */
//         eNcbiLog_Error,           /**< Error message          */
//         eNcbiLog_Critical,        /**< Critical error message */
//         eNcbiLog_Fatal            /**< Fatal error -- guarantees exit (or abort) */
// } ENcbiLog_Severity;

//var xSNcbiLog_Param = Struct({
//    'key': ArrayType('char', 10), //'string',
//    'value': ArrayType('char', 10) //'string'
//});

//var xSNcbiLog_ParamPtr = ref.refType(xSNcbiLog_Param);

//var xSNcbiLog_ParamArray = ArrayType(xSNcbiLog_Param);

var xStringArray = ArrayType('string');


module.exports = {

//    SNcbiLog_Param: xSNcbiLog_Param,

//    SNcbiLog_ParamPtr: xSNcbiLog_ParamPtr,

//    SNcbiLog_ParamArray: xSNcbiLog_ParamArray,

    StringArray: xStringArray,

    api: ffi.Library(__dirname + '/build/Release/clog', {
        'NcbiLog_InitST': ['void', ['string']],
        'NcbiLog_Destroy': ['void', ['void']],
        'NcbiLog_InitMT': ['void', ['string']],
        'NcbiLog_Destroy_Thread': ['void', ['void']],
        'NcbiLog_GetHostName': ['string', ['void']],
        'NcbiLog_GetHostRole': ['string', ['void']],
        'NcbiLog_GetHostLocation': ['string', ['void']],
        'NcbiLog_SetDestination': ['int', ['int']],
        'NcbiLog_SetSplitLogFile': ['void', ['int']],
        'NcbiLog_SetProcessId': ['void', ['uint64']],
        'NcbiLog_SetThreadId': ['void', ['uint64']],
        'NcbiLog_SetRequestId': ['void', ['uint64']],
        'NcbiLog_GetRequestId': ['uint64', ['void']],
        'NcbiLog_SetTime': ['void', ['int', 'ulong']],
        'NcbiLog_SetHost': ['void', ['string']],
        'NcbiLog_AppSetClient': ['void', ['string']],
        'NcbiLog_SetClient': ['void', ['string']],
        'NcbiLog_AppSetSession': ['void', ['string']],
        'NcbiLog_AppGetSession': ['string', ['void']],
        'NcbiLog_AppNewSession': ['void', ['void']],
        'NcbiLog_SetSession': ['void', ['string']],
        'NcbiLog_NewSession': ['void', ['void']],
        'NcbiLog_AppSetHitID': ['void', ['string']],
        'NcbiLog_SetHitID': ['void', ['string']],
        'NcbiLog_AppGetHitID': ['string', ['void']],
        'NcbiLog_GetHitID': ['string', ['void']],
        'NcbiLog_GetNextSubHitID': ['string', ['void']],
        'NcbiLog_GetCurrentSubHitID': ['string', ['void']],
        'NcbiLog_FreeMemory': ['void', ['pointer']],
        'NcbiLog_SetPostLevel': ['int', ['int']],
        'NcbiLog_AppStart': ['void', [xStringArray]],
        'NcbiLog_AppRun': ['void', ['void']],
        'NcbiLog_AppStop': ['void', ['int']],
        'NcbiLog_AppStopSignal': ['void', ['int', 'int']],
        'NcbiLogShim_ReqStart': ['void', [xStringArray, xStringArray, 'int']],
//        'NcbiLog_ReqStart': ['void', [xSNcbiLog_ParamPtr]],
        'NcbiLog_ReqRun': ['void', ['void']],
        'NcbiLog_ReqStop': ['void', ['int', 'uint64', 'uint64']],
//        'NcbiLog_Extra': ['void', [xSNcbiLog_ParamArray]],
        'NcbiLogShim_Extra': ['void', [xStringArray, xStringArray, 'int']],
//        'NcbiLog_Perf': ['void', ['int', 'double', xSNcbiLog_ParamPtr]],
        'NcbiLogShim_Perf': ['void', ['int', 'double', xStringArray, xStringArray, 'int']],
        'NcbiLog_Trace': ['void', ['string']],
        'NcbiLog_Info': ['void', ['string']],
        'NcbiLog_Warning': ['void', ['string']],
        'NcbiLog_Error': ['void', ['string']],
        'NcbiLog_Critical': ['void', ['string']],
        'NcbiLog_Fatal': ['void', ['string']]
    })
}

// Notes:
// - will skip all Context functions as these are used to deal with complex multithreading issues
// - how to deal with library calling assert()?
// - skip functions dealing with forks
// - TNcbiLog_PID, TNcbiLog_TID, TNcbiLog_Counter are uint8
// - time_t is int
// - array of pointers to strings is ArrayType('string')
// - size_t is uint64

