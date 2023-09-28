// Global Vars

const heroes = [
    {
        name: 'Batman',
        type: 'dwarf',
        damage: 5,
        health: 100
    },
    {
        name: 'Wonder Woman',
        type: 'elf',
        damage: 10,
        health: 100
    }
]

const boss = {
    health: 100,
    maxHealth: 100,
    damage: 5,
    level: 1
}

// let totalDamage = 0

// Functions


function attackBoss() {

    damageToBoss()
    const bossElement = document.getElementById("BossHP")
    bossElement.innerText = boss.health
    console.log(boss.health)

}

function damageToBoss() {
    let combinedDamage = 0

    heroes.forEach(hero => {
        combinedDamage += hero.damage
    })
    boss.health -= combinedDamage
    if (boss.health <= 0) {
        boss.health = 0
    }

}

function damageToHero() {

    heroes.forEach(hero => {
        hero.health -= boss.damage


        if (hero.health <= 0)
            hero.health = 0
    })


    DrawHeroHP()
}

function DrawHeroHP() {

    heroes.forEach(hero => {
        const BMHealth = document.getElementById(hero.name)
        BMHealth.innerText = hero.health

    })

}



function resetBoss() {
    boss.damage += 5
    boss.health += 100
    console.log(boss.damage)
}




setInterval(damageToHero, 5000)