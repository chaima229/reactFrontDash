import React from 'react'
import Custominput from '../components/Custominput'

export default function Addcolor() {
  return (
      <div>
     
          <h3 className='mb-4 title'>Add Color</h3>
          <div>
              <form action="">
                  <Custominput type="color" label="Enter Color" />
                  <button className='btn btn-success border-0 rounded-3 my-5' type='sumbit'>Add Color</button>
              </form>
          </div>

    </div>
  )
}
