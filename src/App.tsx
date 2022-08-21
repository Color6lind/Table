import React, {useState} from 'react'
import {Search} from "./components/Search"
import {Table} from "./table/Table";
import {Pagination} from "./components/Pagination";

type resp = [
    {
        userId?: number,
        id?: number,
        title?: string,
        body?: string
    }?
]

export const App = () => {
    const [loading, setLoading] = useState(false)
    const [value, setValue] = useState('')
    const [news, setNews] = useState<resp>([])
    const [newsPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)

    if (loading) {
        return (
            <h1 className="text-2xl font-bold loading">Loading...</h1>
        )
    }

    return (
        <div className="container mx-auto max-w-[1277px] font-['roboto'] font-normal">
            <Search
                value={value}
                setValue={setValue}
            />
            <Table
                setLoading={setLoading}
                value={value}
                news={news}
                setNews={setNews}
                newsPerPage={newsPerPage}
                currentPage={currentPage}
            />
            <Pagination
                newsPerPage={newsPerPage}
                totalNews={news.length}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </div>
    )
}
