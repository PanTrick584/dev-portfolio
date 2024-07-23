import {
    createContext,
    ReactNode,
    useContext,
    useState,
} from "react";

interface MyContextAPIProps {
    todos: String[];
    handleToDo: (val: string) => void;
}

interface MyContextType {
    children: ReactNode;
}

export const MainContext = createContext<MyContextAPIProps | undefined>(undefined);

export const ContextAPI: React.FC<MyContextType> = ({ children }) => {
    const [todos, setTodos] = useState<String[]>([]);
    const [goalsDates, setGoalsDates] = useState<[]>([]);
    const [goals, setGoals] = useState(['siema']);
    const [uniqueID, setUniqueID] = useState(0);

    const handleToDo = (val:string) => {
        setTodos(prev => [...prev, val])
    }

    return (
        <MainContext.Provider
            value={{
                todos,
                handleToDo,
            }}
        >
            {children}
        </MainContext.Provider>
    );
};

export const useContextAPI = () => {
    const state = useContext(MainContext);
    if (!state) throw new Error("You forgot CartStateContextProvider");
    return state;
};
