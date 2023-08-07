const bulbasaur = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ],
    modifiers: {
        "weakness": ["fire, ice", "flying", "psychic"],
        "resistances": ["water", "grass", "electric", "fighter"]
    }
  }
  const charmander = {
    name: "Charmander",
    type: "fire",
    ability: {
        "primary": "Blaze",
        "hidden": "Solar Power"
    },
    stats: {
        hp: 39,
        attack: 52,
        deffense: 43,
        speed: 65
    },
    moves: [
        "Growl", "Scratch", "Flamethrower", "Dragon Breath"
    ],
    modifiers: {
        "weakness": ["water", "ground", "rock"],
        "resistances": ["fire", "ice", "grass", "steal"]
    }
  }
  const squirtle = {
    name: "Squirtle",
    type: "water",
    ability: {
        "primary": "Torrent",
        "hidden": "Rain Dish"
    },
    stats: {
        hp: 44,
        attack: 48,
        deffense: 50,
        speed: 43
    },
    moves: [
        "Tackle", "Tail Whip", "Water Gun", "Hydro Pump"
    ],
    modifiers: {
        "weakness": ["electric", "grass"],
        "resistances": ["water", "fire", "ice", "steel"]
    }
  }
  const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
        "primary": "Static",
        "hidden": "Lightning rod"
    },
    stats: {
        hp: 35,
        attack: 55,
        deffense: 40,
        speed: 90
    },
    moves: [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
    modifiers: {
        "weakness": ["ground"],
        "resistances": ["electric", "flying", "water", "steel"]
    }
  }
  
  //TODO: AGREGAR FUNCION QUE SE LLAMEN getPikachu, getBulbasaur, getCharmander, getSquirtle para obtener siempre copias de los objetos
  
  function getPikachu(){
    return {
      name: "Pikachu",
      type: "electric",
      ability: {
          "primary": "Static",
          "hidden": "Lightning rod"
      },
      stats: {
          hp: 35,
          attack: 55,
          deffense: 40,
          speed: 90
      },
      moves: [
          "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
      ],
      modifiers: {
          "weakness": ["ground"],
          "resistances": ["electric", "flying", "water", "steel"]
      }
    }
  }
  
  function getBulbasaur() {
    return { 
    name: "Bulbasaur",
    type: "grass",
    ability: {
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ],
    modifiers: {
        "weakness": ["fire, ice", "flying", "psychic"],
        "resistances": ["water", "grass", "electric", "fighter"]
    }
  }
}
function getCharmander() {
    return { 
    name: "Charmander",
    type: "fire",
    ability: {
        "primary": "Blaze",
        "hidden": "Solar Power"
    },
    stats: {
        hp: 39,
        attack: 52,
        deffense: 43,
        speed: 65
    },
    moves: [
        "Growl", "Scratch", "Flamethrower", "Dragon Breath"
    ],
    modifiers: {
        "weakness": ["water", "ground", "rock"],
        "resistances": ["fire", "ice", "grass", "steal"]
    }
  }
}
function getSquirtle() {    
     return { 
    name: "Squirtle",
    type: "water",
    ability: {
        "primary": "Torrent",
        "hidden": "Rain Dish"
    },
    stats: {
        hp: 44,
        attack: 48,
        deffense: 50,
        speed: 43
    },
    moves: [
        "Tackle", "Tail Whip", "Water Gun", "Hydro Pump"
    ],
    modifiers: {
        "weakness": ["electric", "grass"],
        "resistances": ["water", "fire", "ice", "steel"]
    }
  }
}
  /*getMoves()
  Crear una función getMoves que tome como argumento un pokémon y devuelva la lista de movimientos*/
  const getMoves = (pokemon) => {
    return  pokemon.moves;
  }
  //console.log(getMoves(pikachu))
  /*getPrimaryAbility()
  Crear una función getPrimaryAbility que tome como argumento un pokémon y devuelva la habilidad primaria*/
  const getPrimaryAbility = (pokemon) => {
    return pokemon.ability.primary;
  }
  //console.log(getPrimaryAbility(bulbasaur))
  
  /*getWeaknesses()
  Crear una función getWeaknesses que tome como argumento un pokémon y devuelva la lista de tipos contra los que es débil*/
  const getWeaknesses = (pokemon) => {
    console.log("getWeaknesses", pokemon)
    return pokemon.modifiers.weakness
  }
  /*console.log(getWeaknesses(squirtle))*/
  
  /*getResistances()
  Crear una función getResistances que tome como argumento un pokémon y devuelva la lista de tipos contra los que es débil*/
  const getResistances = (pokemon) => {
    return pokemon.modifiers.resistances
  }
  //console.log(getResistances(pikachu))
  
  /*resistsType()
  Crear una función resistsType que tome como argumentos un pokémon y un tipo y devuelva true si el pokémon es resistente 
  a dicho tipo*/
  const resistsType = (pokemon, type) => {
    return pokemon.modifiers.resistances.includes(type)
  }
  //console.log(resistsType(pikachu, "electric"))
  /*resistsMove()
  Crear una función resistsMove que tome como argumentos un pokémon y un movimiento y devuelva true si el pokémon es resistente
  a dicho ataque. El movimiento es un objeto que contiene nombre del mismo y tipo, p. ej.: { name: "Rain dance", type: "water" } */
  /*la funcion resistsMove no entiendo bien como hacerla porque el movimiento y el tipo no contienen lo mismo */
  const resistsMove = (pokemon, attackMove) => {
    //pokemon es el objeto completo de un pokemon
    //attackMove -> { name: "Rain dance", type: "water" }
    return resistsType(pokemon, attackMove.type)
  }
  const rainDanceMove = {
    name: "Rain dance",
    type: "water"
  };
  //console.log(resistsMove(pikachu, rainDanceMove))

  
  /*Crear una función isWeakAgainst que tome como argumento un objeto con dos propiedades, attacker y attacked, donde cada valor 
  es un pokémon (p.ej. { attacker: pikachu, attacked: squirtle }) y devuelva true si el pokémon atacado es débil frente al tipo
  de pokémon que lo ataca*/
  
  function isWeakAgainst( fighters ){
   // console.log("isWeakAgainst", fighters)
    let attacker= fighters.attacker;
    let attacked= fighters.attacked;
  
    //primero obtengo las debilidades del pokemon atacado. que es un array de palabras
    let weaknessArray= getWeaknesses(attacked)
  
    //luego obtengo el tipo del pokemon atacado
    let typeOfAttacker= attacker.type;
  
    //en el array del punto 1 me fijo si esta el tipo del pokemon atacante
    //si esta devuelvo true
    return weaknessArray.includes(typeOfAttacker);
  
  }
  const fighters= {
    attacker: pikachu,
    attacked: squirtle
  }
  //console.log(isWeakAgainst(fighters))
 
  
  /*isStrongAgainst()
  Crear una función isStrongAgainst que tome como argumento un objeto con dos propiedades, attacker y attacked, donde cada valor
  es un pokémon (p.ej. { attacker: pikachu, attacked: squirtle }) y devuelva true si el pokémon atacado es resistente al tipo
  de pokémon que lo ataca*/
  
  
  function isStrongAgainst( fighters) {
    let attacker= fighters.attacker;
    let attacked= fighters.attacked;
    //primero obtengo las resistencias del pokemon atacado. que es un array de palabras
    let resistancesArray= getResistances(attacked)
    //luego obtengo el tipo del pokemon atacado
    let typeOfAttacker= attacker.type;
     //en el array del punto 1 me fijo si esta el tipo del pokemon atacante
    //si esta devuelvo true
    return resistancesArray.includes(typeOfAttacker);
  }
  //uso el objeto fighters definido en la funcion de arriba
  /*console.log(isStrongAgainst(fighters))*/
  /*console.log(isStrongAgainst(pikachu, squirtle))*/
  
  /*addAbility()
  Crear una función addAbility que tome como argumentos un pokémon y un objeto con un tipo de habilidad y el nombre de la misma 
  (p. ej.: { secondary: "Discharge" }) y devuelva el pokémon con la habilidad agregada*/
  
  
  
  const addAbility = (pokemon, newAbility) => { 
  const copiaPokemon = { ...pokemon}
   copiaPokemon.ability = { ...pokemon.ability, ...newAbility };
    return copiaPokemon;
  };
   const newPikachu= addAbility(pikachu, { secondary: "Discharge" });
  //console.log(newPikachu)


  /*addMove()
  Crear una función addMove que tome como argumentos un pokémon y un movimiento, agregue dicho movimiento a su lista y devuelva 
  el pokémon con el movimiento agregado*/
  
  const addMove = (pokemon, move) => {
    const copiaPokemon= {...pokemon}
    const newMove= [...copiaPokemon.moves, move]
  return {...copiaPokemon, moves: newMove}
  }
  //console.log(addMove(pikachu, "thunder kick"))
  
  /*removeMove()
  Crear una función removeMove que tome como argumentos un pokémon y un movimiento, elimine dicho movimiento de su lista y devuelva 
  el pokémon con el movimiento agregado*/
  const removeMove= (pokemon, movimiento) => {
    const eliminarMov= [];
    for( let i= 0; i< pokemon.moves.length; i++) {
      if(pokemon.moves[i] !== movimiento){
        eliminarMov.push(pokemon.moves[i])
      }
    }
    return {...pokemon, moves: eliminarMov};
  }
  //console.log(removeMove(pikachu, "Volt Tackle"))
  
  
  
  /*getAttackModifier()
  Crear una función getAttackModifier, tome como argumento un objeto con dos propiedades, attacker 
  y attacked, donde cada valor es un pokémon (p.ej. { attacker: pikachu, attacked: squirtle }) y devuelva:
  2, si el pokémon atacado es débil (weakness) contra el tipo del pokémon que ataca
  0,5, si el pokémon atacado es resistente (resistances) contra el tipo del pokémon que ataca
  1, si no es débil ni resistente*/
  
  const getAttackModifier= (pokemons) => {
    //console.log("getAttackModifier", pokemons)
    
  if(isWeakAgainst(pokemons)) { 
  return 2;
  }else if( isStrongAgainst(pokemons)){
    return 0.5;
  }else{
    return 1
  }
  };
  let attackModifier= getAttackModifier({ attacker: squirtle, attacked: pikachu });
  //console.log(attackModifier)

  /*getAttackLog()
  Crear una función getAttackLog, que tome como argumento un objeto con las siguientes propiedades:
  {
      attacker: "Squirtle",
      attacked: "Pikachu",
      move: "Water Gun",
      damage: 12,
      modifier: "weak" // otros valores: "resistant", "normal"
  }
  Y que devuelve un string con la siguiente plantilla:
  
  `${attacker} used ${move}! ${attacked} lost ${damage} HP!`
  Por ejemplo:
  
  "Squirtle used Water Gun! Pikachu lost 12 HP!"
  Si el pokémon es débil contra el tipo de su atacante, se debe agregar It's super effective!, si es resistente, se debe agregar 
  It's not very effective!, por ejemplo:
  
  "Pikachu used Thunderbold! Squirtle lost 24 HP! It's super effective!"*/
