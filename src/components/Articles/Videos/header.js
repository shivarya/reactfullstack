import React from 'react';
import TeamInfo from '../elements/team_info';

const Header = props => {    
    const teamInfo = (team) => {
        return Object.entries(team).length > 0 ?
            <TeamInfo team={team} />
            : null;
    }

    return (        
        <div>
            {teamInfo(props.teamData)}
        </div>
    )
}

export default Header;