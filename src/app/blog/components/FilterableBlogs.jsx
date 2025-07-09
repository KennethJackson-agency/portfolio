'use client';

import { useState } from "react";
import Tags from "./Tags";
import Blogs from "./Blogs";
import EmptyState from "./EmptyState";

/* Assets */
import SearchIcon from '../../../assets/icon/whiteSearch.svg'
import Image from "next/image";
import Header from "./Header";

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
		<div className="space-y-5">
			<div className="space-y-5">
				{/* Search input (title only) */}
				<div className="flex flex-col lg:flex-row items-center justify-between gap-5 w-full px-5 md:px-20">
					<Header />
					<div className="flex justify-between items-center gap-2 bg-zinc-100 focus-within:bg-white hover:bg-white border-2 border-transparent focus-within:border-zinc-100 hover:border-zinc-100 pl-6 pr-4 py-1.5 w-full lg:w-1/3 max-w-3xl h-full rounded-full duration-300">
						<input
							type="text"
							value={searchText}
							onChange={handleSearchChange}
							placeholder="What are you looking for?"
							className="w-full focus:outline-none text-sm"
						/>
						<span className="bg-black p-2 rounded-full">
							<Image src={SearchIcon} alt="Search icon" />
						</span>
					</div>
				</div>

				{/* Tag filters */}
				{/* <Tags
					tags={tags}
					selectedTags={selectedTags}
					onToggle={handleTagToggle}
				/> */}
			</div>

			{/* Blog cards */}
			{filtered.length === 0 ? (
				<EmptyState />
			) : (
				<Blogs blogs={filtered} />
			)}
		</div>
	);
}