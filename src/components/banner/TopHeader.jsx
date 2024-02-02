import { HiOutlineMailOpen } from 'react-icons/hi';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { ImEarth } from 'react-icons/im';
import { FaPhoneAlt } from 'react-icons/fa';
import WithRoute from '@/hocs/withRoute';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
const TopHeader = WithRoute(({ location }) => {
    return (
        <div
            className={twMerge(
                clsx(
                    'h-[60px] flex justify-between items-center text-white border-b border-main-100 fixed z-20 top-0 w-full px-[100px] py-[26px]',
                    location?.pathname === '/' ? 'bg-transparent' : 'bg-main-700',
                ),
            )}
        >
            <div className="flex items-center gap-2 h-full">
                <span>
                    <HiOutlineMailOpen size={18} />
                </span>
                <div>
                    <span className="text-base">Email us at :</span>
                    <span className="text-gray-200 text-sm ml-1">example@mail.com</span>
                </div>
            </div>
            <div className="flex items-center gap-5">
                <div className="flex items-center gap-5  cursor-pointer">
                    <FaFacebook size={18} />
                    <FaInstagram size={18} />
                    <FaLinkedinIn size={18} />
                    <FaYoutube size={18} />
                    <ImEarth size={18} />
                </div>
                <div className="flex items-center gap-2 border-l border-white pl-5">
                    <span>
                        <FaPhoneAlt size={18} />
                    </span>
                    <span className="text-sm">123-4567 890</span>
                </div>
            </div>
        </div>
    );
});

export default TopHeader;
