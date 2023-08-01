export const getBookDetails = async(isbn) => {
    
    try{
        const url = `http://127.0.0.1:5000/getDetialsOnISBN/${isbn}`
        const response = await fetch(url);
        const result = await response.json();
        return result
    } 
    catch (error) {
        throw new Error("Error fetching book details: " + error.message);
    }
    
}

