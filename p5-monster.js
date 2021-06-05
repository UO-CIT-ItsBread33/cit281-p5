

module.export = class Monster {
    constructor(monsterObject) {
        this.monsterObject = monsterObject;
        this.monsterObject.monsterName = "Unknown";
        this.monsterObject.minimumLife = 0;
        this.monsterObject.currentLife = 100;
        this.monsterObject.isALive = (this.monsterObject.currentLife >= this.monsterObject.minimumLife) ? true : false;      
    }
    updateLife(int) {
        this.monsterObject.currentLife += int;
        this.monsterObject.currentLife = (this.monsterObject.currentLife < 0) ? 0 : this.monsterObject.currentLife;
        this.monsterObject.isALive = (this.monsterObject.currentLife < this.monsterObject.minimumLife) ? true : false;
    }
    randomLifeDrain(minimumLifeDrain, maximumLifeDrain) {
        result = getRandomInteger(minimumLifeDrain, maximumLifeDrain + 1);
        console.log(`${result}`);
        return result;
    }
    getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    
}