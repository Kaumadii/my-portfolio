# Achievements Images

Place your achievement images in this folder.

## How to Add Images

1. Add your achievement images to this folder (e.g., `cert1.jpg`, `award1.jpg`, etc.)
2. Update the `image` path in `components/Achievements.tsx` to match your image filename
3. Supported formats: JPG, PNG, WebP

## Example

If you have an image named `my-certificate.jpg`, update the achievement object in `components/Achievements.tsx`:

```typescript
{
  title: 'My Certification',
  description: '...',
  date: '2024',
  image: '/achievements/my-certificate.jpg', // Path relative to public folder
}
```

## Image Recommendations

- Recommended size: 800x600px or larger
- Aspect ratio: 4:3 or 16:9 works best
- File size: Keep under 500KB for faster loading
- Format: JPG for photos, PNG for graphics with transparency

