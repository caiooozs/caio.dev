import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTanstack } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";


const Technologies = () => {
	const stacks = [
	{
		name: "JavaScript",
		icon: <IoLogoJavascript className="w-12 h-12" />,
	},
	{
		name: "TypeScript",
		icon: <SiTypescript className="w-12 h-12" />,
	},
	{
		name: "React",
		icon: <FaReact className="w-12 h-12" />,
	},
	{
		name: "Next.js",
		icon: <RiNextjsFill className="w-12 h-12" />,
	},
	{
		name: "TanStack",
		icon: <SiTanstack className="w-12 h-12" />,
	},
	{
		name: "Supabase",
		icon: <RiSupabaseFill className="w-12 h-12" />,
	},
	{
		name: "TailwindCSS",
		icon: <SiTailwindcss className="w-12 h-12" />,
	},
	{
		name: "ShadcnUI",
		icon: <SiShadcnui className="w-12 h-12"/>,
	},
	]
return(
	<>
	<div className="grid grid-cols-2 gap-4 w-1/2 mx-auto md:grid-cols-3 lg:grid-cols-8">
		{stacks.map((stack) => (
			<div key={stack.name}>
			<div className="p-3 flex flex-col items-center transition-all duration-300 hover:-translate-y-2">
				<div>
					{stack.icon}
				</div>
				<span className="text-xs font-semibold text-center">
				{stack.name}
				</span>
			</div>

			</div>
		))}
	</div>
	</>
)
}
export default Technologies