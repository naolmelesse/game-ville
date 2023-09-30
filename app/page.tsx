import GameList from "./components/games";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 lg:px-24">
      <GameList/>
    </main>
  )
}
