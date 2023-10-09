import React,{useState} from "react";
import invalid from "./../images/invalid.png"

const POSSystem= () => {
    const [computerState,setComputer]=useState(0);
    const productList=[
{
"name": "comuter",
"price": "130",
"category": "computers",
"description": "",
"image": "comuter.jpg"
},
{
"name": "sweater",
"price": "1",
"category": "Clothing",
"description": "fashion, clothes , sweater, wool, cardigan,..."
},
{
"name": "tie",
"price": "46",
"category": "Clothing",
"description": "fashion, tie, clothes, accessory , accessoire,...",
"image": "tie.jpeg"
},
{
"name": "jacket",
"price": "190",
"category": "Clothing",
"description": "winter jacket ",
"image": "jacket.jpeg"
}
];

    const renderproduct = ()=>{
        let items= productList.filter(specs=>specs.hasOwnProperty('name')).map((item,index)=>{
            return(
                <div style={{"display":"inline-block","maxWidth":"300px","margin":"auto","textAlign":"center","fontFamily":"arial"}}>
                <img onClick={()=>ClickImage(index)} style={{"height":"100px","width":"100px","marginLeft":"10px","marginTop":"10px"}} src={invalid}></img>
                <h6>{item.name}</h6>
                </div>
            );
        });
        return items;
    };

    const ClickImage=(index)=>{

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
                {renderproduct()}
            </div>
        </div>
    )
};

export default POSSystem;