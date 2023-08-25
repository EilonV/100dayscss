import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { Day1 } from "../components/day1"
import { Day2 } from "../components/day2";
import { Day3 } from '../components/day3';

export const Home = () => {
    return <section className="home">
        <Swiper
            pagination={{
                type: 'fraction',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide><Day1 /></SwiperSlide>
            <SwiperSlide><Day2 /></SwiperSlide>
            <SwiperSlide><Day3 /></SwiperSlide>
        </Swiper>
    </section>
}