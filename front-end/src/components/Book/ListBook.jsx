import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useCartContext } from '../../context/CartContext'
import BookCard from '../BookCard'

const ListBook = ({books}) => {

    const {addToCart} = useCartContext()

    
    

    return (
        <div className="tab-content">
            <div id="all-genre" data-tab-content className='active'>
                <div className="row">
                    {books.map((book) => {
                        return (
                            <BookCard key={book.id} book={book}></BookCard>
                        )
                    })}
                </div>

            </div>
        </div>

    )
}

export default ListBook