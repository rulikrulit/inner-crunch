import React from 'react';

const BuddhaBackground: React.FC = () => {
  const buddhaIcon = '/assets/buddha-icon.png'; // Path to your Buddha icon PNG
  const numBuddhas = 200;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        background: '#f0f0f0', // Light grey background
      }}
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#a7d1ab' }} />
          <stop offset="50%" style={{ stopColor: '#c8e6c9' }} />
          <stop offset="100%" style={{ stopColor: '#a7d1ab' }} />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#gradient)">
      </rect>
      {/* Small Buddha Icons */}
      <g opacity="0.4">
        {/* Generate multiple Buddha Icons */}
        {Array.from({ length: numBuddhas }, (_, index) => {
          const x = Math.random() * 5000; // Random X position
          const y = Math.random() * 1000; // Random Y position
          const rotateDuration = Math.random() * 20 + 10; // Random rotation duration

          return (
            <image
              key={index}
              href={buddhaIcon}
              x={x}
              y={y}
              height="90" // Increased height
              width="90"  // Increased width
              transform={`translate(${x}, ${y})`}
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from={`0 ${x} ${y}`}
                to={`360 ${x} ${y}`}
                dur={`${rotateDuration}s`}
                repeatCount="indefinite"
              />
            </image>
          );
        })}
      </g>
    </svg>
  );
};

export default BuddhaBackground;
