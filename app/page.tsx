import GameList from "./components/games";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <GameList/>
    </main>
  )
}
