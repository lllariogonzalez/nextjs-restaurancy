import api from "@/api";
import RestaurantCard from "./components/RestaurantCard";
import SearchBox from "./components/SearchBox";

export default async function Home({ searchParams }: { searchParams: { q: string } }) {
  const restaurants = await api.search(searchParams.q);

  return (
    <section>
      <SearchBox />
      <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {
          restaurants.length
            ? restaurants.map((restaurant) => <RestaurantCard key={restaurant.id} restaurant={restaurant} />)
            : <span>No matching results</span>
        }
      </section>
    </section>
  );
}
