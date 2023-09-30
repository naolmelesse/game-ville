'use client'
import { useRouter } from 'next/navigation'
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

export default function GameCard({game}){
    const router = useRouter();

    return(
    <>
        <Card key={game.id} className="cursor-pointer" onClick={() => router.push(`/game/${game.id}`, { scroll: false })}>
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
      </>
    )
}