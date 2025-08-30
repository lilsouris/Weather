interface ClothingIconProps {
  type: string
  size?: 'small' | 'medium' | 'large'
}

export default function ClothingIcon({ type, size = 'medium' }: ClothingIconProps) {
  const getClothingEmoji = (clothingType: string) => {
    const clothingMap: { [key: string]: string } = {
      't-shirt': '👕',
      'light-jacket': '🧥',
      'jacket': '🧥',
      'sweater': '🧶',
      'coat': '🧥',
      'raincoat': '🌂',
      'winter-coat': '🧥',
      'umbrella': '☂️',
      'scarf': '🧣',
      'gloves': '🧤',
      'hat': '🎩',
      'sunglasses': '🕶️'
    }
    
    return clothingMap[clothingType] || '👕'
  }

  const sizeClasses = {
    small: 'text-2xl',
    medium: 'text-4xl',
    large: 'text-6xl'
  }

  return (
    <div className={`${sizeClasses[size]} text-center`} title={`Wear: ${type.replace('-', ' ')}`}>
      {getClothingEmoji(type)}
    </div>
  )
}
