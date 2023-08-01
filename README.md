
# BookHorizon (Book Recommendation System)

This project is a Book Recommendation System that utilizes machine learning, specifically the k-Nearest Neighbors (k-NN) algorithm, to provide personalized book recommendations to users. The frontend of the application is built using Next.js, while the backend is powered by a Flask API.

## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Example Color | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) #0a192f |
| Example Color | ![#f8f8f8](https://via.placeholder.com/10/f8f8f8?text=+) #f8f8f8 |
| Example Color | ![#00b48a](https://via.placeholder.com/10/00b48a?text=+) #00b48a |
| Example Color | ![#00d1a0](https://via.placeholder.com/10/00b48a?text=+) #00d1a0 |


## Badges


[Popular books](https://drive.google.com/file/d/1rD4lz2wvMhe1GAdD2475epkull8_foi5/view?usp=drive_link)


## API Reference

#### Get all trending books

```http
  GET /home
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `No Api key` | `string` | No Parameter Required Only you have to make get request |

### response
[
{
        "author": "J. K. Rowling",
        "book_name": "Harry Potter and the Prisoner of Azkaban (Book 3)",
        "id": 1,
        "image": "https://images.amazon.com/images/P/0439136350.01MZZZZZZZ.jpg",
        "rating": "5.85",
        "votes": "428"
},
{
        "author": "J. K. Rowling",
        "book_name": "Harry Potter and the Prisoner of Azkaban (Book 3)",
        "id": 1,
        "image": "https://images.amazon.com/images/P/0439136350.01MZZZZZZZ.jpg",
        "rating": "5.85",
        "votes": "428"
},
{
        "author": "J. K. Rowling",
        "book_name": "Harry Potter and the Prisoner of Azkaban (Book 3)",
        "id": 1,
        "image": "https://images.amazon.com/images/P/0439136350.01MZZZZZZZ.jpg",
        "rating": "5.85",
        "votes": "428"
}
]




#### Get books detail on ISBN

```http
  GET /getISBN/${NameOfBook}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `NameOfBook`      | `string` | **Required**. Name Of Book item to fetch |

### response
 ISBN:"439136350"


#### Get recommendation of books on ISBN

```http
  GET /recommend_books/${ISBN}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `ISBN`      | `string` | **Required**. ISBN of item to fetch |

### response
[
[
"Angels &amp; Demons",
"Dan Brown",
"https://images.amazon.com/images/P/0671027360.01.MZZZZZZZ.jpg",
"0671027360"
],
[
"Touching Evil",
"Kay Hooper",
"https://images.amazon.com/images/P/0553583441.01.MZZZZZZZ.jpg",
"0553583441"
],
[
"Saving Faith",
"David Baldacci",
"https://images.amazon.com/images/P/0446608890.01.MZZZZZZZ.jpg",
"0446608890"
],
[
"The Sweet Potato Queens' Book of Love",
"JILL CONNER BROWNE",
"https://images.amazon.com/images/P/0609804138.01.MZZZZZZZ.jpg",
"0609804138"
],
[
"Middlesex: A Novel",
"Jeffrey Eugenides",
"https://images.amazon.com/images/P/0312422156.01.MZZZZZZZ.jpg",
"0312422156"
]
]


## Appendix

I provide detailed information about the APIs.That i built using Flask to power the Book Recommendation System. These APIs handle various tasks such as user book search, personalized recommendations, and user interactions.


## Authors

- [@Nilesh Shinde](https://github.com/Nileshshinde09)


## Demo

Insert gif or link to demo


## License

[MIT](https://choosealicense.com/licenses/mit/)


## 🚀 About Me
I'm a full stack developer...
&
Machine Learing developer.....
## 🛠 Skills Required For This Project
Javascript , JSX , Tailwind CSS , Next js ,
Machine Learning ,Python Flask , Rest api ,sk learn, Pandas , numpy , Jupyter NoteBook


## Feedback

If you have any feedback, please reach out to us at nileshshinde@gmail.com


## Lessons Learned

What did you learn while building this project? What challenges did you face and how did you overcome them?

 - Machine Learning
 - Full Stack Devlopment
 - Rest Api's



## Features

- Book Recommendation Based On Your Intrest
- Responsive
- Multi-Functionality
- Fast response


## Installation

Install my-project with npm

```bash
  cd my-project
```

run my-project with npm --fronted

```bash
  npm run dev
```
    
run my-project-backend with python --backend

```bash
  flask run --debug
```
![Logo](https://www.pngitem.com/pimgs/m/394-3941536_recommendation-system-in-e-commerce-hd-png-download.png)


## Screenshots

![App Screenshot](https://drive.google.com/drive/folders/1dmngiELA3uJkNAr2LERhby7MgdO9VMEI)

