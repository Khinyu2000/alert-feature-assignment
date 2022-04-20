import React, { useReducer } from "react";
import './App.css';
import { AlertManager, AlertExample, useAlertReducer } from "./AlertManager";

const initialAlerts = [
    {
        id: 1,
        timeLimit: "1s",
        text: "connection is lost",
        alertType: "error",
        alertTitle: "server error",
    },
    {
        id: 2,
        timeLimit: "2s",
        text: "page not found",
        alertType: "warning",
        alertTitle: "user error",
    },
]


function App() {
    const [alerts, dispatch] = useReducer(useAlertReducer, initialAlerts);

    const handleCreateAlert = (alert) => {
        dispatch({ type: "ADD_ALERT", alert: alert });
    }

    // const removeAlert = (alert) => {
    //     dispatch({ type: "REMOVE_ALERT", alert: alert });
    // }

  return (
    <div className="App">
      <AlertManager
          alerts={alerts}
      />
      <AlertExample
          createAlertHandler={handleCreateAlert}
      />
    </div>
  );
}

export default App;
