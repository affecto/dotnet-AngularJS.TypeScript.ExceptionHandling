"use strict";

module Affecto.ExceptionHandling
{
    export class ErrorController extends Base.Controller
    {
        public static $inject = ["$scope", "$location", "$translate"];

        public userName: string;
        public password: string;
        private errorCode: string;
        private errorCodeUndefined: string = "ERROR_UNDEFINED";

        constructor(private $scope: Base.IControllerScope, private $location: angular.ILocationService, private $translate: angular.translate.ITranslateService)
        {
            super($scope);
            $scope.controller = this;

            this.errorCode = $location.search()[UrlParameters.errorCode];
        }

        public get errorMessage(): string
        {
            var code: string;
            if (typeof (this.errorCode) !== "string")
            {
                code = this.errorCodeUndefined;
            }
            else
            {
                code = "ERROR_" + this.errorCode;
            }
            var error: string = this.$translate.instant(code);

            if (this.errorCode == null || error === code)
            {
                error = this.$translate.instant(this.errorCodeUndefined);
            }
            return error;
        }
    }
}