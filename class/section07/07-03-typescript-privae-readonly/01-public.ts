// public, private, protected, readonly

class Monster1{

    constructor(protected readonly name: string){
       
    }

    attack1 = (power: number) => {
        console.log(`${this.name} : ${power}의 공격력으로 공격!`)
    }
}

class flyMonster1 extends Monster1{

    attack2 = (power: number) => {
        console.log(`${this.name} : ${power}의 공격력으로 공격!`)
    }
}



const goblin = new Monster1("고블린")
const slaim = new Monster1("슬라임")
const lizamong = new flyMonster1("리자몽")

goblin.attack1(10);
goblin.name = "방구몬";
