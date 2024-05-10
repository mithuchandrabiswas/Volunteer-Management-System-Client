import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useAuthContext = () => {
    const auth = useContext(AuthContext)
    return auth
};

export default useAuthContext;