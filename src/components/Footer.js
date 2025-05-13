import cdac from '../assets/img/cdac-long.png';
import cdaclogo from '../assets/img/cdac-long.png'

export default function Footer() {
    return (
        <>
        <footer 
        className=" bg-inherit py-6 px-16 border-t border-gray-200 font-light flex flex-col lg:flex-row justify-between items-center"
        // style={{backgroundColor:'whitesmoke',bottom:'0px',left:'250px',right:'0px',position:'fixed'}}
        style={{backgroundColor:'whitesmoke',bottom:'0px',right:'0px',position:'fixed' ,width:'100%'}}

        >

            <p className="text-blue-700 mb-6 lg:mb-0">
                <a
                    href="https://www.cdac.in/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-light-blue-500 hover:text-light-blue-700"
                >
                   {/* <img src={cdac} /> */}
                </a>
                {/* Copyright &copy; {new Date().getFullYear()}{' '}C-DAC Mumbai. All Rights Reserved. */}

                <a
                    href="https://www.cdac.in/">
                <img src={cdaclogo} width="400px"/>
                </a>

            </p>

            <p className="text-blue-700 mb-6 lg:mb-0">
                <a
                    href="https://www.cdac.in/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-light-blue-500 hover:text-light-blue-700"
                >
                   {/* <img src={cdac} /> */}
                </a>
                Copyright &copy; {new Date().getFullYear()}{' '}C-DAC Mumbai. All Rights Reserved.

                {/* <img src={cdaclogo} width="400px"/> */}

            </p>

            <ul className="list-unstyled flex">
                <li className="mr-6">
                    <a
                        className="text-blue-700 hover:text-gray-900 font-medium block text-sm"
                        target="_blank"
                        rel="noreferrer"
                        // href="https://www.creative-tim.com/presentation?ref=mtdk"
                    >
                        Help
                    </a>
                </li>
                <li className="mr-6">
                    <a
                        className="text-blue-700 hover:text-gray-900 font-medium block text-sm"
                        target="_blank"
                        rel="noreferrer"
                        // href="https://www.creative-tim.com/blog/?ref=mtdk"
                    >
                        Copyright Policy
                    </a>
                </li>
                
            </ul>

            

        </footer>
       
        </>
    );
}
