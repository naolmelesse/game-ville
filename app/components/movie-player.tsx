import Image from 'next/image';
import ReactPlayer from 'react-player';

type MoviePlayerProps = {
    movie: {    
        id: number,
        name: string,
        preview: string,
        data: {
            '480' : string,
            max: string,
        }
    }
}

const MoviePlayer : React.FC<MoviePlayerProps> = ({movie}) => {

    return (
      <div className="aspect-movie w-full">
        <p>{movie.name}</p>
        <ReactPlayer 
         url={movie.data['480']}
         controls={true} />
      </div>
    )
  }

  export default MoviePlayer;