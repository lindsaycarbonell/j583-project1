var app = angular.module('mainApp',[]);

app.controller('MainController',function() {

this.message = "hello";


var data = [
    {
        dex_num: 1,
        name: "Bulbasaur",
        types: [
          "Grass"
        ],
        location: "unknown",
        evolut_chain: [
            1,
            2,
            3
        ],
        base_hp: 45,
        base_atk: 49,
        base_def: 49,
        base_spdef: 65,
        base_spatk: 65,
        base_speed: 45,
        isCaught: false
      },

      {
        dex_num: 2,
        name: "Ivysaur",
        types: [
          "Grass",
          "Poison"
        ],
        location: "unknown",
        evolut_chain: [
          1,
          2,
          3
        ],
        base_hp: 60,
        base_atk: 62,
        base_def: 63,
        base_spatk: 80,
        base_spdef: 80,
        base_speed: 60,
        isCaught: false

      },

      {
        dex_num: 3,
        name: "Venusaur",
        types: [
          "Grass",
          "Poison"
        ],
        location: "unknown",
        evolut_chain: [
          1,
          2,
          3
        ],
        base_hp: 80,
        base_atk: 82,
        base_def: 83,
        base_spdef: 100,
        base_spatk: 100,
        base_speed: 80,
        isCaught: false

      },

      {
        dex_num: 3,
        name: "Venusaur",
        types: [
          "Grass",
          "Poison"
        ],
        location: "unknown",
        evolut_chain: [
          1,
          2,
          3
        ],
        base_hp: 80,
        base_atk: 82,
        base_def: 83,
        base_spatk: 100,
        base_spdef: 50,
        base_speed: 80,
        isCaught: false

      },

      {
        dex_num: 4,
        name: "Charmander",
        types: [
          "Fire"
        ],
        location: "unknown",
        evolut_chain: [
          4,
          5,
          6
        ],
        base_hp: 39,
        base_atk: 52,
        base_def: 43,
        base_spatk: 50,
        base_spdef: 50,
        base_speed: 65,
        isCaught: false

      },

      {
        dex_num: 5,
        name: "Charmeleon",
        types: [
          "Fire"
        ],
        location: "unknown",
        evolut_chain: [
          4,
          5,
          6
        ],
        base_hp: 58,
        base_atk: 64,
        base_def: 58,
        base_spatk: 65,
        base_spdef: 65,
        base_speed: 80,
        isCaught: false

      },

      {
        dex_num: 6,
        name: "Charizard",
        types: [
          "Fire",
          "Flying"
        ],
        location: "unknown",
        evolut_chain: [
          4,
          5,
          6
        ],
        base_hp: 78,
        base_atk: 84,
        base_def: 78,
        base_spatk: 85,
        base_spdef: 85,
        base_speed: 100,
        isCaught: false

      },

      {
        dex_num: 7,
        name: "Squirtle",
        types: [
          "Water"
        ],
        location: "unknown",
        evolut_chain: [
          7,
          8,
          9
        ],
        base_hp: 44,
        base_atk: 48,
        base_def: 65,
        base_spatk: 50,
        base_spdef: 64,
        base_speed: 43,
        isCaught: false

      },

      {
        dex_num: 8,
        name: "Wartortle",
        types: [
          "Water"
        ],
        location: "unknown",
        evolut_chain: [
          7,
          8,
          9
        ],
        base_hp: 59,
        base_atk: 63,
        base_def: 80,
        base_spatk: 65,
        base_spdef: 80,
        base_speed: 58,
        isCaught: false

      },

      {
        dex_num: 9,
        name: "Blastoise",
        types: [
          "Water"
        ],
        location: "unknown",
        evolut_chain: [
          7,
          8,
          9
        ],
        base_hp: 79,
        base_atk: 83,
        base_def: 100,
        base_spatk: 85,
        base_spdef: 105,
        base_speed: 78,
        isCaught: false

      }
]

this.pokemon = data;




});
