// lib/skillLogos.tsx
import Image from 'next/image';

export const getSkillLogo = (name: string) => {
  // Using CDN links for technology logos
  const logoUrls: { [key: string]: string } = {
    'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    'Solidity': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg',
    'Shopify': 'https://cdn.worldvectorlogo.com/logos/shopify.svg'
  };

  const url = logoUrls[name];
  
  if (!url) return null;

  return (
    <Image 
      src={url} 
      alt={`${name} logo`} 
      className="w-12 h-12 object-contain"
      width={10} height={10}
    />
  );
};

// Alternative: If you want to use local images from your public folder
// Just download the logos and place them in public/logos/
// Then use:
// 'HTML': '/logos/html.svg',
// etc.