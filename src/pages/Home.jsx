import backgroundImage from '../assets/bg-wall.jpg';

function HomePage() {
    const backgroundImageStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '50rem', // Fixed height
    };

    const style = 'relative h-72 bg-gray-500 w-full';
    return <>{/* <div className=" z-0" style={backgroundImageStyle} /> */}</>;
}

export default HomePage;
