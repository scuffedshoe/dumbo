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
/// <reference path="js/libs/jquery/jquery.d.ts" />
var NPS = (function () {
    function NPS() {
        this.$loading = null;
        this._view = null;
        this.$loading = $('h1');
    }
    NPS.prototype.loadView = function () {
        this._view = new View();
        this._view.setView('home');
    };
    return NPS;
}());
(function () {
    var nps = new NPS();
    nps.loadView();
    console.log('nps init');
})();
//# sourceMappingURL=index.js.map