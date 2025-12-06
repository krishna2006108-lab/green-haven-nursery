import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Truck, Shield, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { PlantCard } from "@/components/shared/PlantCard";
import { BUSINESS_INFO, getWhatsAppLink, PLANT_CATEGORIES } from "@/lib/constants";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const features = [
  {
    icon: Leaf,
    title: "Premium Quality",
    description: "Healthy, disease-free plants grown with care",
  },
  {
    icon: Truck,
    title: "Pan India Delivery",
    description: "Safe shipping across all states",
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "100% satisfaction or replacement",
  },
  {
    icon: Phone,
    title: "Expert Support",
    description: "Free guidance on plant care",
  },
];

const featuredProducts = [
  { name: "Guava Plant", image: "/plants/fruit/guava-plants.jpg", category: "Fruit" },
  { name: "Mango Plant", image: "/plants/fruit/mango-plants.jpg", category: "Fruit" },
  { name: "Pomegranate", image: "/plants/flowering/pomegranate-flowering.jpg", category: "Flowering" },
  { name: "Topiary Trees", image: "/plants/outdoor/topiary-trees.jpg", category: "Outdoor" },
  { name: "Lemon Plant", image: "/plants/fruit/lemon-plants.jpg", category: "Fruit" },
  { name: "Mahogany", image: "/plants/forest/mahogany-plants.jpg", category: "Forest" },
];

const categories = [
  { name: "Outdoor Plants", path: "/outdoor-plants", image: "/plants/outdoor/tall-bundled-plants.jpg" },
  { name: "Fruit Plants", path: "/fruit-plants", image: "/plants/fruit/guava-plants.jpg" },
  { name: "Flowering Plants", path: "/flowering-plants", image: "/plants/flowering/pomegranate-flowering.jpg" },
  { name: "Forest Plants", path: "/forest-plants", image: "/plants/forest/acacia-plants.jpg" },
];

export default function Home() {
  return (
    <Layout>
      <SEO
        title="Premium Nursery Plants in Aligarh"
        description={`${BUSINESS_INFO.name} offers high-quality outdoor plants, fruit plants, flowering plants, and saplings. Direct from farm in ${BUSINESS_INFO.city}. Wholesale and retail available.`}
        url="/"
      />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/plants/hero/nursery-hero.jpg"
            alt="Manoj Green Valley Nursery"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary-foreground backdrop-blur-sm mb-6">
                <Leaf className="h-4 w-4" />
                Direct From Farm
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 leading-tight"
            >
              {BUSINESS_INFO.tagline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-background/80 mb-8 max-w-xl"
            >
              Your trusted nursery in {BUSINESS_INFO.city} for premium outdoor, fruit, and flowering plants. 
              Quality plants for homes, gardens, and landscaping projects.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/gallery">
                <Button size="lg" className="gap-2">
                  View Plants
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white"
                >
                  <WhatsAppIcon />
                  Order on WhatsApp
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container-custom">
          <SectionHeader
            title="Browse By Category"
            subtitle="Explore our wide range of premium nursery plants"
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.path}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={category.path}
                  className="group relative block aspect-[4/5] overflow-hidden rounded-xl"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                    <h3 className="font-display text-lg md:text-xl font-semibold text-background">
                      {category.name}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-sm text-background/80 group-hover:text-background transition-colors">
                      Explore
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-muted">
        <div className="container-custom">
          <SectionHeader
            title="Featured Plants"
            subtitle="Our most popular plants loved by customers"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product, index) => (
              <PlantCard
                key={product.name}
                name={product.name}
                image={product.image}
                category={product.category}
                index={index}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/gallery">
              <Button size="lg" variant="outline" className="gap-2">
                View All Plants
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Garden?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today for bulk orders, landscaping projects, or expert plant care advice.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="gap-2 bg-background text-foreground hover:bg-background/90"
                >
                  <WhatsAppIcon />
                  Chat on WhatsApp
                </Button>
              </a>
              <a href={`tel:${BUSINESS_INFO.phone}`}>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
