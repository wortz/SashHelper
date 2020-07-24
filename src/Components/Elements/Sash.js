import React from 'react';

function RenderSashPercentage(props) {
    return(
        <div className="SashPercentage">
            <img 
                className="sashimg"
                src="https://en-wiki.metin2.gameforge.com/images/5/50/Yin_Sash_%28custom%29.png" 
                alt="Sash Icon"
            />
            <input type="text" placeholder="Sash Percentage" value={props.sashPercentage} onChange={props.onChange} />
        </div>
    );
}

export default RenderSashPercentage;