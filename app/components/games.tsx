import GameCard from "./game-card";

type Game = {
    name: string,
    background_image: string,
    rating: number,
    id: number,
    released: string,
    genres: [{name : string}],

}
const getGames = async () : Promise<Game[]> => {
        const apiKey = process.env.NEXT_PUBLIC_RAWG_API_KEY;
        const response = await fetch(`https://api.rawg.io/api/games?key=87d59138f1444b409dad7a688c402e4e`)
        // if(!response.ok)
        //   console.error("Error fetching games man");
        const data = await  response.json();
        return data.results
}

export default async function GameList() {

  const games = await getGames();

  return (
    <div>
      <h1 className="text-xl lg:text-3xl font-semibold mb-4">Top Games for Milky</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {games.map((game) => <GameCard game={game}/>)}
      </div>
    </div>
  );
};


