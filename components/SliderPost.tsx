import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

type blogProps = {
  title: string
  category: string | []
  publishedAt: string
  eyecatch: string
  body: string
  id: string
}

export const SliderPost = (props: blogProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="mx-auto flex max-w-6xl overflow-hidden pt-14 lg:pt-20">
      <Slider {...settings}>
        <div className="">
          <img src={props?.eyecatch?.url} alt="" />
        </div>
      </Slider>
    </div>
  )
}
