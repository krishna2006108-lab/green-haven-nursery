import { motion } from "framer-motion";
import { Leaf, Users, Award, MapPin } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { BUSINESS_INFO } from "@/lib/constants";

const values = [
  {
    icon: Leaf,
    title: "Quality First",
    description: "Every plant is carefully nurtured to ensure healthy growth and disease-free stock.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "We provide expert guidance and after-sales support for all your gardening needs.",
  },
  {
    icon: Award,
    title: "Experience",
    description: "Years of expertise in cultivating a wide variety of plants for different climates.",
  },
  {
    icon: MapPin,
    title: "Local Roots",
    description: `Proudly serving ${BUSINESS_INFO.city} and customers across India with premium plants.`,
  },
];

export default function About() {
  return (
    <Layout>
      <SEO
        title="About Us"
        description={`Learn about ${BUSINESS_INFO.name} - your trusted nursery in ${BUSINESS_INFO.city}. Premium quality plants, expert guidance, and years of experience.`}
        keywords="about nursery, Aligarh nursery, Manoj nursery, plant nursery India"
        url="/about"
      />

      {/* Hero */}
      <section className="relative py-20 bg-secondary">
        <div className="container-custom">
          <SectionHeader
            title={`About ${BUSINESS_INFO.name}`}
            subtitle="Your trusted partner for premium nursery plants"
          />
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/plants/hero/nursery-hero.jpg"
                alt="Our Nursery"
                className="rounded-2xl shadow-lg w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-3xl font-semibold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Welcome to <strong className="text-foreground">{BUSINESS_INFO.name}</strong>, 
                  your premier destination for high-quality nursery plants in {BUSINESS_INFO.city}, 
                  Uttar Pradesh.
                </p>
                <p>
                  We specialize in growing and supplying a diverse range of plants including 
                  outdoor plants, fruit trees, flowering varieties, and forest species. Our 
                  nursery is committed to providing healthy, disease-free plants that thrive 
                  in Indian conditions.
                </p>
                <p>
                  Whether you're looking for plants for your home garden, landscaping project, 
                  or commercial plantation, we have the perfect solution. We take pride in our 
                  direct-from-farm approach, ensuring you get the freshest plants at competitive 
                  prices.
                </p>
                <p>
                  Our team of experienced horticulturists is always ready to guide you in 
                  selecting the right plants and caring for them. We believe in building 
                  lasting relationships with our customers through quality products and 
                  exceptional service.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted">
        <div className="container-custom">
          <SectionHeader
            title="Why Choose Us"
            subtitle="What makes us different from the rest"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 text-center hover-lift"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display font-semibold text-card-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
