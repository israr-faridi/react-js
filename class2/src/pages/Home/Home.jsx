import Banner from "../../Components/Banner/Banner"
import Header from "../../Components/Header/Header"
// import { Banner } from "../../utils/constant/bannerText"
import { BannerTest } from "../../utils/constant/bannerText"
const Home = () => {
  console.log(BannerTest)
  return (
    <div>
      <Header />
      {/* <Banner /> */}
      {BannerTest.map((item, index) => {
        return (
          <Banner key={index} data={item} />
        )
      })
      }

    </div>
  )
}

export default Home
