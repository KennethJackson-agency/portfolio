// Dalam ContactCard.jsx
import Image from 'next/image';

export default function ContactCard({ title, description, href, label, iconSrc, bgColor, iconBg }) {
	return (
		<div className="flex flex-col gap-5 w-full sm:w-[20rem] p-7 rounded-2xl shadow-[0_1px_5px_rgba(0,0,0,0.1)]">
			<div className="flex-1 flex flex-col gap-2">
				<p className="text-[1.25rem] font-medium">{title}</p>
				<p className='text-zinc-500'>{description}</p>
			</div>
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className="relative inline-block w-[175px] h-[48px] overflow-hidden rounded-full group"
			>
				<div className={`absolute inset-0 ${bgColor} text-white text-sm font-medium flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-full whitespace-nowrap`}>
					{label}
				</div>
				<div className={`absolute inset-0 ${iconBg} flex items-center justify-center transition-transform duration-300 translate-y-full group-hover:translate-y-0`}>
					<Image
						src={`https:${iconSrc}`}
						alt={label}
						width={20}
						height={20}
						className="w-5 h-5"
					/>
				</div>
			</a>
		</div>
	);
}
