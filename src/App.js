import React from "react";

import LoginScreen from "./components/LoginScreen";
import SignupScreen from "./components/SignupScreen";
import Navbar from "./components/navigation/Navbar";
import Overview from "./components/navigation/Overview";
import Import from "./components/navigation/Import";
import CostManagement from "./components/navigation/Costmanagement";
import WithdrawalTransfer from "./components/navigation/Withdrawal_Transfer";
import ViewHistory from "./components/navigation/View_history";
import CycleCount from "./components/navigation/Cycle_count";
import Warehouse from "./components/navigation/Warehouse";
import Ching from "./components/navigation/Ching";
import Ching1 from "./components/navigation/Ching1";

function App() {
  return (
    <div className="App">
      <Warehouse />
    </div>
  );
}

export default App;
