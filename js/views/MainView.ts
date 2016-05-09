/// <reference path="../libs/jquery/jquery.d.ts" />

const _baseURL = location.origin;

class View {
    private _currentView: string = null;

    loadView(view: string) {
        window.location.href = `${_baseURL}/modules/${view}/index.html`;
    }

    getView() {
        if(this._currentView == null) {
            this._currentView = this.getViewFromURL();
        }
        return this._currentView;
    }

    getViewFromURL() {
        let url: string = window.location.href;
        let currentView: string;
        currentView = url.replace(`${_baseURL}/modules/`,'').replace('/index.html','');
        return currentView;
    }

    setView(view: string) {
        this._currentView = view;
        this.loadView(view);
    }
}
