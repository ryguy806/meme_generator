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
    }

    componentDidMount() {
        fetch("http://i.imgflip.com/1bij.jpg")
        .then(resposne => resposne.json())
        .then(response => {
            const {memes} = response.data;
                this.setState({allMemeImages: memes});
        });
    }

    render() {

        return (
            <div>
                <form className="meme-form">
                    <input
                        type="text"
                        name="firstLine"
                        id="firstLine"
                        value={this.state.top}
                    />
                    <input
                        type="text"
                        name="lastLine"
                        id="lastLine"
                        value={this.state.bottom}
                    />
                    <button>Generate!</button>
                </form>
            </div>
        )
    }
}

export default MemeGenerator;