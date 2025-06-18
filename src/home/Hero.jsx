const Hero = () => {
    return (
        <div className="relative h-[400px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/your-image-path.jpg')" }}>
            <div className="absolute inset-0 bg-gray-500 bg-opacity-60 flex items-center justify-center text-white">
                <div className="text-center px-4 z-20">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold">
                        WeatherTrip<span className="text-lg font-normal align-top">.news</span>
                    </h1>
                    <p className="mt-4 text-sm md:text-base max-w-md mx-auto">
                        Your guide to weather: Accurate forecasts, storm warnings, tips for preparing and more.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hero