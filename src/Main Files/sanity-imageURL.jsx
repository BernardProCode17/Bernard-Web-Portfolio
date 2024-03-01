
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder({
   projectId: 'k20v4h2a',
   dataset: 'production',
});

export default function getImageUrl(image) {
   return builder.image(image).url();
}