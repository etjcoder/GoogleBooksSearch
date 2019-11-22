import React, { Component, Link } from "react";
import { List, ListItem } from "../components/List";
import { Form, FormBtn, Input } from "../components/Form";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";

class Search extends Component {
    state = {
        title: "",
        books: []
    };

    componentDidMount = () => {
        API.randomBooks()
            .then(res =>
                this.setState({
                    books: res.data.items
                })
                // console.log(res.data.items)
            )
            .catch(function (err) {
                console.log(err)
            })
    }

    //   loadBooks = () => {
    //     API.getBooks()
    //       .then(res =>
    //         this.setState({ books: res.data, title: "", author: "", synopsis: "" })
    //       )
    //       .catch(err => console.log(err));
    //   };

    //   deleteBook = id => {
    //     API.deleteBook(id)
    //       .then(res => this.loadBooks())
    //       .catch(err => console.log(err));
    //   };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("Searching for book: " + this.state.title)
        // if (this.state.title && this.state.author) {
        //   API.saveBook({
        //     title: this.state.title,
        //     author: this.state.author,
        //     synopsis: this.state.synopsis
        //   })
        //     .then(res => this.loadBooks())
        //     .catch(err => console.log(err));
        // }
    };

    saveBooks = (book) => {
        var title = book.volumeInfo.title
        var summary = book.searchInfo.textSnippet
        var link = book.volumeInfo.infoLink


        API.saveBook({
            title: title,
            synopsis: summary,
            link: link
        }).then(res => {
            console.log("Book successfully saved!")
        }).catch(function (err) {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <h3>Search Books:</h3>
                <form>
                    <Input
                        value={this.state.title}
                        onChange={this.handleInputChange}
                        name="title"
                        placeholder="Title (required)"
                    />
                    <FormBtn
                        disabled={!(this.state.author && this.state.title)}
                        onClick={this.handleFormSubmit}
                    >
                        Search for Book
              </FormBtn>
                </form>
                <div className="card">
                    <div className="card-title">
                        <h1>Search Results:</h1>
                        <List>
                            {this.state.books.map(book => (
                                <ListItem key={book.id}>
                                    {/* <Link to={"/books/" + book.id}> */}
                                    <strong>
                                        {book.volumeInfo.title}
                                        <hr />
                                        {book.volumeInfo.infoLink}
                                    </strong>
                                    {/* </Link> */}
                                    <button className="btn btn-success" onClick={() => this.saveBooks(book)}>Save</button>
                                </ListItem>
                            ))}
                        </List>

                    </div>
                </div>
            </div>
        );
    }
}

export default Search;
