import React, { useState } from "react";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

// Sorting function w.r.t scores
function compareScores(player_A, player_B) {
  return player_B.score - player_A.score;
}
// sorting function w.r.t names
function compareNames(player_A, player_B) {
  return player_A.name.localeCompare(player_B.name, "en", {
    sensitivity: "base",
  });
}
export default function Scoreboard() {
  const [Players, setPlayers] = useState([
    {
      id: 1,
      name: "Violetta",
      score: 11,
    },
    {
      id: 2,
      name: "Eszter",
      score: 14,
    },
    {
      id: 3,
      name: "Jeroen v2",
      score: 4,
    },
    {
      id: 5,
      name: "Jeroen v1",
      score: 34,
    },
    {
      id: 4,
      name: "Lisa",
      score: 42,
    },
  ]);

  const [sort_by, setSortBy] = useState("score");
  const change_sorting = (event) => {
    //console.log("new sort order:", event.target.value, "sort_by: ", sort_by);
    setSortBy(event.target.value);
  };

  let players_sorted;

  if (sort_by === "score") {
    players_sorted = [...Players].sort(compareScores);
  }

  if (sort_by === "name") {
    players_sorted = [...Players].sort(compareNames);
  }
  function changeScore(id, changeBy) {
    // [{4}, {5}, {1}] setPlayers([{4}, {5}, {2}]) -> map
    const updatedPlayers = Players.map((player) => {
      //console.log(player, id);
      if (player.id === id) {
        // update score
        return {
          id: player.id,
          name: player.name,
          score: player.score + changeBy,
        };
      }

      // we do nothing
      return player;
    });
    setPlayers(updatedPlayers);
    //console.log("test sort_by:", sort_by);
  }

  const resetScores = () => {
    //console.log("text Players:", Players);
    const resetPlayersScore = Players.map((player) => {
      return {
        id: player.id,
        name: player.name,
        score: 0,
      };
    });
    setPlayers(resetPlayersScore);
  };
  const resetRandomScores = () => {
    const resetPlayersScore = Players.map((player) => {
      return {
        id: player.id,
        name: player.name,
        score: Math.floor(Math.random() * 100 + 1),
      };
    });
    setPlayers(resetPlayersScore);
  };

  const add_newPlayer = (newPlayername) => {
    const newPlayers = [...Players];
    newPlayers.push({ id: Players.length + 1, name: newPlayername, score: 0 });
    console.log("Players after PUSH:", newPlayers, Players);
    setPlayers(newPlayers);
  };
  console.log("Players", Players);
  return (
    <div className="scoreboard">
      <p>
        Sort order:{" "}
        <select onChange={change_sorting}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
        <button onClick={() => resetScores()}>Reset all players score</button>
        <button onClick={() => resetRandomScores()}>
          Reset all players score to random
        </button>
      </p>
      <h4>Player's Scores</h4>
      <p>Player list Sorted by {sort_by}</p>
      <ul>
        {players_sorted.map((player) => (
          <Player
            id={player.id}
            name={player.name}
            score={player.score}
            changescores={changeScore}
          />
        ))}
      </ul>
      <p>
        <AddPlayerForm addPlayer={add_newPlayer} />
      </p>
    </div>
  );
}
