import Image from "next/image";
import { AiFillStar } from "react-icons/ai"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


type Game = {
    name: string,
    background_image: string,
    rating: number,
    id: number,
    released: string,
    genres: string[],

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
      <h1 className="text-3xl font-semibold mb-4">Top Games</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {games.map((game) => 
          <Card key={game.id}>
          <CardHeader>
            <CardTitle>{game.name}</CardTitle>
          </CardHeader>
          <CardContent className=" aspect-video relative mb-4">
            <Image
              src={game.background_image}
              alt={game.name}
              fill
              className="object-cover"
              />
          </CardContent>
          <CardFooter className="flex flex-col items-start">
            <p className="text-gray-600 mb-4 flex gap-1 items-center"><AiFillStar/> {game.rating}</p>
            <p className="text-gray-600 mb-4">Released: {game.released}</p>
            <div className="text-gray-600 mb-4 flex flex-wrap gap-1">Genres: {game.genres.map(genre => <Badge variant="outline">{genre.name}</Badge>
              )}</div>
          </CardFooter>
        </Card>
        )}
      </div>
    </div>
  );
};


