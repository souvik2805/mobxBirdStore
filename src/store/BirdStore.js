import {makeObservable, observable, action, computed} from "mobx";

class BirdStore{
    @observable birds = [];

    constructor() {
        makeObservable(this)
    }

    @action
    addBird = bird =>{
        this.birds.push(bird);
    }

    @computed
    get birdCount(){
        return this.birds.length;
    }

}

const singleton = new BirdStore();
export default singleton;