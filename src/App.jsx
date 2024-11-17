import React, { useRef } from 'react'; // React and hooks
// import Layout from './layout';
// import Home from './pages/Home';
// import Contact from './pages/Contact';
import styles from './styles.module.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const Page = ({ offset, gradient, onClick }) => (
    <>
        <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
            <div className={styles.slopeBegin} />
        </ParallaxLayer>

        <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
            <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
        </ParallaxLayer>

        <ParallaxLayer
            className={`${styles.text} ${styles.number}`}
            offset={offset}
            speed={0.3}>
            <span>0{offset + 1}</span>
        </ParallaxLayer>
    </>
);

function App() {
    const parallax = useRef(null);

    const scroll = (to) => {
        if (parallax.current) {
            parallax.current.scrollTo(to);
        }
    };
    return (
        <>
            <div style={{ background: '#dfdfdf' }}>
                <Parallax
                    className={styles.container}
                    ref={parallax}
                    pages={3}
                    horizontal>
                    <Page
                        offset={0}
                        gradient="pink"
                        onClick={() => scroll(1)}
                    />
                    <Page
                        offset={1}
                        gradient="teal"
                        onClick={() => scroll(2)}
                    />
                    <Page
                        offset={2}
                        gradient="tomato"
                        onClick={() => scroll(0)}
                    />
                </Parallax>
            </div>
        </>
    );
}

export default App;
