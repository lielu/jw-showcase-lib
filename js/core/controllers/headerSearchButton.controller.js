/**
 * Copyright 2015 Longtail Ad Solutions Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 **/

(function () {

    angular
        .module('jwShowcase.core')
        .controller('HeaderSearchButtonController', HeaderSearchButtonController);

    /**
     * @ngdoc controller
     * @name jwShowcase.core.controller:HeaderSearchButtonController
     *
     * @requires $timeout
     * @requires jwShowcase.core.appStore
     */

    HeaderSearchButtonController.$inject = ['$timeout', 'appStore'];
    function HeaderSearchButtonController ($timeout, appStore) {

        var vm   = this;

        vm.searchButtonClickHandler = searchButtonClickHandler;

        ////////////////

        /**
         * Handle click event on search button
         */
        function searchButtonClickHandler () {

            appStore.searchBarActive = true;

            $timeout(function() {
                document.querySelector('.jw-header-search-input').focus();
            }, 300);
        }
    }

})();
