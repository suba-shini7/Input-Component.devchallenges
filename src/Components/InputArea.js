import { Discription } from "./Discription";
import "../Components/InputArea.css";
export const InputArea = () => {
  return (
    <div className="right">
      <h2>Inputs</h2>
      <div className="default">
        <div>
          <Discription dis="<Input />" />
          <Discription dis="Label" />
          <input className="inpt" type="text" placeholder="placeholder" />
        </div>
        <div>
          <Discription dis="&:hover" />
          <Discription dis="Label" />
          <input
            className="inpt inpt-hover"
            type="text"
            placeholder="placeholder"
          />
        </div>
        <div>
          <Discription dis="&:focus" />
          <Discription dis="Label" />
          <input
            className="inpt inpt-focus"
            type="text"
            placeholder="placeholder"
          />
        </div>
      </div>
      <div className="default">
        <div>
          <Discription dis="<Input error />" />
          <Discription dis="Label" />
          <input
            className="inpt inpt-err"
            type="text"
            placeholder="placeholder"
          />
        </div>
        <div>
          <Discription dis="&:hover" />
          <Discription dis="Label" />
          <input
            className="inpt inpt-err-hover"
            type="text"
            placeholder="placeholder"
          />
        </div>
        <div>
          <Discription dis="&:focus" />
          <Discription dis="Label" />
          <input
            className="inpt inpt-err-focus"
            type="text"
            placeholder="placeholder"
          />
        </div>
      </div>
      <div className="default">
        <div>
          <Discription dis="<Input disable />" />
          <Discription dis="Label" />
          <input
            className="inpt inpt-disable"
            type="text"
            placeholder="placeholder"
          />
        </div>
      </div>
      <div className="default">
        <div>
          <Discription dis="<Input helperText=”Some interesting text” />" />
          <Discription dis="Label" />
          <input className="inpt" type="text" placeholder="placeholder" />
          <p className="plntxt">Some intersting text</p>
        </div>
        <div>
          <Discription dis="<Input helperText=”Some interesting text” />" />
          <Discription dis="Label" />
          <input
            className="inpt inpt-err"
            type="text"
            placeholder="placeholder"
          />
          <p className="redtxt">Some intersting text</p>
        </div>
      </div>
      <div className="default">
        <div>
          <Discription dis="<Input StartIcon />" />
          <Discription dis="Label" />
          <input className="inpt"
           type="text" 
           placeholder="📞 placeholder" />
    
        </div>
        <div>
          <Discription dis="<Input EndIcon />" />
          <Discription dis="Label" />
          <input
            className="inpt"
            type="text"
            placeholder="  placeholder 📞"
          />
         
        </div>
      </div>
      <div className="default">
       
        <div>
          <Discription dis="<Input value=”text” />" />
          <Discription dis="Label" />
          <input
            className="inpt"
            type="text"
            value="Text"
          />
         
        </div>
      </div>
      <div className="default">
        <div>
          <Discription dis="<Input size=”sm” />" />
          <Discription dis="Label" />
          <input className="inpt inpt-sm" type="text"  placeholder="  placeholder" />
    
        </div>
        <div>
          <Discription dis="<Input size=”md” />" />
          <Discription dis="Label" />
          <input
            className="inpt "
            type="text"
            placeholder="  placeholder "
          />
         
        </div>
      </div>
      <div className="default">
       
        <div>
          <Discription dis="<Input value=”text” />" />
          <Discription dis="Label" />
          <input
            className="inpt"
            type="text"
            value="Text"
          />
         
        </div>
      </div>
      <div className="default">
        <div>
          <Discription dis="<Input size=”sm” />" />
          <Discription dis="Label" />
          <input className="inpt inpt-full" type="text"  value="Text" />
    
        </div>
     
      </div>
      <div className="default">
        <div>
          <Discription dis="<Input multiline row=”4” />" />
          <Discription dis="Label" />
          <input className="inpt inpt-row" type="text"  placeholder="placeholder" />
    
        </div>
     
      </div>
    </div>
  );
};
