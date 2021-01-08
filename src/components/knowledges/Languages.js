import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            { id: 1, value: "javascript", xp: 1 },
            { id: 2, value: "Html / Css", xp: 1 },
            { id: 3, value: "Php", xp: 1 },
            { id: 4, value: "Python", xp: 0.4 }
        ],
        frameworks: [
            { id: 1, value: "Wordpress", xp: 1 },
            { id: 1, value: "React", xp: 0.2 },
            { id: 1, value: "Sass", xp: 1 },
            { id: 1, value: "Bootstrap", xp: 0.6 },
        ]
    }
    render() {
        let { languages, frameworks } = this.state;

        return (
            <div className="languagesFrameworks">
                <ProgressBar
                    languages={languages}
                    className="languageDisplay"
                    title="Languages"
                />
                <ProgressBar
                    languages={frameworks}
                    className="frameworksDisplay"
                    title="Frameworks et Bibliothéque"
                />
            </div>
        );
    }
}

export default Languages;