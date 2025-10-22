{/* External Library */ }
import ReactMarkdown from 'react-markdown';

function BlogContent({description, content, referenceList}) {
  return (
	  <div className="flex flex-col-reverse md:flex-row-reverse gap-10 w-full px-5 sm:px-10 max-w-[65rem]">
		  <div className='bg-zinc-50 rounded-2xl p-5 w-full md:w-1/4 h-max'>
			  {referenceList.length > 0 && (
				  <aside className="flex flex-col gap-2">
					  <p className="font-semibold text-2xl sm:text-[1.2rem]">Reference</p>
					  <div className="flex flex-col gap-2">
						  {referenceList.map(({ fields: { referenceUrl, title } }, i) => (
							  <a key={i} href={referenceUrl} target="_blank" rel="noopener noreferrer" className='text-sm'>
								  {title}
							  </a>
						  ))}
					  </div>
				  </aside>
			  )}
		  </div>
		  <div className="markdown w-full md:w-3/4 text-zinc-800">
			  <div className="flex flex-col md:flex-row gap-14 w-full">
				  <p className="font-medium">{description}</p>
			  </div>
			  <ReactMarkdown>{content}</ReactMarkdown>
		  </div>
	  </div>
  )
}

export default BlogContent