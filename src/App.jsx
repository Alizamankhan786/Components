import Button from "./components/button"
import Footer from "./components/footer"
import Middle from "./components/middle"
import Card from "./components/card"


function App (){
  return (
    <>
    <h1 className="text-center bg-[#38bdf8] text-white text-5xl p-5 ">Hello world!</h1>

    <div>
      <Button title = "Login" />
      <Button title = "START" />
      <Button title = "END" />
    </div>

    <div>
      <Middle/>

    </div>
    
    <div>
      <Footer/>
      <Button title = "FOOTER END"/>
    </div>

    <div>
      <h1 className="text-center">CARD STARTED </h1>
      <br />

      <div className="flex justify-center gap-5 flex-wrap bg-black text-white border-x-white">
      <Card src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" title="shoes" description="BEST SHOES IN THE MARKET"/>
      <br />
      <Card src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" title="shoes" description="BEST SHOES IN THE MARKET"/>
      <br />
      <Card src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" title="shoes" description="BEST SHOES IN THE MARKET"/>
      <br />
      <Card  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" title="shoes" description="BEST SHOES IN THE MARKET"/>
      <br />
      <Card src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" title="shoes" description="BEST SHOES IN THE MARKET"/>
      <br />
      <Card src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" title="shoes" description="BEST SHOES IN THE MARKET"/>
        </div>
    </div>

    </>
  )
}


export default App 