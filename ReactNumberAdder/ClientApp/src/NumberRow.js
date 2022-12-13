import React from "react";

class NumberRow extends React.Component{
    render(){
        const {onSelectClick, onUnselectClicked, isSelected, isLocked} = this.props
        const{numbeString, id} = this.props;

        return(
            <tr>
                <td>{numbeString}</td>
                <td>
                    <button className={`btn btn${isSelected ? 'danger': 'primary'}`} onClick={isSelected ?  onUnselectClicked : onSelectClick}>
                        {isSelected ? 'Remove From Selected' : 'Add To Selected'}
                    </button>
                </td>
            </tr>
        )


    }





}
export default NumberRow;