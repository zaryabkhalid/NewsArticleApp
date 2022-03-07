import React from 'react'

const NewsCard = ({ news }) => {
    return (
        <>
            <div className='grid grid-cols-1 gap-1 m-5 px-5 pt-7 bg-white py-10 px-5 rounded-lg lg:w-9/12 lg:mx-auto'>
                <h2 className='font-bold text-2xl mb-5 lg:text-4xl'>{news.headline.main}</h2>
                <p>{news.abstract}</p>
                <p>{news.lead_paragraph}</p>

                <ul className='my-4'>
                    <li>{news.byline.original}</li>
                    <li><span className='font-bold'>News Desk: </span>{news.news_desk}</li>
                    <li><span className='font-bold'>Section Name: </span>{news.section_name}</li>
                    <li><span className='font-bold'>Word count: </span>{news.word_count}</li>
                    <li><span className='font-bold'>Source: </span>{news.source}</li>
                </ul>
                <a href={news.web_url} target="_blank" rel='alternate' className='underline text-blue-600'>Web Resource</a>
            </div>
        </>
    )
}

export default NewsCard