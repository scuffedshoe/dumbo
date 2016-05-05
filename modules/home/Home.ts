/**
 * Created by ZNelson on 5/5/16.
 */
/// <reference path="../../js/libs/jquery/jquery.d.ts" />
/// <reference path="../../js/common/Common.ts" />

class Home {
    $h1 = null;
    private _name = null;

    constructor(name) {
        this._name = name;
        this.$h1 = $('h1');
    }
    sayName() {
        console.log('My name is ' + this._name);
    }
    writeView() {
        let view:View = new View();
        console.log('This is the ' + view.getView() + ' view, ' + this._name);
        this.$h1.html('This is the ' + view.getView() + ' view, ' + this._name);
    }
}

$(function() {
    let home:Home = new Home('Zach');
    home.sayName();
    home.writeView();
});