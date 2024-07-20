class Monster{

    constructor(name){
        this.name = name
    }

    attack = (power) => {
        console.log(`${this.name} : ${power}의 공격력으로 공격!`)
    }

    run(speed){
        console.log(`${this.name} : ${speed}속도로 도망~~`)
    }
}

class flyMonster extends Monster{

    constructor(name){
        super(name) //부모의 생성자로 넘겨준다
    }

    //오버라이딩 : 부모의 run은 사라지고 덮어씀
    run(speed){
        console.log(`${this.name} : ${speed} 속도로 날아서 도망~~`)
    }
}

class oceanMonster extends Monster{

    constructor(name){
        super(name) //부모의 생성자로 넘겨준다
    }

    run(speed){
        console.log(`${this.name} : ${speed} 속도로 헤엄쳐서 도망~~`)
    }
}

const goblin = new Monster("고블린")
const slaim = new Monster("슬라임")
const lizamong = new flyMonster("리자몽")
const kobugi = new oceanMonster("꼬부기")

goblin.attack(10)
goblin.run(30)

slaim.attack(20)
slaim.run(50)

lizamong.attack(20)
lizamong.run(100)

kobugi.attack(15)
kobugi.run(35)