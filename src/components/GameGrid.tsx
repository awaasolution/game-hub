import React, { Fragment, useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { Image, Text } from "@chakra-ui/react";

interface Game {
  id: number;
  // slug: string;
  name: string;
  // released: string;
  // rating: number;
  background_image: string;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGameResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => setError(err.message));
  }, []);
  console.log("games");
  return (
    <>
      <Text>{error}</Text>
      <ul>
        {error ||
          games.map((game) => (
            <li key={game.id}>
              <Text>{game.name}</Text>
              <Text>{game.id}</Text>
              <Image src={game.background_image} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default GameGrid;