const getAttackLog= (infoFighters) => {
  let attacker= infoFighters.attacker;
  let attacked= infoFighters.attacked;
  let move= infoFighters.move;
  let damage= infoFighters.damage;
  if(isWeakAgainst({ attacker, attacked })){
    return `${attacker.name} used ${move}! ${attacked.name} lost ${damage} HP! It's super effective! `
  }else if(isStrongAgainst({ attacker, attacked })){
    return `${attacker.name} used ${move}! ${attacked.name} lost ${damage} HP!  It's not very effective!`
  }
}
const infoFighters = {
  attacker: squirtle,
  attacked: pikachu,
  move: "Water Gun",
  damage: 12,
  modifier: "weak"
}
//console.log(getAttackLog(infoFighters))

/*calculateDamage()
Crear una función calculateDamage que tome como un argumento un objeto con la siguientes propiedades
attack es el ataque del pokémon que ataca
defense es la defensa del pokémon siendo atacado
modifier el modificador del daño según el tipo del atacante y del atacado y devuelva el daño ocasionado. El daño se calcula con la 
siguiente fórmula:
0.5 * attack * (attack / defense) * modifier*/
const damage= {
 attack: pikachu.stats.attack,
 defense: bulbasaur.stats.deffense,
 modifier: getAttackModifier({attacker: pikachu, attacked: bulbasaur})  
}
//DESESTRUCTURACION
const calculateDamage= (damage) => {
let {attack, defense, modifier}= damage;
console.log(damage)
return  0.5 * attack * (attack / defense) * modifier
}
//console.log(calculateDamage(damage))
/*
battle()
Crear un función battle que tome como argumentos dos pokémons. La función debe simular una batalla y devolver el resultado de la misma. Las reglas de la misma son:
Por ronda, cada pokémon ataca al contrario
Comienza atacando el pokémon con más velocidad (speed)
La batalla termina cuando la vida (hp, hit points, puntos de golpe) de un pokémon llega a 0 o menos
El daño se obtiene con la función calculateDamage y se resta a la vida del pokémon atacado
Se tiene que guardar un registro o historial del ataque en cada turno, usando lo que devuelve la función getAttackLog
El movimiento se elige de forma aleatoria en cada ataque
El objeto que debe devolver como resultado debe seguir la siguiente estructura:
{
    rounds: 1,
    results: {
        winner: {
            name: "Pikachu",
            hp: 12 // vida restante
        },
        losser: {
            name: "Squirtle",
            hp: 0
        }
    },
    history: [
        "Squirtle used Water Gun! Pikachu lost 12 HP!", 
        "Pikachu used Thunderbold! Squirtle lost 24 HP! It's super effective!"
    ]
}*/

