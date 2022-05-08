export default function Home() {
  console.log("hi bro")
  return (
   <div className="home">
      <button onClick={()=>{
        document.cookie='token = 12345; path=/'
      }}>go to About </button>
   </div>
  )
}
