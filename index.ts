/// <reference path="js/libs/jquery/jquery.d.ts" />
class NPS {
    $loading = null;
    private _view: View = null;

    constructor() {
        this.$loading = $('h1');
    }
    loadView() {
        this._view = new View();
        this._view.setView('home');
    }
}

(function() {
    let nps:NPS = new NPS();
    nps.loadView();
    console.log('nps init');
})();