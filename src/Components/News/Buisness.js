import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../Spinner/Spinner';
import "../News/News.css"

export default function Buisness() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        window.scrollTo(0, 0);
        getTrendingNews();
    }, []);

    function getTrendingNews() {
        const options = {
            method: 'GET',
            url: 'https://bing-news-search1.p.rapidapi.com/news',
            params: {
                count: '100',
                originalImg: 'true',
                category: 'Business',
                cc: 'in',
                // headlineCount: '100',
                textDecorations: 'true',
                safeSearch: 'Off',
                textFormat: 'Raw'
            },
            headers: {
                'X-BingApis-SDK': 'true',
                'X-RapidAPI-Key': '320f7ae65dmsh19b108a0f306364p1cebf3jsn4805c8d23c92',
                'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
            }
        };
        axios
            .request(options)
            .then(function (response) {
                setData(response.data.value);
                setLoading(false);
            })
            .catch(function (error) {
                console.error(error);
                setLoading(false);
            });
    }

    return (
        <>
            <div className='News'>

                {loading === true ? (
                    <Spinner />
                ) : (
                    <div className='container'>
                        <div className='row'>
                            {data.map(function (element) {
                                return (
                                    <div key={element.name} className='col-md-4 d-flex justify-content-center my-3'>
                                        <div className='card' style={{ width: '18rem' }}>
                                            <img
                                               src={element.image?.thumbnail.contentUrl ? element.image?.thumbnail.contentUrl : 'https://media.istockphoto.com/id/1182477852/photo/breaking-news-world-news-with-map-backgorund.jpg?s=612x612&w=0&k=20&c=SQfmzF39HZJ_AqFGosVGKT9iGOdtS7ddhfj0EUl0Tkc='}
                                               className='card-img-top img-fluid'
                                               alt='...'
                                               style={{ width: 287, height: 163 }}
                                            />
                                            <div className='card-body'>
                                                <h5 className='card-title'>{element.name}</h5>
                                                <p className='card-text'>{element.description}</p>
                                                <a href={element.url} target='_blank' rel='noopener noreferrer' className='btn'>
                                                    Read more
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

            </div>

        </>
    );
}
