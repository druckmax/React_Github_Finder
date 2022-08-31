import { createContext, useReducer } from "react";
import { githubReducer } from "./GithubReducer";

export const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  // const [users, setUsers] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Set Loading
  const setLoading = () => dispatch({ type: "SET_LOADING" });

  // Get search result
  // replaces fetchUsers and uses a different URl with query param (...search//users?q=user)
  const searchUsers = async (text) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });

    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const { items } = await response.json();
    // setUsers(data);
    // setIsLoading(false);
    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  // Clear users from state
  const clearUsers = () => {
    dispatch({
      type: "CLEAR_USERS",
    });
  };

  // Get initial users (testing purposes)
  /*   const fetchUsers = async () => {
    setLoading();
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    // setUsers(data);
    // setIsLoading(false);
    dispatch({
      type: 'GET_USERS',
      payload: data,
    })
  }; */

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        isLoading: state.isLoading,
        searchUsers,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
