import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { PlantCard } from "@/components/shared/PlantCard";
import { PLANT_CATEGORIES } from "@/lib/constants";

const outdoorPlants = [
  {
    name: "Tall Bundled Plants",
    image: "/plants/outdoor/tall-bundled-plants.jpg",
    category: "Outdoor",
    description: "Premium tall plants perfect for garden borders and landscaping",
  },
  {
    name: "Topiary Trees",
    image: "/plants/outdoor/topiary-trees.jpg",
    category: "Outdoor",
    description: "Elegantly shaped trees for ornamental garden design",
  },
  {
    name: "Large Saplings",
    image: "/plants/saplings/nursery-rows.jpg",
    category: "Outdoor",
    description: "Healthy saplings ready for transplanting",
  },
];

export default function OutdoorPlants() {
  return (
    <Layout>
      <SEO
        title="Outdoor & Tall Plants"
        description="Premium outdoor and tall plants for gardens and landscaping. Buy healthy outdoor plants direct from Manoj Green Valley Nursery in Aligarh."
        keywords="outdoor plants, tall plants, garden plants, landscaping plants, Aligarh nursery"
        url="/outdoor-plants"
      />

      {/* Hero */}
      <section className="relative py-20 bg-secondary">
        <div className="container-custom">
          <SectionHeader
            title={PLANT_CATEGORIES.outdoor.title}
            subtitle={PLANT_CATEGORIES.outdoor.description}
          />
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {outdoorPlants.map((plant, index) => (
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
