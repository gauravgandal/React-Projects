import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
    return (
        <UserContextProvider>
            <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
                <Login />
                <Profile />
            </div>
        </UserContextProvider>
    );
}

export default App;
