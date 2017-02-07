#include <misc/clog/nodeshim.h>
#include <stdlib.h>

SNcbiLog_Param * s_createparam(char ** key, char ** value, int len)
{
   if(!key || !value ) return NULL;
   SNcbiLog_Param* params = malloc((len+1)*sizeof(SNcbiLog_Param));
   int i;
   for(i=0; i < len; ++i) {
      params[i].key = key[i];
      params[i].value = value[i];
   }
   params[len].key = NULL;
   params[len].value = NULL;
   return params;
}

extern void NcbiLogShim_ReqStart(char ** key, char ** value, int len)
{
    SNcbiLog_Param* params = s_createparam(key, value, len);
    NcbiLog_ReqStart(params);
    free(params);
}

extern void NcbiLogShim_Extra(char ** key, char ** value, int len)
{
    SNcbiLog_Param* params = s_createparam(key, value, len);
    NcbiLog_Extra(params);
    free(params);
}

extern void NcbiLogShim_Perf(int status, double timespan,
                         char ** key, char ** value, int len)
{
    SNcbiLog_Param* params = s_createparam(key, value, len);
    NcbiLog_Perf(status, timespan, params);
    free(params);
}
