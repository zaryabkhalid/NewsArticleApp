import React from 'react'
import NewsCard from './NewsCard'

const Articles = ({ article }) => {
    return (
        <>
            {
                article.map((newsBlog) => {
                    return (
                        <NewsCard key={newsBlog._id}
                            news={newsBlog} />

                    )
                })
            }
        </>
    )
}

export default Articles