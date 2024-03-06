import Image from 'next/image';

export default function BaseImageLightbox({ slide }: Readonly<{ slide: any }>) {
  return (
    <div className="p-5">
      <Image
        alt=""
        src={slide.src}
        draggable={false}
        width={1000}
        height={1000}
        style={{ objectFit: 'contain', maxWidth: '100%' }}
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>
  );
}
