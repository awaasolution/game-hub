import { Image, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { error, games } = useGames();
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
