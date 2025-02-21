import { tv } from "../Utils/DateTime";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

function Time({ match, timeframe, isBreakoutTitle, isBlank }) {
    let date = new Date(match.date);

    if ( isBlank ){
        return (<td className={match.sport.replaceAll(" ", "")}></td>);
    }
    if ( isBreakoutTitle ) {
        let to = `/${match.competition}${timeframe}`.replace(" ","")
        return (
            <td className={match.sport.replaceAll(" ", "")}>
                <Nav.Link as={Link} to={to}>
                    {("0" + date.getHours()).slice(-2)}:{("0" + date.getMinutes()).slice(-2)}
                </Nav.Link>
            </td> 
        )
    }

    if ( timeframe === "Past" ) {
        return (
            <td className={match.sport.replaceAll(" ", "")}>
                {("0" + date.getHours()).slice(-2)}:{("0" + date.getMinutes()).slice(-2)}
            </td> 
        )
    }

    return (
        <td className={match.sport.replaceAll(" ", "")} onClick={() => tv(match)}>
            {("0" + date.getHours()).slice(-2)}:{("0" + date.getMinutes()).slice(-2)}
        </td> 
    )
}


export default Time;