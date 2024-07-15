// Example array of player objects
let players = [
    { name: "Virat Kohli", team: "RCB", runs: 587 },
    { name: "Rohit Sharma", team: "MI", runs: 654 },
    { name: "KL Rahul", team: "PBKS", runs: 670 },
    { name: "Shikhar Dhawan", team: "DC", runs: 618 },
    { name: "AB de Villiers", team: "RCB", runs: 512 },
    { name: "Faf du Plessis", team: "CSK", runs: 633 },
    { name: "David Warner", team: "SRH", runs: 548 }
];

// Function to find top 3 scorers
function findTopScorers(players) {
    // Sort players array by runs in descending order
    players.sort((a, b) => b.runs - a.runs);

    // Return top 3 players
    return players.slice(0, 3);
}

// Example usage:
console.log(findTopScorers(players));
//---------------------------------------------------------------
{
    "RCB": 8,
    "MI": 10,
    "PBKS": 6,
    "DC": 7,
    "CSK": 9,
    "SRH": 5
}
//----------------------------------------------------------
// Example JSON object
let teamWins = {
    "RCB": 8,
    "MI": 10,
    "PBKS": 6,
    "DC": 7,
    "CSK": 9,
    "SRH": 5
};

// Function to find team with maximum wins
function findTeamWithMaxWins(teamWins) {
    let maxWins = 0;
    let maxWinsTeam = '';

    for (let team in teamWins) {
        if (teamWins[team] > maxWins) {
            maxWins = teamWins[team];
            maxWinsTeam = team;
        }
    }

    return maxWinsTeam;
}

// Example usage:
console.log(findTeamWithMaxWins(teamWins)); // Output: "MI"
//-----------------------------------------------------------------
// Example array of player objects
let players = [
    { name: "Virat Kohli", team: "RCB", runs: 587 },
    { name: "Rohit Sharma", team: "MI", runs: 654 },
    { name: "KL Rahul", team: "PBKS", runs: 670 },
    { name: "Shikhar Dhawan", team: "DC", runs: 618 },
    { name: "AB de Villiers", team: "RCB", runs: 512 },
    { name: "Faf du Plessis", team: "CSK", runs: 633 },
    { name: "David Warner", team: "SRH", runs: 548 }
];

// Function to find players by team
function findPlayersByTeam(players, teamName) {
    let teamPlayers = players.filter(player => player.team === teamName);
    return teamPlayers;
}

// Example usage:
console.log(findPlayersByTeam(players, "RCB"));
// Output: [ { name: 'Virat Kohli', team: 'RCB', runs: 587 }, { name: 'AB de Villiers', team: 'RCB', runs: 512 } ]
//-----------------------------------------------------------

