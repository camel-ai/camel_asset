import React from 'react'
import StackItem from './stackitem'

export interface StackItemData {
  id: string
  name: string
  logo?: boolean
  showText?: boolean
  onClick?: () => void
}

export interface StackSectionProps {
  title: string
  subtitle?: string
  items: StackItemData[]
  variant?: 'neon' | 'green' | 'yellow' | 'purple' | 'pink' | 'orange' | 'grey' | 'blue' | 'red' | 'bone'
  className?: string
  logoPath?: string
}

const backgroundColorVariants = {
  neon: 'bg-neon-300/30',
  green: 'bg-green-300/30',
  yellow: 'bg-yellow-300/30',
  purple: 'bg-purple-300/30',
  pink: 'bg-pink-300/30',
  orange: 'bg-orange-300/30',
  grey: 'bg-black-300/30',
  blue: 'bg-blue-300/30',
  red: 'bg-red-300/30',
  bone: 'bg-bone-300/30'
}

const borderColorVariants = {
  neon: 'border-neon-700',
  green: 'border-green-700',
  yellow: 'border-yellow-700',
  purple: 'border-purple-700',
  pink: 'border-pink-700',
  orange: 'border-orange-700',
  grey: 'border-black-700',
  blue: 'border-blue-700',
  red: 'border-red-700',
  bone: 'border-bone-700'
}

export default function StackSection({ 
  title, 
  subtitle, 
  items, 
  variant = 'neon',
  className = '',
  logoPath = 'logos'
}: StackSectionProps) {
  return (
    <div className={`flex flex-col lg:flex-row py-4 ${className}`}>
      {/* Title Section */}
      <div className={`lg:w-1/5 flex-shrink-0 pt-4 border-t ${borderColorVariants[variant]}`}>
        <h3 className={`font-palatino text-2xl font-bold text-black-900 mb-2`}>
          {title}
        </h3>
        {subtitle && (
          <p className="text-black-700 text-sm font-palatino">
            {subtitle}
          </p>
        )}
      </div>
      
      {/* Items Layout */}
      <div className="lg:w-4/5 flex-1">
                 <div className={`flex flex-wrap gap-4 border border-white h-full rounded-tr-xl backdrop-blur-sm rounded-b-xl p-4 ${backgroundColorVariants[variant]}`}>
          {items.map((item) => (
            <StackItem
              key={item.id}
              variant={variant}
              onClick={item.onClick}
              id={item.id}
              showLogo={item.logo || false}
              showText={item.showText !== false}
              logoPath={logoPath}
            >
              {item.name}
            </StackItem>
          ))}
        </div>
      </div>
    </div>
  )
}

// Export a template function for easy usage
export const createStackSection = (
  title: string, 
  items: string[] | StackItemData[], 
  options?: {
    subtitle?: string
    variant?: StackSectionProps['variant']
    onItemClick?: (itemName: string, index: number) => void
  }
): StackSectionProps => {
  const stackItems: StackItemData[] = items.map((item, index) => {
    if (typeof item === 'string') {
      return {
        id: `${title.toLowerCase().replace(/\s+/g, '-')}-${index}`,
        name: item,
        onClick: options?.onItemClick ? () => options.onItemClick!(item, index) : undefined
      }
    }
    return item
  })

  return {
    title,
    subtitle: options?.subtitle,
    items: stackItems,
    variant: options?.variant || 'neon'
  }
}