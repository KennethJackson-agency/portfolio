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
						className={`px-5 py-2 border border-zinc-200 hover:border-violet-100 hover:bg-violet-100 rounded-full capitalize text-sm font-medium transition cursor-pointer ${isSelected
							? 'bg-violet-500 text-white'
							: 'text-zinc-700'
							}`}
					>
						#{tag}
					</button>
				);
			})}
		</div>
	);
}