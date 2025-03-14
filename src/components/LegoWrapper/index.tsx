import React from 'react';

interface LegoWrapperProps {
  children?: React.ReactNode;
  pattern?: string; // 'standard' | 'smooth';
  fancyText?: boolean;
  color?: string;
  title?: string;
  text?: string;
  id?: string;
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
  color = 'purple',
  fancyText = false,
  title = '',
  text='',
  id=''
}) => {
  return (
    <>
      <div data-testid={id} className={`single-brick lego-wrapper ${pattern} ${color} ${fancyText ? 'fancy-text' : ''}`}>
        <span className="inner"/>
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