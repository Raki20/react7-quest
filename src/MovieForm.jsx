import React, { Component } from 'react';

class MovieForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        name: '',
        poster: '',
        comment: '',
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    onChange(e) {
        this.setState({
          [e.target.name]: e.target.value,
        });
       }

       submitForm(e) {
        e.preventDefault();
        const config = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
          };

          const url = "http://campus-bordeaux.ovh:3001/api/quests/movies/";

          fetch(url, config)
        .then(res => res.json())
        .then(res => {
            if (res.error) {
                alert(res.error);
            } else {
                alert(`Film submited ${res}!`);
            }
        }).catch(e => {
        console.error(e);
        alert('Error during the film addition');
    });
    }
    render () {
        return (
            
            <div className="MovieForm">
                <h1> Movies</h1>

            <form onSubmit={this.submitForm}>
            <fieldset>
            <legend>Information</legend>
             <div className="form-data">
                <label htmlFor="name">Movie</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={this.onChange}
                    value={this.state.name}
                />
            </div>

            <div className="form-data">
                <label htmlFor="poster">Movie Poster</label>
                <input
                    type="text"
                    id="poster"
                    name="poster"
                    onChange={this.onChange}
                    value={this.state.poster}
                />
            </div>

            <div className="form-data">
                <label htmlFor="comment">Comment</label>
                <textarea
                    type="text"
                    id="comment"
                    name="comment"
                    onChange={this.onChange}
                    value={this.state.comment}
                />

            </div>
            <hr />

            <div className="form-data">
                <input type="submit" value="Send" />
            </div>
            </fieldset>
            </form>
    </div>

    )};
}

export default MovieForm;
