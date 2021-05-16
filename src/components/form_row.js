import * as React from "react";

const FormRow =({label,children})=> {
  
        //const label = this.props.label ? <label className="col-sm-2 control-label">{this.props.label}</label> : undefined;
        //const cls   = "col-sm-10" + (this.props.label ? "" : " col-sm-offset-2");

        return <div className="form-group">
            <label className="col-sm-2 control-label">{label}</label>
            <div className="col-sm-10">
                {children}
            </div>
        </div>
    
}

export default FormRow