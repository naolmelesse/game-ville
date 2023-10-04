import { AiFillStar } from "react-icons/ai"
import Image from 'next/image';
import MoviePlayer from '@/app/components/movie-player';
type Game = {
    name: string,
    description_raw: string,
    background_image: string,
    background_image_additional: string,
    website: string,
    rating: number,
    released: string,
    id: number,
    movies: {
        id: number,
        name: string,
        preview: string,
        data: {
            '480' : string,
            max: string,
         }
    }[],
    screenshots: {
        id: number,
        image: string,
    }[]
}
const getGame = async (id : string | null) : Promise<Game> => {
        const response = await fetch(`https://api.rawg.io/api/games/${id}?key=06680f46b0a04784b1f8a8db74d6dff3`);
        // const moviesRes = await fetch(`https://api.rawg.io/api/games/${id}/movies?key=06680f46b0a04784b1f8a8db74d6dff3`);
        // if(!moviesRes.ok)
        // console.error("Error fetching the game movies man");
        // const movieData = await moviesRes.json();
        const screenshotsRes = await fetch(`https://api.rawg.io/api/games/${id}/screenshots?key=06680f46b0a04784b1f8a8db74d6dff3`);
        if(!response.ok)
        console.error("Error fetching the game man");
        if(!screenshotsRes.ok)
        console.error("Error fetching the game screenshots man");
        const data = await  response.json();
        const screenshotsData = await screenshotsRes.json();
        return {...data,  screenshots: screenshotsData.results};
    }
    
    export default async function Game({params } : any){
        const game = await getGame(params.id);
        // console.log(game.screenshots);

    return(
        <div className="w-full px-5 lg:px-24">
            <div className="flex flex-col w-full">
                <h1 className="text-4xl ">Game Info</h1>
            
                <div className="flex flex-col lg:flex-row gap-5 my-10">
                    <div className="aspect-video relative w-full lg:w-3/5">
                        <Image
                            src={game.background_image}
                            alt={game.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                    <p className="mb-5"><span className="text-3xl text-center mr-5">{game.name}</span></p>
                        <p className="text-gray-600 mb-4 flex gap-1 items-center">Rating: <AiFillStar/>{game.rating}</p>
                        <p className="text-gray-600 mb-4 flex gap-1 items-center">Released: {game.released}</p>
                        <p className="text-gray-600 mb-4 flex gap-1 items-center">Website: {game.website}</p>
                    </div>
                </div>
                <div className="bg-[#eee] px-10 pb-5">
                    <h2 className="text-xl font-medium my-5">Description</h2>
                    <p className=" font-light text-justify">{game.description_raw}</p> 
                </div>
                <div className="py-10">
                    <h2 className="text-xl font-medium py-5">Screenshots</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        {game.screenshots.map((screenshot) => 
                            <div key={screenshot.id} className="aspect-video relative">
                                <Image
                                    src={screenshot.image}
                                    alt={game.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}
                    </div>
                </div>
                {/* {game.movies.map((movie) => <MoviePlayer key={movie.id} movie={movie}/>)} */}
            </div>
        </div>
    )
}