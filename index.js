class Hero 
{
  constructor(name, age, type, attackType)
  {
    this.name = name
    this.age = age
    this.type = type
    this.attackType = attackType
  }
  attack()
  {
    console.log(`O ${this.type} atacou usando ${this.attackType}`)
  }

}

let mago = new Hero("Gandalf", 2000, "mago", "magia")
let guerreiro = new Hero("Aragorn", 80, "guerreiro", "espada")
let monge = new Hero("Wukong", 100, "monge", "artes marciais")
let ninja = new Hero("Naruto", 16, "ninja", "shuriken")

mago.attack()
guerreiro.attack()
monge.attack()
ninja.attack()