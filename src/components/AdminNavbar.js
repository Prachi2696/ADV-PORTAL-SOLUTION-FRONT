import Button from '@material-tailwind/react/Button';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import { AiOutlineCloseCircle, AiOutlineMenu } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { loginApiAction } from "../store/authslice";
export default function AdminNavbar({ showSidebar, setShowSidebar }) {
    const location = useLocation().pathname;
    let { authStore } = useSelector((state) => state);
    let history = useHistory();
    let dispatch = useDispatch();

    const processLoginAction = () => {
        alert("in Login process")
        dispatch(loginApiAction());
        //   history.push("/login")
    };
    function handleLogin() {
        alert(authStore.loginStatus)
        alert("in login now")
        return <Redirect to="/report" />;
    }

    return (
        <nav className="bg-blue-500 md:ml-64 py-2 px-3">
            <div className="container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10">
                <div className="md:hidden">

                    <Button
                        color="transparent"
                        buttonType="link"
                        size="lg"
                        iconOnly
                        rounded
                        ripple="light"
                        onClick={() => setShowSidebar('left-0')}
                    >
                        <AiOutlineMenu color='white' size={25} />
                    </Button>
                    <div
                        className={`absolute top-2 md:hidden ${showSidebar === 'left-0' ? 'left-64' : '-left-64'
                            } z-50 transition-all duration-300`}
                    >
                        <Button
                            color="transparent"
                            buttonType="link"
                            size="lg"
                            iconOnly
                            rounded
                            ripple="light"
                            onClick={() => setShowSidebar('-left-64')}
                        >
                            <AiOutlineCloseCircle color='white' size={25} />
                        </Button>
                    </div>
                </div>

                {/* <img src={cdacheader} width="50px"/> */}
                
                <div className="flex justify-between items-center w-full">
                    <h4 className="uppercase text-white text-sm tracking-wider mt-1">
                        {/* {location === '/'
                            ? 'DASHBOARD'
                            : location.toUpperCase().replace('/', '')} */}
                    </h4>
                   

                    <div className="flex">

                      
                    

                        <Button
                            color="white"
                            // buttonType="link"
                            size="lg"
                            // onClick={handleLogin}
                            onClick={processLoginAction}
                        >
                            Login
                        </Button>


                        


                    </div>
                </div>
            </div>
        </nav>
    );
}
