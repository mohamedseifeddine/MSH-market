import React from 'react'
import styles from './Categories.module.scss'

const Categories = () => {
 const categories = [
  {
   id: 1,
   title: 'category 1',
   image:
    'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
   id: 2,
   title: 'category 2',
   image:
    'https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  },
  {
   id: 3,
   title: 'category 3',
   image:
    'https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
   id: 4,
   title: 'category 3',
   image:
    'https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
   id: 5,
   title: 'category 3',
   image:
    'https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
 ]

 return (
  <div className={styles.content}>
   <h4 className={styles.categories_title}>All Categories </h4>
   <div className={styles.content_categories}>
    {categories.map((category) => (
     <div key={category.id} className={styles.content_category}>
      <img
       className={styles.content_category_img}
       src={category.image}
       alt="category"
      />
      <p className={styles.content_category_type}>{category.title}</p>
     </div>
    ))}
   </div>
  </div>
 )
}

export default Categories
