import { type GalleryItem } from '@/data/portfolio';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface GalleryLightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export function GalleryLightbox({ item, onClose }: GalleryLightboxProps) {
  if (!item) return null;

  return (
    <Dialog open={!!item} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>{item.title}</DialogTitle>
          <DialogDescription>{item.caption}</DialogDescription>
        </DialogHeader>
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
