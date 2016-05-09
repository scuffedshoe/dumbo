var View = (function () {
    function View() {
        this._currentView = null;
    }
    View.prototype.loadView = function (view) {
        console.log(view);
        window.location.href = "//" + view + "/index.html";
    };
    View.prototype.getView = function () {
        return this._currentView;
    };
    View.prototype.setView = function (view) {
        this._currentView = view;
        this.loadView(view);
    };
    return View;
}());
//# sourceMappingURL=Common.js.map