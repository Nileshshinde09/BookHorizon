import Header from "@/components/header"
import TrendingSection from "@/components/trendingSection"
import Cards from "@/components/cards"
export default function Home() {
  return (
    <div className="bg-gradient-to-r from-orange-300 via-orange-500 to-red-500 h-screen overflow-hidden">
      <div className="max-sm:h-[43rem] sm:h-screen overflow-y-scroll no-scrollbar">
      <TrendingSection/>
      <Cards/>
      </div>
    </div>
  )
}
