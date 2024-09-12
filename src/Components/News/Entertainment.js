import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../Spinner/Spinner';
import "../News/News.css"

export default function Entertainment() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getTrendingNews();
    }, []);

    async function getTrendingNews() {
        const options = {
            method: 'GET',
            url: 'https://google-news22.p.rapidapi.com/v1/topic-headlines',
            params: {
              country: 'in',
              language: 'hi',
              topic: 'entertainment'
            },
            headers: {
              'x-rapidapi-key': '320f7ae65dmsh19b108a0f306364p1cebf3jsn4805c8d23c92',
              'x-rapidapi-host': 'google-news22.p.rapidapi.com'
            }
          };

        try {
            const response = await axios.request(options);
            console.log(response.data.data);
            setData(response.data.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false); // Ensure loading is set to false regardless of success or failure
        }
    }

    return (
        <div className='News'>
            {loading ? (
                <Spinner />
            ) : (
                <div className='container'>
                    <div className='row'>
                        {data.map((element) => (
                            <div key={element.url} className='col-md-4 d-flex justify-content-center my-3 mycard'>
                                <div className='card' style={{ width: '18rem' }}>
                                    <img
                                        src={element.thumbnail || 'https://media.istockphoto.com/id/1182477852/photo/breaking-news-world-news-with-map-backgorund.jpg?s=612x612&w=0&k=20&c=SQfmzF39HZJ_AqFGosVGKT9iGOdtS7ddhfj0EUl0Tkc='}
                                        className='card-img-top img-fluid'
                                        alt='News Thumbnail'
                                        style={{ width: 287, height: 163 }}
                                    />
                                    <div className='card-body'>
                                        <h5 className='card-title'>{element.title}</h5>
                                        <p className='card-text'>{element.description}</p>
                                        {/* Add author, date, and source */}
                                        <p className='card-text'>
                                            <small className='text-muted'>
                                                {element.authors ? `By ${element.authors}` : 'Unknown Author'} | {new Date(element.date).toLocaleDateString()} | {element.source.name ? element.source.name : 'Unknown Source'}
                                            </small>
                                        </p>
                                        <a href={element.url} target='_blank' rel='noopener noreferrer' className='btn'>
                                            Read more
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
