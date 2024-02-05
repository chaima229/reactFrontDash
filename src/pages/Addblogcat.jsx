import React from 'react'
import Custominput from '../components/Custominput'

export default function Addblogcat() {
  return (
      <div>
          <h3 className='mb-4 title'>Add Blog Category</h3>
          <div>
              <form action="">
                  <Custominput type="text" label="Enter Blog category" />
                  <button className='btn btn-success border-0 rounded-3 my-5' type='sumbit'>Add Blog Category</button>
              </form>
          </div>
    </div>
  )
}
