import { useState } from 'react'

import './App.css'
import { RecoilRoot } from 'recoil'
import Recoil from './recoil-besic/recoil'

function App() {


  return (
    <>
      <RecoilRoot>
        {/* <Context></Context> */}
        <Recoil />
      </RecoilRoot>
    </>
  )
}

export default App
