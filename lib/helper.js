const BASE_URL ="https://bookhorizonbackend.vercel.app"
export const getData = async()=>{
    const response = await fetch("https://bookhorizonbackend.vercel.app/home")
    const data = await response.json()
    return data;
}

export const getRecommendation = async(book_name)=>{
    const response = await fetch(`${BASE_URL}/recommend_books/${book_name}`)
    const data = await response.json()
    console.log(data)
    if (data) return data
    return {};
}

export const getISBN = async(book_name)=>{
    const response = await fetch(`${BASE_URL}/getISBN/${book_name}`)
    const data = await response.json()
    console.log(data)
    if (data) return data
    return {};
}
