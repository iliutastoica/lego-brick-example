import React from 'react';

interface LegoWrapperProps {
  children?: React.ReactNode;
  pattern?: 'standard' | 'smooth' | 'grid';
  fancyText?: boolean;
  color?: string;
  title?: string;
  text?: string;
  id?: string;
  studCount?: number;
  studShape?: 'round' | 'square' | 'hexagon';
  studDimensions?: {
    width?: number;
    height?: number;
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BRICK_COLORS = {
  red: '#dc143c',
  blue: '#335ede',
  green: '#3bb170',
  yellow: '#f0cb00',
  orange: '#ee8300',
  purple: '#7f5ecb',
  black: '#05131D',
};


const LegoWrapper: React.FC<LegoWrapperProps> = ({
  children,
  pattern = 'standard',
  color = 'blue',
  fancyText = false,
  title = '',
  text = '',
  id = '',
  studCount = 3,
  studShape = 'square',
  studDimensions = { width: 20, height: 15 }
}) => {
  const renderStuds = () => {
    const studs = [];
    const validStudCount = Math.min(Math.max(2, studCount), 6); // minimum of 2 and maximum of 6
    
    for (let i = 0; i < validStudCount; i++) {
      let leftPosition = 15;
      const baseStudWidth = validStudCount > 3 ? 12 : (studDimensions.width || 20);
      const baseStudHeight = validStudCount > 4 ? 10 : (studDimensions.height || 15);
      
      if (validStudCount === 2) { // edge case for 2 studs
        leftPosition = i === 0 ? 15 : 65;
      } else {
        const edgePadding = validStudCount === 6 ? 5 : 10; // edge case for 6 studs - reduced padding
        const totalStudsWidth = validStudCount * baseStudWidth;
        const availableSpace = 100 - (2 * edgePadding);
        
        // How to calculate position based on even distribution
        const startPosition = edgePadding;
        let increment = (availableSpace - totalStudsWidth) / (validStudCount - 1);
        if (validStudCount === 6) {
          increment *= 1.1; // edge case for 6 studs - Increase spacing between studs
        }
        leftPosition = startPosition + (i * (baseStudWidth + increment));
        
        // Edge case for 4 studs case
        if (validStudCount === 4) {
          leftPosition -= 4;
        }
      }

      studs.push(
        <span
          key={`stud-${i}`}
          className={`stud ${studShape}`}
          style={{
            left: `${leftPosition}%`,
            width: `${validStudCount > 4 ? 12 : studDimensions.width}%`,
            height: `${baseStudHeight}%`
          }}
        />
      );
    }
    return studs;
  };

  return (
    <>
      <div 
        data-testid={id} 
        className={`single-brick lego-wrapper ${pattern} ${color} ${fancyText ? 'fancy-text' : ''} ${studShape}-studs`}
      >
        {renderStuds()}
        <div className="lego-content">
          {!!title && <h2>{title}</h2>}
          <div className="text-content">
            <>
            {text || children}
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default LegoWrapper;