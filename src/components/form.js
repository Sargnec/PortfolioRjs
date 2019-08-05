import React from "react";

const demos = {
    plotly:
        '<iframe width="100%" height="662" allowTransparency="true" frameborder="0" scrolling="no" style="border:none" src="https://www.emailmeform.com/builder/embed/4MJ4Kp3QPA8v9"><a href="https://www.emailmeform.com/builder/embed/4MJ4Kp3QPA8v9">Fill out form.</a></iframe>'
};

function Iframe(props) {
    return (
        <div
            dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
        />
    );
}

function Form() {
    return (
        <div className="form">
            <Iframe iframe={demos["plotly"]} />,
    </div>
    );
}

export default Form;

