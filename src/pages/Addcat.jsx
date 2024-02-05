import React from 'react'
import Custominput from '../components/Custominput';

export default function Addcat() {
  return (
      <div>
          <h3 className='mb-4 title'>Add Category</h3>
          <div>
              <form action="">
                  <Custominput type="text" label="Enter category" />
                  <button className='btn btn-success border-0 rounded-3 my-5' type='sumbit'>Add Category</button>
              </form>
          </div>
    </div>
  )
}
