import { Outlet } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Eclipse } from 'lucide-react';

const customScroll = (element) => {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const NavigationBar = ({ onClick }) => {
    return (
        <>
            <nav className="h-28 relative flex w-full flex-nowrap items-center justify-between py-2 shadow-dark-mild lg:flex-wrap lg:justify-start lg:py-4 shadow-md z-10">
                <div class="flex w-full flex-wrap items-center justify-between px-3">
                    <button onClick={onClick}>
                        <Eclipse className="float-left" />
                    </button>
                    <div class="!visible mt-2 hidden flex-grow basis-[100%] items-center justify-center lg:mt-0 lg:!flex lg:basis-auto text-3xl">
                        <ul class="list-style-none flex flex-col ps-0 lg:mt-1 lg:flex-row gap-x-28">
                            <li class="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2">
                                <HashLink className="lg:px-2" to="/">
                                    Home
                                </HashLink>
                            </li>
                            <li class="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0">
                                <HashLink
                                    className="p-0 lg:px-2"
                                    to="/#aboutsection"
                                    scroll={customScroll}>
                                    About
                                </HashLink>
                            </li>
                            <li class="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0">
                                <HashLink className="lg:px-2" to="/contact">
                                    Contact
                                </HashLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Outlet />
        </>
    );
};

export default NavigationBar;
