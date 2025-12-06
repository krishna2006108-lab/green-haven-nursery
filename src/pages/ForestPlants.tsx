import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { PlantCard } from "@/components/shared/PlantCard";
import { PLANT_CATEGORIES } from "@/lib/constants";

const forestPlants = [
  {
    name: "Acacia Plant",
    image: "/plants/forest/acacia-plants.jpg",
    category: "Forest",
    description: "Fast-growing acacia for afforestation and landscaping",
  },
  {
    name: "Mahogany Plant",
    image: "/plants/forest/mahogany-plants.jpg",
    category: "Forest",
    description: "Premium mahogany trees for timber and shade",
  },
];

export default function ForestPlants() {
  return (
    <Layout>
      <SEO
        title="Forest & Landscaping Plants"
        description="Forest plants for afforestation and landscaping projects. Acacia, Mahogany and more from Manoj Green Valley Nursery, Aligarh."
        keywords="forest plants, landscaping plants, acacia plants, mahogany plants, afforestation, Aligarh nursery"
        url="/forest-plants"
      />

      {/* Hero */}
      <section className="relative py-20 bg-secondary">
        <div className="container-custom">
          <SectionHeader
            title={PLANT_CATEGORIES.forest.title}
            subtitle={PLANT_CATEGORIES.forest.description}
          />
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {forestPlants.map((plant, index) => (
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
