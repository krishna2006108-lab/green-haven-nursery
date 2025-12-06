import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { BUSINESS_INFO, getWhatsAppLink } from "@/lib/constants";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: BUSINESS_INFO.phone,
    href: `tel:${BUSINESS_INFO.phone}`,
  },
  {
    icon: Mail,
    title: "Email",
    value: BUSINESS_INFO.email,
    href: `mailto:${BUSINESS_INFO.email}`,
  },
  {
    icon: MapPin,
    title: "Location",
    value: BUSINESS_INFO.address,
    href: "#",
  },
  {
    icon: Clock,
    title: "Hours",
    value: "Mon - Sat: 8AM - 6PM",
    href: "#",
  },
];

export default function Contact() {
  return (
    <Layout>
      <SEO
        title="Contact Us"
        description={`Contact ${BUSINESS_INFO.name} for premium nursery plants. Call, WhatsApp, or visit our nursery in ${BUSINESS_INFO.city}.`}
        keywords="contact nursery, Aligarh nursery contact, buy plants Aligarh"
        url="/contact"
      />

      {/* Hero */}
      <section className="relative py-20 bg-secondary">
        <div className="container-custom">
          <SectionHeader
            title="Contact Us"
            subtitle="Get in touch for inquiries, orders, or expert plant advice"
          />
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                Get In Touch
              </h2>
              <p className="text-muted-foreground mb-8">
                Have questions about our plants? Need bulk orders for your project? 
                We're here to help! Reach out to us through any of the channels below.
              </p>

              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-card-foreground">{item.title}</h3>
                      <p className="text-muted-foreground">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white">
                    <WhatsAppIcon />
                    Chat on WhatsApp
                  </Button>
                </a>
                <a href={`tel:${BUSINESS_INFO.phone}`}>
                  <Button size="lg" variant="outline" className="gap-2">
                    <Phone className="h-4 w-4" />
                    Call Now
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Map/Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-square lg:aspect-auto lg:h-full rounded-2xl overflow-hidden bg-muted">
                <img
                  src="/plants/saplings/nursery-rows.jpg"
                  alt="Our Nursery"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="font-display text-xl font-semibold text-background mb-2">
                    Visit Our Nursery
                  </h3>
                  <p className="text-background/80">
                    {BUSINESS_INFO.address}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
