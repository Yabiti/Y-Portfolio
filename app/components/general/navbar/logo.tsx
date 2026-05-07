import Link from "next/link";
import { LuCodeXml } from "react-icons/lu";

export default function Logo() {
    return (
        <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-white/10 rounded-xl grid place-items-center border border-white/10 transition-all group-hover:bg-cyan-500/20">
                <LuCodeXml size={20} className="text-cyan-400" />
            </div>
            <span className="text-white font-bold text-xl tracking-tight">
                Webdev
            </span>
        </Link>
    )
}
