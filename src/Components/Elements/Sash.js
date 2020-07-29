import React from 'react';

function RenderSashPercentage(props) {
    return(
        <div className="SashPercentage">
            <img 
                className="sashimg"
                src="https://2.bp.blogspot.com/-AA4Gg4IUQH8/WRxhduZBvlI/AAAAAAAADcA/bltRTH7anooOV_Mm0ar0aj-1CMLltvSTQCLcB/s1600/FaixaNova.png" 
                alt="Sash Icon"
            />
            <input type="text" placeholder="Sash Percentage" value={props.sashPercentage} onChange={props.onChange} />
        </div>
    );
}

export default RenderSashPercentage;