import axios from "axios";

class ScoresApi {

    config = {
        baseURL: "http://localhost",
        port: 8000
    };

    constructor() {
        this.httpClient = axios.create({
            baseURL: `${this.config.baseURL}:${this.config.port}`
        });
    }

    getScores() {
        return this.httpClient
        .get("/scores")
        .then(response =>
            response.data.map(res => this.parse(res))
        );
    }

    getScoresByUsername(username) {
        return this.httpClient
        .get("/scores/" + username)
        .then(response =>
            response.data.map(res => this.parse(res))
        );
    }

    parse(response) {
        return {
            id: response._id,
            username: response.username,
            score: response.score,
            date: response.date.slice(0,10)
        }
    }
}

export default new ScoresApi();