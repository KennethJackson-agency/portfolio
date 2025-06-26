'use client';

import { useState } from "react";
import Tags from "./Tags";
import Blogs from "./Blogs";
import EmptyState from "./EmptyState";

/* Assets */
import SearchIcon from '../../../assets/icon/whiteSearch.svg'
import Image from "next/image";

export default function FilterableBlogs({ blogs = [] }) {
	const [selectedTags, setSelectedTags] = useState([]);
	const [searchText, setSearchText] = useState('');

	// derive unique tags from all blog entries
	const tags = Array.from(
		new Set(blogs.flatMap(b => b.fields.tag || []))
	);

	// toggle tag selection
	const handleTagToggle = tag => {
		setSelectedTags(prev =>
			prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
		);
	};

	// update search query
	const handleSearchChange = e => {
		setSearchText(e.target.value);
	};

	// filter by tags (OR logic)
	const byTag =
		selectedTags.length > 0
			? blogs.filter(b => b.fields.tag.some(t => selectedTags.includes(t)))
			: blogs;

	// filter by title only
	const filtered = byTag.filter(b => {
		if (!searchText.trim()) return true;
		return b.fields.title
			.toLowerCase()
			.includes(searchText.trim().toLowerCase());
	});

	return (
		<div className="space-y-12">
			<div className="space-y-5">
				{/* Search input (title only) */}
				<div className="flex justify-between items-center gap-2 bg-zinc-100 focus-within:bg-white hover:bg-white border-4 border-transparent focus-within:border-violet-200 hover:border-violet-200 pl-6 pr-4 py-2 mx-auto max-w-3xl rounded-full duration-200">
					<input
						type="text"
						value={searchText}
						onChange={handleSearchChange}
						placeholder="What are you looking for?"
						className="w-full focus:outline-none"
					/>
					<span className="bg-purple-500 p-2 rounded-full">
						<Image src={SearchIcon} alt="Search icon" />
					</span>
				</div>

				{/* Tag filters */}
				<Tags
					tags={tags}
					selectedTags={selectedTags}
					onToggle={handleTagToggle}
				/>
			</div>

			{/* Blog cards */}
			{filtered.length === 0 ? (
				<EmptyState/>
			) : (
				<Blogs blogs={filtered} />
			)}
		</div>
	);
}