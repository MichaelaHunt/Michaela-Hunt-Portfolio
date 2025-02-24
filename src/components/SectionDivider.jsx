import './Components.css';

function SectionDivider(props) {
    return (
        <>
            <div className='row divider' id={props.sectionId}>{/*Divider*/}
                <div className='horizontalLine'></div>
                <h3>{props.name}</h3>
                <div className='horizontalLine'></div>
            </div>
        </>
    );
}

export default SectionDivider;