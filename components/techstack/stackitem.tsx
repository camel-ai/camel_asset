import React from 'react'
import Image from 'next/image'

interface StackItemProps {
  children: React.ReactNode
  variant?: 'neon' | 'green' | 'yellow' | 'purple' | 'pink' | 'orange' | 'grey' | 'blue' | 'red' | 'bone'
  onClick?: () => void
  id?: string
  showLogo?: boolean
  showText?: boolean
  title?: string
}

const colorVariants = {
  neon: 'bg-neon-300/30 hover:bg-neon-300/80',
  green: 'bg-green-300/30 hover:bg-green-300/80', 
  yellow: 'bg-yellow-300/30 hover:bg-yellow-300/80',
  purple: 'bg-purple-300/30 hover:bg-purple-300/80',
  pink: 'bg-pink-300/30 hover:bg-pink-300/80',
  orange: 'bg-orange-300/30 hover:bg-orange-300/80',
  grey: 'bg-black-300/30 hover:bg-black-300/80',
  blue: 'bg-blue-300/30 hover:bg-blue-300/80',
  red: 'bg-red-300/30 hover:bg-red-300/80',
  bone: 'bg-bone-300/30 hover:bg-bone-300/80'
}

export default function StackItem({ 
  children, 
  variant = 'neon', 
  onClick,
  id,
  title,
  showLogo = false,
  showText = true
}: StackItemProps) {
  // Construct the full logo path using the title as subdirectory
  const titleLower = title ? title.toLowerCase().replace(/\s+/g, '-') : '';
  const fullLogoPath = showLogo && id && titleLower ? `https://camel-ai.github.io/camel_asset/logos/${titleLower}/${id}.svg` : null;
  
  // Special styling for logo-only items
  const isLogoOnly = showLogo && !showText;
  const buttonClasses = `
    ${isLogoOnly ? 'p-1' : 'px-4 py-1'}
    font-palatino text-base font-bold
    transition-all duration-200 ease-in-out
    rounded-sm
    cursor-pointer
    flex items-center gap-2
    ${colorVariants[variant]}
    hover:border-transparent
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-current
  `;

  return (
    <button
      onClick={onClick}
      className={buttonClasses}
    >
      {fullLogoPath && (
        <Image
          src={fullLogoPath}
          alt={`${children} logo`}
          width={16}
          height={16}
          className={isLogoOnly ? "h-6 w-auto" : "h-4 w-auto"}
          onError={() => {
            // Hide image if it fails to load
            const img = document.querySelector(`img[src="${fullLogoPath}"]`) as HTMLImageElement;
            if (img) {
              img.style.display = 'none';
            }
          }}
        />
      )}
      {showText && children}
    </button>
  )
}