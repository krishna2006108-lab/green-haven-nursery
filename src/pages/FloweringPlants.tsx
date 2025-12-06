import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { PlantCard } from "@/components/shared/PlantCard";
import { PLANT_CATEGORIES } from "@/lib/constants";

const floweringPlants = [
  {
    name: "Pomegranate (Flowering)",
    image: "/plants/flowering/pomegranate-flowering.jpg",
    category: "Flowering",
    description: "Beautiful pomegranate plants with vibrant red flowers",
  },
];

export default function FloweringPlants() {
  return (
    <Layout>
      <SEO
        title="Flowering Plants"
        description="Beautiful flowering plants to add color and life to your garden. Premium varieties from Manoj Green Valley Nursery, Aligarh."
        keywords="flowering plants, garden flowers, pomegranate flowers, Aligarh nursery"
        url="/flowering-plants"
      />

      {/* Hero */}
      <section className="relative py-20 bg-secondary">
        <div className="container-custom">
          <SectionHeader
            title={PLANT_CATEGORIES.flowering.title}
            subtitle={PLANT_CATEGORIES.flowering.description}
          />
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {floweringPlants.map((plant, index) => (
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
