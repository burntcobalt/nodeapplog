#ifndef NODESHIM__H
#define NODESHIM__H

#include <misc/clog/ncbi_c_log.h>

#ifdef __cplusplus
extern "C" {
#endif

extern void NcbiLogShim_ReqStart(char ** key, char ** value, int len);

extern void NcbiLogShim_Extra(char ** key, char ** value, int len);

extern void NcbiLogShim_Perf(int status, double timespan,
                         char ** key, char ** value, int len);

#ifdef __cplusplus
}  /* extern "C" */
#endif

#endif