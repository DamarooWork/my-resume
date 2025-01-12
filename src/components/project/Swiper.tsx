import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards, Autoplay } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import '/Projects/React/my-resume/node_modules/swiper/modules/effect-cards.css'
import '/Projects/React/my-resume/node_modules/swiper/modules/autoplay.css'
export default function SwiperProject({ images }: { images: string[] }) {
  return (
    <Swiper
      className="mySwiper"
      spaceBetween={50}
      slidesPerView={1}
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards, Autoplay]}
      autoplay={{
        delay: 3000,
      }}
    >
      {images.map((image, i) => {
        return (
          <SwiperSlide key={i}>
            <img
              className="max-h-[60vh] w-auto rounded-2xl border-4  border-[var(--link-color)] dark:border-[var(--dark-link-color)] "
              src={image}
            />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
