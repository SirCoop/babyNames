/**
 * Created by Sir_Coop on 6/9/2015.
 */
//'use strict';
//
//app.directive('babyListNames', function() {
//        return {

            //restrict: 'A',

            //priority: 1000,

            //terminal: false,

            //template: '<td>{{name}}</td>',

            //templateUrl: '',

            //replace: true,

            //scope: false,

            //transclude: false,

            //controller: String or function(scope, element, attrs, transclude, otherInjectables) { ... },

            //controllerAs: String,

            //require: String,

            //link: function(scope, iElement, iAttrs) {
            //    //  scope = $scope
            //    //  iElement = html element containing this attribute directive
            //    //  iAttrs = all attributes of iElement
            //    console.log('scope inside dir ', scope);
            //    var obj = scope.nameObj;
            //    scope.name = obj.name;
            //    scope.gender = obj.gender;
            //    scope.quantity = obj.quantity;
            //
            //
            //
            //},

            // return an Object OR function
            //compile: function(tElement, tAttrs, transclude) {
            //            return {
            //                pre: function(scope, iElement, iAttrs, controller) { ... },
            //                post: function(scope, iElement, iAttrs, controller) { ... }
            //            }
            //            // or
            //            return function postLink(...) { ... }
            //        }
//    };
//});

/*Comments on option descriptions

 restrict - Declare how directive can be used in a template as an element, attribute, class, comment, or any combination.
 restrict option is set to A by default
 • E (an element) {lang=”html”}
 • A (an attribute, default) {lang=”html”} <div my-directive=”expression”></div>
 • C (a class) {lang=”html”} <div class=”my-directive: expression;”></div>
 • M (a comment) {lang=”html”} <– directive: my-directive expression –>

 priority - Set the order of execution in the template relative to other directives on the element.
 most directives omit priority option, in which case it defaults to 0

 terminal - Used to tell Angular to stop invoking any further directives on an element that have a higher priority

 template - Specify an inline template as a string. Not used if you’re specifying your template as a URL.
 template gets passed a string of HTML or a function taking two args and returning a string value representing the template

 templateUrl - Specify the template to be loaded by URL. This is not used if you’ve specified an inline template as a string.
 templateUrl takes string path to the template .html file
 the url with "/" prefix is relative to the domain, without the "/" prefix it will be relative to the main ("index.html") page or base url (if you use location in the html5 mode).

 replace - If true, replace the current element. If false or unspecified, append this directive to the current element.
 replace is false by default.
 Directive’s template will be appended as a child node within the element where the directive was invoked
 MUST BE SET TO TRUE IF PROVIDED, which means directive's template replaces element where directive was invoked

 transclude - Lets you move the original children of a directive to a location inside the new template.
 Transclude allows us to pass in an entire template, including its scope, to a directive
 Only use transclude: true when you want to create a directive that wraps arbitrary content
 scope option must be set to isolate: {} or true

 scope - Create a new scope for this directive rather than inheriting the parent scope.
 When scope is set to true, a new scope object is created that prototypically inherits from its parent scope.
 When scope is set to empty object, an isolated scope is created e.g. scope: {}

 controller - Create a controller which publishes an API for communicating across directives.
 When set to a string, the name of the string is used to look up a controller constructor function registered elsewhere in our application

 controllerAs - Enables us to set a controller alias with the benefit of not having to inject $scope pg.120 ng-book

 require - Require that another directive be present for this directive to function correctly.
 require is used to inject the controller of the required directive as the fourth parameter of the current directive’s linking function

 link - Programmatically modify resulting DOM element instances, add event listeners, and set up data binding.
 link option to create a directive that manipulates the DOM; equivalent to compile: post
 pg 125 ng-book

 compile - Programmatically modify the DOM template for features across copies of a directive, as when used in ng-repeat.
 - Your compile function can also return link functions to modify the resulting element instances.
 compile option to manipulate template before scope has been linked; overwrites link: when both compile: and link: are defined



 *************************JS Fiddles*******************

 controllerAs demonstration
 http://jsfiddle.net/cooper_garym/r3zmm497/

 */
