import { useEffect, useState } from 'react'
import './App.css'
import Cards from './components/Cards'

function App() {
  const [link, setLink] = useState([])

  const [loader, setLoader] = useState(false)

  const apiLink = "https://course-api.com/react-tours-project"

  const getData = async (link) => {
    setLoader(true)
    const req = await fetch(link)
    const data = await req.json()
    setLink(data);
    setLoader(false)
  }
  useEffect(() => {
    getData(apiLink)
  }, [])
  return (
    <div className='app'>
      <div className="container">
        {loader && <span className='loader'><img src='https://i.gifer.com/YlWC.gif'/></span>}
        {link.map((item) => {
          return <div className='cardss'>
            <Cards
              setLink={setLink}
              link={link}
              key={item.id}
              item={item} />
          </div>
        })}
         {link.length==0 && <button onClick={()=>{
              getData(apiLink)
         }} className='refresh'>REFRESH</button>}
      </div>
    </div>
  )
}

export default App
