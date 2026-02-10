import { type GalleryItem } from '@/data/portfolio';

interface GalleryGridProps {
  items: GalleryItem[];
  onItemClick: (item: GalleryItem) => void;
}

export function GalleryGrid({ items, onItemClick }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onItemClick(item)}
          className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.caption}</p>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
