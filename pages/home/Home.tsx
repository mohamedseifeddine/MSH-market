import React from 'react'
import Navbar from 'components/Navbar/Navbar'
import Carousel from 'components/Carousel'
import styles from './Home.module.scss'

const images = [
    {
        id: 1,
        image:
            'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    },
    {
        id: 2,
        image:
            'https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    {
        id: 3,
        image:
            'https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    },
    {
        id: 4,
        image:
            'https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    },
    {
        id: 5,
        image:
            'https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    },
]

function Home() {
    return (
        <>
            <Navbar />
            <Carousel show={2}>
                {images.map((el) => (
                    <div key={el.id} className={styles.home_carousel_slide}>
                        <img
                            className={styles.home_carousel_slide_img}
                            src={el.image}
                            alt="placeholder"
                        />
                    </div>
                ))}
            </Carousel>
        </>
    )
}
export default Home
