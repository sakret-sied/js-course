'use strict';

const game = {
    team1: 'REAL MADRID',
    team2: 'BARCELONA',
    players: [
        [
            'Courtois',
            'Vazquez',
            'Militao',
            'Nacho',
            'Mendy',
            'Casemiro',
            'Valverde',
            'Modrich',
            'Kroos',
            'Vinicius',
            'Benzema',
        ],
        [
            'Stegen',
            'Mingueza',
            'Araujo',
            'Lenglet',
            'Dest',
            'Busquets',
            'Jong',
            'Alba',
            'Messi',
            'Pedri',
            'Dembele',
        ],
    ],
    score: '2:1',
    scored: ['Kroos', 'Benzema', 'Mingueza', 'Benzema'],
    date: 'Apr 10th, 2021',
    odds: {
        team1: 1.48,
        draw: 2.53,
        team2: 4.25,
    },
};

// 1

const scoredEntries = Object.entries(game.scored);
for (const [number, player] of scoredEntries) {
    console.log(`Goal ${Number(number) + 1} - ${player}`);
}

// 2

let totalOdds = 0;
const oddsValues = Object.values(game.odds);
for (const odd of oddsValues) {
    totalOdds += odd;
}
console.log((totalOdds / oddsValues.length).toFixed(2));

// 3

const oddsEntries = Object.entries(game.odds);
for (const [team, odd] of oddsEntries) {
    const teamName = team === 'draw' ? 'draw' : `${game[team]} victory`;
    console.log(`Rate for ${teamName}: ${odd}`);
}

// 4

const goalScorers = {};
for (const player of game.scored) {
    goalScorers[player] = (goalScorers?.[player] ?? 0) + 1;
}
console.log(goalScorers);
