import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/shared/SEO";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ImageGallery } from "@/components/shared/ImageGallery";
import { ALL_GALLERY_IMAGES } from "@/lib/constants";

export default function Gallery() {
  return (
    <Layout>
      <SEO
        title="Plant Gallery"
        description="Browse our gallery of premium nursery plants. See our collection of outdoor, fruit, flowering, and forest plants at Manoj Green Valley Nursery."
        keywords="plant gallery, nursery photos, Aligarh nursery, plant images"
        url="/gallery"
      />

      {/* Hero */}
      <section className="relative py-20 bg-secondary">
        <div className="container-custom">
          <SectionHeader
            title="Our Plant Gallery"
            subtitle="Explore our collection of premium nursery plants"
          />
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container-custom">
          <ImageGallery images={ALL_GALLERY_IMAGES} />
        </div>
      </section>
    </Layout>
  );
}
