import { Outlet } from "react-router-dom"

const Home = () => {
  return (
    <section className="flex flex-col gap-3 w-full h-full">
      <div className="bg-white h-14 rounded-md p-3">
        <h2>Home pages</h2>
        <div>
          
        </div>
      </div>
      <div className="inline-block w-full h-full">
        <Outlet />
      </div>
    </section>
  )
}

export default Home