import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import './App.css';
// min 25:44 https://www.youtube.com/watch?v=jx5hdo50a2M

const App = () => {
  return (
      <div>
        <BrowserRouter>
          <div className="flex relative dark:bg-main-dark-bg">
            <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
              <TooltipComponent content="Settings" position="Top">
                <button type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-black">
                  <FiSettings />
                </button>
              </TooltipComponent>
            </div>
          </div>
        </BrowserRouter>
      </div>
  )
}

export default App