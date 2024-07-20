class fly{
    run = (speed) => {
        console.log(`${speed}속도로 날아서 도망~`)
    }
}

class water{
    run = (speed) => {
        console.log(`${speed}속도로 헤엄쳐서 도망~`)
    }
}

class Monster{

    constructor(name,type){
        this.name = name
        this.type = type
    }

    attack = (power) => {
        console.log(`${this.name} : ${power}의 공격력으로 공격!`)
    }

    run(speed){
        this.type.run(speed);
    }
}

const lizamong = new Monster("리자몽", new fly())
const kobugi = new Monster("꼬부기", new water())

lizamong.attack(10)
lizamong.run(15)

kobugi.attack(5)
kobugi.run(15)