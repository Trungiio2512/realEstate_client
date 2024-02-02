/* eslint-disable react-hooks/rules-of-hooks */
import { useLocation, useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/display-name
const WithRoute = (Component) => (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    return <Component navigate={navigate} location={location} {...props} />;
};

export default WithRoute;
