import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./components/TodoList.js";
import TodoDetail from "./components/ToDoDetail";
import NotFound from "./common/NotFound";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import axios from "axios";
import "./styles.css";
import Preloader from "./common/Preloader";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: true
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3001/data').then(
            response => {
                if (JSON.parse(window.localStorage.getItem('todos')) === null)
                    window.localStorage.setItem('todos', JSON.stringify(response.data))
            }
        ).catch((err) => {
            console.error(err);
        }).then(() =>
            this.setState({
                isFetching: false
            })
        )
    }

    render() {
        let result;
        if (!this.state.isFetching) {
            result =
                <div className="App">
                    <BrowserRouter>
                            <main>
                                <Switch>
                                    <Route exact path="/" component={TodoList}/>
                                    <Route exact path="/todos/:id" component={TodoDetail}/>
                                    <Route component={NotFound}/>
                                </Switch>
                            </main>
                    </BrowserRouter>
                </div>

        } else {
            result = <Preloader/>
        }
        return result
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
