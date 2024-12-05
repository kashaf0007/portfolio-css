import React from 'react'
import { CiSquareCheck } from "react-icons/ci"
const Skills = () => {
  return (
    <div id='skills'>
      <section className='skills-section'>
        <div className='skills-container'>
          <div className='skills-div'>
            <h2 className='skills-heading-2'>SKILLS</h2>
            <h1 className='skills-heading-1'>My Skills</h1>
            <div className='skills-container-1'>
              {/* skills */}
              <div className='skills-info'>
                <div className='skills-div-2'>
                  <div className='div-1'>
                    <div className='div-2'>
                    <CiSquareCheck />
                    </div>
                    <h2 className='skills-h2'>
                      HTML
                    </h2>
                  </div>
                  <div className='skills-flex'>
                    <div className='skills-end'>

                    </div>
                  </div>
                </div>
              </div>


              <div className='skills-info'>
                <div className='skills-div-2'>
                  <div className='div-1'>
                    <div className='div-2'>
                    <CiSquareCheck />
                    </div>
                    <h2 className='skills-h2'>
                    CSS
                    </h2>
                  </div>
                  <div className='skills-flex'>
                    <div className='skills-end'>

                    </div>
                  </div>
                </div>
              </div>


              <div className='skills-info'>
                <div className='skills-div-2'>
                  <div className='div-1'>
                    <div className='div-2'>
                    <CiSquareCheck />
                    </div>
                    <h2 className='skills-h2'>
                    TYPESCRIPT
                    </h2>
                  </div>
                  <div className='skills-flex'>
                    <div className='skills-end'>

                    </div>
                  </div>
                </div>
              </div>

              <div className='skills-info'>
                <div className='skills-div-2'>
                  <div className='div-1'>
                    <div className='div-2'>
                    <CiSquareCheck />
                    </div>
                    <h2 className='skills-h2'>
                    JAVASCRIPT
                    </h2>
                  </div>
                  <div className='skills-flex'>
                    <div className='skills-end'>

                    </div>
                  </div>
                </div>
              </div>




            </div>
            </div>
            </div>

      </section>
      
    </div>
  )
}

export default Skills
