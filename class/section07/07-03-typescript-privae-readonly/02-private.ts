// public, private, protected, readonly

class Monster2{

    constructor(private name: string){
       
    }

    attack1 = (power: number) => {
        console.log(`${this.name} : ${power}의 공격력으로 공격!`)
    }
}

class flyMonster2 extends Monster2{

}



const goblin2 = new Monster2("고블린")
const slaim2 = new Monster2("슬라임")
const lizamong2 = new flyMonster2("리자몽")

goblin.attack1(10);
