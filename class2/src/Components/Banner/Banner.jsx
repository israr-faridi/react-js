
import './Banner.css'

const Banner = ({ data }) => {
    console.log(data)
    const { title, subTitle, buttonText, url, isrotate } = data
    return (
        <div className={`banner ${isrotate && "rotateImage"}`}>
            <div className="banner_data">
                <h1>{title}</h1>
                <p>{subTitle}</p>
                <button>{buttonText}</button>

            </div>
            <div className="banner_img">
                <img src={url} alt="" />
            </div>
        </div>
    )
}

export default Banner
