import React,{useState} from "react";
import computer from "./../images/computer.jfif"

const POSSystem= () => {
    const [computerState,setComputer]=useState(0);
    const ClickComputer=(e)=>{
        e.preventDefault();
        setComputer(computerState+1);

    }
    const cancelBtn=(e)=>{
        e.preventDefault();
        window.location.reload();
    }
    const styles={"wrapper":{"display":"flex","fontSize":"small"},"leftBox":{"width":"40%","backgroundColor":"rgba(238,239,241,255)","marginRight":"0.2%"},"rightBox":{"width":"60%","backgroundColor":"rgba(238,239,241,255)"}};
    return(
        <div style={styles.wrapper}>
            <div style={styles.leftBox}>
                <div style={styles.wrapper}>
                    <div style={{"width":"30%","textAlign":"center"}}>Product</div>
                    <div style={{"width":"20%","textAlign":"right"}}>Price</div>
                    <div style={{"width":"30%","textAlign":"center"}}>Quantity</div>
                    <div style={{"width":"15%","textAlign":"right"}}>Total</div>
                </div>
                {!computerState &&
                <div style={{"margin":"3%","textAlign":"center","width":"93%","backgroundColor":"white","fontSize":"large","padding":"8% 0"}}>
                    THERE ARE NO PRODUCTS 
                </div>
                    }
                    {computerState &&
                    <div style={styles.wrapper}>
                        <div style={{"width":"30%","textAlign":"center"}}>Computer</div>
                    <div style={{"width":"20%","textAlign":"right"}}>130</div>
                    <div style={{"width":"30%","textAlign":"center"}}>{computerState}</div>
                    <div style={{"width":"15%","textAlign":"right"}}>{computerState*130}</div>
                    </div>
                    }
                <div style={{"height":"300px"}}>
                </div>
                <div style={{"display":"flex"}}>
                   <table style={{"width":"100%"}}>
                    <tbody >
                        <td style={{"width":"40%"}}>
                            <tr style={{"backgroundColor":"rgba(246,247,246,255)","margin":"2px","display":"block"}}>SubTotal</tr>
                            <tr style={{"backgroundColor":"rgba(246,247,246,255)","margin":"2px","display":"block"}}>VAT tax</tr>
                            <tr style={{"backgroundColor":"rgba(246,247,246,255)","margin":"2px","display":"block"}}>Discount</tr>
                            <tr style={{"backgroundColor":"rgba(246,247,246,255)","margin":"2px","display":"block"}}>Total</tr>
                        </td>
                        <td style={{"backgroundColor":"white","width":"39%"}}>
                            <tr>0.000 EUR</tr>
                            <tr><input placeholder="10%" style={{"width":"39%","height":"10px"}}/></tr>
                            <tr><input placeholder="10%" style={{"width":"39%","height":"10px"}}/></tr>
                            <tr>0.000 EUR</tr>
                        </td>
                        <td style={{"float":"right","backgroundColor":"white","width":"100%"}}>
                            <tr>0 items</tr>
                            <tr>0.000 EUR</tr>
                            <tr>0.000 EUR</tr>
                            <tr>&nbsp;</tr>
                        </td>
                    </tbody>
                    </table> 
                </div>
                <div style={styles.wrapper}>
                    <button onClick={cancelBtn} style={{"backgroundColor":"red","width":"50%","color":"white","border":"0","margin":"2%","padding":"3%"}}>Cancel Sale</button>
                    <button style={{"backgroundColor":"green","width":"50%","color":"white","border":"0","margin":"2%","padding":"3%"}}>Process Sale</button>
                </div>
            </div>
            <div style={styles.rightBox}>
                <figure style={{"display":"contents"}}>
                <img onClick={ClickComputer} style={{"height":"100px","width":"100px","marginLeft":"10px","marginTop":"10px"}} src={computer}></img>
                <figcaption style={{"textAlign":"center","display":"flex","marginLeft":"30px"}}>Computer</figcaption>
                </figure>
                
            </div>
        </div>
    )
};

export default POSSystem;