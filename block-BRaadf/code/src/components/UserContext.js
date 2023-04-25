import { createContext, Component, useContext } from "react";
const context = createContext()

export class AuthProvider extends Component {
    state = {
        isDarkMode: false,
    };
    changeMode = () => {
        this.setState((state) => {
            return { isDarkMode: !state.isDarkMode };
        });
    };
    render() {
        const { isDarkMode } = this.state
        return (
            <context.Provider value={{ isDarkMode, changeMode: this.changeMode }}>{this.props.children}</context.Provider>
        )
    }
}


export const useAuth = () => useContext(context)