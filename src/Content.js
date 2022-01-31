import React from 'react'
//import { useState } from 'react';
import ItemList from './ItemList';
 const Content = ({items, handleCheck, handleDelete}) => {
    return (
        <main className='main'> 
        {items.length ? (
            <ItemList
                items={items}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
            />
            
         ) : (
            <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
        )}
        </main>
    )
}
// 1:35:33

export default Content
