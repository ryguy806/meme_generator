import React, { Component } from 'react';

class MemeGenerator extends Component {

    constructor() {
        super();
        this.state = {
            top: '',
            bottom: '',
            random_image: "http://i.imgflip.com/1bij.jpg",
            allMemeImages: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
        .then(resposne => resposne.json())
        .then(response => {
            const {memes} = response.data;
            this.setState({ allMemeImages: memes });
        })
        .catch(e => {
            console.log(e.message);
        });
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const num = Math.floor(Math.random() * this.state.allMemeImages.length);
        const random_meme_image = this.state.allMemeImages[num].url;
        this.setState({ random_image: random_meme_image});
    }

    render() {

        return (
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="top"
                        value={this.state.top}
                        placeholder="Top Text..."
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="bottom"
                        value={this.state.bottom}
                        placeholder="Bottom Text..."
                        onChange={this.handleChange}
                    />
                    <button>Generate!</button>
                </form>
                <div className="meme">
                    <img src={this.state.random_image} alt=""/>
                    <h2 className="top">{this.state.top}</h2>
                    <h2 className="bottom">{this.state.bottom}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator;