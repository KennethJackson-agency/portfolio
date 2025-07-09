'use client';

export default function Tags({ tags = [], selectedTags = [], onToggle }) {
	if (!tags.length) return null;

	return (
		<div className="flex flex-wrap justify-center gap-3">
			{tags.map(tag => {
				const isSelected = selectedTags.includes(tag);
				return (
					<button
						key={tag}
						onClick={() => onToggle(tag)}
						className={`px-5 py-2  hover:bg-black hover:text-white rounded-full capitalize text-sm font-medium transition cursor-pointer ${isSelected
							? 'bg-black text-white'
							: 'bg-zinc-100 text-black'
							}`}
					>
						{tag}
					</button>
				);
			})}
		</div>
	);
}