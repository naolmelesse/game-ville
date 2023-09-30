'use client'
import { useSearchParams } from 'next/navigation'
import { AiFillStar } from "react-icons/ai"
import Image from 'next/image';
type Game = {
    name: string,
    description: string,
    background_image_additional: string,
    rating: number,
    id: number,
    movies: {
        id: number,
        name: string,
        preview: string,
        data: { }
        },
}
const getGame = async (id : number) : Promise<Game> => {
        const apiKey = process.env.NEXT_PUBLIC_RAWG_API_KEY;
        const response = await fetch(`https://api.rawg.io/api/games/${id}?key=87d59138f1444b409dad7a688c402e4e`);
        const moviesRes = await fetch(`https://api.rawg.io/api/games/${id}/movies?key=87d59138f1444b409dad7a688c402e4e`);
        if(!response.ok)
          console.error("Error fetching the game man");
        const data = await  response.json();
        return data
}

export default async function Game(){
    const searchParams = useSearchParams();
    const id = searchParams.get('id');

    const game = await getGame(id);
    return(
        <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="aspect-video relative w-3/5">
            <Image
                src={game.background_image_additional}
                alt={game.name}
                fill
                className="object-cover"
                />
            </div>
            <div className="w-1/3">
                <h1>{game.name}</h1>
                <p className="text-gray-600 mb-4 flex gap-1 items-center"><AiFillStar/> {game.rating}</p>
                {game.description}
            </div>
        </div>
    )
}