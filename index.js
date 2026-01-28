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