export const getBookDetails = async(isbn) => {
    
    try{
        const url = `https://bookhorizonbackend.vercel.app/getDetialsOnISBN/${isbn}`
        const response = await fetch(url);
        const result = await response.json();
        return result
    } 
    catch (error) {
        throw new Error("Error fetching book details: " + error.message);
    }
    
}

