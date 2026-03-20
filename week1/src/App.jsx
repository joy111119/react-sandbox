import { TeamCard } from './components/TeamCard'

export default function App() {
  return (
    <div className="p-8 bg-slate-50 min-h-screen flex flex-wrap gap-4 justify-center">
      <h1 className="w-full text-2xl font-bold mb-8 text-slate-700 text-center">
        Welcome to React!
      </h1>

      {/* Three TeamCard components with different names and roles */}
      <TeamCard name="Bart Simpson" role="Son" />
      <TeamCard name="Lisa Simpson" role="Daughter" />
      <TeamCard name="Maggie Simpson" role="Daughter" />
      <TeamCard name="Marge Simpson" role="Mother" />
      <TeamCard name="Homer Simpson" role="Father" />
    </div>
  )
}