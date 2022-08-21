import React from 'react'

export const Pagination = ({newsPerPage, totalNews, setCurrentPage, currentPage}: any) => {
    const pageNumbers: number[] = []

    for (let i = 1; i <= Math.ceil(totalNews / newsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className="flex justify-between items-center m-5">
            <a
                href="!#"
                className="text-2xl font-medium h-[24px] flex items-center"
                onClick={() => currentPage > 1 ? setCurrentPage(currentPage - 1) : setCurrentPage(1)}
            >
                Назад
            </a>
            <ul className="flex justify-between h-[22px]">
                {
                    pageNumbers.map(number => (
                        <li key={number} className="text-lg font-bold italic flex justify-end">
                            <a
                                href="!#"
                                onClick={(e) => setCurrentPage(number)}
                                className="flex mx-1.5 items-center"
                            >
                                {number}
                            </a>
                        </li>
                    ))
                }
            </ul>
            <a
                href="!#"
                className="text-2xl font-medium h-[24px] flex items-center"
                onClick={() => currentPage < pageNumbers.length ? setCurrentPage(currentPage + 1) : setCurrentPage(pageNumbers.length)}
            >
                Далее
            </a>
        </div>
    )
}
