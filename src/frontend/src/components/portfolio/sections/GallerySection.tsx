import { useState } from 'react';
import { SectionHeader } from '../SectionHeader';
import { GalleryGrid } from '../GalleryGrid';
import { GalleryLightbox } from '../GalleryLightbox';
import { galleryItems, type GalleryItem } from '@/data/portfolio';

export function GallerySection() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <SectionHeader
          eyebrow="Portfolio"
          title="Visual Showcase"
          subtitle="A collection of photography, videography, and design work showcasing my creative capabilities."
        />

        <GalleryGrid items={galleryItems} onItemClick={setSelectedItem} />

        <GalleryLightbox
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      </div>
    </section>
  );
}
