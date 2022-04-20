import React, { Component } from "react";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


function useAlertReducer(state, action) {
    switch (action.type) {
        case "ADD_ALERT" :
            return applyAddAlert(state, action);
        default :
            return state;

    }
}

function applyAddAlert(state, action) {
    const alert = Object.assign({}, action.alert);
    return state.concat(alert);
}

// function applyRemoveAlert(state, action) {
//     return state.map((alert) =>
//
//     )
// }

class AlertManager extends Component {
    render() {
        const { alerts } = this.props;
        return (
            <Stack sx={{ width: "100%" }} spacing={2}>
                {alerts.map(({ id, timeLimit, text, alertType, alertTitle }) =>
                    <AlertComponent
                        id={id}
                        timeLimit={timeLimit}
                        text={text}
                        alertType={alertType}
                        alertTitle={alertTitle}
                    />
                )}
            </Stack>
        );
    }
}

class AlertComponent extends Component {
    render() {
        const { id, timeLimit,  text, link, alertType, alertTitle } = this.props;
        return (
            <Alert severity={alertType}>
                <AlertTitle>{alertTitle}</AlertTitle>
                {text}
            </Alert>
        );
    }
}

class AlertExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            timeLimit: "",
            text: "",
            link: "",
            alertType: "",
            alertTitle: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit(event) {
        const { createAlertHandler } = this.props;
        event.preventDefault();
        createAlertHandler(this.state);
        this.setState({
            id: "",
            timeLimit: "",
            text: "",
            link: "",
            alertType: "",
            alertTitle: "",
        })
    }

    render() {
        const { id, timeLimit, text, link, alertType, alertTitle } = this.state;
        return (
            <form action="" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="id" name="id" value={id} onChange={this.handleChange} />
                <input type="text" placeholder="timeLimit" name="timeLimit" value={timeLimit} onChange={this.handleChange} />
                <input type="text" placeholder="text" name="text" value={text} onChange={this.handleChange} />
                <input type="text" placeholder="link" name="link" value={link} onChange={this.handleChange} />
                <input type="text" placeholder="alertType" name="alertType" value={alertType} onChange={this.handleChange} />
                <input type="text" placeholder="alertTitle" name="alertTitle" value={alertTitle} onChange={this.handleChange} />
                <Button
                    type="submit"
                    variant="contained"
                >
                    CREATE
                </Button>
            </form>
        );
    }
}

export { AlertManager, AlertExample, useAlertReducer };
