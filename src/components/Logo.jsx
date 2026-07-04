import React, { useState, useEffect } from 'react';

export default function Logo({ isDarkHeader }) {
  const [processedLogoUrl, setProcessedLogoUrl] = useState('');

  useEffect(() => {
    const img = new Image();
    img.src = '/logo.png';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;
      const width = canvas.width;
      const height = canvas.height;

      // 1. Scan the image to find the bounding box of non-white pixels (the actual logo content)
      let minX = width;
      let maxX = 0;
      let minY = height;
      let maxY = 0;
      let foundAny = false;

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const i = (y * width + x) * 4;
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];

          // If the pixel is not white/near-white, it is part of the logo
          if (r < 235 || g < 235 || b < 235) {
            if (x < minX) minX = x;
            if (x > maxX) maxX = x;
            if (y < minY) minY = y;
            if (y > maxY) maxY = y;
            foundAny = true;
          }
        }
      }

      // If no logo pixels were found, use the original image size
      if (!foundAny) {
        minX = 0;
        maxX = width - 1;
        minY = 0;
        maxY = height - 1;
      }

      // Add a tiny padding around the cropped logo (e.g., 6 pixels) to prevent visual clipping
      const padding = 6;
      const cropX = Math.max(0, minX - padding);
      const cropY = Math.max(0, minY - padding);
      const cropWidth = Math.min(width - cropX, (maxX - minX) + 1 + (padding * 2));
      const cropHeight = Math.min(height - cropY, (maxY - minY) + 1 + (padding * 2));

      // Get cropped image data
      const croppedCanvas = document.createElement('canvas');
      croppedCanvas.width = cropWidth;
      croppedCanvas.height = cropHeight;
      const croppedCtx = croppedCanvas.getContext('2d');
      
      // Draw the cropped portion from the original canvas onto the cropped canvas
      croppedCtx.drawImage(
        canvas,
        cropX, cropY, cropWidth, cropHeight, // source region
        0, 0, cropWidth, cropHeight          // destination region
      );

      const croppedImgData = croppedCtx.getImageData(0, 0, cropWidth, cropHeight);
      const d = croppedImgData.data;

      // 2. Perform transparency masking and color substitution on the cropped image data
      for (let i = 0; i < d.length; i += 4) {
        const r = d[i];
        const g = d[i + 1];
        const b = d[i + 2];

        // Mask out white background
        if (r > 235 && g > 235 && b > 235) {
          d[i + 3] = 0; // alpha = 0
        }
        
        // Recolor dark caravan silhouettes (camels and guide)
        else if (r < 100 && g < 100 && b < 100) {
          if (isDarkHeader) {
            // Dark header: Turn camels to sand gold
            d[i] = 197;
            d[i + 1] = 160;
            d[i + 2] = 89;
          } else {
            // Light header: Keep camels charcoal black
            d[i] = 28;
            d[i + 1] = 26;
            d[i + 2] = 23;
          }
        }

        // Keep bold red text ("MOOMAL") red
      }

      croppedCtx.putImageData(croppedImgData, 0, 0);
      setProcessedLogoUrl(croppedCanvas.toDataURL());
    };
  }, [isDarkHeader]);

  return (
    <img 
      src={processedLogoUrl || '/logo.png'} 
      alt="Moomal Tours Logo" 
      className="logo-img"
      style={!processedLogoUrl ? { backgroundColor: 'white', padding: '4px' } : {}}
    />
  );
}
