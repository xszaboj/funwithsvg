import * as ko from "knockout";

class CardViewModel{
    name: KnockoutObservable<string>
    value: KnockoutObservable<number>
    cardName: KnockoutComputed<string>
    constructor(name: string, value: number){
        this.name = ko.observable(name);
        this.value = ko.observable (value);
        this.cardName = ko.pureComputed(function(){
            return name + "-card";
        });        
    }

    plus = function(){
        this.value(this.value() + 1);
    }

    minus = function(){
        this.value(this.value() - 1);
    }
     
}

class GameViewModel {
    cards: CardViewModel[]
    constructor(cards: CardViewModel[]) {
        this.cards = cards;
    }
}

ko.applyBindings(new GameViewModel([
    new CardViewModel("brick", 1),
    new CardViewModel("ore", 0),
    new CardViewModel("wheat", 0),
    new CardViewModel("wood", 0),
    new CardViewModel("sheep", 0),
    new CardViewModel("point", 0),
    new CardViewModel("knight", 0),
    new CardViewModel("discovery", 0),
    new CardViewModel("road", 0),
    new CardViewModel("monopol", 0),
]));