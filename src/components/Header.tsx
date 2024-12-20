
import logo from '../assets/university_logo.svg'
import profile from '../assets/channels4_profile.jpg'
export default function Header() {

    return (
        <header className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <a href="/" className="flex items-center space-x-2">
                        <img src={logo}/>
                    </a>
                    <div className="flex items-center space-x-4">
                        <div className=" md:flex items-center space-x-2">
                            <img
                                src={profile}
                                alt="Kanal logotipi"
                                width={70}
                                height={70}
                                className="rounded-full max-sm:hidden max-sm:w-16"
                            />
                            <span className="font-semibold max-sm:hidden block w-40">Nordic International University</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

