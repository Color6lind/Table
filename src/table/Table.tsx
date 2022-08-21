import React, {useEffect} from "react"
import axios from "axios";

export function Table({value, news, setNews, newsPerPage, currentPage, setLoading}: any) {

    const lastNewsIndex = currentPage * newsPerPage
    const firstNewsIndex = lastNewsIndex - newsPerPage
    const currentNews = news.slice(firstNewsIndex, lastNewsIndex)
    let resultNews

    const filteredNews = news.filter((el: any) => {
        let search = value.toLowerCase()
        return el?.title?.toLowerCase().includes(search) || el?.body?.toLowerCase().includes(search)
    })

    if (value === "") {
        resultNews = currentNews
    } else {
        resultNews = filteredNews
    }

    useEffect(() => {
        const getNews = async () => {
            await axios.get('https://jsonplaceholder.typicode.com/posts')
                .then((response) => {
                    setLoading(true)
                    setNews(response.data)
                    setLoading(false)
                })
        }
        getNews()
    }, [])

    return (
        <table className="table-auto border-collapse border border-slate-[#E3E6EC] w-[100%]">
            <thead>
            <tr className="h-[54px] bg-[#474955] text-[#FFFFFF] text-sm font-semibold">
                <th>ID</th>
                <th>Заголовок</th>
                <th>Описание</th>
            </tr>
            </thead>
            <tbody className="text-[13px] font-medium">
            {
                resultNews.map((el: any) => {
                    return (
                        <tr key={el?.id}>
                            <td className="border border-slate-300 text-center w-[110px]">
                                {el?.id}
                            </td>
                            <td className="border border-slate-300 w-[530px] p-4">
                                {el?.title}
                            </td>
                            <td className="border border-slate-300 p-4">
                                {el?.body.slice(0, 180) + "..."}
                            </td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}
