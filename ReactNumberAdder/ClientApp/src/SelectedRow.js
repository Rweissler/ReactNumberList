import React from "react";

class SelectedRow extends React.Component{
    render(){
        const  {onLockedClick, onUnlockedClick, isLocked} = this.props;
        const  {numberString, id}= this.props;

        return(
            <li className = 'list-group-item'>{numberString}
            <button className="btn btn-primary" onClick ={isLocked ? onUnlockedClick : onLockedClick}>
            {isLocked ? 'Unlock' : 'Locked'}
            </button> 
            </li>
        )
    }
}
export default SelectedRow;