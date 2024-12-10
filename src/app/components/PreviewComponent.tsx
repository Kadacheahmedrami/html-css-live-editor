'use client';

import { useState } from 'react';
import { MouseEvent } from 'react';

const PreviewComponent = ({ initialHtml = "", initialCss = "" }: { initialHtml: string, initialCss: string }) => {
  const [html, setHtml] = useState(initialHtml);
  const [css, setCss] = useState(initialCss);
  const [rotationStyle, setRotationStyle] = useState({});



  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();
  
    // Calculate the center of the element
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
  
    // Calculate reverse rotation angles (lighter effect)
    const rotateX = (centerY - clientY) / 60; // Y-axis rotation (reversed)
    const rotateY = (clientX - centerX) / 60; // X-axis rotation (reversed)
  
    setRotationStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`, // Slight scale-up on hover
      boxShadow: `0 20px 40px rgba(0, 0, 0, 0.45)`, // Subtle shadow
    });
  };
  
  const handleMouseLeave = () => {
    setRotationStyle({
      transform: 'rotateX(0deg) rotateY(0deg) scale(1)', // Reset transform
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)', // Reset shadow
    });
  };

  const getIframeContent = () => {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
      </body>
      </html>
    `;
  };

  return (
    <>
      {/* 3D Container */}
      <div
        className="perspective w-[100%] mx-auto max-w-4xl scale-110 my-[80px] transition-transform relative"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: "1000px", // Add perspective for 3D effect
        }}
      >
        <div
          className="bg-white rounded-lg p-6 shadow-lg transition-transform"
          style={{
            ...rotationStyle, // Apply rotation, scale, and shadow
            transformStyle: "preserve-3d", // Ensure child elements keep their depth
            zIndex: 10, // Ensure the 3D container is not under interactive elements
          }}
        >
          {/* Editor Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 z-20 relative">
            {/* HTML Editor */}
            <div className="relative z-20">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">HTML</h3>
              <textarea
                placeholder="Write HTML here..."
                value={html}
                onChange={(e) => setHtml(e.target.value)}
                className="w-full h-40 border border-gray-300 rounded-md p-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* CSS Editor */}
            <div className="relative z-20">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">CSS</h3>
              <textarea
                placeholder="Write CSS here..."
                value={css}
                onChange={(e) => setCss(e.target.value)}
                className="w-full h-40 border border-gray-300 rounded-md p-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Output Section */}
          <div className="mt-6 relative z-20">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Output</h3>
            <iframe
              srcDoc={getIframeContent()}
              title="Output"
              className="w-full h-72 border border-gray-300 rounded-md"
              style={{
                pointerEvents: "auto", // Ensure iframe can interact with the user
                zIndex: 20, // Set a high z-index for iframe to be clickable above 3D effects
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PreviewComponent;
