import GameCard from "../../components/game-card";

type Game = {
    name: string,
    background_image: string,
    rating: number,
    id: number,
    released: string,
    genres: [{name : string}],

}
const getGames = async (search : string) : Promise<Game[]> => {
        const response = await fetch(`https://api.rawg.io/api/games?key=06680f46b0a04784b1f8a8db74d6dff3&search=${search}`)
        if(!response.ok)
          console.error("Error fetching games man");
        const data = await  response.json();
        return data.results
}

const Page = async ({params} : any) => {
  const games = await getGames(params.q);
  if(!games){
    <div className="p-5 lg:px-24">
    <h1 className="text-xl lg:text-3xl font-semibold mb-4">Search results</h1>
    <p>No game found! 🤷‍♂️</p>
    </div>
  }
  return (
    <div className="p-5 lg:px-24">
      <h1 className="text-xl lg:text-3xl font-semibold mb-4">Search results</h1>
      { games &&
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {games.map((game) => <GameCard key={game.id} game={game}/>)}
        </div>
      }
    </div>
  );
};

export default Page;

