import React from 'react';
import Info from './Info';
import Input from './Input';
import ScoreChallenge from './ScoreChallenge';

function SpeedCheck() {
    return (
        <React.Fragment>
          <Info challangeTitle={"Writing Challenge"}/>
            <hr />
            <Input/>
            <hr />
            <ScoreChallenge/>
        </React.Fragment>

    );
}

export default SpeedCheck;