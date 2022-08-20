//import windy from './windy.svg';

function Contents() {
    return (
        <div>
          {/* Content */}
            <div class="bg-white dark:bg-black overflow-hidden relative lg:flex lg:items-center">
                <div class="w-full py-12 px-4 sm:px-6 lg:py-10 lg:px-8 z-20">
                    <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                        <span class="block">
                            Welcome to SkyCast
                        </span>
                        <span class="Title block">
                            It&#x27;s Weather today or tomorrow.
                        </span>
                    </h2>
                    <p class="text-xl mt-4 text-gray-400">
                        Your daily dose of weather updates.
                    </p>
                    <div class="lg:mt-0 lg:flex-shrink-0">
                        <div class="mt-12 inline-flex rounded-md shadow">
                            <button type="button" class="button py-4 px-6 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg">
                                Get started
                            </button>
                        </div>
                    </div>
                </div>
                <img src="/weather.gif" class="h-full max-w-1/2 hidden lg:block right-0 top-0" />
            </div>
 
            {/*Cards*/}
            <br></br>
            <br></br>
            <div id="animation-carousel" class="relative" data-carousel="static">
                {/* <!-- Carousel wrapper --> */}
                <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                    {/* <!-- Item 1 --> */}
                    <div class="hidden duration-200 ease-linear" data-carousel-item>
                        <img src="/sunny.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    {/* <!-- Item 2 --> */}
                    <div class="hidden duration-200 ease-linear" data-carousel-item>
                        <img src="/cloudy.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    {/* <!-- Item 3 --> */}
                    <div class="hidden duration-200 ease-linear" data-carousel-item="active">
                        <img src="/rainy.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    {/* <!-- Item 4 --> */}
                    <div class="hidden duration-200 ease-linear" data-carousel-item>
                        <img src="/thunder.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                </div>
                {/* <!-- Slider controls --> */}
                <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                        <span class="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                        <span class="sr-only">Next</span>
                    </span>
                </button>
            </div>
    </div>
    );}

export default Contents;
