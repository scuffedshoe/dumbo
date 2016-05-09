/// <reference path="../libs/jquery/jquery.d.ts" />
var _baseURL = location.origin;
var View = (function () {
    function View() {
        this._currentView = null;
    }
    View.prototype.loadView = function (view) {
        window.location.href = _baseURL + "/modules/" + view + "/index.html";
    };
    View.prototype.getView = function () {
        if (this._currentView == null) {
            this._currentView = this.getViewFromURL();
        }
        return this._currentView;
    };
    View.prototype.getViewFromURL = function () {
        var url = window.location.href;
        var currentView;
        currentView = url.replace(_baseURL + "/modules/", '').replace('/index.html', '');
        return currentView;
    };
    View.prototype.setView = function (view) {
        this._currentView = view;
        this.loadView(view);
    };
    return View;
}());
/**
 * Created by ZNelson on 5/5/16.
 */
/// <reference path="../../js/libs/jquery/jquery.d.ts" />
/// <reference path="../../js/common/Common.ts" />
var Home = (function () {
    function Home(name) {
        this.$h1 = null;
        this._name = null;
        this._name = name;
        this.$h1 = $('h1');
    }
    Home.prototype.sayName = function () {
        console.log('My name is ' + this._name);
    };
    Home.prototype.writeView = function () {
        var view = new View();
        console.log('This is the ' + view.getView() + ' view, ' + this._name);
        this.$h1.html('This is the ' + view.getView() + ' view, ' + this._name);
    };
    return Home;
}());
$(function () {
    var home = new Home('Zach');
    home.sayName();
    home.writeView();
});
//# sourceMappingURL=Home.js.map