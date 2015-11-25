using System.Web.Optimization;

namespace Affecto.AngularJS.TypeScript.ExceptionHandling
{
    public static class ExceptionHandlingBundle
    {
        public static Bundle CreateScriptBundle(string virtualPath)
        {
            return new ScriptBundle(virtualPath)
                .IncludeDirectory("~/App/Packages/ExceptionHandling/Constants", "*.js")
                .IncludeDirectory("~/App/Packages/ExceptionHandling/Controllers", "*.js")
                .IncludeDirectory("~/App/Packages/ExceptionHandling/Services", "*.js")
                .IncludeDirectory("~/App/Packages/ExceptionHandling", "*.js");
        }
    }
}