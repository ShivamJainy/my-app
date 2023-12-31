import React,{useEffect, useState} from "react";
import invalid from "./../images/invalid.png"

const POSSystem= () => {

    const [VAT,setVAT]=useState(0);

    const productList=[
{
"name": "computer",
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

    const [productAdded,setProductAdded]=useState([]);

    const [items1,setItems1]=useState(0);

    const [subTotal,setSubTotal]=useState(0);

    const [VATValue,setVATValue]=useState(0);

    const [Discount,setDiscount]=useState(0);

    const [DiscountValue,setDiscountValue]=useState(0);

    const [Total,setTotal]=useState(subTotal);

    const [showPopUp,setShowPopUp] = useState(false);

    const [blur,setBlur]=useState("");


    const handleVAT=(e)=>{
        let value=Number(e.target.value);
        setVAT(value);
        let value1=(value*subTotal)/100;
        setVATValue(value1);
        setTotal(subTotal+value1-DiscountValue);
    }

    const handleDiscount=(e)=>{
        let value=Number(e.target.value);
        setDiscount(value);
        let value2=(value*subTotal)/100;
        setDiscountValue(value2);
        setTotal(subTotal+VATValue-value2);
    }


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

    const renderProductAdded=()=>{
        let items=productAdded.filter(specs=>specs.hasOwnProperty('name')).map((item,index)=>{
            return (
                <div style={styles.wrapper}>
                        <div style={{"width":"30%","textAlign":"center"}}>{item.name}</div>
                    <div style={{"width":"20%","textAlign":"right"}}>{Math.round((item.price*1000)/1000).toFixed(3)}</div>
                    <div style={{"width":"30%","textAlign":"center"}}>1</div>
                    <div style={{"width":"15%","textAlign":"right"}}>{Math.round((item.price*1000)/1000).toFixed(3)}</div>
                    </div>
            );
        });
        return items;
    }

    const renderReceiptProductAdded=()=>{
        let items=productAdded.filter(specs=>specs.hasOwnProperty('name')).map((item,index)=>{
            return (
                <div style={{"display":"flex"}}>
                    <div style={{"width":"10%"}}>
                        {index+1}
                    </div>
                    <div style={{"width":"50%"}}>
                        {item.name}
                    </div>
                    <div style={{"width":"20%"}}>
                        1
                    </div>
                    <div style={{"width":"20%"}}>
                        {Math.round((item.price*1000)/1000).toFixed(3)}
                    </div>
                </div>
            );
        });
        return items;
    }

    const ClickImage=(index)=>{
        let product=productAdded;
        product.push(productList[index]);
        setItems1(product.length);
        let sum=0;
        for(let i=0;i<product.length;i++){
            sum=sum+Number(product[i].price);
        }
        setSubTotal(sum);
        setProductAdded(product);

    }

    useEffect(()=>{
        let value1=(VAT*subTotal)/100;
        setVATValue(value1);
        let value2=(Discount*subTotal)/100;
        setDiscountValue(value2);
        setTotal(subTotal+value1-value2);

    },[subTotal]);

    const cancelBtn=(e)=>{
        e.preventDefault();
        window.location.reload();
    }

    const processSales=(e)=>{
        e.preventDefault();
        setBlur("blur(8px)");
        setShowPopUp(true);
    }

    const styles={"wrapper":{"display":"flex","fontSize":"small","filter":`${blur}`},"leftBox":{"width":"40%","backgroundColor":"rgba(238,239,241,255)","marginRight":"0.2%"},"rightBox":{"width":"60%","backgroundColor":"rgba(238,239,241,255)"}};
    return(
        <div>
        <div style={styles.wrapper}>
            <div style={styles.leftBox}>
                <div style={styles.wrapper}>
                    <div style={{"width":"30%","textAlign":"center"}}>Product</div>
                    <div style={{"width":"20%","textAlign":"right"}}>Price</div>
                    <div style={{"width":"30%","textAlign":"center"}}>Quantity</div>
                    <div style={{"width":"15%","textAlign":"right"}}>Total</div>
                </div>
                {productAdded.length==0 &&
                <div style={{"margin":"3%","textAlign":"center","width":"93%","backgroundColor":"white","fontSize":"large","padding":"8% 0"}}>
                    THERE ARE NO PRODUCTS 
                </div>
                    }
                    {productAdded &&
                    renderProductAdded()
                    
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
                            <tr>{Math.round((subTotal*1000)/1000).toFixed(3)} EUR</tr>
                            <tr><input  value={VAT} onChange={handleVAT} style={{"width":"39%","height":"10px"}}/></tr>
                            <tr><input value={Discount} onChange={handleDiscount} style={{"width":"39%","height":"10px"}}/></tr>
                            <tr>{Math.round((Total*1000)/1000).toFixed(3)} EUR</tr>
                        </td>
                        <td style={{"float":"right","backgroundColor":"white","width":"100%"}}>
                            <tr>{items1} items</tr>
                            <tr>{Math.round((VATValue*1000)/1000).toFixed(3)} EUR</tr>
                            <tr>{Math.round((DiscountValue*1000)/1000).toFixed(3)} EUR</tr>
                            <tr>&nbsp;</tr>
                        </td>
                    </tbody>
                    </table> 
                </div>
                <div style={styles.wrapper}>
                    <button onClick={cancelBtn} style={{"backgroundColor":"red","width":"50%","color":"white","border":"0","margin":"2%","padding":"3%"}}>Cancel Sale</button>
                    <button onClick={processSales} style={{"backgroundColor":"green","width":"50%","color":"white","border":"0","margin":"2%","padding":"3%"}}>Process Sale</button>
                </div>
            </div>
            <div style={styles.rightBox}>
                {renderproduct()}
            </div>
            
        </div>
        <div>
        {showPopUp &&
            <div style={{"position":"absolute","textAlign":"center","top":"30%","left":"40%"}}>
                <div style={{"width":"200%"}}>
                <h4 style={{"backgroundColor":"black","color":"white","marginBottom":"0"}}>Receipt</h4>
                <div style={{"backgroundColor":"white"}}>
                <p style={{"marginTop":"0"}}>Sale No.</p>
                <p style={{"textAlign":"left"}}>Date</p>
                <div style={{"display":"flex"}}>
                    <div style={{"width":"10%"}}>
                        #
                    </div>
                    <div style={{"width":"50%"}}>
                        product
                    </div>
                    <div style={{"width":"20%"}}>
                        Quantity
                    </div>
                    <div style={{"width":"20%"}}>
                        SubTotal
                    </div>
                </div>
                {renderReceiptProductAdded()}
                <div style={{"display":"flex","marginTop":"3%"}}>
                    <div style={{"width":"20%"}}>
                        Total Items
                    </div>
                    <div style={{"width":"50%"}}>
                        {items1} Total
                    </div>
                    <div style={{"width":"30%"}}>
                        {Math.round((Total*1000)/1000).toFixed(3)} EUR
                    </div>
                   </div>
                    <div style={{"display":"flex","marginTop":"3%"}}>
                    <div style={{"width":"30%"}}>
                            </div>
                        <div style={{"width":"30%"}}>Discount
                            </div>
                            <div style={{"width":"40%"}}>{Discount}%
                            </div>
                    </div>
                    <div style={{"display":"flex","marginTop":"3%"}}>
                    <div style={{"width":"30%"}}>
                            </div>
                        <div style={{"width":"30%"}}>VAT
                            </div>
                            <div style={{"width":"40%"}}>{VAT}%
                            </div>
                    </div>
                    <button onClick={()=>{setShowPopUp(false); setBlur("")}} style={{"width":"90%","margin":"4%"}}>Close</button>
                </div>
                </div>
            </div>
            }
        </div>
        </div>
    )
};

export default POSSystem;