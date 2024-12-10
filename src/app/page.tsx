'use client';

import PreviewComponent from './components/PreviewComponent';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import localFont from "next/font/local";


const minecrafterAlt = localFont({
  src:'./fonts/Minecrafter.Alt.ttf',
  display: 'swap',
  weight: '300', // Specify weight if needed
  style: 'normal' // Specify style if needed
});

const Home = () => {
  return (
    <div className="min-h-screen w-full flex-col mt-[200px] gap-[300px] flex items-center justify-center relative">
      <NavBar />

      {/* Hover Effect Example */}
      <div className="w-full text-center relative z-10">
        <h1 className={`text-[60px] ${minecrafterAlt.className}  font-semibold mb-4`}>Hover Effect Example</h1>
        <PreviewComponent
          initialHtml="<button>Hover over me</button>"
          initialCss={`
            button {
              padding: 10px 20px;
              font-size: 16px;
              cursor: pointer;
              background-color: #4CAF50;
              color: white;
              border: none;
              border-radius: 5px;
              transition: background-color 0.3s ease;
            }
            button:hover {
              background-color: #45a049;
            }
          `}
        />
        <p className="mt-2 text-gray-600">The <code>:hover</code> pseudo-class changes the buttons background color when you hover over it.</p>
      </div>

          
      {/* Focus Effect Example */}
      <div className="w-full text-center relative z-10">
        <h1 className={`text-[60px] ${minecrafterAlt.className}  font-semibold mb-4`}>Focus Effect Example</h1>
        <PreviewComponent
          initialHtml="<input type='text' placeholder='Focus on me' />"
          initialCss={`
            input {
              padding: 10px;
              font-size: 16px;
              border: 2px solid #ccc;
              border-radius: 5px;
              transition: border-color 0.3s ease;
            }
            input:focus {
              border-color: #4CAF50;
              outline: none;
            }
          `}
        />
        <p className="mt-2 text-gray-600">The <code>:focus</code> pseudo class highlights the input fields border when it is focused on.</p>
      </div>

      {/* Before Content Example */}
      <div className="w-full text-center relative z-10">
        <h1 className={`text-[60px] ${minecrafterAlt.className}  font-semibold mb-4`}>Before Content Example</h1>
        <PreviewComponent
          initialHtml="<p>Welcome to the world of CSS pseudo-elements.</p>"
          initialCss={`
            p {
              font-size: 18px;
              color: #333;
              position: relative;
            }
            p::before {
              content: "📚 ";
              font-size: 24px;
            }
          `}
        />
        <p className="mt-2 text-gray-600">The <code>::before</code> pseudo-element adds content before the paragraph text.</p>
      </div>

      {/* After Content Example */}
      <div className="w-full text-center relative z-10">
        <h1 className="text-[100px

        ] font-semibold mb-4">After Content Example</h1>
        <PreviewComponent
          initialHtml="<p>Learn CSS pseudo-elements.</p>"
          initialCss={`
            p {
              font-size: 18px;
              color: #333;
              position: relative;
            }
            p::after {
              content: " 🔥";
              font-size: 24px;
            }
          `}
        />
        <p className="mt-2 text-gray-600">The <code>::after</code> pseudo-element appends content after the paragraph text.</p>
      </div>

      {/* Active Effect Example */}
      <div className="w-full text-center relative z-10">
        <h1 className={`text-[60px] ${minecrafterAlt.className}  font-semibold mb-4`}>Active Effect Example</h1>
        <PreviewComponent
          initialHtml="<button>Click me</button>"
          initialCss={`
            button {
              padding: 10px 20px;
              font-size: 16px;
              cursor: pointer;
              background-color: #4CAF50;
              color: white;
              border: none;
              border-radius: 5px;
            }
            button:active {
              background-color: #45a049;
              transform: scale(0.95);
            }
          `}
        />
        <p className="mt-2 text-gray-600">The <code>:active</code> pseudo-class activates when the button is being clicked, applying a visual effect (e.g., scale down).</p>
      </div>

      {/* Disabled Effect Example */}
      <div className="w-full text-center relative z-10">
        <h1 className={`text-[60px] ${minecrafterAlt.className}  font-semibold mb-4`}>Disabled Effect Example</h1>
        <PreviewComponent
          initialHtml="<button disabled>Can't click me</button>"
          initialCss={`
            button {
              padding: 10px 20px;
              font-size: 16px;
              cursor: not-allowed;
              background-color: #e0e0e0;
              color: #888;
              border: none;
              border-radius: 5px;
            }
            button:disabled {
              background-color: #f5f5f5;
              color: #ccc;
            }
          `}
        />
        <p className="mt-2 text-gray-600">The <code>:disabled</code> pseudo-class changes the buttons appearance when it is disabled.</p>
      </div>

      {/* First Child Example */}
      <div className="w-full text-center relative z-10">
        <h1 className={`text-[60px] ${minecrafterAlt.className}  font-semibold mb-4`}>First Child Example</h1>
        <PreviewComponent
          initialHtml="<div><p>First paragraph</p><p>Second paragraph</p></div>"
          initialCss={`
            p:first-child {
              font-weight: bold;
            }
          `}
        />
        <p className="mt-2 text-gray-600">The <code>:first-child</code> pseudo-class applies styles to the first child element of its parent (e.g., the first paragraph).</p>
      </div>

      {/* Last Child Example */}
      <div className="w-full text-center relative z-10">
        <h1 className={`text-[60px] ${minecrafterAlt.className}  font-semibold mb-4`}>Last Child Example</h1>
        <PreviewComponent
          initialHtml="<div><p>First paragraph</p><p>Second paragraph</p></div>"
          initialCss={`
            p:last-child {
              color: red;
            }
          `}
        />
        <p className="mt-2 text-gray-600">The <code>:last-child</code> pseudo-class applies styles to the last child element of its parent (e.g., the second paragraph).</p>
      </div>

      {/* Nth Child Example */}
      <div className="w-full text-center relative z-10">
        <h1 className={`text-[60px] ${minecrafterAlt.className}  font-semibold mb-4`}>Nth Child Example</h1>
        <PreviewComponent
          initialHtml="<div><p>First paragraph</p><p>Second paragraph</p><p>Third paragraph</p></div>"
          initialCss={`
            p:nth-child(2) {
              color: blue;
            }
          `}
        />
        <p className="mt-2 text-gray-600">The <code>:nth-child()</code> pseudo-class applies styles to a specific child element based on its position (e.g., the second paragraph).</p>
      </div>

      {/* Not Example */}
      <div className="w-full text-center relative z-10">
        <h1 className={`text-[60px] ${minecrafterAlt.className}  font-semibold mb-4`}>Not Example</h1>
        <PreviewComponent
          initialHtml="<div><p>First paragraph</p><p>Second paragraph</p><p>Third paragraph</p></div>"
          initialCss={`
            p:not(:first-child) {
              font-style: italic;
              color:red;
            }
          `}
        />
        <p className="mt-2 text-gray-600">The <code>:not()</code> pseudo-class applies styles to elements that do not match the specified selector (e.g., all paragraphs except the first).</p>
      </div>
 {/* Transform Example */}
 <div className="w-full text-center relative z-10">
        <h2 className="text-2xl font-semibold mb-4">Transform Example</h2>
        <PreviewComponent
          initialHtml="<div class='box'>Hover Me</div>"
          initialCss={`
            .box {
              width: 150px;
              height: 150px;
              background-color: #4CAF50;
              margin: 50px auto;
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              font-size: 18px;
              border-radius: 10px;
              transition: transform 0.3s ease;
            }

            .box:hover {
              transform: rotate(45deg) scale(1.2) translateX(20px);
            }
          `}
        />
        <p className="mt-2 text-gray-600">
          This example uses the <code>transform</code> property to rotate, scale, and translate an element when hovered. The smooth transition effect is achieved using the <code>transition</code> property.
        </p>
      </div>

       {/* Example 7: Transition Example */}
       <div className="w-full text-center relative z-10">
        <h2 className={`text-[60px] ${minecrafterAlt.className}  font-semibold mb-4`}>Transition Effect Example</h2>
        <PreviewComponent
          initialHtml="<div class='transition-box'>Hover to change size</div>"
          initialCss={`
            .transition-box {
              width: 150px;
              height: 150px;
              background-color: #4CAF50;
              transition: all 0.3s ease;
            }
            .transition-box:hover {
              width: 200px;
              height: 200px;
            }
          `}
        />
        <p className="mt-2 text-gray-600">The <code>transition</code> property allows you to animate changes in properties such as width and height.</p>
      </div>

      {/* Example 8: Scale Effect Example */}
      <div className="w-full text-center relative z-10">
        <h2 className={`text-[60px] ${minecrafterAlt.className}  font-semibold mb-4`}>Scale Effect Example</h2>
        <PreviewComponent
          initialHtml="<div class='scale-box'>Hover me</div>"
          initialCss={`
            .scale-box {
              width: 100px;
              height: 100px;
              background-color: #FF5733;
              transition: transform 0.3s ease;
            }
            .scale-box:hover {
              transform: scale(1.2);
            }
          `}
        />
        <p className="mt-2 text-gray-600">The <code>transform: scale()</code> property scales the element when hovered.</p>
      </div>

      {/* Example 9: Rotate Effect Example */}
      <div className="w-full text-center relative z-10">
        <h2 className={`text-[60px] ${minecrafterAlt.className}  font-semibold mb-4`}>Rotate Effect Example</h2>
        <PreviewComponent
          initialHtml="<div class='rotate-box'>Hover me</div>"
          initialCss={`
            .rotate-box {
              width: 100px;
              height: 100px;
              background-color: #33A1FF;
              transition: transform 0.5s ease;
            }
            .rotate-box:hover {
              transform: rotate(45deg);
            }
          `}
        />
        <p className="mt-2 text-gray-600">The <code>transform: rotate()</code> property rotates the element on hover.</p>
      </div>

      {/* Example 10: Z-Index Effect Example */}
      <div className="w-full text-center relative z-10">
        <h2 className={`text-[60px] ${minecrafterAlt.className}  font-semibold mb-4`}>Z-Index Example</h2>
        <PreviewComponent
          initialHtml="<div class='box one'>Box 1</div><div class='box two'>Box 2</div>"
          initialCss={`
            .box {
              width: 100px;
              height: 100px;
              position: absolute;
              top: 50px;
              left: 50px;
              background-color: #FFC107;
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              border-radius: 5px;
            }
            .one {
              z-index: 1;
              background-color: #FF5722;
            }
            .two {
              z-index: 0;
              background-color: #4CAF50;
            }
          `}
        />
        <p className="mt-2 text-gray-600">The <code>z-index</code> property controls the stacking order of elements. Higher values are displayed on top.</p>
      </div>

      {/* Example 11: Animation Example */}
      <div className="w-full text-center relative z-10">
        <h2 className={`text-[60px] ${minecrafterAlt.className}  font-semibold mb-4`}>Animation Effect Example</h2>
        <PreviewComponent
          initialHtml="<div class='animated-box'>Animate me</div>"
          initialCss={`
            .animated-box {
              width: 100px;
              height: 100px;
              background-color: #9C27B0;
              animation: bounce 2s infinite;
            }
            @keyframes bounce {
              0%, 100% {
                transform: translateY(0);
              }
              50% {
                transform: translateY(-30px);
              }
            }
          `}
        />
        <p className="mt-2 text-gray-600">The <code>animation</code> property allows elements to follow a set of keyframes for smooth movement.</p>
      </div>


      <Footer />
    </div>
  );
};

export default Home;
