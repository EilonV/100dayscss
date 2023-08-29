import { About } from '../components/about';
import { Gallery } from '../components/gallery';

export const Home = () => {
    return <section className="home main-layout">
        <About />
        <Gallery />
    </section>
}