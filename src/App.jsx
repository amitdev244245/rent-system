import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Index from './components/Index'
import Room from './components/Room'
import data from './data'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/index" element={<Index />} />
          <Route path="/r1vivek2292251" element={<Room data={data[0]} />} />
          <Route path="/r2vinod2291415" element={<Room data={data[1]} />} />
          <Route path="/r3rahul1818612" element={<Room data={data[2]} />} />
          <Route path="/r4vidya2294251" element={<Room data={data[3]} />} />
          <Route path="/r5rajender1811" element={<Room data={data[4]} />} />
          <Route path="/r6keshav115198" element={<Room data={data[5]} />} />
          <Route path="/r7" element={<Room data={data[6]} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App