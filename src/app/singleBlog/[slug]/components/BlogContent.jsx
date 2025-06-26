{/* External Library */ }
import ReactMarkdown from 'react-markdown';

function BlogContent({description, content, referenceList}) {
  return (
	  <div className="flex flex-col gap-5 w-full max-w-[50rem] mx-auto pt-0 sm:pt-10">
		  <p className="font-medium">{description}</p>

		  <div className="flex flex-col md:flex-row gap-14 w-full">
			  <div className="markdown w-full sm:w-4/5 text-zinc-800">
				  <ReactMarkdown>{content}</ReactMarkdown>
			  </div>

			  {referenceList.length > 0 && (
				  <aside className="flex flex-col gap-5 w-full sm:w-1/5">
					  <p className="font-semibold text-2xl sm:text-[1.2rem]">Reference</p>
					  <div className="flex flex-col gap-2">
						  {referenceList.map(({ fields: { referenceUrl, title } }, i) => (
							  <a key={i} href={referenceUrl} target="_blank" rel="noopener noreferrer">
								  {title}
							  </a>
						  ))}
					  </div>
				  </aside>
			  )}
		  </div>
	  </div>
  )
}

export default BlogContent