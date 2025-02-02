'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX } from "react";

interface Props {
  path: string;
  icon: JSX.Element; 
  title: string;
  subTitle: string;
}

export const SidebarMenuItem: React.FC<Props> = ({ path, icon, title, subTitle }) => {

  const pathName = usePathname()
  
  return (
    <Link href={path} className={`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 ${pathName === path ? 'bg-blue-800' : ''} hover:bg-white/5 transition ease-linear duration-150`}> 
      <div>
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{title}</span>
        <span className="text-sm text-white/50 hidden md:block">{subTitle}</span>
      </div>
    </Link>
  )
}
