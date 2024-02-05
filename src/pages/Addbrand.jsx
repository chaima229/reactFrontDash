import React from 'react'
import Custominput from '../components/Custominput'

export default function Addbrand() {
  return (
      <div>
          <h3 className='mb-4 title'>Add Brand</h3>
          <div>
              <form action="">
                  <Custominput type="text" label="Enter Brand" />
                  <button className='btn btn-success border-0 rounded-3 my-5' type='sumbit'>Add Brand</button>
              </form>
          </div>
    </div>
  )
}
