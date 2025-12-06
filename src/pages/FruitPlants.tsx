import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { PlantCard } from "@/components/shared/PlantCard";
import { PLANT_CATEGORIES } from "@/lib/constants";

const fruitPlants = [
  {
    name: "Guava Plant",
    image: "/plants/fruit/guava-plants.jpg",
    category: "Fruit",
    description: "High-yield guava plants for home gardens and orchards",
  },
  {
    name: "Mango Plant",
    image: "/plants/fruit/mango-plants.jpg",
    category: "Fruit",
    description: "Premium grafted mango varieties for best fruit production",
  },
  {
    name: "Lemon Plant",
    image: "/plants/fruit/lemon-plants.jpg",
    category: "Fruit",
    description: "Healthy lemon plants perfect for kitchen gardens",
  },
];

export default function FruitPlants() {
  return (
    <Layout>
      <SEO
        title="Fruit Plants"
        description="Buy premium fruit plants - Guava, Mango, Lemon and more. Healthy grafted varieties from Manoj Green Valley Nursery, Aligarh."
        keywords="fruit plants, guava plants, mango plants, lemon plants, Aligarh nursery"
        url="/fruit-plants"
      />

      {/* Hero */}
      <section className="relative py-20 bg-secondary">
        <div className="container-custom">
          <SectionHeader
            title={PLANT_CATEGORIES.fruit.title}
            subtitle={PLANT_CATEGORIES.fruit.description}
          />
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {fruitPlants.map((plant, index) => (
              <PlantCard
                key={plant.name}
                name={plant.name}
                image={plant.image}
                category={plant.category}
                description={plant.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
