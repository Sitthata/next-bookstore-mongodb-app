'use client'
import {
    useQuery,
  } from '@tanstack/react-query'
import axios from 'axios';
import { BookType } from '../../types/booktype';
import BookCard from './BookCard';


export default function BookCardList() {
    const {data, isLoading, isError} = useQuery({
        queryKey: ['book'],
        queryFn: async () => {
            const {data} = await axios.get('/api/bookstore')
            console.log(data);
            return data as BookType[]
        }
    });
    if (isLoading) return <div>Loading...</div>
  return (
    <div className='flex flex-col gap-4'>
        {data?.map((book, index) => (
            <BookCard key={index} {...book} />
        ))}
    </div>
  )
}
