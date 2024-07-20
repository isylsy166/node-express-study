const date = new Date()
const year = date.getFullYear()
const month = date.getMonth()+1


console.log(`${year}년 ${month}월`)


class Monster{

    attack = (power) => {
        console.log(`${power}의 공격력으로 공격!`)
    }

    run(speed){
        console.log(`${speed}속도로 도망~~`)
    }
}

const goblin = new Monster()
const slaim = new Monster()

goblin.attack(10)
goblin.run(30)

slaim.attack(20)
slaim.run(50)