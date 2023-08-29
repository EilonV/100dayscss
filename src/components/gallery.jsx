import { Day1 } from "../components/day1"
import { Day2 } from "../components/day2";
import { Day3 } from '../components/day3';
import { Day4 } from '../components/day4';

export const Gallery = () => {
    return <section className="gallery">
        <div className="piece">
            <Day1 />
        </div>
        <div className="piece">
            <Day2 />
        </div>
        <div className="piece">
            <Day3 />
        </div>
        <div className="piece">
            <Day4 />
        </div>
    </section>
}