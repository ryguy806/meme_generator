import React, { Component } from 'react';

class MemeGenerator extends Component {

    constructor() {
        super();
        this.state = {
            top: '',
            bottom: '',
            random_image: "http://i.imgflip.com/1bij.jpg",
        };
    }

    render() {

        return (
            <div>
                <h1>MEME GENREATOR</h1>
            </div>
        )
    }
}

export default MemeGenerator;