No lo pude resolver 

/*let battle =(pokemon1,pokemon2)=>{
  let history=[];
  let rounds=0;
  let result={
    winner:null,
    loser:null,
    }

  while(pokemon1.stats.hp>0 && pokemon2.stats.hp>0){
    let attacker;
    let attacked;
    if(pokemon1.stats.speed > pokemon2.stats.speed){
      attacker=pokemon1;
      attacked=pokemon2;

    }else{
      attacker=pokemon2
      attacked=pokemon1
    }
  
     let damage = calculateDamage(attacker, attacked);
     attacked.stats.hp -= damage;

     history.push(getAttackLog({
      attacker:attacker.name,
      attacked:attacked.name,
      move: moves[Math.floor(Math.random() * attacker.moves.length)],
      damage,
      modifier: modifier,
  }))
     rounds++;
     if(attacked.stats.hp <= 0){
      result.winner=attacker;
      result.loser=attacked;

     }
     else if(result.winner){
      break
     }
     }
     
  return {
    rounds: rounds,
    results: {
      winner: {
        name: result.winner.name,
        hp: result.winner.stats.hp,
      },
      loser: {
        name: result.loser.name,
        hp: result.loser.stats.hp,
      },
    },
    history: history,
  };
};
const resultBattle = battle(pikachu, squirtle);
console.log(resultBattle);*/

